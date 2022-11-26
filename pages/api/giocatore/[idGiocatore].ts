import { NextApiRequest, NextApiResponse } from "next";
import { Response } from "../../../typings";
import { getGiocatore, updateGiocatore, deleteGiocatore } from "../../../database/model";

export default async function handler(req: NextApiRequest, res: NextApiResponse<Response>) {
   switch (req.method) {
      case 'GET':
         const giocatore = await getGiocatore(req.query.idGiocatore as string);
         if (giocatore === undefined) {
            res.status(404).json({ status: false, message: "Giocatore non trovato", result: null });
            return;
         }
         res.status(200).json({ status: true, message: "OK", result: giocatore });
         break;
      case 'PUT':
         if (req.headers.token !== process.env.TOKEN) {
            res.status(401).json({ status: false, message: "Non autorizzato", result: null });
            return;
         }
         if (!req.body || !req.query.idGiocatore) {
            res.status(400).json({
               status: false,
               message: "Bad Request. Inserire i dati del giocatore",
               result: null,
            });
            return;
         }
         const responsePut:Response = await updateGiocatore(req.query.idGiocatore as string, req.body);
         responsePut.status ? res.status(200).json(responsePut) : res.status(500).json(responsePut);
         break;
      case 'DELETE':
         if (req.headers.token !== process.env.TOKEN) {
            res.status(401).json({ status: false, message: "Non autorizzato", result: null });
            return;
         }
         if (!req.query.idGiocatore) {
            res.status(400).json({
               status: false,
               message: "Bad Request. Inserire l'id del giocatore",
               result: null,
            });
            return;
         }
         const responseDelete:Response = await deleteGiocatore(req.query.idGiocatore as string);
         responseDelete.status ? res.status(200).json(responseDelete) : res.status(500).json(responseDelete);
         break;
      default:
         res.status(405).json({ status: false, message: `Metodo ${req.method} non supportato`, result: null });
         break;
   }
}
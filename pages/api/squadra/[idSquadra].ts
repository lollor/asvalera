import { NextApiRequest, NextApiResponse } from "next";
import { getSquadra, updateSquadra, deleteSquadra } from "../../../database/model";
import { Response } from "../../../typings";

export default async function handler(req: NextApiRequest, res: NextApiResponse<Response>) {
   switch (req.method) {
      case 'GET':
         const squadra = await getSquadra(req.query.idSquadra as string);
         if (squadra === undefined) {
            res.status(404).json({ status: false, message: "Squadra non trovata", result: null });
            return;
         }
         res.status(200).json({ status: true, message: "OK", result: squadra });
         break;
      case 'PUT':
         if (req.headers.token !== process.env.TOKEN) {
            res.status(401).json({ status: false, message: "Non autorizzato", result: null });
            return;
         }
         if (!req.body || !req.query.idSquadra) {
            res.status(400).json({
               status: false,
               message: "Bad Request. Inserire i dati della squadra",
               result: null,
            });
            return;
         }
         const responsePut:Response = await updateSquadra(req.query.idSquadra as string, req.body);
         responsePut.status ? res.status(200).json(responsePut) : res.status(500).json(responsePut);
         break;
      case 'DELETE':
         if (req.headers.token !== process.env.TOKEN) {
            res.status(401).json({ status: false, message: "Non autorizzato", result: null });
            return;
         }
         if (!req.query.idSquadra) {
            res.status(400).json({
               status: false,
               message: "Bad Request. Inserire l'id della squadra",
               result: null,
            });
            return;
         }
         const responseDelete:Response = await deleteSquadra(req.query.idSquadra as string);
         responseDelete.status ? res.status(200).json(responseDelete) : res.status(500).json(responseDelete);
      default:
         res.status(405).json({ status: false, message: `Metodo ${req.method} non supportato`, result: null });
         break;
   }
}
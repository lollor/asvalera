import { NextApiRequest, NextApiResponse } from "next";
import { Response } from "../../../typings";
import { createGiocatore } from "../../../database/model";

export default async function handler(req: NextApiRequest, res: NextApiResponse<Response>) {
   switch (req.method) {
      case 'POST':
         if (req.headers.token !== process.env.TOKEN) {
            res.status(401).json({ status: false, message: "Non autorizzato", result: null });
            return;
         }
         const {idsquadra} = req.headers;
         if (!idsquadra) {
            res.status(400).json({
               status: false,
               message: "Bad Request. Inserire l'id della squadra",
               result: null,
            });
            return;
         }
         if (!req.body) {
            res.status(400).json({
               status: false,
               message: "Bad Request. Inserire i dati del giocatore",
               result: null,
            });
            return;
         }
         const response: Response = await createGiocatore(idsquadra as string, req.body);
         response.status ? res.status(200).json(response) : res.status(500).json(response);
         break;
      default:
         res.status(405).json({ status: false, message: `Metodo ${req.method} non supportato`, result: null });
         break;
   }
}

import { NextApiRequest, NextApiResponse } from "next";
import { creaNews, getNews } from "../../../database/model";
import { Response } from "../../../typings";

export default async function handler(req: NextApiRequest, res: NextApiResponse<Response>) {
   switch (req.method) {
      case 'GET':
         const news = await getNews();
         if (news) {
            res.status(200).json({ status: true, message: "News recuperate con successo", result: news });
         } else {
            res.status(500).json({ status: false, message: "Errore durante il recupero delle news", result: null });
         }
         break;
      case 'POST':
         if (req.headers.token !== process.env.TOKEN) {
            res.status(401).json({ status: false, message: "Non autorizzato", result: null });
            return;
         }
         if (!req.body) {
            res.status(400).json({
               status: false,
               message: "Bad Request. Inserire i dati della news",
               result: null,
            });
            return;
         }
         const response: Response = await creaNews(req.body);
         response.status ? res.status(200).json(response) : res.status(500).json(response);
         break;
      default:
         res.status(405).json({ status: false, message: `Metodo ${req.method} non supportato`, result: null });
         break;
   }
}
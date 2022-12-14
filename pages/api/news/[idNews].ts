import { NextApiRequest, NextApiResponse } from "next";
import { deleteNews, getNewsByIdOrTitle, updateNews } from "../../../database/model";
import { Response } from "../../../typings";

export default async function handler(req: NextApiRequest, res: NextApiResponse<Response>) {
   switch (req.method) {
      case 'GET':
         const news = await getNewsByIdOrTitle(req.query.idNews as string);
         if (news === undefined) {
            res.status(404).json({ status: false, message: "News non trovata", result: null });
            return;
         }
         res.status(200).json({ status: true, message: "OK", result: news });
         break;
      case 'PUT':
         if (req.headers.token !== process.env.TOKEN) {
            res.status(401).json({ status: false, message: "Non autorizzato", result: null });
            return;
         }
         if (!req.body || !req.query.idNews) {
            res.status(400).json({
               status: false,
               message: "Bad Request. Inserire i dati della news",
               result: null,
            });
            return;
         }
         const responsePut:Response = await updateNews(req.query.idNews as string, req.body);
         responsePut.status ? res.status(200).json(responsePut) : res.status(500).json(responsePut);
         break;
      case 'DELETE':
         if (req.headers.token !== process.env.TOKEN) {
            res.status(401).json({ status: false, message: "Non autorizzato", result: null });
            return;
         }
         if (!req.query.idNews) {
            res.status(400).json({
               status: false,
               message: "Bad Request. Inserire l'id della news",
               result: null,
            });
            return;
         }
         const responseDelete:Response = await deleteNews(req.query.idNews as string);
         responseDelete.status ? res.status(200).json(responseDelete) : res.status(500).json(responseDelete);
         break;
      default:
         res.status(405).json({ status: false, message: `Metodo ${req.method} non supportato`, result: null });
         break;
   }
}

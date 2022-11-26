import { NextApiRequest, NextApiResponse } from "next";
import { Response } from "../../typings";

export default function handler(req: NextApiRequest, res: NextApiResponse<Response>) {
   switch (req.method) {
      case 'GET':
         res.status(200).json({ status: true, message: "Connessione riuscita", result: null });
         break;
      default:
         res.status(405).json({ status: false, message: `Metodo ${req.method} non supportato`, result: null });
         break;
   }
}
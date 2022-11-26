import { NextApiRequest, NextApiResponse } from "next";
import { getSquadre, createSquadra } from "../../../database/model";
import { Response } from "../../../typings";

export default async function handler(req: NextApiRequest, res: NextApiResponse<Response>) {
   switch (req.method) {
      case 'GET':
         const squadre = await getSquadre();
         res.status(200).json({ status: true, message: "OK", result: squadre });
         break;
      case 'POST':
         if (req.headers.token !== process.env.TOKEN) {
            res.status(401).json({ status: false, message: "Non autorizzato", result: null });
            return;
         }
         await postSquadre(req, res);
         break;
      default:
         res.status(405).json({ status: false, message: `Metodo ${req.method} non supportato`, result: null });
         break;
   }
}

async function postSquadre(req: NextApiRequest, res: NextApiResponse<Response>) {
	if (!req.body) {
		res.status(400).json({
			status: false,
			message: "Bad Request. Inserire i dati della squadra",
         result: null,
		});
		return;
	}
   const response: Response = await createSquadra(req.body);
   response.status ? res.status(200).json(response) : res.status(500).json(response);
   return;
}
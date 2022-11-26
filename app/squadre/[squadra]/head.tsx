import { Squadra } from "../../../typings";
import {getSquadra} from "../../../database/model";
import { notFound } from "next/navigation";

export const revalidate = 60;

type ResponseSquadra = {
   status: boolean,
   message: string,
   result: Squadra
}

type PageProps = {
   params: {
      squadra: string
   }
}

const fetchSquadra = async (nomeLink: string) => {
   const squadra : Squadra | undefined = await getSquadra(nomeLink);
   if (squadra === undefined) {
      return "Squadra non trovata";
   }
   return squadra.nome;

   const res = await fetch("https://" + process.env.OLD_URL + "/api/squadra/" + nomeLink, { cache: "force-cache" });
   const { result: squadraFromFetch }: ResponseSquadra = await res.json();
   return squadraFromFetch.nome;
}

export default async function Head({ params: { squadra: nomeLinkSquadra } }: PageProps){
   const squadra = await fetchSquadra(nomeLinkSquadra);
   return (
      <>
         <title>{`A.S.D. Valera - ${squadra}`}</title>
         <meta name="description" content={`A.S.D. Valera - ${squadra}`} />
      </>
   );
}
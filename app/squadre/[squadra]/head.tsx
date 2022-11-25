import { Squadra } from "../../../typings";

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
   const res = await fetch("https://" + process.env.OLD_URL + "/api/squadra/" + nomeLink, { cache: "force-cache" });
   const { result: squadra }: ResponseSquadra = await res.json();
   return squadra.nome;
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
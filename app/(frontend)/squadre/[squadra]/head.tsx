import { Squadra } from "../../../../typings";
import { notFound } from "next/navigation";
import { groq } from "next-sanity";
import { client } from "../../../../lib/sanity.client";

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
   const query = groq`*[_type == "squadra" && slug.current == $slug][0]{
      title
   }`;
   const squadra : Squadra = await client.fetch(query, { slug: nomeLink });
   if (squadra === null) {
      return "Not Found";
   }
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
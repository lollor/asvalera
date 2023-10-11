import { groq } from "next-sanity";
import { notFound } from "next/navigation";
import { client } from "../../../../lib/sanity.client";
import Image from "next/image";
import { urlFor } from "../../../../lib/urlFor";
import { Squadra } from "../../../../typings";
import "./style.css";
import type { Metadata } from "next";

export const dynamic = 'force-dynamic'

type PageProps = {
   params: {
      squadra: string
   }
}

export async function generateMetadata({params }: PageProps): Promise<Metadata> {
   const fetchSquadraNome = async (nomeLink: string) => {
      const query = groq`*[_type == "squadra" && slug.current == $slug][0]{
         nome
      }`;
      const squadra : Squadra = await client.fetch(query, { slug: nomeLink });
      if (squadra === null) {
         return "Not Found";
      }
      return squadra.nome;
   }
   const squadraResult = await fetchSquadraNome(params.squadra);

   return {
      title: `${squadraResult}`,
      description: `A.S.D. Valera - ${squadraResult}`,
      keywords: `La squadra ${squadraResult} 2023/2024 dell'ASD Valera, AS Valera`,
   };
}

async function fetchSquadra(nomeSquadra:string) {
   const query = groq`
      *[_type == "squadra" && slug.current == $squadra][0]{
         ...,
         "giocatori": *[_type == "giocatore" && squadra->slug.current == $squadra] | order(numero)
      }
   `;
   const squadraResult: Squadra = await client.fetch(query, { squadra: nomeSquadra });
   if (squadraResult === null) {
      return notFound();
   }
   return squadraResult;
}

export default async function Pagina({ params: { squadra: squadraLink } }: PageProps) {
   const squadraResult = await fetchSquadra(squadraLink);
   return (
      <div className="sezione">
         <div className="lg:flex gap-6">
            <div>
               <h1 className="text-[32px] text-red-500 font-bold uppercase">{squadraResult.nome}</h1>
               <p><span className="font-bold">Categoria</span>: {squadraResult.categoria}</p>
               <p><span className="font-bold">Anno</span>: {squadraResult.anno}</p>
               <p><span className="font-bold">Campionato {squadraResult.campionato}</span>:{" "}<a href={squadraResult.linkGirone} className="underline" target="_blank">{squadraResult.girone}</a></p>
               <p><span className="font-bold">Responsabile</span>: {squadraResult.responsabile}</p>
               <p><span className="font-bold">Allenamenti</span>: {squadraResult.allenamenti}</p>
               <p><span className="font-bold">Partita</span>: {squadraResult.partita}</p>
               <div className="my-4 lg:my-6">
                  <div className="border border-black border-opacity-70 rounded drop-shadow-2xl mx-auto">
                     {
                        squadraResult.immagine === undefined ? (
                           <div className="relative w-full xl:w-[700px] mx-auto h-[200px] md:h-[300px] lg:h-[400px] xl:h-[500px]">
                              <Image src="/files/non-disponibile.jpg" className="object-cover object-center rounded" fill alt={squadraResult.nome} />
                           </div>
                        ) : (
                           <div className="relative w-full xl:w-[700px] mx-auto h-[200px] md:h-[300px] lg:h-[400px] xl:h-[500px]">
                              <Image src={urlFor(squadraResult.immagine).url()} className="object-cover object-center rounded" fill alt={squadraResult.nome} />
                           </div>
                        )
                     }
                  </div>
               </div>
            </div>
            <div>
               <h1 className="text-[32px]">Rosa giocatori</h1>
               <table className="text-sm mx-auto my-4">
                  <thead>
                     <tr className="bg-blue-400">
                        <th>Num</th>
                        <th>Foto</th>
                        <th>Nome e Cognome</th>
                        {/* <th>Data di nascita</th> */}
                        <th>Ruolo</th>
                     </tr>
                  </thead>
                  <tbody>
                     {squadraResult.giocatori.map((giocatore, index) => (
                        <tr key={index}>
                           <td className="text-center">{giocatore.numero}</td>
                           <td>
                              <div className="relative h-12 w-12 md:w-14 md:h-14 border shadow-lg">
                                 <Image src={urlFor(giocatore.immagine).url()} className="object-contain" fill alt={giocatore.cognome} />
                              </div>
                           </td>
                           {/* <td><img src={giocatore.immagine} alt={giocatore.nome} className="object-contain " /></td> */}
                           <td>{giocatore.nome} {giocatore.cognome}</td>
                           {/* <td>{giocatore.dataDiNascita}</td> */}
                           <td className="text-center">{
                              giocatore.ruolo ? (
                              giocatore.ruolo.toLowerCase() === "portiere" ? "POR" 
                              : giocatore.ruolo.toLowerCase() === "difensore" ? "DIF" 
                              : giocatore.ruolo.toLowerCase() === "centrocampista" ? "CC" 
                              : giocatore.ruolo.toLowerCase() === "attaccante" ? "ATT" : "N/A"
                              ) : "N/A"
                           }</td>
                        </tr>
                     ))}
                  </tbody>
               </table>
            </div>
         </div>
      </div>
   )
};

/* export async function generateStaticParams(){
   const query = groq`*[_type == "squadra"]{slug}`;
   const squadre: Squadra[] = await client.fetch(query);
   return squadre.map(squadra => ({squadra: squadra.slug.current } ));
} */
import React from "react";
import { getSquadra, getSquadre } from "../../../database/model";
import { Squadra } from "../../../typings";
import { notFound } from "next/navigation"
import "./style.css";

export const revalidate = 60;

type ResponseSquadra = {
   status: boolean,
   message: string,
   result: Squadra
}


type ResponseSquadrePaths = {
   status: boolean,
   message: string,
   result: Squadra[]
}

type PageProps = {
   params: {
      squadra: string
   }
}

const fetchSquadra = async (nomeLink: string) => {
   const squadra : Squadra | undefined = await getSquadra(nomeLink);
   if (squadra === undefined) {
      return notFound();
   }
   return squadra;

   const res = await fetch("https://" + process.env.OLD_URL + "/api/squadra/" + nomeLink, { next: { revalidate: 60 } });
   const { result: squadraFromFetch }: ResponseSquadra = await res.json();
   return squadraFromFetch;
}

export default async function SquadraPage({ params: { squadra: nomeLinkSquadra } }: PageProps) {
   const squadra = await fetchSquadra(nomeLinkSquadra);
   return (
      <div className="sezione">
         <div className="lg:flex gap-6">
            <div>
               <h1 className="text-[32px] text-red-500 font-bold uppercase">{squadra.nome}</h1>
               <p><span className="font-bold">Categoria</span>: {squadra.categoria}</p>
               <p><span className="font-bold">Anno</span>: {squadra.anno}</p>
               <p><span className="font-bold">Campionato {squadra.campionato}</span>:{" "}<a href={squadra.linkGirone} className="underline" target="_blank">{squadra.girone}</a></p>
               <p><span className="font-bold">Responsabile</span>: {squadra.responsabile}</p>
               <p><span className="font-bold">Allenamenti</span>: {squadra.allenamenti}</p>
               <p><span className="font-bold">Partita</span>: {squadra.partita}</p>
               <div className="my-4 lg:my-6">
                  <div className="border border-black border-opacity-70 rounded shadow-2xl mx-auto">
                     <img src={squadra.linkImmagine} alt={squadra.nome} className="w-full xl:w-[780px] rounded object-cover" />
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
                     {squadra.giocatori.map((giocatore, index) => (
                        <tr key={index}>
                           <td className="text-center">{giocatore.numero}</td>
                           <td><img src={giocatore.linkImmagine} alt={giocatore.nome} className="object-contain h-12 w-12 md:w-14 md:h-14 border shadow-lg" /></td>
                           <td>{giocatore.nome} {giocatore.cognome}</td>
                           {/* <td>{giocatore.dataDiNascita}</td> */}
                           <td className="text-center">{giocatore.ruolo.toLowerCase() === "portiere" ? "POR" : giocatore.ruolo.toLowerCase() === "difensore" ? "DIF" : giocatore.ruolo.toLowerCase() === "centrocampista" ? "CC" : giocatore.ruolo.toLowerCase() === "attaccante" ? "ATT" : "N/A"}</td>
                        </tr>
                     ))}
                  </tbody>
               </table>
            </div>
         </div>
      </div>
   )
}

export async function generateStaticParams(){
   const squadre: Squadra[] = await getSquadre();
   return squadre.map(squadra => ({squadra: squadra.nomeLink } ));

   const res = await fetch("https://" + process.env.OLD_URL + "/api/squadra", { next: { revalidate: 60 } });
   const { result: squadreFromFetch }: ResponseSquadrePaths = await res.json();

   return squadreFromFetch.map((squadra) => {
      return {
         squadra: squadra.nomeLink
      }
   })
}
import React from "react";
import { Squadra } from "../../../typings";
import "./style.css";

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
   const res = await fetch("https://" + process.env.OLD_URL + "/api/squadra/" + nomeLink, { next: { revalidate: 60 } });
   const { result: squadra }: ResponseSquadra = await res.json();
   return squadra;
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
                  <div className="lg:h-[400px] lg:w-[800px] border border-black h-[200px] w-full"></div>
               </div>
            </div>
            <div>
               <h1 className="text-[32px]">Rosa giocatori</h1>
               <table className="text-sm">
                  <thead>
                     <tr className="bg-blue-400">
                        <th>Num</th>
                        <th>Foto</th>
                        <th>Nome e Cognome</th>
                        <th>Data di nascita</th>
                        <th>Ruolo</th>
                     </tr>
                  </thead>
                  <tbody>
                     {squadra.giocatori.map((giocatore, index) => (
                        <tr key={index}>
                           <td className="text-center">{giocatore.numero}</td>
                           <td><img src={giocatore.linkImmagine} alt={giocatore.nome} className="object-contain h-12 w-12 md:w-14 md:h-14 border shadow-lg" /></td>
                           <td>{giocatore.nome} {giocatore.cognome}</td>
                           <td>{giocatore.dataDiNascita}</td>
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
   const res = await fetch("https://" + process.env.OLD_URL + "/api/squadra", { next: { revalidate: 60 } });
   const { result: squadre }: ResponseSquadrePaths = await res.json();

   return squadre.map((squadra) => {
      return {
         squadra: squadra.nomeLink
      }
   })
}
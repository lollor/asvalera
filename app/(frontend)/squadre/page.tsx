import type { Metadata } from "next";
import { groq } from "next-sanity";
import Link from "next/link";
import { client } from "../../../lib/sanity.client";
import { Squadra } from "../../../typings";
import "./style.css";

export const revalidate = 60;

const fetchSquadre = async () => {
   const query = groq`*[_type == "squadra"] | order(_createdAt)`;
   const squadre: Squadra[] = await client.fetch(query);
   if (squadre === undefined || squadre === null || squadre.length === 0) {
      return [] as Squadra[];
   }
   return squadre;
}

export const metadata:Metadata = {
   title: 'Squadre',
   description: 'Le nostre squadre della stagione sportiva 2023/2024',
   keywords: 'Le squadre della stagione sportiva 2023/2024 dell\'ASD Valera, AS Valera'
}

export default async function Squadre() {
   const squadre = await fetchSquadre();
   return (
      <div className="sezione">
         <div className="table-md-screen">
            <table className="">
               <thead>
                  <tr>
                     <th>CATEGORIA</th>
                     <th>SQUADRA</th>
                     <th>RESPONSABILE</th>
                     <th className="w-[175px]">ALLENAMENTI</th>
                     <th>PARTITA</th>
                  </tr>
               </thead>
               <tbody>
                  {
                     squadre.map((squadra, index) => {
                        return (
                           <tr key={index}>
                              <td>{squadra.categoria}<br /><span className="text-sm text-slate-700">{squadra.anno}</span></td>
                              <td><Link className="underline uppercase text-blue-400 font-semibold" href={"/squadre/" + squadra.slug.current}>{squadra.nome}</Link></td>
                              <td>{squadra.responsabile}</td>
                              <td>{squadra.allenamenti}</td>
                              <td>{squadra.partita}</td>
                           </tr>
                        );
                     })
                  }
               </tbody>
            </table>
         </div>
         <div className="table-sm-screen">
            {
               squadre.map((squadra, index) => {
                  return (
                     <div className="squadra-sm-screen" key={index}>
                        <p><span>Categoria</span>: {squadra.categoria} ({squadra.anno})</p>
                        <p><span>Squadra</span>: <Link className="underline uppercase text-blue-400 font-semibold" href={"/squadre/" + squadra.slug.current}>{squadra.nome}</Link></p>
                        <p><span>Responsabile</span>: {squadra.responsabile}</p>
                        <p><span>Allenamenti</span>: {squadra.allenamenti}</p>
                        <p><span>Partita</span>: {squadra.partita}</p>
                     </div>
                  )
               })
            }
         </div>
      </div>
   )
}
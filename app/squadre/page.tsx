import Link from "next/link";
import { Squadra } from "../../typings";
import "./style.css";

type ResponseSquadra = {
   status: boolean,
   message: string,
   result: Squadra[]
}

const fetchSquadre = async () => {
   const res = await fetch("https://" + process.env.OLD_URL + "/api/squadra", { next: { revalidate: 60 } });
   const { result: squadre }: ResponseSquadra = await res.json();
   return squadre;
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
                              <td><Link className="underline uppercase text-blue-400 font-semibold" href={"/squadre/" + squadra.nomeLink}>{squadra.nome}</Link></td>
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
                        <p><span>Categoria</span>: {squadra.nome} ({squadra.anno})</p>
                        <p><span>Squadra</span>: <Link className="underline uppercase text-blue-400 font-semibold" href={"/squadre/" + squadra.nomeLink}>{squadra.nome}</Link></p>
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
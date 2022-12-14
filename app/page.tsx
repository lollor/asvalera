import React from "react";
import CardContainer from "../components/CardContainer";
import cinquepermille from "../public/files/5x1000.jpg"

export default function Page() {
   return (
      <>
         <div className="shadow-xl lg:my-4">
            <img className="object-cover h-full w-full rounded" src="/files/striscione.jpg"></img>
         </div>
         <div className="sezione">
            <h1 className="titoletto">News</h1>
            {/* <p className="font-bold text-center md:text-[26px]">Pagina in costruzione</p> */}
            {/* @ts-ignore */}
            <CardContainer />
         </div>
         <div className="sezione">
            <h1 className="titoletto text-red-500">Dona il 5x1000</h1>
            <div className="md:flex text-justify items-center">
               <img src={cinquepermille.src} className="md:h-[200px] mx-auto"></img>
               <p className="lg:text-2xl text-lg">Dona il 5x1000 nella prossima dichiarazione dei redditi. Scegliere di destinare il 5 per mille alla A.S.D. Valera non costa nulla al contribuente e non è alternativo all´8 per mille. Per esprimere la tua scelta a favore della A.S.D. Valera nella prossima dichiarazione dei redditi è sufficiente mettere una firma nell´apposito riquadro "Sostegno alle Associazioni Sportive Dilettantistiche riconosciute ai fini sportivi dal CONI e norma di legge" ed indicare il codice fiscale dell'Associazione che è: <b className="underline">91112080154</b>.</p>
            </div>
         </div>
      </>
   )
}
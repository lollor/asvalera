import CardContainer from "../../../components/CardContainer";
import { Suspense } from "react";
import type { Metadata } from "next";

export const revalidate = 60;

export const metadata: Metadata = {
   title: "Eventi",
   description: "Gli eventi dell'AS Valera",
   keywords: "Gli eventi dell'ASD Valera, AS Valera",
   alternates: {
      canonical: "/eventi"
   }
}

export default function page() {
   return (
      <div className="sezione">
         <h1 className="titoletto">Eventi</h1>
         {/* <div className="flex flex-col md:flex-row gap-4 md:justify-between my-3 md:flex-wrap"> */}
         <Suspense fallback={<p>Caricamento..</p>}>
            {/* @ts-ignore */}
            <CardContainer />
         </Suspense>
         <div className="md:h-[250px] h-[50px]"></div>
      </div>
   )
}
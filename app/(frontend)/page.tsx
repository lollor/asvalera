import type { Metadata } from "next";
import Image from "next/image";
import CardContainer from "../../components/CardContainer";
import cinquepermille from "../../public/files/5x1000.jpg"
import striscione from "../../public/files/striscione.jpg"

export const revalidate = 60;

export const metadata: Metadata = {
   title: "Home | A.S.D. Valera",
   description: "A.S.D. Valera - Home",
   keywords: "ASD Valera",
   alternates: {
      canonical: "/"
   },
   openGraph: {
      title: "Home | A.S.D. Valera",
      description: "A.S.D. Valera - Home",
      type: "website",
      url: `https://www.asdvalera.it/`,
      locale: "it_IT",
      siteName: "A.S.D. Valera",
      images: [
         {
            url: striscione.src,
            height: 247,
            width: 988,
            alt: "ASD Valera"
         }
      ]
   }
}

export default function Page() {
   return (
      <>
         <div className="lg:my-4">
            {/* <div className="relative w-full rounded h-[85px] lg:h-[350px] overflow-hidden"> */}
               <Image className="w-full shadow-xl rounded" alt="ASValera" placeholder="blur" src={striscione} />
            {/* </div> */}
         </div>
         <div className="sezione">
            <h1 className="titoletto">News</h1>
            {/* <p className="font-bold text-center md:text-[26px]">Pagina in costruzione</p> */}
            {/* @ts-ignore */}
            <CardContainer maxLength={3}/>
         </div>
         <div className="sezione">
            <h1 className="titoletto text-red-500">Dona il 5x1000</h1>
            <div className="md:flex text-justify items-center">
               <Image alt="5x1000" src={cinquepermille} className="md:h-[200px] mx-auto" />
               <p className="lg:text-2xl text-lg">Dona il 5x1000 nella prossima dichiarazione dei redditi. Scegliere di destinare il 5 per mille alla A.S.D. Valera non costa nulla al contribuente e non è alternativo all´8 per mille. Per esprimere la tua scelta a favore della A.S.D. Valera nella prossima dichiarazione dei redditi è sufficiente mettere una firma nell´apposito riquadro "Sostegno alle Associazioni Sportive Dilettantistiche riconosciute ai fini sportivi dal CONI e norma di legge" ed indicare il codice fiscale dell'Associazione che è: <b className="underline">91112080154</b>.</p>
            </div>
         </div>
      </>
   )
}
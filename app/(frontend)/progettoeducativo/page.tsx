import { Metadata } from "next"
import logo from "../../../public/files/logo.png"
import Image from "next/image"

export const metadata: Metadata = {
    title: 'Progetto educativo',
    description: 'Il nostro progetto educativo',
    keywords: 'Il progetto educativo dell\'ASD Valera, AS Valera'
}

export default function Page(){
   return (
      <div className="sezione">
         <h1 className="titoletto text-red-500 lg:text-5xl pb-3 italic">PROGETTO EDUCATIVO</h1>
         <a href={"/files/progettoeducativo.pdf"} target="_blank" className="my-4 border border-opacity-50 lg:w-1/2 mx-auto block shadow-2xl">
               <div className="relative aspect-square w-1/2 mx-auto">
                  <Image alt="logo" src={logo} fill className="object-contain" placeholder="blur" />
               </div>
            <p className="text-center pb-2 text-xl lg:text-3xl font-bold">Progetto educativo</p>
         </a>
         <h1 className="titoletto text-red-500 lg:text-5xl py-3 mt-10 italic">PATTI EDUCATIVI</h1>
         <div className="my-4 border border-opacity-50 lg:w-2/3 mx-auto block shadow-2xl">
            <div className="relative aspect-square w-1/2 mx-auto">
               <Image alt="logo" src={logo} fill className="object-contain" placeholder="blur" />
            </div>
            <div className="md:flex justify-between px-8">
               <a href={"/files/pe_allenatore.pdf"} target="_blank" className="block text-blue-400 md:inline-block text-center pb-2 font-bold sm:text-[22px] md:text-[24px] lg:text-[26px]">Allenatore</a>
               <a href={"/files/pe_atleta.pdf"} target="_blank" className="block text-blue-400 md:inline-block text-center pb-2 font-bold sm:text-[22px] md:text-[24px] lg:text-[26px]">Atleta</a>
               <a href={"/files/pe_dirigente.pdf"} target="_blank" className="block text-blue-400 md:inline-block text-center pb-2 font-bold sm:text-[22px] md:text-[24px] lg:text-[26px]">Dirigente</a>
               <a href={"/files/pe_genitore.pdf"} target="_blank" className="block text-blue-400 md:inline-block text-center pb-2 font-bold sm:text-[22px] md:text-[24px] lg:text-[26px]">Genitore</a>
               <a href={"/files/pe_prete.pdf"} target="_blank" className="block text-blue-400 md:inline-block text-center pb-2 font-bold sm:text-[22px] md:text-[24px] lg:text-[26px]">Prete</a>
            </div>
         </div>
      </div>
   )
}
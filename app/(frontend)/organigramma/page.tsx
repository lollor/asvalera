import type { Metadata } from "next"
import Image from "next/image"
import organigramma from "../../../public/files/organigramma.jpg"

export const metadata: Metadata = {
    title: "Organigramma",
    description: "L'Organigramma della società dell'ASD Valera",
    keywords: "L'Organigramma della società dell'ASD Valera, AS Valera",
}

export default function Page(){
    return (
        <div className="sezione">
            <h1 className="titoletto text-red-500 lg:text-5xl pb-3 italic">ORGANIGRAMMA SOCIETARIO<br /> STAGIONE SPORTIVA 2023/2024</h1>
            <div className="md:px-[100px]">
                <Image src={organigramma} placeholder="blur" alt="Organigramma" className="object-contain"/>
            </div>
            <a target="_blank" href={"/files/organigramma.pdf"} className="mx-auto pb-2 text-base lg:text-xl font-bold underline cursor-pointer text-blue-400">Scarica file</a>
        </div>
    )
}
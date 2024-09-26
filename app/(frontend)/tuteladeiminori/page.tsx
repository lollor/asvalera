import Image from "next/image";
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Tutela dei minori',
    description: 'Qui troverai informazioni sulla tutela dei minori',
    keywords: 'Tutela dei minori asd valera, tutela dei minori asdvalera, tutela dei minori asvalera, AS Valera'
}

export default function Page() {
    return (
        <div className="sezione">
            <h1 className="titoletto text-red-500 lg:text-5xl mb-3 md:mb-6">Tutela dei minori</h1>
            <p className="text-justify text-base md:text-xl pt-1">Pagina in costruzione...</p>
            <div className="h-[60vh]"/>
        </div>
    )
}
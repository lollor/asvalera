import Image from "next/image";
import type { Metadata } from 'next'
import Logo from "../../../public/files/logo.png"
import Link from "next/link";

export const metadata: Metadata = {
    title: 'Tutela dei minori',
    description: 'Qui troverai informazioni sulla tutela dei minori',
    keywords: 'Tutela dei minori asd valera, tutela dei minori asdvalera, tutela dei minori asvalera, AS Valera'
}

export default function Page() {
    return (
        <div className="sezione">
            <div className="flex items-center justify-center gap-2">
                <div className="relative aspect-square hidden xl:block xl:h-[200px]">
                    <Image src={Logo} fill alt="ASDValera logo" className="object-contain"/>
                </div>
                <h1 className="titoletto text-red-500 lg:text-5xl italic uppercase">Tutela dei minori</h1>
            </div>
            <p className="text-justify pt-1">Il CSI, da sempre impegnato nell{"'"}educazione, nella valorizzazione, nel rispetto della dignità di bambini e adolescenti, in un{"'"}ottica di salvaguardia, cura e protezione degli stessi, ha deciso di dotarsi di una Policy per chi pratica lo sport.</p>
            <p className="text-justify pt-1">La ASD Valera, aderente al CSI Comitato di Milano, si impegna per garantire che il calcio sia uno sport sicuro, un{"'"}esperienza positiva e divertente per tutti i bambini e per tutti i ragazzi coinvolti, indipendentemente dalla loro età, genere, orientamento sessuale, etnia e background sociale, religione e livello di abilità o disabilità.</p>
            <p className="text-justify pt-1">La ASD VALERA intende ottemperare agli obblighi di cui all{"'"}art. 16 comma 2 del D. Lgs.. 39 del 2021 predisponendo ed adottando dei Modelli Organizzativi e di Controllo dell{"'"}Attività Sportiva con l{"'"}osservanza delle direttive contenute nelle Linee Guida in materia adottate dal Centro Sportivo Italiano APS nel mese di Luglio 2023 e dei principi fondamentali individuati dall{"'"}OSSERVATORIO PERMANENTE DEL CONI PER LE POLITICHE DI SAFEGUARDING in materia di PREVENZIONE E  CONTRASTO DEI FENOMENI DI ABUSO, VIOLENZA E DISCRIMINAZIONE approvato in data 25 luglio 2023.</p>
            <span className="text-justify pt-1">
                A tale scopo vengono adottati i seguenti strumenti:
                <ul className="list-disc pl-5 pt-2">
                    <li>Modello organizzativo policy genere</li>
                    <li>Modello prevenzione policy discriminazione</li>
                    <li>Modello organizzativo policy minori</li>
                    <li>Modulo per la segnalazione di abusi</li>
                </ul>
            </span>
            <div className="grid md:grid-cols-4 w-full mt-4 gap-y-2 gap-x-6">
                <Link href={"/public/files/tuteladeiminori/policy_genere.pdf"} className="inline-flex justify-center items-center text-center bg-red-500 text-white font-bold py-2 rounded-sm uppercase px-2">Policy genere</Link>
                <Link href={"/public/files/tuteladeiminori/policy_discriminazione.pdf"} className="inline-flex justify-center items-center text-center bg-red-500 text-white font-bold py-2 rounded-sm uppercase px-2">Policy discriminazione</Link>
                <Link href={"/public/files/tuteladeiminori/policy_minori.pdf"} className="inline-flex justify-center items-center text-center bg-red-500 text-white font-bold py-2 rounded-sm uppercase px-2">Policy minori</Link>
                <Link href={"/public/files/tuteladeiminori/modulo_segnalazione.pdf"} className="inline-flex justify-center items-center text-center bg-red-500 text-white font-bold py-2 rounded-sm uppercase px-2">Modulo di segnalazione</Link>
            </div>
            <div className="md:h-[15vh]"/>
        </div>
    )
}
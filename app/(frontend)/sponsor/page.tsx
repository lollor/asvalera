import type { Metadata } from "next"
import Image from "next/image"
import golfetto from "../../../public/files/sponsor/golfetto.jpg"
import zetadue from "../../../public/files/sponsor/zetadue.jpg"

export const metadata: Metadata = {
    title: "Sponsor",
    description: "Gli Sponsor della ASD Valera",
    keywords: "Gli Sponsor della ASD Valera, AS Valera Sponsor",
    alternates: {
        canonical: "/sponsor"
    }
}

export default function Page(){
    return (
        <div className="sezione">
            <div className="lg:flex gap-4">
                <div className="text-lg lg:w-2/3 text-justify p-2">
                    <p>Perché diventare sponsor della nostra Società?</p><br />
                    <p>Nonostante ci siano tante persone che si dedicano giornalmente e gratuitamente, fornendo competenza e passione al progetto della nostra Società sportiva, purtroppo i costi da sopportare sono in continuo aumento.</p><br />
                    <p>Il nostro obiettivo è quello di garantire ai giovani la continuità del nostro servizio tecnico, che sia adeguato, serio e professionale.</p><br />
                    <p>Fare sport in oratorio implica una preparazione tecnica ed educativa importante per garantire ai giovani atleti una formazione sportiva ed agonistica di un certo livello.</p><br />
                    <p>Per questi motivi, l’organizzazione societaria e la disponibilità di strutture adeguate è fondamentale.</p><br />
                    <p>Questi obiettivi possono essere raggiunti anche grazie agli SPONSOR, AZIENDE E SOPRATTUTTO PERSONE che condividano soprattutto il nostro progetto SPORTIVO ED EDUCATIVO, che condividano i nostri IDEALI.</p><br />
                    <p>Si può diventare SPONSOR:</p><br />
                    <ul className="list-disc pl-[28px]">
                        <li>PERSONALIZZANDO LE DIVISE DA GIOCO, LE TUTE: apponendo il proprio marchio sulle maglie di gara</li>
                        <li>avere uno STRISCIONE PERSONALIZZATO sempre presente all’interno delle nostre strutture e visibile durante tutte le partite della stagione e nel corso degli eventi svolti nel corso dell’anno sportivo</li>
                        <li>avere visibilità sul nostro sito internet</li>
                        <li>SPONSORIZZARE UN EVENTO che viene proposto in oratorio nel corso dell’anno</li>
                        <li>SPONSORIZZARE I NOSTRI PROGETTI per apportare migliorie alle nostre strutture che richiedono per la manutenzione risorse importanti sempre crescenti</li>
                    </ul>
                </div>
                <div className="text-center lg:w-1/3">
                    <h1 className="titoletto text-red-500 lg:text-5xl pb-3 italic my-4">I nostri Sponsor</h1>
                    <div className="flex flex-col justify-around gap-6">
                        <a href="https://www.hotelgolfetto.com/" target={"_blank"}>
                            {/* <div className="relative w-1/2 aspect-video shadow-2xl border mx-auto"> */}
                                <Image src={golfetto} placeholder="blur" alt="sponsor" className="object-contain w-1/2 mx-auto border shadow-lg" />
                            {/* </div> */}
                        </a>
                        <a href="https://www.informazione-aziende.it/Azienda_ZETA-DUE-DI-ZANON-MASSIMO" target={"_blank"}>
                            {/* <div className="relative w-1/2 aspect-[3/4] shadow-2xl border mx-auto"> */}
                                <Image  src={zetadue} placeholder="blur" alt="sponsor" className="object-contain w-1/2 mx-auto border shadow-lg" />
                            {/* </div> */}
                        </a>
                    </div>
                </div>
            </div>
            
            
        </div>
    )
}
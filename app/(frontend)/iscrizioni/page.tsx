import type { Metadata } from "next"
import Image from "next/image"
import logo from "../../../public/files/logo.png"
//import quote from "../../../public/files/quote-iscrizione.png"

export const metadata:Metadata = {
    title: 'Iscrizioni',
    description: 'Iscrizioni stagione sportiva 2024/2025',
    keywords: 'Pagina iscrizioni stagione sportiva 2024/2025 dell\'ASD Valera, AS Valera',
    alternates: {
        canonical: '/iscrizioni'
    }
}

export default function Page(){
    return (
        <>
            <div className="sezione">
                <h1 className="titoletto text-red-500 lg:text-5xl pb-3 italic">ISCRIZIONI STAGIONE SPORTIVA 2024/2025</h1>
                {/* <h2 className="text-[24px] font-bold text-center md:text-[28px] lg:text-[32px] text-red-500 underline">Pre-iscrizioni aperte</h2> */}
                <div className="grid mx-auto md:w-2/3 gap-8 grid-cols-1 my-[30px]"/* md:grid-cols-2 */>
                    {/* <div className="w-full">
                        <h1 className="text-center text-2xl font-bold md:text-3xl">PRE-ISCRIZIONI</h1>
                        <div className="my-4 border border-opacity-50 mx-auto block shadow-2xl">
                            <div className="relative aspect-square w-1/2 mx-auto">
                                <Image src={logo} placeholder="blur" alt="Logo" fill className="object-contain" />
                            </div>
                            <div className="md:flex justify-around px-8">
                                <a href={"/files/iscrizioni/preiscr_minorenne.pdf"} target="_blank" className="block text-blue-400 md:text-[20px] lg:text-[26px] md:inline-block text-center pb-2 font-bold">Scarica il file</a>
                            </div>
                        </div>
                    </div> */}
                    <div className="mx-auto w-full">
                        <h1 className="text-center text-2xl font-bold md:text-3xl">ATLETI</h1>
                        <div className="my-4 border border-opacity-50 mx-auto block shadow-2xl">
                            <div className="relative aspect-square w-1/2 mx-auto">
                                <Image src={logo} placeholder="blur" alt="Logo" fill className="object-contain" />
                            </div>
                            <div className="md:flex justify-around px-8 gap-4 items-center">
                                <a href={"/files/iscrizioni/at_minorenne.pdf" /* "#/" */} target="_blank" className="hover:underline transition-all duration-300 block text-blue-400 md:text-[20px] lg:text-[26px] md:inline-block text-center pb-2 font-bold">Minorenne</a>
                                <a href={"/files/iscrizioni/at_maggiorenne.pdf" /* "#/" */} target="_blank" className="hover:underline transition-all duration-300 block text-blue-400 md:text-[20px] lg:text-[26px] md:inline-block text-center pb-2 font-bold">Maggiorenne</a>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
            <div className="sezione">
                <div className="md:grid items-end md:grid-rows-1 md:grid-cols-3 md:gap-2">
                    {/* <div>
                        <h1 className="text-center text-2xl font-bold md:text-3xl">QUOTE D'ISCRIZIONE</h1>
                        <Image src={quote} className="h-[350px] w-auto mx-auto lg:h-[450px] my-4 border border-opacity-50 shadow-2xl" ></Image>
                    </div> */}
                    <div className="">
                        <h1 className="text-center text-2xl font-bold md:text-3xl">DIRIGENTI</h1>
                        <div className="my-4 border border-opacity-50 mx-auto block shadow-2xl md:h-[35vh] md:flex flex-col justify-center">
                            <div className="relative aspect-square w-1/2 mx-auto">
                                <Image src={logo} alt="Logo" fill className="object-contain" />
                            </div>
                            <div className="md:flex justify-around px-8 gap-4 items-center">
                                <a href={"/files/iscrizioni/di_minorenne.pdf" /* "#/" */} target="_blank" className="hover:underline transition-all duration-300 block text-blue-400 md:text-[20px] xl:text-[22px] text-center pb-2 font-bold">Minorenne <br />{"(≥16 anni)"}</a>
                                <a href={"/files/iscrizioni/di_maggiorenne.pdf" /* "#/" */} target="_blank" className="hover:underline transition-all duration-300 block text-blue-400 md:text-[20px] xl:text-[22px] text-center pb-2 font-bold">Maggiorenne</a>
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <h1 className="text-center text-2xl font-bold md:text-3xl">VADEMECUM</h1>
                        <div className="my-4 border border-opacity-50 mx-auto block shadow-2xl md:h-[35vh] md:flex flex-col justify-center ">
                            <div className="relative aspect-square w-1/2 mx-auto">
                                <Image src={logo} alt="Logo" fill className="object-contain" />
                            </div>
                            <a href={"/files/iscrizioni/vademecum.pdf" /* "#/" */} target="_blank" className="hover:underline transition-all duration-300 block text-blue-400 md:text-[20px] lg:text-[26px] md:inline-block text-center pb-2 font-bold">Scarica file</a>
                        </div>
                    </div>
                    <div className="">
                        <h1 className="text-center text-2xl font-bold md:text-3xl">COORDINATE BANCARIE</h1>
                        <div className="my-4 border border-opacity-50 mx-auto block shadow-2xl md:h-[35vh] p-4 md:flex flex-col justify-center ">
                            <p>Intestatario: <span className="font-bold">A.S.D. VALERA</span></p>
                            <p>Banca: <span className="font-bold">BANCO BPM FILIALE DESIO</span></p>
                            <p>IBAN: <span className="font-bold">IT54N0503433101000000002093</span></p>
                            <p>BIC/SWIFT: <span className="font-bold">BAPPIT21I65</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

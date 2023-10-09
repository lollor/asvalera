import Image from "next/image"
import logo from "../public/files/logo.png"
import csi from "../public/files/csi.jpg"
import comunita from "../public/files/logo-comunita.jpg"
import "./Footer.css"
import Link from "next/link"

export default function Footer() {
    return (
        <div className="footer">
            <div className="immagini">
                <div className="flex flex-col md:flex-row gap-3 items-start md:items-center py-2">
                    <Image alt="logo" className="h-[100px] md:h-[160px] w-auto object-contain" placeholder="blur" src={logo} />
                    <div className="text-white md:flex gap-6 md:ml-3">
                        <div className="py-1">
                            <p className="font-bold text-red-500">A.S.D. Valera</p>
                            <p>Via Friuli 18</p>
                            <p>20814 Varedo (MB)</p>
                            <p>Cod Fisc. <span className="font-bold underline">91112080154</span></p>
                            <div className="bg-white h-[1px] my-2"/>
                            <p className="font-light">Creato e Pubblicato da Lorenzo Raia, <Link href="https://lorenzoraia.it" className="underline" target="_blank">lorenzoraia.it</Link></p>
                        </div>
                        <div className="py-1">
                            <p className="font-bold text-red-500">Mail:</p>
                            <a className="hover:underline cursor-pointer block" target="_blank" href="mailto:asvalera@virgilio.it">asvalera@virgilio.it</a>
                            <a className="hover:underline cursor-pointer block" target="_blank" href="mailto:segreteria.asvalera@virgilio.it">segreteria.asvalera@virgilio.it</a>
                            <a className="hover:underline cursor-pointer block" target="_blank" href="mailto:tesseramentoasvalera@virgilio.it">tesseramentoasvalera@virgilio.it</a>
                            <p><span className="font-semibold text-red-500">PEC</span>: <a className="hover:underline cursor-pointer" target="_blank" href="mailto:asdvalera@pec.it">asdvalera@pec.it</a></p>
                        </div>
                    </div>
                </div>
                <div className="flex gap-3">
                    <Image alt="csi" className="h-[70px] md:h-[140px] w-auto object-contain" placeholder="blur" src={csi} />
                    <Image alt="comunita" className="h-[70px] md:h-[140px] w-auto object-contain" placeholder="blur" src={comunita} />
                </div>
            </div>
        </div>
    )
}
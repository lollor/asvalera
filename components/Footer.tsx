"use client";
import "./Footer.css"

function Footer() {
    return (
        <div className="footer">
            <div className="immagini">
                <div className="flex flex-col md:flex-row gap-3 items-start md:items-center py-2">
                    <img className="h-[100px] md:h-[160px] " src={"/files/logo.png"}></img>
                    <div className="text-white md:flex gap-6 md:ml-3">
                        <div className="py-1">
                            <p className="font-bold text-red-500">A.S.D. Valera</p>
                            <p>Via Friuli 18</p>
                            <p>20814 Varedo (MB)</p>
                            <p>Cod Fisc. <span className="font-bold underline">91112080154</span></p>
                        </div>
                        <div className="py-1">
                            <p className="font-bold text-red-500">Mail:</p>
                            <p className="hover:underline cursor-pointer" onClick={e => window.open("mailto:asvalera@virgilio.it")}>asvalera@virgilio.it</p>
                            <p className="hover:underline cursor-pointer" onClick={e => window.open("mailto:segreteria.asvalera@virgilio.it")}>segreteria.asvalera@virgilio.it</p>
                            <p className="hover:underline cursor-pointer" onClick={e => window.open("mailto:tesseramentoasvalera@virgilio.it")}>tesseramentoasvalera@virgilio.it</p>
                            <p><span className="font-semibold text-red-500">PEC</span>: <span className="hover:underline cursor-pointer" onClick={e => window.open("mailto:asdvalera@pec.it")}>asdvalera@pec.it</span></p>
                        </div>
                    </div>
                </div>
                <div className="flex gap-3">
                    <img className="h-[70px] md:h-[140px]" src={"/files/csi.jpg"}></img>
                    <img className="h-[70px] md:h-[140px]" src={"/files/logo-comunita.jpg"}></img>
                </div>
            </div>
        </div>
    )
}

export default Footer
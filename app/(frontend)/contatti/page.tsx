import type { Metadata } from "next";
import Email from "./Email";
import "./style.css"

export const metadata: Metadata = {
   title: "Contatti",
   description: "Pagina contatti dell'ASD Valera",
   keywords: "Pagina contatti dell'ASD Valera, AS Valera",
}

export default function Page() {
   return (
      <>
         <div className="sezione">
            <h1 className="titoletto text-red-500 lg:text-5xl">Contatti</h1>
            <div>
               <div className="flex items-center gap-1 md:my-2">
                  <span className="text-xl lg:text-3xl">🕐</span>
                  <p className="text-base lg:text-xl">Orari di apertura segreteria</p>
               </div>
               <div className="flex items-center gap-1 md:my-2">
                  <span className="text-xl lg:text-3xl">☎️</span>
                  <p className="text-base lg:text-xl">Telefono</p>
               </div>
               <div>
                  <div className="flex items-center gap-1 md:my-2">
                     <span className="text-xl lg:text-3xl">✉️</span>
                     <Email email="asvalera@virgilio.it" />
                  </div>
                  <div className="flex items-center gap-1 md:my-2">
                     <span className="text-xl lg:text-3xl">✉️</span>
                     <Email email="segreteria.asvalera@virgilio.it" />
                  </div>
                  <div className="flex items-center gap-1 md:my-2">
                     <span className="text-xl lg:text-3xl">✉️</span>
                     <Email email="tesseramentoasvalera@virgilio.it" />
                  </div>
                  <div className="flex items-center gap-1 md:my-2">
                     <span className="text-xl lg:text-3xl">📧</span>
                     <span className="font-bold italic text-red-500 text-base lg:text-xl">PEC</span>{" "}
                     <Email email="asdvalera@pec.it" />
                  </div>
               </div>
            </div>
         </div>
         <div className="sezione">
            <h1 className="titoletto text-red-500 lg:text-5xl" id="dovesiamo">
               Dove siamo 📌
            </h1>
            <div className="md:flex gap-12">
               <div className="map">
                  <h2>Via Friuli 20, Valera di Varedo, MB</h2>
                  <iframe src="https://maps-api-ssl.google.com/maps?hl=it&ll=45.600963,9.174399&output=embed&q=45.599566,9.177039+(Via+Friuli)&z=16" />
               </div>
               {/* <div className="map">
                  <h2>Via San Giuseppe 2, Varedo, MB</h2>
                  <iframe src="https://maps-api-ssl.google.com/maps?hl=it&ll=45.597771,9.155897&output=embed&q=Via+San+Giuseppe,+20814+Varedo+MB,+Italia+(Via+San+Giuseppe)&z=16" />
               </div> */}
            </div>
         </div>
      </>
   )
}
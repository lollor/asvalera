import React from "react"

export default function Page() {
   return (
      <div className="sezione">
         <div className="md:flex-row flex flex-col gap-4 md:gap-8 justify-start">
            <a className="text-center w-auto md:w-1/6" href={"/files/detrazione_irpef.pdf"} target="_blank">
               <img className="mx-auto" src={"https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/PDF_file_icon.svg/121px-PDF_file_icon.svg.png"} alt="Pdf" />
               <h2 className="block text-blue-400 md:text-[20px] lg:text-[26px] text-center pb-2 font-bold">Richiesta <br /> detrazione IRPEF</h2>
            </a>
            <a className="text-center w-auto md:w-1/6" href={"/files/info_irpef.pdf"} target="_blank">
               <img className="mx-auto" src={"https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/PDF_file_icon.svg/121px-PDF_file_icon.svg.png"} alt="Pdf" />
               <h2 className="block text-blue-400 md:text-[20px] lg:text-[26px] text-center pb-2 font-bold">Info Richiesta <br /> detrazione IRPEF</h2>
            </a>
         </div>
         <h1 className="titoletto text-red-500 lg:text-5xl py-4 italic">REGOLAMENTI CSI CALCIO A 7</h1>
         <div className="md:flex-row flex flex-col gap-4 md:gap-8 justify-between my-4">
            <a className="text-center w-auto md:w-1/6" href={"https://www.csi.milano.it/media/documenti/calcio-a-7-2022-2023_1666969385.pdf"} target="_blank">
               <img className="mx-auto" src={"https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/PDF_file_icon.svg/121px-PDF_file_icon.svg.png"} alt="Pdf" />
               <h2 className="block text-blue-400 md:text-[20px] lg:text-[26px] text-center pb-2 font-bold">Regolamento - Calcio a 7</h2>
            </a>
            <a className="text-center w-auto md:w-1/6" href={"https://www.csi.milano.it/media/documenti/norme-generali-2022-2023_1663076582.pdf"} target="_blank">
               <img className="mx-auto" src={"https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/PDF_file_icon.svg/121px-PDF_file_icon.svg.png"} alt="Pdf" />
               <h2 className="block text-blue-400 md:text-[20px] lg:text-[26px] text-center pb-2 font-bold">Norme Generali</h2>
            </a>
            <a className="text-center w-auto md:w-1/6" href={"https://www.csi.milano.it/media/documenti/regolamento-di-giustizia-2022-2023_1667986982.pdf"} target="_blank">
               <img className="mx-auto" src={"https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/PDF_file_icon.svg/121px-PDF_file_icon.svg.png"} alt="Pdf" />
               <h2 className="block text-blue-400 md:text-[20px] lg:text-[26px] text-center pb-2 font-bold">Regolamento di Giustizia</h2>
            </a>
            <a className="text-center w-auto md:w-1/6" href={"https://www.csi.milano.it/media/documenti/schema-riepilogativo-calcio-a-7-parte-1_1663077378.pdf"} target="_blank">
               <img className="mx-auto" src={"https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/PDF_file_icon.svg/121px-PDF_file_icon.svg.png"} alt="Pdf" />
               <h2 className="block text-blue-400 md:text-[20px] lg:text-[26px] text-center pb-2 font-bold">Schema riepilogativo regole di gioco (parte 1)</h2>
            </a>
            <a className="text-center w-auto md:w-1/6" href={"https://www.csi.milano.it/media/documenti/schema-riepilogativo-calcio-a-7-parte-2_1663244060.pdf"} target="_blank">
               <img className="mx-auto" src={"https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/PDF_file_icon.svg/121px-PDF_file_icon.svg.png"} alt="Pdf" />
               <h2 className="block text-blue-400 md:text-[20px] lg:text-[26px] text-center pb-2 font-bold">Schema riepilogativo regole di gioco (parte 2)</h2>
            </a>
            <a className="text-center w-auto md:w-1/6" href={"https://www.csi.milano.it/media/documenti/vademecum-arbitri-di-societ%C3%A0-calcio_1602490752.pdf"} target="_blank">
               <img className="mx-auto" src={"https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/PDF_file_icon.svg/121px-PDF_file_icon.svg.png"} alt="Pdf" />
               <h2 className="block text-blue-400 md:text-[20px] lg:text-[26px] text-center pb-2 font-bold">Vademecum arbitri di Società</h2>
            </a>
         </div>
      </div>
   )
}
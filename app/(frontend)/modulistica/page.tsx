import type { Metadata } from "next"
import Image from "next/image"

export const metadata: Metadata = {
   title: 'Modulistica',
   description: 'Modulistica ASD Valera',
   keywords: 'Modulistica ASD Valera AS Valera',
   alternates: {
      canonical: '/modulistica'
   }
}

export default function Page() {
   return (
      <div className="sezione">
         <div className="md:flex-row flex flex-col gap-4 md:gap-8 justify-start">
            <a className="text-center w-auto md:w-1/6" href={"/files/detrazione_irpef.pdf"} target="_blank">
               <Image width={120} height={150} className="mx-auto" src={"https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/PDF_file_icon.svg/121px-PDF_file_icon.svg.png"} alt="Pdf" />
               <h2 className="block text-blue-400 md:text-[20px] lg:text-[26px] text-center pb-2 font-bold">Richiesta <br /> detrazione IRPEF</h2>
            </a>
            <a className="text-center w-auto md:w-1/6" href={"/files/info_irpef.pdf"} target="_blank">
               <Image width={120} height={150} className="mx-auto" src={"https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/PDF_file_icon.svg/121px-PDF_file_icon.svg.png"} alt="Pdf" />
               <h2 className="block text-blue-400 md:text-[20px] lg:text-[26px] text-center pb-2 font-bold">Info Richiesta <br /> detrazione IRPEF</h2>
            </a>
         </div>
         <h1 className="titoletto text-red-500 lg:text-5xl py-4 italic">REGOLAMENTI CSI CALCIO A 7</h1>
         <div className="md:flex-row flex flex-col gap-4 md:gap-8 justify-between my-4">
            <a className="text-center w-auto md:w-1/6" href={"https://www.csi.milano.it/media/documenti/calcio-a-7-2024-2025_1726753728.pdf"} target="_blank">
               <Image width={120} height={150} className="mx-auto" src={"https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/PDF_file_icon.svg/121px-PDF_file_icon.svg.png"} alt="Pdf" />
               <h2 className="block text-blue-400 md:text-[20px] lg:text-[26px] text-center pb-2 font-bold">Regolamento - Calcio a 7</h2>
            </a>
            <a className="text-center w-auto md:w-1/6" href={"https://www.csi.milano.it/media/documenti/norme-generali-2024-2025_1726753728.pdf"} target="_blank">
               <Image width={120} height={150} className="mx-auto" src={"https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/PDF_file_icon.svg/121px-PDF_file_icon.svg.png"} alt="Pdf" />
               <h2 className="block text-blue-400 md:text-[20px] lg:text-[26px] text-center pb-2 font-bold">Norme Generali</h2>
            </a>
            <a className="text-center w-auto md:w-1/6" href={"https://www.csi.milano.it/media/documenti/regolamento-di-giustizia-2024-2025_1726846859.pdf"} target="_blank">
               <Image width={120} height={150} className="mx-auto" src={"https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/PDF_file_icon.svg/121px-PDF_file_icon.svg.png"} alt="Pdf" />
               <h2 className="block text-blue-400 md:text-[20px] lg:text-[26px] text-center pb-2 font-bold">Regolamento di Giustizia</h2>
            </a>
            <a className="text-center w-auto md:w-1/6" href={"https://www.csi.milano.it/media/documenti/schema-riepilogativo-calcio-a-7-parte-1_1726043079.pdf"} target="_blank">
               <Image width={120} height={150} className="mx-auto" src={"https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/PDF_file_icon.svg/121px-PDF_file_icon.svg.png"} alt="Pdf" />
               <h2 className="block text-blue-400 md:text-[20px] lg:text-[26px] text-center pb-2 font-bold">Schema riepilogativo regole di gioco (parte 1)</h2>
            </a>
            <a className="text-center w-auto md:w-1/6" href={"https://www.csi.milano.it/media/documenti/schema-riepilogativo-calcio-a-7-parte-2_1726043079.pdf"} target="_blank">
               <Image width={120} height={150} className="mx-auto" src={"https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/PDF_file_icon.svg/121px-PDF_file_icon.svg.png"} alt="Pdf" />
               <h2 className="block text-blue-400 md:text-[20px] lg:text-[26px] text-center pb-2 font-bold">Schema riepilogativo regole di gioco (parte 2)</h2>
            </a>
            <a className="text-center w-auto md:w-1/6" href={"https://www.csi.milano.it/media/documenti/vademecum-das-calcio-2023-2024_1695892844.pdf"} target="_blank">
               <Image width={120} height={150} className="mx-auto" src={"https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/PDF_file_icon.svg/121px-PDF_file_icon.svg.png"} alt="Pdf" />
               <h2 className="block text-blue-400 md:text-[20px] lg:text-[26px] text-center pb-2 font-bold">Vademecum arbitri di Società</h2>
            </a>
         </div>
      </div>
   )
}
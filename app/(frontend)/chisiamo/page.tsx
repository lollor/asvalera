import trapattoni from "../../../public/files/trapattoni.jpg";
import bambini1 from "../../../public/files/bambini1.jpg";

export default function Page() {
    return (
        <div className="sezione">
            <h1 className="titoletto text-red-500 lg:text-5xl mb-3 md:mb-6">La Nostra Storia</h1>
            <p className="text-justify text-base md:text-xl pt-1">La società sportiva A.S. VALERA risulta essere a tutti gli effetti un pezzo di storia della Parrocchia Maria Regina nella frazione Valera di Varedo. Nasce infatti come Associazione Calcistica San Giorgio pochi anni dopo la fondazione della nascente parrocchia, insediandosi all'interno dell'oratorio. Fin dall'annata 1974/1975 si affilia al consiglio provinciale di Milano del CSI, partecipando al campionato di calcio a 7 con una squadra di ragazzi dell'oratorio stesso, grazie al sostegno e all'approvazione del parroco don Enrico Grassi e all'impegno di alcuni volenterosi adulti della parrocchia. Pochi anni dopo, la società acquista la definitiva denominazione A.S. VALERA, confermando il rosso e il bianco come colori sociali di tutte le divise. Da allora, la squadra di ragazzi, che si sono via via avvicendati nel corso del tempo, ha calcato il campo del vecchio oratorio situato in via Padova alla Valera fino all'inizio degli anni 2000. Precisamente nel 2002.</p>
            <p className="mt-1 text-justify text-base md:text-xl pt-1">Il parroco Don Roberto Gatti, credendo ciecamente nel valore educativo dello sport in oratorio,  grazie anche all'apertura del nuovo centro parrocchiale, stipula un patto con alcuni genitori: in cambio del completo sostegno morale, spirituale, materiale e strutturale, don Roberto chiese una semplice cosa con uno slogan che è rimasto impresso nella mente di tutti i dirigenti di allora: "5 squadre in 5 anni", con l'intento di ingrandire e ampliare il bacino d'utenza della società non più a una sola compagine, ma, nel corso del tempo, ad un numero sempre maggiore. Tale slogan è stato preso alla lettera da questi genitori che, grazie al loro impegno e alla collaborazione di altre persone di buona volontà, non solo sono riusciti a mantenere la promessa nei tempi stabiliti, ma hanno addirittura "esagerato" creando una struttura che ad oggi conta 7 squadre iscritte nei rispettivi campionati, a partire dai piccoli campioncini BIG SMALL di 6 anni fino alle squadre OPEN di adulti; quasi 150 sono gli atleti tesserati ai quali vanno aggiunti i Dirigenti e i Dirigenti arbitro. La crescita esponenziale della società non si è arrestata, anzi, ha avuto un nuovo slancio, con la costituzione della comunità pastorale "Maria Regina degli Apostoli" comprendente le due parrocchie del Comune di Varedo e con la nuova conduzione ecclesiastica. Grazie a questa nuova realtà anche la Parrocchia centrale dei Santi Pietro e Paolo ha aderito con entusiasmo a questo piccolo miracolo, mettendo a disposizione nuovi volontari e gli spazi di gioco per permettere ad altri bambini di poter usufruire di questo servizio sportivo e educativo offerto alla comunità con semplicità e gratuità.</p>
            <div className="mt-3 flex flex-col gap-3 lg:flex-row">
                <div className="lg:w-[47%]">
                    <img src={bambini1.src} className="lg:w-full shadow-2xl rounded"></img>
                </div>
                <div className="lg:w-[53%]">
                    <img src={trapattoni.src} className="lg:w-full shadow-2xl rounded"></img>
                </div>
            </div>
        </div>
    )
}
export type Squadra = {
   _id: string,
   nome: string,
   nomeLink: string,
   categoria: string,
   campionato: string,
   girone: string,
   linkGirone: string,
   anno: string,
   giocatori: Giocatore[],
   responsabile: string,
   partita: string,
   allenamenti: string,
   linkImmagine: string,
}

export type Giocatore = {
   _id: string,
   nome: string,
   cognome: string,
   ruolo: string,
   numero: string,
   linkImmagine: string,
   dataDiNascita: string,
}

export type News = {
   _id: string,
   titolo: string,
   sottotitolo: string,
   testo: string,
   linkImmagine: string,
   data: string,
   autore: string,
}

export type Response = {
   status: boolean,
   message: string,
   result: any
}
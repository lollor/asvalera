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
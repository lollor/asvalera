type BaseObject = {
   _createdAt: Date;
   _updatedAt: Date;
   _id: string;
   _rev: string;
   _type: string;
}

type Slug = {
   _type: string,
   current: string,
}

export interface Squadra extends BaseObject {
   nome: string,
   slug: Slug,
   categoria: string,
   campionato: string,
   girone: string,
   linkGirone: string,
   anno: string,
   giocatori: Giocatore[],
   responsabile: string,
   partita: string,
   allenamenti: string,
   immagine: any,
}

export type Giocatore = {
   nome: string,
   cognome: string,
   ruolo: string,
   numero: string,
   immagine: string,
   dataDiNascita: Date,
}

export interface Post extends BaseObject {
   author: string,
   mainImage: any,
   publishedAt: Date,
   slug: Slug,
   title: string,
   body: any,
   visible: boolean,
}

export type Response = {
   status: boolean,
   message: string,
   result: any
}
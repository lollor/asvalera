import {defineField, defineType} from 'sanity'

export default defineType({
   name: 'giocatore',
   title: 'Giocatore',
   type: 'document',
   fields: [
      defineField({
         name: 'nome',
         title: 'Nome',
         type: 'string',
      }),
      defineField({
         name: 'cognome',
         title: 'Cognome',
         type: 'string',
      }),
      defineField({
         name: 'squadra',
         title: 'Squadra',
         type: 'reference',
         to: {type: 'squadra'},
      }),
      defineField({
         name: 'ruolo',
         title: 'Ruolo',
         type: 'string',
      }),
      defineField({
         name: 'numero',
         title: 'Numero',
         type: 'string',
      }),
      defineField({
         name: 'immagine',
         title: 'Immagine',
         type: 'image',
         options: {
            hotspot: true,
         },
      }),
      defineField({
         name: 'dataDiNascita',
         title: 'Data di nascita',
         type: 'date',
      }),
   ]
})
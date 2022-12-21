import {defineField, defineType} from 'sanity'

export default defineType({
   name: 'squadra',
   title: 'Squadra',
   type: 'document',
   fields: [
      defineField({
         name: 'nome',
         title: 'Nome',
         type: 'string',
      }),
      defineField({
         name: 'slug',
         title: 'Slug',
         type: 'slug',
         options: {
            source: 'nome',
            maxLength: 96,
         },
      }),
      defineField({
         name: 'categoria',
         title: 'Categoria',
         type: 'string',
      }),
      defineField({
         name: 'campionato',
         title: 'Campionato',
         type: 'string',
      }),
      defineField({
         name: 'girone',
         title: 'Girone',
         type: 'string',
      }),
      defineField({
         name: 'linkGirone',
         title: 'Link Girone',
         type: 'url',
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
         name: 'anno',
         title: 'Anno',
         type: 'string',
      }),
      defineField({
         name: 'responsabile',
         title: 'Responsabile',
         type: 'string',
      }),
      defineField({
         name: 'allenamenti',
         title: 'Allenamenti',
         type: 'string',
      }),
      defineField({
         name: 'partita',
         title: 'Partita',
         type: 'string',
      }),
      
   ]
})

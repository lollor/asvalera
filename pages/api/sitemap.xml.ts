import { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { client } from "../../lib/sanity.client";
import { Squadra } from "../../typings";



function generateSiteMap(posts:any, squadre:Squadra[]) {
   return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <url>
       <loc>${process.env.NEXT_PUBLIC_URL}</loc>
     </url>
     <url>
       <loc>${process.env.NEXT_PUBLIC_URL}/progettoeducativo</loc>
     </url>
     <url>
       <loc>${process.env.NEXT_PUBLIC_URL}/squadre</loc>
     </url>
     <url>
       <loc>${process.env.NEXT_PUBLIC_URL}/iscrizioni</loc>
     </url>
     <url>
       <loc>${process.env.NEXT_PUBLIC_URL}/modulistica</loc>
     </url>
     <url>
       <loc>${process.env.NEXT_PUBLIC_URL}/eventi</loc>
     </url>
     <url>
       <loc>${process.env.NEXT_PUBLIC_URL}/organigramma</loc>
     </url>
     <url>
       <loc>${process.env.NEXT_PUBLIC_URL}/sponsor</loc>
     </url>
     <url>
       <loc>${process.env.NEXT_PUBLIC_URL}/contatti</loc>
     </url>
     ${posts.map((post:any) => {
           return `<url><loc>${process.env.NEXT_PUBLIC_URL+"/eventi/"+post.slug.current}</loc></url>`;
        })
        .join("")}
      ${squadre.map((squadra:Squadra) => {
            return `<url><loc>${process.env.NEXT_PUBLIC_URL+"/squadre/"+squadra.slug.current}</loc></url>`;
          })
          .join("")}
   </urlset>
 `;
   ``
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
   const posts = await client.fetch(groq`*[_type == "post"]`);
   const squadre: Squadra[] = await client.fetch(groq`*[_type == "squadra"]`);
   // We generate the XML sitemap with the posts data
   const sitemap = generateSiteMap(posts, squadre);

   res.setHeader("Content-Type", "text/xml");
   res.write(sitemap);
   res.end();
}

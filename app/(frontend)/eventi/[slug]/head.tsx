import { groq } from "next-sanity";
import { notFound } from "next/navigation";
import { client } from "../../../../lib/sanity.client";
import { Post } from "../../../../typings";

type PageProps = {
   params: {
      slug: string
   }
}

const fetchPost = async (slug: string) => {
   const query = groq`*[_type == "post" && slug.current == $slug][0]{
      title,
      body
   }`;
   const news : Post = await client.fetch(query, { slug });
   if (news === null) {
      return undefined;
   }
   return {titolo: news.title, corpo: news.body};
}

export default async function Head({ params: { slug } }: PageProps){
   const info = await fetchPost(slug);
   return (
      <>
         <title>{`A.S.D. Valera - ${info === undefined ? "":info.titolo}`}</title>
         <meta name="description" content={`A.S.D. Valera - ${info === undefined ? "":info.titolo}, ${info === undefined || info.corpo === null || info.corpo === undefined ? "":info.corpo.map(child => {
            return child.children.map(grandchild => {
               return grandchild.text;
            }
         ).join(" ")}).join(" ")
         }`} />
         <meta name="keywords" content={`Pagina evento ${info === undefined ? "":info.titolo} dell'ASD Valera, AS Valera`} />
      </>
   );
}
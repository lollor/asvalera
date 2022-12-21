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
      title
   }`;
   const news : Post = await client.fetch(query, { slug });
   if (news === null) {
      return "";
   }
   return news.title;
}

export default async function Head({ params: { slug } }: PageProps){
   const titolo = await fetchPost(slug);
   return (
      <>
         <title>{`A.S.D. Valera - ${titolo}`}</title>
         <meta name="description" content={`A.S.D. Valera - ${titolo}`} />
      </>
   );
}
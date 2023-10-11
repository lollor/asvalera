import { groq } from "next-sanity";
import { notFound } from "next/navigation"
import { client } from "../../../../lib/sanity.client";
import { Post } from "../../../../typings";
import Image from "next/image";
import { urlFor } from "../../../../lib/urlFor";
import { PortableText } from "@portabletext/react"
import { RichTextComponents } from "../../../../components/RichTextComponents";
import type { Metadata } from "next";

export const revalidate = 60;

type PageProps = {
   params: {
      slug: string
   }
}

export async function generateMetadata({params }: PageProps): Promise<Metadata> {
   const post = await fetchPost(params.slug);

   return {
      title: `${post.title}`,
      robots: "index, follow",
      authors: {
         name: "A.S.D. Valera",
      },
      description: `A.S.D. Valera - ${post.title}`,
      keywords: `Pagina evento ${post.title} dell'ASD Valera, AS Valera`
   };
}

const fetchPost = async (slug: string) => {
   const query = groq`*[_type == "post" && slug.current == $slug][0]{
      ...
   }`;
   const post : Post = await client.fetch(query, { slug });
   if (post === null) {
      return notFound();
   }
   return post;
}

export default async function page({ params: { slug } }: PageProps) {
   const post = await fetchPost(slug);
   return (
      <article className="sezione">
         <h1 className="text-[32px] md:text-[38px] text-red-500 font-bold">{post.title}</h1>
         {/* <p className="text-[14px] lg:text-[16px] text-slate-500">Scritto il {new Date(post.publishedAt).toLocaleDateString('it-IT')} {post.author ? "da "+post.author : ""}</p> */}
         <div className="relative w-full xl:max-w-[850px] xl:w-[850px] mx-auto my-[15px] md:my-[30px] h-[200px] md:h-[300px] lg:h-[400px] xl:h-[500px]">
            <Image src={urlFor(post.mainImage).url()} className="object-cover object-center drop-shadow-lg rounded" fill alt={post.title} />
         </div>
         <section>
            <PortableText value={post.body} components={RichTextComponents}/>
         </section>
      </article>
   )
}

export async function generateStaticParams(){
   const query = groq`*[_type == "post"]{slug}`;
   const squadre: Post[] = await client.fetch(query);
   return squadre.map(post => ({slug: post.slug.current } ));
}
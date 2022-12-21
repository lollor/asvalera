import Image from "next/image";
import { urlFor } from "../lib/urlFor";
import Link from "next/link";

export const RichTextComponents = {
   types: {
      image: ({ value }: any) => {
         return (
            <div className="relative w-full xl:w-[700px] mx-auto my-[15px] md:my-[30px] h-[200px] md:h-[300px] lg:h-[400px] xl:h-[500px]">
               <Image src={urlFor(value).url()} className="drop-shadow-lg rounded" fill alt={"Post Image"} />
            </div>
         )
      },
   },
   list: {
      bullet: ({ children }: any) => {
         return <ul className="list-disc ml-10 py-2 md:py-4 space-y-2">{children}</ul>
      },
      number: ({ children }: any) => {
         return <ol className="list-decimal ml-10 py-2 md:py-4 mt-lg space-y-2">{children}</ol>
      },
   },
   block: {
      h1: ({ children }: any) => {
         return <h1 className="md:text-4xl text-[32px] md:py-6 py-3 font-semibold">{children}</h1>
      },
      h2: ({ children }: any) => {
         return <h2 className="md:text-3xl text-[26px] md:py-6 py-3 font-semibold">{children}</h2>
      },
      h3: ({ children }: any) => {
         return <h3 className="md:text-2xl text-[20px] md:py-6 py-3 font-semibold">{children}</h3>
      },
      h4: ({ children }: any) => {
         return <h4 className="md:text-xl text-[16px] md:py-6 py-3 font-semibold">{children}</h4>
      },
      blockquote: ({ children }: any) => {
         return <blockquote className="border-l-4 border-gray-500 pl-5 py-5 my-5 italic">{children}</blockquote>
      },
   },
   marks: {
      link: ({ children, value }: any) => {
         const rel = !value.href.startsWith("/") ? "noopener noreferrer" : undefined;
         return <Link href={value.href} rel={rel} className="underline cursor-pointer">{children}</Link>
      }
   }
}
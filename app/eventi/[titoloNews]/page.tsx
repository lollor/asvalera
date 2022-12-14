import { notFound } from "next/navigation"
import { getNewsByIdOrTitle } from "../../../database/model"

type PageProps = {
   params: {
      titoloNews: string
   }
}

const fetchNews = async (titoloNews: string) => {
   const news = await getNewsByIdOrTitle(titoloNews);
   if (news === undefined) {
      return notFound();
   }
   return news;
}

export default async function page({ params: { titoloNews } }: PageProps) {
   const news = await fetchNews(titoloNews);
   return (
      <div className="sezione">
         <div className="lg:flex gap-6 hidden">
            <div className="lg:w-1/2">
               <h1 className="text-[32px] text-red-500 font-bold">{news.titolo}</h1>
               <p className="text-[14px] lg:text-[16px] text-slate-500">Scritta il {news.data} da {news.autore}</p>
               <p>{news.testo}</p>
            </div>
            <div className="lg:my-6 lg:w-1/2 my-4">
               <img src={news.linkImmagine} alt={news.titolo} className="w-full xl:w-[780px] rounded object-cover shadow-2xl " />
            </div>
         </div>
         <div className="lg:hidden">
            <h1 className="text-[32px] text-red-500 font-bold">{news.titolo}</h1>
            <p className="text-[14px] lg:text-[16px] text-slate-500">Scritta il {news.data} da {news.autore}</p>
            <div className="my-4">
               <img src={news.linkImmagine} alt={news.titolo} className="w-3/4 mx-auto rounded object-cover shadow-2xl " />
            </div>
            <p>{news.testo}</p>
         </div>
      </div>
   )
}
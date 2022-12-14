import { Squadra } from "../../../typings";
import {getNewsByIdOrTitle, getSquadra} from "../../../database/model";
import { notFound } from "next/navigation";

type PageProps = {
   params: {
      titoloNews: string
   }
}

const fetchNews = async (titoloNews: string) => {
   const news = await getNewsByIdOrTitle(titoloNews);
   if (news === undefined) {
      return "News non trovata";
   }
   return news.titolo;
}

export default async function Head({ params: { titoloNews } }: PageProps){
   const titolo = await fetchNews(titoloNews);
   return (
      <>
         <title>{`A.S.D. Valera - ${titolo}`}</title>
         <meta name="description" content={`A.S.D. Valera - ${titolo}`} />
      </>
   );
}
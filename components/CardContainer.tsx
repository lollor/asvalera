import React, { ReactNode } from "react"
import { getNews } from "../database/model"
import Card from "./Card"
import "./CardContainer.css"

const fetchNews = async () => {
    const news = await getNews();
    if (news === undefined) {
        return [];
    }
    return news;
}

export default async function CardContainer() {
    const news = await fetchNews();
    return (
        <div className="card-container">
            {
                news.map((newsItem, index) => {
                    return (
                        <Card img={newsItem.linkImmagine} title={newsItem.titolo} added_date={newsItem.data} horizontal={true}/>
                    )
                })
            }
            <Card img={"/files/festa-natale.jpg"} title={"Festa di natale"} added_date={"29/11/2022"} />
            <Card img={"/files/bambini1.jpg"} title={"Festa di natale"} added_date={"29/11/2022"} />
            <Card img={"/files/trapattoni.jpg"} title={"Festa di natale"} added_date={"29/11/2022"} />
        </div>
    )
}
import { groq } from "next-sanity"
import React, { ReactNode } from "react"
import { client } from "../lib/sanity.client"
import { urlFor } from "../lib/urlFor"
import { Post } from "../typings"
import Card from "./Card"
import "./CardContainer.css"
import ClientSideRoute from "./ClientSideRoute"

const fetchPost = async () => {
    const query = groq`*[_type == "post"]|order(publishedAt desc){
        title,
        mainImage,
        publishedAt,
        visible,
        slug
    }`;
    const posts: Post[] = await client.fetch(query);
    if (posts === undefined || posts === null || posts.length === 0) {
        return [];
    }
    return posts;
}

export default async function CardContainer({ maxLength}: { maxLength?: number}) {
    const news = await fetchPost();
    return (
        <div className="card-container">
            {
                news.map((post, index) => {
                    if (maxLength !== undefined && index >= maxLength)
                        return <></>
                    if (post.visible === false)
                        return <></>
                    return (
                        <ClientSideRoute route={`/eventi/${post.slug.current}`} key={index}>
                            <Card img={urlFor(post.mainImage).url()} title={post.title} added_date={post.publishedAt}/>
                        </ClientSideRoute>
                    )
                })
            }
            {/*<Card img={"/files/festa-natale.jpg"} title={"Festa di natale"} added_date={"29/11/2022"} />
             <Card img={"/files/bambini1.jpg"} title={"Festa di natale"} added_date={"29/11/2022"} />
            <Card img={"/files/trapattoni.jpg"} title={"Festa di natale"} added_date={"29/11/2022"} /> */}
        </div>
    )
}
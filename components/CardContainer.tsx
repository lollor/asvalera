import React, { ReactNode } from "react"
import Card from "./Card"
import "./CardContainer.css"

export default function CardContainer() {
    return (
        <div className="card-container">
            {/* <Card img={"/files/torneo.jpg"} title={"VIII Torneo"} />
            <Card img={"/files/openday.jpg"} title={"Open day"} />
            <Card img={"/files/torneo.jpg"} title={"VIII Torneo"} /> */}
            <Card img={"/files/festa-natale.jpg"} title={"Festa di natale"} added_date={new Date().toLocaleDateString()} horizontal={true} classes={"sm:col-start-1 lg:col-start-2"}/>
        </div>
    )
}
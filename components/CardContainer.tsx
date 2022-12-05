import React, { ReactNode } from "react"
import Card from "./Card"
import "./CardContainer.css"

export default function CardContainer() {
    return (
        <div className="card-container">
            {/* <Card img={"/files/torneo.jpg"} title={"VIII Torneo"} added_date={"29/11/2022"}/>
            <Card img={"/files/openday.jpg"} title={"Open day"} added_date={"29/11/2022"}/>
            <Card img={"/files/torneo.jpg"} title={"VIII Torneo"} added_date={"29/11/2022"}/> */}
            <Card img={"/files/festa-natale.jpg"} title={"Festa di natale"} added_date={"29/11/2022"} horizontal={true} classes={"sm:col-start-1 lg:col-start-2"}/>
        </div>
    )
}
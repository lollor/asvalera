"use client";

import "./Navbar.css"
import Link from "next/link"

const openNav = () => {
    document.getElementById("navbarMenu").style.width = "100%"
}
const closeNav = () => {
    document.getElementById("navbarMenu").style.width = "0%"
}

export default function Navbar() {
    const links = [
        {
            name:"HOME",
            link:"/",
            classes: "font-bold"
        },
        {
            name:"Chi siamo",
            link:"/chisiamo"
        },
        {
            name:"Progetto educativo",
            link:"/progettoeducativo"
        },
        {
            name:"Stagione sportiva 2024/25",
            link:"/squadre"
        },
        {
            name:"Iscrizioni",
            link:"/iscrizioni"
        },
        {
            name:"Modulistica e Regolamenti",
            link:"/modulistica",
        },
        {
            name:"Eventi",
            link:"/eventi",
        },
        {
            name:"Organigramma societario",
            link:"/organigramma"
        },
        {
            name:"Sponsor",
            link:"/sponsor",
        },
        {
            name:"Contatti",
            link:"/contatti"
        }
        ]
    return (
        <>
            <div className={"mainNavbar"}>
                <div>
                    <Link href={"/"}> 
                        <img className="h-[40px] md:h-[80px]" src="/files/logo.png"></img>
                    </Link>
                </div>
                <div className="lg:flex gap-7 hidden">
                    {links.map((el,index) => {
                        return(<Link key={index} href={el.link} className={el.classes+" hover:text-red-500 transition-all duration-300"}>{el.name}</Link>)
                    })}
                </div>
                <span className="text-lg cursor-pointer lg:hidden" onClick={openNav}>&#9776;</span>
            </div>
            <div id="navbarMenu" className={"overlay"}>
                <a className={"closebtn"} onClick={closeNav}>&times;</a>
                <div className={"overlaycontent"}>
                    {links.map((el,index) => {
                        return(<Link key={index} href={el.link} onClick={closeNav} className={el.classes}>{el.name}</Link>)
                    })}
                </div>
            </div>
        </>
    )
}
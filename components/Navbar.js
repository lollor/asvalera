"use client";

import "./Navbar.css"
import Link from "next/link"
import Logo from "../public/files/logo.png"
import Image from "next/image";

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
            name:"Tutela dei minori",
            link:"/tuteladeiminori",
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
                    <Link href={"/"} className="block relative h-[40px] md:h-[80px] aspect-[659/524]">
                        <Image fill src={Logo} alt="logo asdvalera" />
                        <span className="sr-only">ASD Valera</span>
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
                <span className={"closebtn"} onClick={closeNav}>&times;</span>
                <div className={"overlaycontent"}>
                    {links.map((el,index) => {
                        return(<Link key={index} href={el.link} onClick={closeNav} className={el.classes}>{el.name}</Link>)
                    })}
                </div>
            </div>
        </>
    )
}
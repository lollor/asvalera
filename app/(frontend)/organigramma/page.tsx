import React from "react"
import organigramma from "../../../public/files/organigramma.png"

export default function Page(){
    return (
        <div className="sezione">
            <h1 className="titoletto text-red-500 lg:text-5xl pb-3 italic">ORGANIGRAMMA SOCIETARIO<br /> STAGIONE SPORTIVA 2022/2023</h1>
            <img src={organigramma.src} className="mx-auto my-4 md:my-8"></img>
            <a target="_blank" href={"/files/organigramma2223.pdf"} className="mx-auto pb-2 text-base lg:text-xl font-bold underline cursor-pointer text-blue-400">Scarica file</a>
        </div>
    )
}
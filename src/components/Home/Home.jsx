import React from 'react'
import "./Home.scss"
// import { useTranslation } from "react-i18next"
import Navbar from "./../Navbar/Navbar"

export default function Home() {
    // const [t] = useTranslation("global")

    return (
        <div>
            <div className="home">
                <Navbar />
                <h1>TOUR INTERACTIVO</h1>
                <h2>REALE ARENA</h2>
                <button>ENTRADAS</button>
            </div>
        </div>
    )
}

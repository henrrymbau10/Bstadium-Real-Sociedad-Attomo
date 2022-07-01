import React from 'react'
import "./Home.scss"
// import { useTranslation } from "react-i18next"
import Navbar from "./../Navbar/Navbar"
import videoDesk from "../../Assets/Videos/VIDEO final.mp4"
import videoMob from "../../Assets/Videos/VIDEO VERTICAL_low.mp4"

export default function Home() {
    // const [t] = useTranslation("global")

    return (
        <div>
            <div className="home">
                <Navbar />
                <video autoPlay loop muted className="videodesk"><source src={videoDesk} type="video/mp4" /></video>
                <video autoPlay loop muted className="videomob"><source src={videoMob} type="video/mp4" /></video>
                <h1>TOUR INTERACTIVO</h1>
                <h2>REALE ARENA</h2>
                <button>ENTRADAS</button>
            </div>
        </div>
    )
}

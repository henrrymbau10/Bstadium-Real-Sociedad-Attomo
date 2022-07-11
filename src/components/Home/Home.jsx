import React from 'react'
import "./Home.scss"
import { useTranslation } from "react-i18next"
import Navbar from "./../Navbar/Navbar"
import videoDesk from "../../Assets/Videos/VIDEO final.mp4"

export default function Home() {
    const [t] = useTranslation("global")

    return (
        <div>
            <div className="home">
                <Navbar />
                <video autoPlay playsInline loop muted className="videodesk"><source src={videoDesk} type="video/mp4" /></video>
                <h1>{t("home.tour")}</h1>
                <h2>{t("home.arena")}</h2>
                <button>{t("home.button")}</button>
            </div>
        </div>
    )
}

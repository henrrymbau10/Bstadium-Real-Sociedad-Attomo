import React from 'react'
import "./Main.scss"
import gafas from "../../Assets/Images/Desktop/GafasSVG.svg"
import copa from "../../Assets/Images/Desktop/Copas.svg"
import selfie from "../../Assets/Images/Desktop/SelfieSVG.svg"
import { useTranslation } from "react-i18next"


export default function Main() {
    const [t] = useTranslation("global")

    return (
        <div className="main-container">
            <div className="main-first">
                <h1>{t("main.whatis")}</h1>
                <p>{t("main.whatis-text")}</p>
                <p>{t("main.whatis-text2")}</p>
            </div>
            <div className="main-second">
                <h1>{t("main.included")}</h1>
                <div className="main-second-text">
                    <img src={copa} alt="copa" />
                    <h2>{t("main.included-subtitle")}</h2>
                </div>
                <p>{t("main.included-text")}</p>
            </div>
            <div className="main-third">
                <h1>{t("main.experience")}</h1>
                <img src={gafas} alt="gafas" />
                <p>{t("main.experience-text")}</p>
            </div>
            <div className="main-fourth">
                <div className="main-fourth-text">
                    <h2>{t("main.photo")}</h2>
                    <img src={selfie} alt="" />
                </div>
                <p>{t("main.photo-text")}</p>
            </div>
        </div>
    )
}

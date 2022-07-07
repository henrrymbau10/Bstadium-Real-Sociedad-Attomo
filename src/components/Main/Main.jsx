import React from 'react'
import "./Main.scss"
import gafas from "../../Assets/Images/Desktop/GafasSVG.svg"
import copa from "../../Assets/Images/Desktop/Copas.svg"
import selfie from "../../Assets/Images/Desktop/SelfieSVG.svg"
import { useTranslation } from "react-i18next"
import { motion } from "framer-motion";


const textAnimateR = {
    offscreen: { x: -100, opacity: 0 },
    onscreen: {
        x: 0,
        opacity: 1,
        transition: {
            type: "spring",
            bounce: 0.4,
            duration: 2.5
        }
    }

}



export default function Main() {

    const [t] = useTranslation("global")

    return (
        <div className="main-container">
            <div className="main-first">
                <motion.h1
                    initial={"offscreen"}
                    whileInView={"onscreen"}
                    viewport={{ once: false, amount: 0.5 }}
                    variants={textAnimateR}>{t("main.whatis")}</motion.h1>
                <motion.p
                    initial={"offscreen"}
                    whileInView={"onscreen"}
                    viewport={{ once: false, amount: 0.5 }}
                    variants={textAnimateR}>{t("main.whatis-text")}</motion.p>
                <motion.p
                    initial={"offscreen"}
                    whileInView={"onscreen"}
                    viewport={{ once: false, amount: 0.5 }}
                    variants={textAnimateR}>{t("main.whatis-text2")}</motion.p>
            </div>
            <div className="main-second">
                <motion.h1
                    initial={"offscreen"}
                    whileInView={"onscreen"}
                    viewport={{ once: false, amount: 0.5 }}
                    variants={textAnimateR}>{t("main.included")}</motion.h1>
                <div className="main-second-text">
                    <motion.img
                        initial={"offscreen"}
                        whileInView={"onscreen"}
                        viewport={{ once: false, amount: 0.5 }}
                        variants={textAnimateR}
                        src={copa} alt="copa" />
                    <motion.h2
                        initial={"offscreen"}
                        whileInView={"onscreen"}
                        viewport={{ once: false, amount: 0.5 }}
                        variants={textAnimateR}>{t("main.included-subtitle")}</motion.h2>
                </div>
                <motion.p
                    initial={"offscreen"}
                    whileInView={"onscreen"}
                    viewport={{ once: false, amount: 0.5 }}
                    variants={textAnimateR}>{t("main.included-text")}</motion.p>
            </div>
            <div className="main-third">
                <motion.h1
                    initial={"offscreen"}
                    whileInView={"onscreen"}
                    viewport={{ once: false, amount: 0.5 }}
                    variants={textAnimateR}>{t("main.experience")}</motion.h1>
                <motion.img
                    initial={"offscreen"}
                    whileInView={"onscreen"}
                    viewport={{ once: false, amount: 0.5 }}
                    variants={textAnimateR} src={gafas} alt="gafas" />
                <motion.p
                    initial={"offscreen"}
                    whileInView={"onscreen"}
                    viewport={{ once: false, amount: 0.5 }}
                    variants={textAnimateR}>{t("main.experience-text")}</motion.p>
            </div>
            <div className="main-fourth">
                <div className="main-fourth-text">
                    <motion.h2
                        initial={"offscreen"}
                        whileInView={"onscreen"}
                        viewport={{ once: false, amount: 0.5 }}
                        variants={textAnimateR}>{t("main.photo")}</motion.h2>
                    <motion.img
                        initial={"offscreen"}
                        whileInView={"onscreen"}
                        viewport={{ once: false, amount: 0.5 }}
                        variants={textAnimateR} src={selfie} alt="" />
                </div>
                <motion.p
                    initial={"offscreen"}
                    whileInView={"onscreen"}
                    viewport={{ once: false, amount: 0.5 }}
                    variants={textAnimateR}>{t("main.photo-text")}</motion.p>
            </div>
        </div>
    )
}

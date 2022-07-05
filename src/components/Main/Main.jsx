import React, { useEffect } from 'react'
import "./Main.scss"
import gafas from "../../Assets/Images/Desktop/GafasSVG.svg"
import copa from "../../Assets/Images/Desktop/Copas.svg"
import selfie from "../../Assets/Images/Desktop/SelfieSVG.svg"
import { useTranslation } from "react-i18next"
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const boxVariant = {
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
    hidden: { opacity: 0, scale: 0 }
};


export default function Main() {

    const control = useAnimation();
    const [ref, inView] = useInView();

    const [t] = useTranslation("global")

    useEffect(() => {
        if (inView) {
            control.start("visible");
        } else {
            control.start("hidden");
        }
    }, [control, inView]);

    return (
        <div className="main-container">
            <div className="main-first">
                <motion.h1
                    className="box"
                    ref={ref}
                    variants={boxVariant}
                    initial="hidden"
                    animate={control}>{t("main.whatis")}</motion.h1>
                <motion.p
                    className="box"
                    ref={ref}
                    variants={boxVariant}
                    initial="hidden"
                    animate={control}>{t("main.whatis-text")}</motion.p>
                <motion.p
                    className="box"
                    ref={ref}
                    variants={boxVariant}
                    initial="hidden"
                    animate={control}>{t("main.whatis-text2")}</motion.p>
            </div>
            <div className="main-second">
                <motion.h1
                    className="box2"
                    ref={ref}
                    variants={boxVariant}
                    initial="hidden"
                    animate={control}>{t("main.included")}</motion.h1>
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

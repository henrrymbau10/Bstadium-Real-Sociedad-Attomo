import React from 'react'
import "./Main.scss"
import gafas from "../../Assets/Images/Desktop/GafasSVG.svg"
import copa from "../../Assets/Images/Desktop/Copas.svg"
import selfie from "../../Assets/Images/Desktop/SelfieSVG.svg"
import { useTranslation } from "react-i18next"
import { motion } from "framer-motion";
// import { useInView } from "react-intersection-observer";

// const boxVariant = {
//     visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
//     hidden: { opacity: 0, scale: 0 }
// };

const textAnimate = {
    offscreen: { y: 100, opacity: 0 },
    onscreen: {
        y: 0,
        opacity: 1,
        transition: {
            type: "spring",
            bounce: 0.4,
            duration: 1
        }
    }

}


export default function Main() {

    // const control = useAnimation();
    // const [ref, inView] = useInView();

    const [t] = useTranslation("global")

    // useEffect(() => {
    //     if (inView) {
    //         control.start("visible");
    //     } else {
    //         control.start("hidden");
    //     }
    // }, [control, inView]);

    return (
        <div className="main-container">
            <div className="main-first">
                <motion.h1
                    initial={"offscreen"}
                    whileInView={"onscreen"}
                    viewport={{ once: false, amount: 0.5 }}
                    variants={textAnimate}>{t("main.whatis")}</motion.h1>
                <motion.p
                    initial={"offscreen"}
                    whileInView={"onscreen"}
                    viewport={{ once: false, amount: 0.5 }}
                    variants={textAnimate}>{t("main.whatis-text")}</motion.p>
                <motion.p
                    initial={"offscreen"}
                    whileInView={"onscreen"}
                    viewport={{ once: false, amount: 0.5 }}
                    variants={textAnimate}>{t("main.whatis-text2")}</motion.p>
            </div>
            <div className="main-second">
                <motion.h1
                    initial={"offscreen"}
                    whileInView={"onscreen"}
                    viewport={{ once: false, amount: 0.5 }}
                    variants={textAnimate}>{t("main.included")}</motion.h1>
                <div className="main-second-text">
                    <motion.img
                        initial={"offscreen"}
                        whileInView={"onscreen"}
                        viewport={{ once: false, amount: 0.5 }}
                        variants={textAnimate}
                        src={copa} alt="copa" />
                    <motion.h2
                        initial={"offscreen"}
                        whileInView={"onscreen"}
                        viewport={{ once: false, amount: 0.5 }}
                        variants={textAnimate}>{t("main.included-subtitle")}</motion.h2>
                </div>
                <motion.p
                    initial={"offscreen"}
                    whileInView={"onscreen"}
                    viewport={{ once: false, amount: 0.5 }}
                    variants={textAnimate}>{t("main.included-text")}</motion.p>
            </div>
            <div className="main-third">
                <motion.h1
                    initial={"offscreen"}
                    whileInView={"onscreen"}
                    viewport={{ once: false, amount: 0.5 }}
                    variants={textAnimate}>{t("main.experience")}</motion.h1>
                <motion.img
                    initial={"offscreen"}
                    whileInView={"onscreen"}
                    viewport={{ once: false, amount: 0.5 }}
                    variants={textAnimate} src={gafas} alt="gafas" />
                <motion.p
                    initial={"offscreen"}
                    whileInView={"onscreen"}
                    viewport={{ once: false, amount: 0.5 }}
                    variants={textAnimate}>{t("main.experience-text")}</motion.p>
            </div>
            <div className="main-fourth">
                <div className="main-fourth-text">
                    <motion.h2
                        initial={"offscreen"}
                        whileInView={"onscreen"}
                        viewport={{ once: false, amount: 0.5 }}
                        variants={textAnimate}>{t("main.photo")}</motion.h2>
                    <motion.img
                        initial={"offscreen"}
                        whileInView={"onscreen"}
                        viewport={{ once: false, amount: 0.5 }}
                        variants={textAnimate} src={selfie} alt="" />
                </div>
                <motion.p
                    initial={"offscreen"}
                    whileInView={"onscreen"}
                    viewport={{ once: false, amount: 0.5 }}
                    variants={textAnimate}>{t("main.photo-text")}</motion.p>
            </div>
        </div>
    )
}

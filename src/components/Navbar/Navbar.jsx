import React, { useState } from 'react'
import "./Navbar.scss"
import logo from "../../Assets/Images/Desktop/image 1.svg"
import { useTranslation } from "react-i18next"
import { Menu, MobileIcon, MobileIcon2 } from './NavbarItem';
import { FaBars, FaTimes } from 'react-icons/fa';


function Navbar() {
    const [t, i18n] = useTranslation("global")
    const [showMobileMenu, setShowMobileMenu] = useState(false);

    const scrollTo = (nodeSelector) => {
        const domNode = document.querySelector(nodeSelector)

        window.scrollTo?.({ top: domNode.offsetTop, behavior: 'smooth' });
    }


    return (
        <div className="navbar">
            <div className="navbar-mobile">
                <MobileIcon onClick={() => setShowMobileMenu(!showMobileMenu)}>
                    <FaBars />
                </MobileIcon>

                <Menu open={showMobileMenu}>
                    <MobileIcon2 onClick={() => setShowMobileMenu(!showMobileMenu)}>
                        <FaTimes />
                    </MobileIcon2>
                    <p onClick={() => { scrollTo(('.main-first')); setShowMobileMenu(!showMobileMenu) }}>{t("navbar.whatis")}</p>
                    <p onClick={() => { scrollTo(('.main-second')); setShowMobileMenu(!showMobileMenu) }}>{t("navbar.included")}</p>
                    <p onClick={() => { scrollTo(('.informacion-title')); setShowMobileMenu(!showMobileMenu) }}>{t("navbar.info")}</p>
                    <p className="p-menu" onClick={() => { scrollTo(('#entradas')); setShowMobileMenu(!showMobileMenu) }}>{t("navbar.tickets")}</p>
                </Menu>
            </div>

            <div className="navbar-logo">
                <img src={logo} alt="logoBS" />
            </div>
            <div className="navbar-list">
                <p onClick={() => scrollTo('.main-first')}>{t("navbar.whatis")}</p>
                <p onClick={() => scrollTo('.main-second')}>{t("navbar.included")}</p>
                <p onClick={() => scrollTo('.informacion-container')}>{t("navbar.info")}</p>
                <p onClick={() => scrollTo('#entradas')}>{t("navbar.tickets")}</p>
            </div>
            <div className="navbar-language">
                <p onClick={() => i18n.changeLanguage("es")}><b>CAS</b></p>
                <p>|</p>
                <p onClick={() => i18n.changeLanguage("eus")}>EUS</p>
                <p>|</p>
                <p onClick={() => i18n.changeLanguage("en")}>ENG</p>
            </div>
        </div>
    )
}

export default Navbar



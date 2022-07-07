import React, { useState } from 'react'
import "./Navbar.scss"
import logo from "../../Assets/Images/Desktop/image 1.svg"
import { useTranslation } from "react-i18next"
// import { VscChromeClose } from 'react-icons/vsc';
import { Menu, MobileIcon, MobileIcon2 } from './NavbarItem';
// import { GiHamburgerMenu } from 'react-icons/gi';
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
                    <p onClick={() => { scrollTo(('#textoId')); setShowMobileMenu(!showMobileMenu) }}>{t("navbar.info")}</p>
                    <p onClick={() => { scrollTo(('#entradas')); setShowMobileMenu(!showMobileMenu) }}>{t("navbar.tickets")}</p>
                </Menu>
            </div>

            <div className="navbar-logo">
                <img src={logo} alt="logoBS" />
            </div>
            <div className="navbar-list">
                <p onClick={() => scrollTo('.main-first')}>{t("navbar.whatis")}</p>
                <p onClick={() => scrollTo('.main-second')}>{t("navbar.included")}</p>
                <p onClick={() => scrollTo('.informacion-text-clock')}>{t("navbar.info")}</p>
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

// export const MobileIcon = styled.div`
//   display: none;

//   @media screen and (min-width: 300px) and (max-width: 1199px) {
//     display: flex;
//     align-items: center;
//     cursor: pointer;
//     height: 100%;

//     svg {
//       color: white;
//       margin-left: 1rem;
//       width: 25px;
//     }
//   }
// `;

// export const Menu = styled.ul`
//   @media screen and (min-width: 300px) and (max-width: 1199px) {
//     background-color: import styled from "styled-components";
//     position: absolute;
//     top: 70px;
//     left: ${({ open }) => (open ? "0" : "-100%")}; //Import
//     width: 100%;
//     height: 40vh;
//     justify-content: center;
//     flex-direction: column;
//     align-items: center;
//     transition: 0.5s all ease;
//   }
// `;


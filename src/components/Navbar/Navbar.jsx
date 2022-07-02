import React, { useState } from 'react'
import "./Navbar.scss"
import logo from "../../Assets/Images/Desktop/image 1.svg"
// import { useTranslation } from "react-i18next"
import { VscChromeClose } from 'react-icons/vsc';
import { GiHamburgerMenu } from 'react-icons/gi';



function Navbar() {
    // const [t, i18n] = useTranslation("global")
    const [showMobileMenu, setShowMobileMenu] = useState(false);

    const scrollTo = (nodeSelector) => {
        const domNode = document.querySelector(nodeSelector)

        window.scrollTo?.({ top: domNode.offsetTop, behavior: 'smooth' });
    }


    return (
        <div className="navbar">
            <div className="navbar-mobile">
                {
                    showMobileMenu ?
                        <VscChromeClose onClick={() => setShowMobileMenu(!showMobileMenu)} />
                        : <GiHamburgerMenu onClick={() => setShowMobileMenu(!showMobileMenu)} />
                }
            </div>
            <div className="navbar-logo">
                <img src={logo} alt="logoBS" />
            </div>
            <div className="navbar-list">
                <p onClick={() => scrollTo('.main-desafio')}>¿Qué es?</p>
                <p onClick={() => scrollTo('.main-recorrido')}>¿Qué incluye?</p>
                <p onClick={() => scrollTo('.main-particion-title')}>Info Práctica</p>
                <p onClick={() => scrollTo('.main-disfrutaras')}>Entradas</p>
            </div>
            <div className="navbar-language">
                <p>CAS</p>
                <p>|</p>
                <p>EUS</p>
                <p>|</p>
                <p>ENG</p>
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


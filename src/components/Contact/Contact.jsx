import React from 'react'
import "./Contact.scss"
import escudo from "../../Assets/Images/Desktop/image 1.svg"
import bstadium from "../../Assets/Images/Desktop/Powered-Bstadium.svg"

export default function Contact() {
    return (
        <div class="footer-container">
            <div className="contacto">
                <h1>Contacto</h1>
                <p><b>Contacta con nosotros</b></p>
                <p>+34 618 45 36 90</p>
                <p>hola@bstadium.es</p>
            </div>
            <div className="disfruta">
                <h1>Descubre y disfruta del tour <b>Reale Arena</b></h1>
                <button>ENTRADAS</button>
                <img src={escudo} alt="escudo" />
                <div className="disfruta-bstadium">
                    <p>Powered by</p>
                    <img src={bstadium} alt="" />
                </div>
            </div>
        </div>
    )
}

import React from 'react'
import "./Information.scss"
import calendar from "../../Assets/Images/Desktop/CalendarSVG.svg"
import clock from "../../Assets/Images/Desktop/ClockSVG.svg"
import location from "../../Assets/Images/Desktop/LocationSVG.svg"
import menor from "../../Assets/Images/Desktop/MenorSVG.svg"
import language from "../../Assets/Images/Desktop/LanguageSVG.svg"
import declined from "../../Assets/Images/Desktop/DeclinedSVG.svg"
import custom from "../../Assets/Images/Desktop/PersonalizarSVG.svg"


export default function Information() {
    return (
        <div className="informacion-container">

            <div className='informacion-title'>
                <h1>Informacion practica</h1>
            </div>

            <div className="informacion-text">
                <div className="informacion-text-calendar">
                    <img src={calendar} alt="calendario" />
                    <p><b>Fecha y hora: </b></p>
                    <div>
                        <p>Jueves: <b>17:00h y 18:00h</b></p>
                        <p>Viernes: <b>17:00h, 18:00h y 19:00h</b></p>
                        <p>Jueves: <b>12:00h, 17:00h y 18:00h</b></p>
                    </div>
                </div>
            </div>
            <div className="informacion-text">
                <div className="informacion-text-clock">
                    <img src={clock} alt="clock" />
                    <p><b>Duracion: </b> 1 hora</p>
                </div>
            </div>
            <div className="informacion-text">
                <div className="informacion-text-location">
                    <img src={location} alt="location" />
                    <p><b>Lugar: </b></p>
                    <div>
                        <p>Reale Arena</p>
                        <p>Punto de encuentro: Puerta Hospitaly</p>
                    </div>
                </div>
            </div>
            <div className="informacion-text">
                <div className="informacion-text-menor">
                    <img src={menor} alt="menor" />
                    <p><b>Menores: </b></p>
                    <div>
                        <p>Acceso permitido a todos los públicos. Entrada</p>
                        <p>gratuita para menores de 5 años.</p>
                    </div>
                </div>
            </div>
            <div className="informacion-text">
                <div className="informacion-text-language">
                    <img src={language} alt="language" />
                    <p><b>Idiomas: </b></p>
                    <div>
                        <p>Euskera y Castellano | También disponible bajo</p>
                        <p> petición en ING,FRA, ALE...</p>
                    </div>
                </div>
            </div>
            <div className="informacion-text">
                <div className="informacion-text-declined">
                    <img src={declined} alt="declined" />
                    <p><b>Cancelacion: </b></p>
                    <div>
                        <p>Cancelación gratuita hasta 7 días antes</p>
                    </div>
                </div>
            </div>
            <div className="informacion-text">
                <div className="informacion-text-custom">
                    <img src={custom} alt="language" />
                    <p><b>Cancelacion: </b></p>
                    <div>
                        <p>Para personalizar tu experiencia (cumpleaños, </p>
                        <p>empresas, grupos grandes) contactad con  </p>
                        <p>hola@bstadium.es</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

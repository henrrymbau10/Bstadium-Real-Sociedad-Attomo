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
                <h1>Información práctica</h1>
            </div>
            <div className="informacion-text">
                <div className="informacion-text-calendar">
                    <img src={calendar} alt="calendario" />
                    <p><b>Fecha y hora: </b></p>
                    <div>
                        <p>martes: <b>17:00h y 18:00h</b> Viernes: <b>17:00h, 18:00h y 19:00h</b> Sábado: <b>12:00h, 17:00h y 18:00h</b></p>
                    </div>
                </div>
            </div>
            <div className="informacion-text">
                <div className="informacion-text-clock">
                    <img src={clock} alt="clock" />
                    <p><b>Duración: </b> 1 hora</p>
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
                        <p>Acceso permitido a todos los públicos. Entrada gratuita para menores de 5 años.</p>
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
                    <p><b>Cancelación: </b></p>
                    <div>
                        <p>Cancelación gratuita hasta 7 días antes</p>
                    </div>
                </div>
            </div>
            <div className="informacion-text">
                <div className="informacion-text-custom">
                    <img src={custom} alt="language" />
                    <p><b>Personalizar: </b></p>
                    <div>
                        <p>Para personalizar tu experiencia (cumpleaños, </p>
                        <p>empresas, grupos grandes) contactad con  </p>
                        <p>hola@bstadium.es</p>
                    </div>
                </div>
            </div>

            <div className="informacion-container-mobile">

                <div className="informacion-container-mobile-general">
                    <div className="mobile-general-icon-calendar">
                        <img src={calendar} alt="calendario" />
                    </div>
                    <div className="mobile-general-text">
                        <p><b>Fecha y hora:</b></p>
                        <p>Jueves: <b>17:00h y 18:00h</b></p>
                        <p>Viernes: <b>17:00h, 18:00h y 19:00</b></p>
                        <p>Sábado: <b>12:00h, 17:00h y 18:00h</b></p>
                    </div>
                </div>
                <div className="informacion-container-mobile-general">
                    <div className="mobile-general-icon-clock">
                        <img src={clock} alt="calendario" />
                    </div>
                    <div className="mobile-general-text">
                        <p><b>Duración:</b> 1 hora</p>
                    </div>
                </div>
                <div className="informacion-container-mobile-general">
                    <div className="mobile-general-icon-location">
                        <img src={location} alt="calendario" />
                    </div>
                    <div className="mobile-general-text">
                        <p><b>Lugar:</b> Reale Arena</p>
                        <p><b>Punto de encuentro:</b> Puerta</p>
                        <p>Hospitally</p>
                    </div>
                </div>
                <div className="informacion-container-mobile-general">
                    <div className="mobile-general-icon-menor">
                        <img src={menor} alt="calendario" />
                    </div>
                    <div className="mobile-general-text">
                        <p><b>Menores:</b> Acceso permitido a </p>
                        <p>todos los públicos. Entrada </p>
                        <p>gratuita para menores de </p>
                        <p>5 años.</p>
                    </div>
                </div>
                <div className="informacion-container-mobile-general">
                    <div className="mobile-general-icon-language">
                        <img src={language} alt="calendario" />
                    </div>
                    <div className="mobile-general-text">
                        <p><b>Idiomas:</b> Euskera y Castellano |</p>
                        <p>También disponible bajo</p>
                        <p>petición en ING, FRA, ALE...</p>
                    </div>
                </div>
                <div className="informacion-container-mobile-general">
                    <div className="mobile-general-icon-declined">
                        <img src={declined} alt="calendario" />
                    </div>
                    <div className="mobile-general-text">
                        <p><b>Cancelación:</b> Cancelación </p>
                        <p>gratuita hasta 7 días antes</p>
                    </div>
                </div>
                <div className="informacion-container-mobile-general">
                    <div className="mobile-general-icon-custom">
                        <img src={custom} alt="calendario" />
                    </div>
                    <div className="mobile-general-text">
                        <p><b>Personalizar:</b> Para personalizar</p>
                        <p> tu experiencia (cumpleaños, </p>
                        <p>empresas, gruposgrandes) </p>
                        <p>contactad con hola@bstadium.es</p>
                    </div>
                </div>

            </div>
        </div>


    )
}

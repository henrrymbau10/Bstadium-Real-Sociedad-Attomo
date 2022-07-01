import React from 'react'
import "./Main.scss"
import gafas from "../../Assets/Images/Desktop/GafasSVG.svg"
import copa from "../../Assets/Images/Desktop/CopaSVG.svg"
import selfie from "../../Assets/Images/Desktop/SelfieSVG.svg"

export default function Main() {
    return (
        <div className="main-container">
            <div className="main-first">
                <h1>¿Qué es?</h1>
                <p>Descubre el nuevo Reale Arena a través de una experiencia sorprendente en la que podrás visitar los lugares más exclusivos del estadio y conocer todos los secretos de la Real Sociedad de Fútbol. </p>
                <p>Una visita interactiva para todos los públicos en la que podrás interactuar y disfrutar de innovadores experiencias de Realidad Aumentada y Virtual.</p>
            </div>
            <div className="main-second">
                <h1>¿Qué incluye?</h1>
                <div className="main-second-text">
                    <img src={copa} alt="copa" />
                    <h2>LEVANTA LA COPA</h2>
                </div>
                <p>Siente toda la emoción de levantar la Copa del Rey ganada en 2020 por el club en una final épica y hazte una foto con ella y el espectacular estadio de fondo. </p>
            </div>
            <div className="main-third">
                <h1>EXPERIENCIA INMERSIVA 360º</h1>
                <img src={gafas} alt="gafas" />
                <p>A través de las gafas de realidad virtual más potentes del mercado, sumérgete en el emocionante ambiente de un partido de la Real Sociedad y emociónate con el cántico del himno por toda la afición en el estadio.  </p>
            </div>
            <div className="main-fourth">
                <div className="main-fourth-text">
                    <h2>FOTO CON LOS JUGADORES</h2>
                    <img src={selfie} alt="" />
                </div>
                <p>Elige entre 6 jugadores distintos para hacerte una foto con ellos en zona mixta, uno de los espacios más característicos y especiales del estadio.</p>
            </div>
        </div>
    )
}

import React from 'react'
import { ImgTemplate } from '../.././ImgTemplate/ImgTemplate'
import imgServices from '../../../../images/Icons/Maquuina.png'
import imgServicesTwo from '../../../../images/Icons/Pirncings.png'


export const Home_Services = ({srcImg}) => {
    return (
        <div className='Tattooists_Services'>
            <div className='Title_Services'><h1 className='titleMP4'>NUESTROS SERVICIOS</h1></div>

            <div className='Services' >
                <div className='Services_content'>
                    <a href="/infoTatuajes"><ImgTemplate srcImg={imgServices}/></a>
                    <h1>Tatuajes</h1>
                    <p>
                        En Style Tatto todos nuestros artistas tienen la gran habilidad artistica de plasmar 
                        el dibujo, retrato, o simbolo significativo que desees. Son trabajos de muchisima calidad. No te quedes sin el tuyo  
                    </p>
                    <a href="/infoTatuajes">
                        <button id='JupButtonN' className="learn-more">
                            <span className="circle" aria-hidden="true">
                            <span className="icon arrow"></span>
                            </span>
                            <span className="button-text">¿Ver mas?</span>
                        </button>
                    </a>
                </div>

                <div className='Services_content'>
                    <a href="/infoPiercings"><ImgTemplate srcImg={imgServicesTwo}/></a>
                    <h1>piercings</h1>
                    <p>Algunos de nuestros artitas tienen la capacidad de hacer perforaciones, 
                       cuentan con todos los instrumentos necesarios para la realizacion de esta
                       bellicima obra de arte en tu cuerpo, no te quedes sin tu piercing 
                    </p>
                    <a href="/infoPiercings">
                        <button id='JupButtonN' className="learn-more">
                            <span className="circle" aria-hidden="true">
                            <span className="icon arrow"></span>
                            </span>
                            <span className="button-text">¿Ver mas?</span>
                        </button>
                    </a>

                </div>
            </div>   
        </div>
    )
}
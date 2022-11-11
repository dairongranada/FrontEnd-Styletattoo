import React from 'react'
import { useState } from 'react'
import './Home_MainView.scss'
import img5 from '../../../../images/Tattos/portafolio9.jpg'
import gorroNavidad from '../../../../images/Icons/gorroNavidad.png'


export const Home_MainView = () => {

    const [user, setUser] = useState(JSON.parse(localStorage.getItem("usuario")));
    const [token, setToken] = useState(localStorage.getItem("token"));

    return (
        <>
            { (!! token ) && 
                <div className='contPrimary'>
                    <div className='HeadPresentationPt'>
                        <div className="contTextHead">
                            <div className="contTittleStyleT">  
                                <img className = "gorroNavidad" src={gorroNavidad} alt={gorroNavidad} />
                                <h2  style={{fontSize:"80px"}}>Style</h2>
                                <h2 style={{fontSize:"80px"}} className='TittleTattoNThow'>Tatto</h2>
                            </div>
                            <p>Creamos arte y contamos historias en tu piel</p>
                            <br />
                        </div>
                    </div>
                </div>
            }


            {( token == null) && 
                <div className='contPrimary'>
                    <div className='HeadPresentationPt'>
                        <div className="contTextHead">
                            <p>Style Tatto sabe todo sobre el tatuaje</p>
                            <div className="contTittleStyleT">  
                                <img className = "gorroNavidad" src={gorroNavidad} alt={gorroNavidad} />
                                <h2  style={{fontSize:"80px"}}>Style</h2>
                                <h2 style={{fontSize:"80px"}} className='TittleTattoNThow'>Tatto</h2>
                            </div>
                            <p>Creamos arte y contamos historias en tu piel</p>
                            <br />
                            <div className='ContButtonsHomeP'>
                                
                                <ul className="menuhorizontal">
                                    <li><a className='buttons_global_StyleTatto' href="/IngresarSesion">INICIAR SESION</a></li>
                                </ul>

                                <ul className="menuhorizontal">
                                    <li><a className='buttons_global_StyleTatto' href="/Registro">REGISTRATE </a></li>
                                </ul>
                                
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}
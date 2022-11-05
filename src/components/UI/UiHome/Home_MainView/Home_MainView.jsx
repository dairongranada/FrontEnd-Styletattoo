import React from 'react'
import { useState } from 'react'


export const Home_MainView = () => {

    const [user, setUser] = useState(JSON.parse(localStorage.getItem("usuario")));
    const [token, setToken] = useState(localStorage.getItem("token"));

    return (
        <>
            { ( !!token ) &&
            <section className='MainView'>
                <p className='titlepagehome'>Bienvenido a StyleTatto</p>
                <h1 className='titleMP4'>CONTAMOS HISTORIAS</h1>
                <h2 className='titleMP4'>EN TU PIEL</h2>

            </section>
            }{ (token == null ) &&
                <section className='MainView'>
                        <h1 className='titleMP4'>CONTAMOS HISTORIAS</h1>
                            <h2 className='titleMP4'>EN TU PIEL</h2>
                        <p   style={{fontWeight:"700",color: "var(--colorOrange2)"}}>¿ No tienes una cuenta ?</p>
                        <div>
                            <ul className="menuhorizontal">
                                <li><a className='buttons_global_StyleTatto' href="/IngresarSesion">INICIAR SESION</a></li>
                            </ul>
                            <ul className="menuhorizontal">
                                <li><a className='buttons_global_StyleTatto' href="/Registro">REGISTRATE </a></li>
                            </ul>
                        </div>
                </section>
                }
        </>
    )
}

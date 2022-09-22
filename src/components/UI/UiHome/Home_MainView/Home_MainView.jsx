import React from 'react'


export const Home_MainView = () => {
    return (
        <section className='MainView'>
                <h1 className='titleMP4'>CONTAMOS HISTORIAS</h1>
                    <h2 className='titleMP4'>EN TU PIEL</h2>
                <p>¿ No tienes una cuenta ?</p>
                <div>
                    <ul className="menuhorizontal">
                        <li><a className='buttons_global_StyleTatto' href="/IngresarSesion">INICIAR SESION</a></li>
                    </ul>
                    <ul className="menuhorizontal">
                        <li><a className='buttons_global_StyleTatto' href="/Registro">REGISTRATE !!</a></li>
                    </ul>
                </div>
        </section>
    )
}

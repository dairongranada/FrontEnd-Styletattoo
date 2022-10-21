import React from 'react'
import { NavAboutUsFooter } from '../NavAboutUsFooter/NavAboutUsFooter'
import '.././NavFooter.scss'


export const NavFooter = () => {
    return (
        <footer>
            <div className='Main_Container' >
                <div className="left box">
                    <h2>Nosotros<span className="material-symbols-outlined"> group </span></h2>
                    <div className="contentNavFooter">
                        <p>
                            Nuestro equipo de desarrollo está conformado por 6 personas, 
                            las cuales se encargaron de crear la mejor herramienta de gestión 
                            de citas para tus tatuajes
                        </p>
                    </div>
                </div>

                <div className="center box ">
                    <h2>Navegar<span className="material-symbols-outlined arrow">arrow_downward </span></h2>
                    <div className="contentNavFooter">
                        <div className="place">
                            <a href="/"><span className="material-symbols-outlined">house</span></a>                           
                            <span><a href="/">Home</a></span> 
                        </div>
                        <div className="place">
                            <a href="/artistas"><span className="material-symbols-outlined"> recent_actors </span></a>
                            <span><a href="/artistas">Artistas</a></span> 
                        </div>
                        <div className="place">
                            <a href="/Citas"><span className="material-symbols-outlined"> outgoing_mail </span></a>
                            <span><a href="/Citas">Citas</a></span> 
                        </div>
                    </div>
                </div>
                <NavAboutUsFooter NameAbout='Sugerencias' classSpanLogo='material-symbols-outlined' NameSpanLogo='mark_email_unread'/> 
            </div>
            <div className="botton">
                <center>
                    <span className='Credits'>Create By <a href="/">Style Tatto</a> | </span>
                    <span>©</span> <span>2022 All rights reserved.</span>
                </center>
            </div>
        </footer>
    )
}
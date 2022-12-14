import React from 'react'
import { NavAboutUsFooter } from '../NavAboutUsFooter/NavAboutUsFooter'
import '.././NavFooter.scss'
import { Link } from 'react-router-dom'


export const NavFooter = (widthStyle) => {
    return (
        <footer style={widthStyle}>
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
                            <Link to="/"><span className="material-symbols-outlined">house</span></Link>                           
                            <span><Link to="/">Inicio</Link></span> 
                        </div>
                        <div className="place">
                            <a href="/all/artist/style"><span className="material-symbols-outlined"> recent_actors </span></a>
                            <span><a href="/all/artist/style">Artistas</a></span> 
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
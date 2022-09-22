import React from 'react'
import { Link } from 'react-router-dom'
import { UiAboutUs } from '.././UiAboutUs/UiAboutUs'

export const UIFooter = () => {
    return (
        <footer>
            <div className='Main_Container' >
                <div className="left box">
                    <h2>Nosotros<span className="material-symbols-outlined"> group </span></h2>
                    <div className="content">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam quas consequuntur a 
                            obcaecati veniam enim, cumque minima minus, quis magni sequi voluptate exercitationem 
                            vel animi impedit nihil molestias sed id!
                        </p>
                    </div>
                </div>

                <div className="center box ">
                    <h2>Navegar<span className="material-symbols-outlined arrow">arrow_downward </span></h2>
                    <div className="content">
                        <div className="place">
                            <Link to="/"><span className="material-symbols-outlined">house</span></Link>                           
                            <span><Link to="/">Home</Link></span> 
                        </div>
                        <div className="place">
                            <Link to="/artistas"><span className="material-symbols-outlined"> recent_actors </span></Link>
                            <span><Link to="/artistas">Artistas</Link></span> 
                        </div>
                        <div className="place">
                            <Link to="/Citas"><span className="material-symbols-outlined"> outgoing_mail </span></Link>
                            <span><Link to="/Citas">Citas</Link></span> 
                        </div>
                    </div>
                </div>
                <UiAboutUs NameAbout='Sugerencias' classSpanLogo='material-symbols-outlined' NameSpanLogo='mark_email_unread'/> 
            </div>
            <div className="botton">
                <center>
                    <span className='Credits'>Create By <Link to="/">Style Tatto</Link>  |  </span>
                    <span>©</span> <span>2022 All rights reserved.</span>
                </center>
            </div>
        </footer>
    )
}
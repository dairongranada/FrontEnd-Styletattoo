import React, { useState } from 'react'
import './NavigationBar.scss'
import perfilUsuarioAnonim from '../../../images/Icons/perfilUsuarioAnonim.jpg'
import { ImgTemplate } from '../../UI/ImgTemplate/ImgTemplate';
import logo from '../../../images/Icons/logo2.png'
import Cookies from 'universal-cookie';
import { useEffect } from 'react';

import { menuBurguer } from '../../.././Helpers/LogicNav/Despliegue'

const cookies = new Cookies();


export const NavigationBar = () => {

    menuBurguer('material-symbols-outlined','menu-items')


    // E F E C T O    D E L    S C R O L L

    const [show, handleShow] = useState()

    useEffect(() => {
        window.addEventListener("scroll", () => {

            if(window.scrollY > 80){
                handleShow(true)
                // console.log(show)
            }else handleShow(false)
        })
        // return () => {
        //     window.removeEventListener("scroll")
        // }
        window.addEventListener('load', () => {
            const modalDesp = document.getElementById('despleg')
            modalDesp.style.visibility = "hidden"
        })
    },[])
    

    const despliege = () => {
        const modalDesp = document.getElementById('despleg')
        modalDesp.style.visibility = "visible"
    }



    return (
        <>
            <div className='barNavigate'>            
                <nav className={`menu ${show && "nav_black"}`}id='js-nav'>
                    <div className='contOptionsNav'>
                        <a href="/"><ImgTemplate srcImg={ logo } className='logoStyleTatto' alt='' /></a>
                        
                        <ul className='menu-items'>
                            <li><a className='optionNavBar' href="/" >INICIO</a></li>
                            <li><a className='optionNavBar' href="/artistas">ARTISTAS</a></li>
                            {
                            1<3? (
                                    <li><a className= "optionNavBar" href="/user/edit-profile">Perfil</a></li>
                                ):("")}
                        </ul>
                    </div>
                    <img id='logoPrfile' className='ImgUserProfile' src={perfilUsuarioAnonim} onClick={despliege} alt="" />
                    <span onClick={menuBurguer()} id='burguer' className="material-symbols-outlined">menu</span>
                </nav>
                <div id='despleg' className='despleg'>
                    <ul>
                        <li>Perfil</li>
                        <li>Cerrar Sesion</li>
                    </ul>
                </div>
            </div>
        </>
    )
}

import React, { useState } from 'react'
import './NavigationBar.scss'
import perfilUsuarioAnonim from '../../../images/Icons/perfilUsuarioAnonim.jpg'
import { ImgTemplate } from '../../UI/ImgTemplate/ImgTemplate';
import logo from '../../../images/Icons/logo2.png'
import Cookies from 'universal-cookie';
import { useEffect } from 'react';

const cookies = new Cookies();


export const NavigationBar = ({classN, href, text}) => {

    const menu = ()=>{
        const btn_menu = document.querySelector('.material-symbols-outlined')
        if(btn_menu){
            const menu_items = document.querySelector('.menu-items')
            menu_items.classList.toggle('open')
        } 
    }

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
                        <a href="/"><ImgTemplate srcImg={logo} className='logo' alt=''  /></a>
                        
                        <ul className='menu-items'>
                            <li><a className='option2' href="/" >INICIO</a></li>
                            <li><a className='option2' href="/artistas">ARTISTAS</a></li>
                            {
                            1<3? (
                                    <li><a className= "option2" href="/user/edit-profile">Perfil</a></li>
                                ):("")}
                        </ul>
                    </div>
                    <img id='logoP' className='logo' src={perfilUsuarioAnonim} onClick={despliege} alt="" />
                    <span onClick={menu} id='burguer' className="material-symbols-outlined">menu</span>
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

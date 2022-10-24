import React, { useState } from 'react'
import './NavigationBar.scss'
import perfilUsuarioAnonim from '../../../images/Icons/perfilUsuarioAnonim.jpg'
import { ImgTemplate } from '../../UI/ImgTemplate/ImgTemplate';
import logo from '../../../images/Icons/logo2.png'
import Cookies from 'universal-cookie';
import { useEffect } from 'react';
import { AiOutlineUser } from 'react-icons/ai';
import { BiUpArrow } from "react-icons/bi";


const cookies = new Cookies();


export const NavigationBar = ({classN, href, text}) => {

    const menu = ()=>{
        const btn_menu = document.querySelector('.material-symbols-outlined')
        if(btn_menu){
            const menu_items = document.querySelector('.menu-items')
            menu_items.classList.toggle('open')
        } 
    }





    return (
        <>
            <div className='barNavigate'>            
                <nav className='menu' id='js-nav'>
                    <div className='contOptionsNav'>
                        <a href="/"><ImgTemplate srcImg={logo} className='logoStyleTatto' alt=''  /></a>
                        
                        <ul className='menu-items'>
                            <li><a className='option2' href="/" >INICIO</a></li>
                            <li><a className='option2' href="/artistas">ARTISTAS</a></li>
                        </ul>
                    </div>
                    <span onClick={menu} id='burguer' className="material-symbols-outlined">menu</span>


                {/*  ICON PERFIL  USUARIO....  */ }
                    <ul class="menu-horizontal">
                        <li>
                            <a href="#"><img id='logoP' className='ImgUserProfile' src={perfilUsuarioAnonim} alt="" /></a>
                            <ul class="menu-vertical">
                                <div className='UpArrow'><BiUpArrow/></div>
                                <li className='menuOpcionsNav'><a href="/user/edit-profile"><AiOutlineUser/> Cuenta</a></li>
                                <li className='menuOpcionsNav'><a href="#">Citas Agendadas</a></li>
                                <ul className='cerrarSesionUL'><li className='menuOpcionsNav'><a href="#">Cerrar sesion</a></li></ul>
                            </ul>
                        </li>
                    </ul>
                {/*  ICON PERFIL  TATUADR....  */ }
                {/* <ul class="menu-horizontal">
                        <li>
                            <a href="#"><img id='logoP' className='ImgUserProfile' src={perfilUsuarioAnonim} alt="" /></a>
                            <ul class="menu-vertical">
                                <li><a href="#"><AiOutlineUser/> Cuenta</a></li>
                                <li><a href="#">Citas Agendadas</a></li>
                                <li><a href="#">Cerrar sesion</a></li>
                            </ul>
                        </li>
                    </ul> */}



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

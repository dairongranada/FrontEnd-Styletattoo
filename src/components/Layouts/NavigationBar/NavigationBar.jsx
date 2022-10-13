import React from 'react'
import './NavigationBar.scss'
import { ImgTemplate } from '../../UI/ImgTemplate/ImgTemplate';
import logo from '../../../images/Icons/logo2.png'
import Cookies from 'universal-cookie';

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
        <div className='barNavigate'>            
            <nav className='menu'id='js-nav'>
                <a href="/"><ImgTemplate srcImg={logo} className='logo' alt=''  /></a>   
                <ul className='menu-items'>
                    <li><a className='option2' href="/" >INICIO</a></li>
                    <li><a className='option2' href="/artistas">ARTISTAS</a></li>
                    {
                    1<3? (
                            <li><a className= "option2" href="/user/edit-profile">Perfil</a></li>
                        ):("")}
                </ul>
                <span onClick={menu} id='burguer' className="material-symbols-outlined">menu</span>
            </nav>
        </div>
    )
}

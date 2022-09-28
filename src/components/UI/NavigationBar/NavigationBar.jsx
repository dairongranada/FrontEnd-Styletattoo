import React from 'react'
import '../../UI/NavigationBar/NavigationBar.scss'
import { ImgTemplate } from '../ImgTemplate/ImgTemplate';
import logo from '../../../images/Icons/logo2.png'


export const NavigationBar = () => {

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
                <ImgTemplate srcImg={logo} className='logo' />
                <ul className='menu-items'>
                   <a href="/" >INICIO</a>
                    <a href="/artistas">ARTISTAS</a>
                    <a href="/consejos">CONSEJOS</a>
                    <a href="/perfilUsuarios">PERFIL</a>
                </ul>
                <span onClick={menu} id='burguer' className="material-symbols-outlined">
                    menu
                </span>
            </nav>
        </div>
    )
}

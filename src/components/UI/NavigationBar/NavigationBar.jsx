import React from 'react'
import { Link } from 'react-router-dom';
import '../../UI/NavigationBar/NavigationBar.scss'
import { ImgTemplate } from '../ImgTemplate/ImgTemplate';
import logo from '../../../images/Icons/logo.jpg'


export const NavigationBar = () => {

    const menu = ()=>{
        const btn_menu = document.querySelector('.material-symbols-outlined')
        if(btn_menu){
            btn_menu.addEventListener('click',() => {
                const menu_items = document.querySelector('.menu_items')
                menu_items.classList.toggle('open')
            })
           } 
    }
    return (
        <div>
        <nav className='menu'id='js-nav'>
            <ImgTemplate srcImg={logo} classN='logo' />
        <ul className='menu-items'>
            <li className='active'><Link to="/" >INICIO</Link></li>
            <li ><Link to="/Tatuadores">TATUADORES</Link></li>
            <li ><Link to="/citas">CITAS</Link></li>
        </ul>
        <span onClick={menu} id='burguer' className="material-symbols-outlined">
            menu
       </span>
        </nav>
        </div>
    )
}

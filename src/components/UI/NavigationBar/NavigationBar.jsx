import React from 'react'
import { Link } from 'react-router-dom';


const icons = document.querySelectorAll('.icon');

icons.forEach (icon => { 
    icon.addEventListener('click', () => {
        icon.classList.toggle("open");
    });
});

export const NavigationBar = () => {
    return (
        <nav>
            <ul>
                <li><a href="/"><h3>STYLE<span> TATTO</span></h3></a></li>
            </ul>
            <div className="icon nav-icon-5" onClick={icons} ><span></span><span></span><span></span></div>
            <ul className="mainMenu">
                <li><Link to="/" >INICIO</Link></li>
                <li><Link to="/Tatuadores">TATUADORES</Link></li>
                <li><Link to="/citas">CITAS</Link></li>
            </ul>
        </nav>
    )
}

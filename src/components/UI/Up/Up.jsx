import React from 'react'
import './Up.scss'

export const Up = () => {


    //aqui se le agrega el active
    const ChangeClass =()=> {
        let menuToggle = document.querySelector('.menuToggle');
        // let MenuRespoM = document.querySelector('.MenuRespoM');
        menuToggle.classList.toggle('active') 
    }

    return (

        <>
            <div className='navigationBTNResp'>
                <div onClick={ChangeClass} className='menuToggle'></div>
                <div className='menuOpcionesCellW'>
                    <ul>
                        <li>
                            <a href="/"><span id="iconsMenuCELL" class="material-symbols-outlined"> home </span></a>
                        </li>
                        <li>
                            <a href="#"><span id="iconsMenuCELL" class="material-symbols-outlined"> person </span></a>
                        </li>
                        <li>
                            <a href="#"><span id="iconsMenuCELL" class="material-symbols-outlined"> groups </span></a>
                        </li>
                    </ul>
                </div>
            </div>        
        </>


    )
}

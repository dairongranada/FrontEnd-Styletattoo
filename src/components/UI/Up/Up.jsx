import React from 'react'
import './Up.scss'

export const Up = () => {
    // const FunctionScroll = () => {
    //     window.scroll({
    //         top: 0,
    //         behavior: 'smooth'
    //     })
    // }

    //aqui se le agrega el active
    const ChangeClass =()=> {
        let menuToggle = document.querySelector('.menuToggle');
        let MenuRespoM = document.querySelector('.MenuRespoM');
        menuToggle.classList.toggle('active') 
    }

    return (

        <>
            <div className='navigation'>
                <div onClick={ChangeClass} className='menuToggle'></div>
                <div className='menu'>
                    <ul>
                        <li>
                            <a href="#"><span id="iconsMenuCELL" class="material-symbols-outlined"> home </span></a>
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
/*
        <p onClick={FunctionScroll} id="edgtf-back-to-top" className="on">
            <span className="edgtf-icon-stack">
                <i style={{ color: "#fff" ,fontSize: "30px",transform: "translate(0px, 2px)" }} className="edgtf-icon-ion-icon ion-android-arrow-dropup material-symbols-outlined">arrow_drop_up</i>
            </span>
            <span className="edgtf-btt-text">Subir</span>
        </p>
*/
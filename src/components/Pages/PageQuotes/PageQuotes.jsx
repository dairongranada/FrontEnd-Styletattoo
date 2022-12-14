import './PageQuotes.scss'
import React from 'react'
import { NavFooter } from '../../Layouts/NavigationFooter/NavFooter/NavFooter';
import { NavigationBar } from '../../Layouts/NavigationBar/NavigationBar';

export const PageQuotes = () => {
  return (
    <>
    <NavigationBar/>
    <div className='backgruondCont'>
        <div className='ShadowCont'>
            <form className='FormQuot'>
                <h3>Introduce la Informacion</h3>
                <p>Fecha</p>
                <input className='input_global_style' type="date" required />
                <br />
                <h3>Hora</h3>
                <input type="time"/>
                
                <div className='buttons_global_StyleTatto' id='addfile'>
                    <p>Muestranos tu idea</p>
                    <input id='btnEnviar' type="file" required/>
                </div>



                <p>Dejanos un mensaje</p>
                <textarea id="textMessage" ></textarea>
                <button className='buttons_global_StyleTatto'>Enviar</button>
            </form>
        </div>
    </div>
    <NavFooter/>
    </>
  )
}

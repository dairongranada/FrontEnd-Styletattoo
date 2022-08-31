import React from 'react'
import fondo from '../../../images/Fondos/fondoTattoopacity.jpg'
import '../LayoutsProfileT/Profile.scss'
import tatuadorp from '../../../images/Tatuadores/tatuador2.png'
import porta1 from '../../../images/Tattos/portafolio1.jpg'
import porta2 from '../../../images/Tattos/portafolio2.jpg'
import porta3 from '../../../images/Tattos/portafolio3.jpg'
import porta4 from '../../../images/Tattos/portafolio4.jpg'
import porta5 from '../../../images/Tattos/portafolio5.jpg'
import porta6 from '../../../images/Tattos/portafolio6.jpg'
import porta7 from '../../../images/Tattos/portafolio7.jpg'
import porta8 from '../../../images/Tattos/portafolio8.jpg'
import porta9 from '../../../images/Tattos/portafolio9.jpg'

export const LayoutsProfileT = () => {
  return (
    <div>
        <header className='conbanner' >
            <img className='Banner' src={fondo} alt="" />
            <div className='conimgp' >
                <img className='imgp' src={tatuadorp }  alt="" />
            </div>
        </header>
        <div className='connombre' > 
            <h2>Nombre del Tatuador</h2>
        </div>
        <div className='conportafolio' >
            <h3>Mi Portafolio</h3>
        </div>
        <div className='contenedorT' >

            <div className='colum1' >
                <div className='conimg' >
                    <img src= {porta1} alt="" />
                    <img src= {porta2} alt="" />
                    <img src= {porta3} alt="" />
                </div>
                <div className='conimg' >
                    <img src= {porta4} alt="" />
                    <img src= {porta5} alt="" />
                    <img src= {porta6} alt="" />
                </div>
                <div className='conimg' >
                    <img src= {porta7} alt="" />
                    <img src= {porta8} alt="" />
                    <img src= {porta9} alt="" />
                </div>
            </div>
        </div>
    </div>
    
  )
}

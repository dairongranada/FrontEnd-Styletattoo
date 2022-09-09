import React from 'react'
import imgP from '../../../images/Tatuadores/tatuador1.png'
import '../LayoutsProfileT/Profile.scss'
import '../../../scss/base/_global.scss'
import img1 from '../../../images/Tattos/portafolio1.jpg'
import img2 from '../../../images/Tattos/portafolio2.jpg'
import img3 from '../../../images/Tattos/portafolio3.jpg'


export const LayoutsProfileT = () => {
  return (
    <div className='contPather'>
        <div className='contPe'>
            <div className='contImg'>
                <img className='Profile' src={imgP} alt="" />
            </div>
            <div className='contInfo'>
                <div className='inf'><p>Nombre: Carlos</p></div>
                <div className='inf'><p>Seguidores: 120.000</p></div>
                <div className='inf'><p>Trabajos Subidos: 45</p></div>
                <div className='inf'><p>direccion: cra5ta #19-30</p></div>

                <div className='contButtons'>
                    <button className='buttons_global_StyleTatto'>Añadir Cita</button>
                    <button className='buttons_global_StyleTatto'>Seguir</button>
                    <button className='buttons_global_StyleTatto'>Editar</button>
                </div>
            </div>
        </div>
        <div className='ContTrabajos'>
            <div className='contPortafolio'>
                <div className='contPortafolio2'>
                    <div className='Portafolio'>
                        <h2 className='PortafoliosTittle'>Mi Portafolios</h2>
                    </div>

                    <div className='Trabajos'>
                        <div className='Tattos'>
                            <img className='ContTatto' src={img1} alt="" />
                            <img className='ContTatto' src={img2} alt="" />
                            <img className='ContTatto' src={img3} alt="" />
                        </div>
                        <div className='Tattos'>
                            <img className='ContTatto' src={img1} alt="" />
                            <img className='ContTatto' src={img2} alt="" />
                            <img className='ContTatto' src={img3} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
  )
}

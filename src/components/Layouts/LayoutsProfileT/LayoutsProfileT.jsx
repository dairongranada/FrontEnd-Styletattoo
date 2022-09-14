import React , {useState} from 'react'
import {ModalProfileT} from './ModalProfileT/ModalProfileT.jsx'
import imgP from '../../../images/Tatuadores/tatuador1.png'
import '../LayoutsProfileT/Profile.scss'
import '../../../scss/base/_global.scss'
import img1 from '../../../images/Tattos/portafolio1.jpg'
import img2 from '../../../images/Tattos/portafolio2.jpg'
import img3 from '../../../images/Tattos/portafolio10.jpg'

import img4 from '../../../images/Tattos/portafolio4.jpg'
import img5 from '../../../images/Tattos/portafolio5.jpg'
import img6 from '../../../images/Tattos/portafolio6.jpg'



export const LayoutsProfileT = () => {
    const [estadomodal, setEstadomodal] = useState(false)

  return (
    <div className='contPather'>
        <div className='contPe'>
            <div className='contImg'>
                <img className='Profile' src={imgP} alt="" />
            </div>
            <div className='contInfo'>
                <div className='inf'><p>Nombre: Carlos</p></div>
                <div className='inf'><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores tempore aperiam dolor sit.</p></div>

                <div className='contButtons'>
                    <button className='buttons_global_StyleTatto'>Agendar Cita</button>
                    <button className='buttons_global_StyleTatto'>Seguir</button>
                    <button className='buttons_global_StyleTatto'>Editar</button>
                </div>
            </div>
        </div>
        <div className='ContTrabajos'>
            <div className='contPortafolio'>
                <div className='contPortafolio2'>
                    <div className='Portafolio'>
                        <h2 className='PortafoliosTittle'>Mi Portafolio</h2>
                    </div>

                    <div className='Trabajos'>
                        <div className='Tattos'>
                            <div className='Tatto'>
                                <img onClick={() => setEstadomodal(!estadomodal)} className='ContTatto' src={img1} alt="" />
                            </div>
                            <div className='Tatto'>
                                <img onClick={() => setEstadomodal(!estadomodal)} className='ContTatto' src={img2} alt="" />
                            </div>
                            <div className='Tatto'>
                                <img onClick={() => setEstadomodal(!estadomodal)} className='ContTatto' src={img3} alt="" />
                            </div>
                        </div>
                        <div className='Tattos'>
                            <div className='Tatto'>
                                <img onClick={() => setEstadomodal(!estadomodal)} className='ContTatto' src={img4} alt="" />
                            </div>
                            <div className='Tatto'>
                                <img onClick={() => setEstadomodal(!estadomodal)} className='ContTatto' src={img5} alt="" />
                            </div>
                            <div className='Tatto'>
                                <img onClick={() => setEstadomodal(!estadomodal)} className='ContTatto' src={img6} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <ModalProfileT
            estado = {estadomodal}
            cambiarEstado = {setEstadomodal}
        />
    </div>
    
  )
}

import React , {useState} from 'react'
import {ModalProfileT} from './ModalProfileT/ModalProfileT.jsx'
import imgP from '../../../images/Tatuadores/tatuador1.png'

import img1 from '../../../images/Tattos/portafolio1.jpg'
import img2 from '../../../images/Tattos/portafolio2.jpg'
import img3 from '../../../images/Tattos/portafolio10.jpg'

import img4 from '../../../images/Tattos/portafolio4.jpg'
import img5 from '../../../images/Tattos/portafolio5.jpg'
import img6 from '../../../images/Tattos/portafolio6.jpg'

import '../LayoutsProfileT/LayoutsProfileT.scss'
import '../../../scss/base/_global.scss'

export const LayoutsProfileT = () => {
    const [estadomodal, setEstadomodal] = useState(false)
    
    //  C O N T A D O R    D E    M E   G U S T A
    const [contador, setContador] = useState(0)

    const count = () => {
        setContador(1)
    }

  return (
    <div className='contPather'>


        <div className='contPe'>   
                <div className='ProfileArtistic'>
                    <div className='contImg'><img className='Profile' src={imgP} alt=""/></div>
                    <div className='infArtist'>
                        <div className='editSeparator'>
                            <div className='editProfile'><a href="#"><span className="material-symbols-outlined">edit</span>Editar</a></div>
                            <div><label className='labelNameArtist'>Nombre</label><p>Carlos Melo Toca</p></div>
                            <div className='favoriteSymbols'
                                ><span onClick={count} className="material-symbols-outlined">favorite</span>
                                <p>{contador}</p>
                            </div>
                        </div>
                    </div>
                </div>    

                <div className='contInfo'>
                    <div className='infoDescription'>
                        <p>Lorem ipsum dolor sit amet consectetur 
                            adipisicing elit. Dolores tempore 
                            aperiam dolor sit.
                        </p>
                    </div>
                    <div className='contButtons'>
                        <button className='buttons_global_StyleTatto'>Agendar Cita</button>
                    </div>
                </div>
        </div>



        <div className='ContTrabajos'>
            <div className='contPortafolio'>
                <div className='contPortafolio2'>
                    <div className='Portafolio'>
                        <h2 className='PortafoliosTittle'>P R O Y E C T O S </h2>
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

        <ModalProfileT estado = {estadomodal}cambiarEstado = {setEstadomodal}/>
    </div>
    
  )
}

import React , {useState} from 'react'
import imgP from '../../../images/Tatuadores/tatuador1.png'
// import {RViewerTrigger, RViewer} from 'react-viewerjs'

import img1 from '../../../images/Tattos/portafolio1.jpg'
import img2 from '../../../images/Tattos/portafolio2.jpg'
import img3 from '../../../images/Tattos/portafolio10.jpg'

import img4 from '../../../images/Tattos/portafolio4.jpg'
import img5 from '../../../images/Tattos/portafolio5.jpg'
import img6 from '../../../images/Tattos/portafolio6.jpg'

import '../LayoutsProfileT/LayoutsProfileT.scss'
import '../../../scss/base/_global.scss'

export const LayoutsProfileT = () => {
    
    //  C O N T A D O R    D E    M E   G U S T A
    const [contador, setContador] = useState(0)

    const count = () => {setContador(1)}




    // A R R A Y S   A P I S

    const imagenes = [
        {
            img: img1,
            id: 1
        },
        {
            img: img2,
            id: 2
        },
        {
            img: img3,
            id:3
        }
    ]


    const imganes2 = [
        {
            img: img4,
            id: 4
        },
        {
            img: img5,
            id: 5
        },
        {
            img: img6,
            id:6
        }
    ]

    const [modal, setModal] = useState(false)
    const [tempimg, setTempimg] = useState('')

    const render =()=> {
        const firtsModal = document.getElementById('modalImg')
        firtsModal.style.visibility = "hidden"

    }
    window.addEventListener('load', render)

    const getImg = (img) => {
        const modaL = document.getElementById('modalImg')
        modaL.style.visibility = "visible"

       
        setTempimg(img)
        setModal(true)
    }

    const ocultarModal =() => {
        const modaL = document.getElementById('modalImg')
        modaL.style.visibility = "hidden"
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
                            <div><label className='labelNameArtist'>Correo</label><p>CorreoPrueba@StyleTatto.co</p></div>
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
                        <button className='buttons_global_StyleTatto'>Agendar cita</button>
                    </div>
                </div>
        </div>
        <div className ='ContTrabajos'>
            <div className='contPortafolio'>
                <div className='contPortafolio2'>
                    <div className='Portafolio'>
                        <h2 className='PortafoliosTittle'>P R O Y E C T O S </h2>
                    </div>
                    <div className='Trabajos'>
                        <div className='Tattos'>
                            <div className='Tatto'>
                                {imagenes.map((imagen, index) => {
                                    return(
                                        <img onClick={() => getImg(imagen.img)} key={index} className='ContTatto' src={imagen.img} alt="" />
                                    )
                                })}
                            </div>
                        </div>

                        <div className='Tattos'>
                            <div className='Tatto'>
                                {imganes2.map((imagen, index) => {
                                    return(
                                        <img onClick={() => getImg(imagen.img)} key={index} className='ContTatto' src={imagen.img} alt="" />
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>



        <div id='modalImg' className='modalImg'>
            <div className='contModal'>
                <img className='imge' src={tempimg} alt="" />
                <svg id='close' onClick={() => ocultarModal()} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
                    <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
                </svg>
            </div>
        </div>


    </div>
  )
}
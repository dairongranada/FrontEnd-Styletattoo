import './AllViewTatto.scss'

import React , {useState} from 'react'
import { Link } from 'react-router-dom'


export const AllViewTatto = () => {
    
  return (
    <div className='BigContent'>

        <div className='contPather'>

            <div className='contPe'>   
                    <div className='ProfileArtistic'>
                        <div className='infArtist'>
                        <div className='editSeparator'>
                                <div className='editProfile'><a href="#"></a></div>
                                <div><label className='labelNameArtist'>Nombre</label><p>Samuel lopez Muñoz</p></div>
                                <div><label className='labelNameArtist'>Correo</label><p>CorreoPrueba@StyleTatto.com</p></div>
                                <div className='favoriteSymbols'
                                    ><span className="material-symbols-outlined">favorite <p></p></span>
                                    <Link to="/userTatto/edit-profile"><span className="material-symbols-outlined">settings</span></Link>
                                </div>
                            </div>
                        </div>
                    </div>    
                    <div className='contInfo'>
                        <div className='infoDescription'>
                            <p>Lorem ipsum dolor sit amet consectetur 
                                adipisicing elit. Dolores tempore 
                                aperiam dolor sit holi shit.
                            </p>
                        </div>
                        <div className='contButtons'>
                        <a href='/citas'><button className='buttons_global_StyleTatto'>Agendar cita</button></a>
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
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
           

        </div>
      
    </div>
  )
}
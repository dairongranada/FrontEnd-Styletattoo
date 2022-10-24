import './username.scss'
import { LeftInfo } from '../../LeftInfo.jsx'
import { React,useEffect,useState } from 'react'


import './username.scss'


/* F I R E B A S E */


export const TattoName = () => {



  return (
    <div className='BodyProfileUser'>
      <div className='Content_profleUser'>
          <LeftInfo/>
          <div className='ContentUserInfo'>
            <div className="contentHeaderTitle">
                <h3>Perfil Publico</h3>
                <p>Añade información sobre ti</p>
            </div>

            <div className='contPublicP'>
              <div id='datesBasics' className='datesBasics'>
                <div className='contN'>
                  <label  className='labelsTxtProfile'htmlFor="text">Nombre</label>
                  <input name='name' className='boxInf' type="text"/>
                </div>
                <div className='contN'>
                  <label className='labelsTxtProfile' htmlFor="text">Apellido</label>
                  <input name='apellido'  className='boxInf' type="text"/>
                </div>
                <div className='contN'>
                  <label className='labelsTxtProfile' htmlFor="email">Correo</label>
                  <input name='email' className='boxInf' type="text" />
                </div>
              </div>
              <div className='contButtonSave'>
                <button className='buttons_global_StyleTatto'>Guardar</button>
              </div>
            </div>
          </div>
      </div>
    </div>
    )
}
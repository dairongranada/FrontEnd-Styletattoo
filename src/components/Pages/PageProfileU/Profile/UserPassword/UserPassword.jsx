import React from 'react'
import {PageProfileU } from '../.././PageProfileU.jsx'
// import Cookies from 'universal-cookie';
// import  useState, {useEffect} from 'react';
import  imgProfiles  from '../../../../../images/Icons/profile.jpeg'

export const UserPassword = () => {


  

  // const [ imgProfileU, setImgProfileU ] = useState()
  // useEffect(()=>{setImgProfileU(imgProfiles)})
  
  // const cookies = new Cookies();
  
  

  return (
    <div>
      <PageProfileU/>
      <div className='contPublicP'>
          <div className='contTittle'>
            <h3>Public Profile</h3>
            <p>Agrege informacion sobre usted</p>
            <hr/>
          </div>

          <div id='datesBasics' className='datesBasics'>
            <div className='contN'>
            <label htmlFor="text">Nombre</label>
              <input name='name' className='boxInf' type="text"  />
            </div>
            <div className='contN'>
              <label htmlFor="text">Apellido</label>
              <input name='apellido'  className='boxInf' type="text"/>
            </div>
            <div className='contN'>
              <label htmlFor="email">Correo</label>
              <input name='email' className='boxInf' type="text" />
            </div>
          </div>

          {/* editar img perfil */}
          <div id='ContImageUserEdit' className='ContImageUserEdit'>
            <h3>Edita Tu Foto</h3>
            <img className='FaceUserEdit' src={imgProfiles} alt="" />
            <div className='Edit'>
              <span class="material-symbols-outlined">
                photo_camera
              </span>
              <p>editar</p>
            </div>
          </div>


          <div className='contButtonSave'>
            <button className='buttons_global_StyleTatto'>Guardar</button>
          </div>
    </div>
    </div>
  )
}

import React from 'react'
import { PageProfileU } from '../../PageProfileU'
import imgProfileU from '../../../../../images/Icons/profile.jpeg'

export const UserImage = () => {
  return (
    <div className='Content_profleUser'>
      <PageProfileU/>
      {/* editar img perfil */}
      <div id='ContImageUserEdit' className='ContImageUserEdit'>
            <h3>Edita Tu Foto</h3>
            <img className='FaceUserEdit' src={imgProfileU} alt="" />
            <div className='Edit'>
              <span class="material-symbols-outlined">
                photo_camera
              </span>
              <p>editar</p>
            </div>
            <br />
            
            <div className='contButtonSave'>
              <button className='buttons_global_StyleTatto'>Guardar</button>
          </div>
      </div>

    </div>
  )
}

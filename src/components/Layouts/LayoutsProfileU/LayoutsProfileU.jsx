import React from 'react'
import user2 from '../../../images/Tatuadores/user2.jpg'
import './LayoutsProfileU.scss'



export const LayoutsProfileU = () => {

  return (
      <div className='Content_profleUser'>

        <div className='contProfileU'>
          <div className='ContFaceUser'>
            <img className='FaceUser' src={user2} alt="" />
          </div>
          <div className='contNameU'>
            <h3 className='NameU'>Laura Vallejo Jaramillo</h3>
          </div>
          <div className='optionsUser'>
            <div className='option'>
              <p>Editar Foto De Perfil</p>
            </div>
            <div className='option'>
              <p>Editar Nombre</p>
            </div>
            <div className='option'>
              <p>Editar Contraseña</p>
            </div>
            <div className='option'>
              <p>Citas Agendadas</p>
            </div>
          </div>
        </div>

        <div className='contPublicP'>
          <div className='contTittle'>
            <h3>Public Profile</h3>
            <p>Agrege informacion sobre usted</p>
            <hr />
          </div>

          <div className='datesBasics'>
            <div className='contN'>
            <label htmlFor="text">Nombres</label>
              <input className='boxInf' type="text"  value='laura'/>
            </div>
            <div className='contN'>
              <label htmlFor="text">Apellidos</label>
              <input className='boxInf' type="text" value='Vallejo Jaramillo'/>
            </div>
            <div className='contN'>
              <label htmlFor="email">Correo</label>
              <input className='boxInf' type="text" value='Hedline'/>
            </div>
          </div>
          <div className='contButtonSave'>
            <button className='buttons_global_StyleTatto'>Guardar</button>
          </div>
        </div>
      </div>
  )
}

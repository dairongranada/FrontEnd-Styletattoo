import React from 'react'
import { ImgTemplate } from '../../UI/ImgTemplate/ImgTemplate'
import '../LayoutsProfileU/LayoutsProfileU.css'
import ImgProfile  from '../../../images/Icons/perfilUserM.png'

export const LayoutsProfileU = () => {
  return (
    <main className='main'>
      <div className='contentProfile'>
        <div className='contentImg'>
          <div>
          <ImgTemplate srcImg={ImgProfile}/>
          </div>
        </div>
        <div className='contentText'>
          <p><strong>Nombre:</strong></p>
          <p>nombre</p>
          <hr />
          <p><strong>Apellidos:</strong></p>
          <p>apellidos</p>
          <hr />
          <p><strong>Correo:</strong></p>
          <p>correo</p>
          <hr />
          <p><strong>telefono:</strong></p>
          <p>numero telefonico</p>
          <hr />
          <p><strong>sexo:</strong></p>
          <p>genero</p>
          <hr />
          <p><strong>fecha de nacimiento:</strong></p>
          <p>fecha</p>
          <hr />
        </div>
        <div className='contentButtons'>
          <button className='styleButton'><a href='/cambioDataUser'>modificar perfil</a></button>
          <button className='styleButton'><a href="#">ver citas</a></button>
        </div>
      </div>
    </main>
  )
}

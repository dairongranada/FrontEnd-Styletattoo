import React from 'react'
import { ImgTemplate } from '../../UI/ImgTemplate/ImgTemplate'
import '../LayoutsProfileU/LayoutsProfileU.css'
import ImgProfile  from '../../../images/Icons/perfilUser.png'

export const LayoutsProfileU = () => {
  return (
    <main className='main'>
      <div className='contentProfile'>
        <div className='contentImg'>
          <ImgTemplate srcImg={ImgProfile}/>
        </div>
        <div className='contentText'>
          <p><strong>Nombre:</strong></p>
          <p>steven montoya torres</p>
          <hr />
          <p><strong>Correo:</strong></p>
          <p>montoyatorressteven0@gmail.com</p>
          <hr />
          <p><strong>telefono:</strong></p>
          <p>+57 3225376757</p>
          <hr />
        </div>
        <div className='contentButtons'>
          <button className='styleButton'>modificar perfil</button>
          <button className='styleButton'>ver citas</button>
        </div>
      </div>
    </main>
  )
}

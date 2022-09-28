import React from 'react'
import { useNavigate } from 'react-router'
import { useAuth } from '../../.././context/AuthContext'
import './LayoutsProfileU.scss'



export const LayoutsProfileU = () => {

  const navigate = useNavigate()
  const { user, logout,loading } = useAuth()

  const  handleLogout = async() => {
    await logout()
    navigate('/IngresarSesion')
  }


  if(loading){
    return <h1>Loading</h1>
  }

  return (
      <div className='Content_profleUser'>

        <div className='contProfileU'>
          <div className='ContFaceUser'>
            <img className='FaceUser' src='#'alt='#' />
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
            <div className='option Logout'>
              <p><button  onClick={handleLogout} >Cerrar Sesion</ button></p>
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
              <input name='email' className='boxInf' type="text" value={user.email} />
            </div>
          </div>
          <div className='contButtonSave'>
            <button className='buttons_global_StyleTatto'>Guardar</button>
          </div>
        </div>
      </div>
  )
}

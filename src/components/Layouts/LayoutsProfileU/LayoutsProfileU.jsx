import React from 'react'
import user1 from '../../../images/Tatuadores/user1.jpg'
import user2 from '../../../images/Tatuadores/user2.jpg'
import tatuador1 from '../../../images/Tatuadores/tatuador1.png'
import tatuador2 from '../../../images/Tatuadores/tatuador2.png'
import './LayoutsProfileU.scss'



export const LayoutsProfileU = () => {


  const EditProfileImg = () => {
    const modal = document.getElementById('editprofile')
    modal.style.visibility ="visible"
}
const ocultarImageUp= () => {
  const editprofile = document.getElementById('editprofile')
  editprofile.style.visibility = "hidden"
}
const confirmUp = () => {
  const editprofile = document.getElementById('editprofile')
  editprofile.style.visibility = "hidden"

}
  return (
      <div className='Content_profleUser'>

        <div className='contProfileU'>
          <div className='ContFaceUser'>
            <img className='FaceUser' src={user1} alt="" />
          </div>
          <div className='contNameU'>
            <h3 className='NameU'>Laura Sofia</h3>
          </div>
          <div className='optionsUser'>
            <div className='option'>
              <p>Edit Photo</p>
            </div>
            <div className='option'>
              <p>Modif Name</p>
            </div>
            <div className='option'>
              <p>Edit Password</p>
            </div>
            <div className='option'>
              <p>Modif Email</p>
            </div>
            <div className='option'>
              <p>Citas Agendadas</p>
            </div>
          </div>
        </div>

        <div className='contPublicP'>
          <div className='contTittle'>
            <h3>Public Profile</h3>
            <p>add information about yourself</p>
            <hr />
          </div>

          <div className='datesBasics'>
            <div className='contN'>
            <label htmlFor="text">Name</label>
              <input className='boxInf' type="text"  value='laura'/>
            </div>
            <div className='contN'>
              <label htmlFor="password">password</label>
              <input className='boxInf' type="text" value='1234'/>
            </div>
            <div className='contN'>
              <label htmlFor="email">Email</label>
              <input className='boxInf' type="text" value='Hedline'/>
            </div>
          </div>
          <div className='contButtonSave'>
            <button className='buttons_global_StyleTatto'>Save</button>
          </div>
        </div>
      </div>
  )
}

// {/* <div id='editprofile' className='modalImg'>
//             <div className='contButtonUp'>
//                 <h2>Editar perfil</h2>
//                 <div id='contaianputUp' className='buttons_global_StyleTatto'>
//                     <p >Actualizar foto de perfil</p>
//                     <input className='confirmarUp' type="file" />
//                 </div>
//                 <svg id='close' onClick={() => ocultarImageUp()} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
//                     <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
//                 </svg>
//                 <button onClick={() => confirmUp()} id='btnConfirmar' className='buttons_global_StyleTatto'>Confirmar</button>
//                 <button  id='btneditemail' className='buttons_global_StyleTatto'>Editar correo</button>
//                 <button  id='btneditname' className='buttons_global_StyleTatto'>Editar Nombre</button>
//             </div>
//         </div> */}
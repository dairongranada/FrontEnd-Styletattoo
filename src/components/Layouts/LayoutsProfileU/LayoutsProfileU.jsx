import React from 'react'
import user1 from '../../../images/Tatuadores/user1.jpg'
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
        <div className='FaceUser'>
          <div className='contImgUser'>
            <img className='User' src={user1} alt="" />
            <div className='contLa'>
              <a onClick={() => EditProfileImg()}  href="#"><span  className="material-symbols-outlined">edit</span> Editar</a>
            </div>
          </div>
          <div className='contInfoUser'>
            <h3>Laura Sofia</h3>
            <p>laurasofia1450@gmail.com</p>
            {/* <p>3145784958</p> */}
          </div>
        </div>
      

        <div className='agendas'>
          <div className='contAgendas'>
            <div className='InfoUser'>
              <h3>CITAS AGENDADAS</h3>
            </div>

            <div className='contCitasC'>
              <div className='cit'>
                <img className='TatuadorC' src={tatuador2} alt="" />
                <div className='Calend'>
                  <div className='infor'>
                    <p>Fecha : 31/12/2022</p>
                    <p>Hora : 6:00 pm</p>
                    <p>Direccion : cra5ta #20-52</p>
                    <button className='buttons_global_StyleTatto'>CANCELAR CITA</button>
                  </div>
                </div>
              </div>

              <div className='cit'>
                <img className='TatuadorC' src={tatuador1} alt="" />
                <div className='Calend'>
                  <div className='infor'>
                    <p>Fecha : 22/09/2022</p>
                    <p>Hora : 3:00 pm</p>
                    <p>Direccion : cra5ta #19-30</p>
                    <button className='buttons_global_StyleTatto'>CANCELAR CITA</button>
                  </div>
                </div>
              </div>
            </div>
          </div>    
        </div>
        <div id='editprofile' className='modalImg'>
            <div className='contButtonUp'>
                <h2>Editar perfil</h2>
                <div id='contaianputUp' className='buttons_global_StyleTatto'>
                    <p >Actualizar foto de perfil</p>
                    <input className='confirmarUp' type="file" />
                </div>
                <svg id='close' onClick={() => ocultarImageUp()} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
                    <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
                </svg>
                <button onClick={() => confirmUp()} id='btnConfirmar' className='buttons_global_StyleTatto'>Confirmar</button>
                <button  id='btneditemail' className='buttons_global_StyleTatto'>Editar correo</button>
                <button  id='btneditname' className='buttons_global_StyleTatto'>Editar Nombre</button>
            </div>
        </div>
      </div>
  )
}

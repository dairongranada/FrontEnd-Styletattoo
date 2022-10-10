import './PageProfileU.scss' 
import { React,useEffect,useState } from 'react'
import { useNavigate } from 'react-router'
import Cookies from 'universal-cookie';


/* F I R E B A S E */
import  imgProfiles  from '../../.././images/Icons/profile.jpeg'
export const PageProfileU = () => {

  const [ imgProfileU, setImgProfileU ] = useState()
  useEffect(()=>{setImgProfileU(imgProfiles)})

  const cookies = new Cookies();



  const loguot = ()=> {cookies.remove()}



  //Funcionalidad de Opciones
  const EditF = () => {
    const EditFoto = document.getElementById('ContImageUserEdit')
    EditFoto.style.visibility = "visible"

    const DatesBasics = document.getElementById('datesBasics')
    DatesBasics.style.visibility = "hidden"
  }

  const EditNames = () => {
    const EditFoto = document.getElementById('ContImageUserEdit')
    EditFoto.style.visibility = "hidden"

    const DatesBasics = document.getElementById('datesBasics')
    DatesBasics.style.visibility = "visible"
  }



  return (
      <div className='Content_profleUser'>

        <div className='contProfileU'>
          <input type="file" name='file' onChange={e=> console.log(e.target.files[0])} />
          <div className='ContFaceUser'>
            <img className='FaceUser' src={imgProfileU} alt={imgProfileU} />
          </div>
          <div className='contNameU'>
            <h3 className='NameU'>{cookies.get("name")} {cookies.get("lastName")}</h3>
          </div>
          <div className='optionsUser'>
            <div id='EditF' onClick={EditNames} className='option'>
              <p>Editar Nombre o Email</p>
            </div>
            <div id='EditF' onClick={EditF} className='option'>
              <p>Editar Foto De Perfil</p>
            </div>
            <div className='option'>
              <p>Editar Contraseña</p>
            </div>
            <div className='option'>
              <p>Citas Agendadas</p>
            </div>
            <div className='option Logout'>
              <p><button onClick={loguot}>Cerrar Sesion</ button></p>
            </div>
          </div>
        </div>

        <div className='contPublicP'>
          <div className='contTittle'>
            <h3>Public Profile</h3>
            <p>Agrege informacion sobre usted</p>
            <hr/>
          </div>

          <div id='datesBasics' className='datesBasics'>
            <div className='contN'>
            <label htmlFor="text">Nombre</label>
              <input name='name' className='boxInf' type="text"  defaultValue={cookies.get("name")}/>
            </div>
            <div className='contN'>
              <label htmlFor="text">Apellido</label>
              <input name='apellido'  className='boxInf' type="text" defaultValue={cookies.get("lastName")}/>
            </div>
            <div className='contN'>
              <label htmlFor="email">Correo</label>
              <input name='email' className='boxInf' type="text"value={cookies.get("email")} />
            </div>
          </div>

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
          </div>


          <div className='contButtonSave'>
            <button className='buttons_global_StyleTatto'>Guardar</button>
          </div>


        </div>
      </div>
  )
}

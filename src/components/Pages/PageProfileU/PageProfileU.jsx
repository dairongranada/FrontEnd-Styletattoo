import './PageProfileU.scss' 
import { React,useEffect,useState } from 'react'
import { useNavigate } from 'react-router'
import { Link } from 'react-router-dom'
import Cookies from 'universal-cookie';


/* F I R E B A S E */
import  imgProfiles  from '../../.././images/Icons/perfilUsuarioAnonim.jpg'
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
            <div id='EditF' onClick={EditNames} className='optionCustomer'>
              
              <Link to="/user/edit-profile">Editar Nombre o Email</Link>
            </div>
            <div id='EditF' onClick={EditF} className='optionCustomer'>
              <Link to="/user/edit-image">Editar Foto De Perfil</Link>
            </div>
            <div className='optionCustomer'>
              <Link to="/user/edit-password">Editar Contraseña</Link>
              {/* <a href="/editC">Editar Contraseña</a> */}
            </div>
            <div className='optionCustomer'>
              <Link to="/user/edit-quotes">Ciats Agendadas</Link>
            </div>
            <div className='optionCustomer Logout'>
              <p><button onClick={loguot}>Cerrar Sesion</ button></p>
            </div>
          </div>
        </div>

      </div>
  )
}

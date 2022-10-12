import './PageProfileU.scss' 
import { React,useEffect,useState } from 'react'
import { useNavigate } from 'react-router'
import { Link } from 'react-router-dom'
import Cookies from 'universal-cookie';


/* F I R E B A S E */
import  imgProfiles  from '../../.././images/Icons/perfilUsuarioAnonim.jpg'
export const LeftInfo = () => {

  const [ imgProfileU, setImgProfileU ] = useState()
  useEffect(()=>{setImgProfileU(imgProfiles)})

  const cookies = new Cookies();



  const loguot = ()=> {cookies.remove()}
  


  return (

        <div className='contProfileU'>
          <div>
            <div className='ContFaceUser'><img className='FaceUser' src={imgProfileU} alt={imgProfileU} /></div>
            <div className='contNameU'><h3 className='NameU'>{cookies.get("name")} {cookies.get("lastName")}</h3></div>
          </div>
          
          <ul className='optionsUser'>
            <li className='optionCustomer'><Link  to="/user/edit-profile">Nombre y correo</Link></li>
            <li className='optionCustomer'><Link  to="/user/edit-image">Foto de perfil</Link></li>
            <li className='optionCustomer'><Link  to="/user/edit-password">Contraseña</Link></li>
            <li className='optionCustomer'><Link  to="/user/edit-quotes">Citas agendadas</Link></li>
            <li className='optionCustomer'><Link  to="">Cerrar sesion</Link></li>
          </ul>
        </div>


  )
}

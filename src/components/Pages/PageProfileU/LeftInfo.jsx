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




  const loguotUser = ()=> {
    cookies.remove("name")
    cookies.remove("lastName")
    cookies.remove("id")
    cookies.remove("email")
    // window.location = "/IngresarSesion";
  }
  


  return (

        <div className='contProfileU'>
          <div>
            <div className='ContFaceUser'><img className='FaceUser' src={imgProfileU} alt={imgProfileU} /></div>
            <div className='contNameU'><h3 className='NameU'>s</h3></div>
          </div>
          
          <ul className='optionsUser'>
            <li className='optionCustomer'><Link  to="/user/edit-profile"><span className="material-symbols-outlined Icons-Options">badge</span>Nombre y correo</Link></li>
            <li className='optionCustomer'><Link  to="/user/edit-image"><span className="material-symbols-outlined Icons-Options">person</span>Foto de perfil </Link></li>
            <li className='optionCustomer'><Link  to="/user/edit-password"><span className="material-symbols-outlined Icons-Options">vpn_key</span>Contraseña </Link></li>
            <li className='optionCustomer'><Link  to="/user/edit-quotes"><span className="material-symbols-outlined Icons-Options">auto_stories</span>Citas agendadas</Link></li>
            <li className='optionCustomer'><Link  onClick={ loguotUser } to="/"><span className="material-symbols-outlined Icons-Options">logout</span>Cerrar sesion</Link></li>
          </ul>
        </div>


  )
}

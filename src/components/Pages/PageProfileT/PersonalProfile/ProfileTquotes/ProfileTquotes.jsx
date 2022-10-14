import { React,useEffect,useState } from 'react'
import { Link } from 'react-router-dom'
import  imgProfiles  from '../../../../.././images/Icons/perfilUsuarioAnonim.jpg'
import Cookies from 'universal-cookie';

export const ProfileTquotes = () => {

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
    <div className='BodyProfileUser'>
        <div className='Content_profleUser'>
            <div className='contProfileU'>
                <div>
                <div className='ContFaceUser'><img className='FaceUser' src={imgProfiles} alt={imgProfiles} /></div>
                <div className='contNameU'><h3 className='NameU'>Carlos Melo Toca</h3></div>
            </div>
            
            <ul className='optionsUser'>
                <li className='optionCustomer'><Link  to="/perfilTatuPersonal"><span className="material-symbols-outlined Icons-Options">badge</span>Nombre y correo</Link></li>
                <li className='optionCustomer'><Link  to="/perfilTatuPersonalFoto"><span className="material-symbols-outlined Icons-Options">person</span>Foto de perfil </Link></li>
                <li className='optionCustomer'><Link  to="/perfilT-PersonalPassword"><span className="material-symbols-outlined Icons-Options">vpn_key</span>Contraseña </Link></li>
                <li className='optionCustomer'><Link  to="/perfilT-PersonalQuotes"><span className="material-symbols-outlined Icons-Options">auto_stories</span>Citas agendadas</Link></li>
                <li className='optionCustomer'><Link  onClick={ loguotUser } to="/"><span className="material-symbols-outlined Icons-Options">logout</span>Cerrar sesion</Link></li>
            </ul>
    
        </div>
        <div className='ContentUserInfo'>
            <div className="contentHeaderTitle">
                <h3>Perfil Publico</h3>
                <p>Añade información sobre ti</p>
            </div>
        </div>
        </div>
    </div>
  )
}

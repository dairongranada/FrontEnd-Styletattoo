import { React,useEffect,useState } from 'react'
import { Link } from 'react-router-dom'
import  imgProfiles  from '../../../.././images/Icons/perfilUsuarioAnonim.jpg'
import Cookies from 'universal-cookie';

/*  N O T I F I C A C I O N E S  */
import { Toaster, toast } from 'react-hot-toast';

export const PersonalProfile = () => {

const [ imgProfileU, setImgProfileU ] = useState()
  useEffect(()=>{setImgProfileU(imgProfiles)})

    const cookies = new Cookies();

    /* Cerrar Sesion*/

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
                <div className='ContFaceUser'><img className='FaceUser' src={imgProfileU} alt={imgProfileU} /></div>
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
                <h3>Perfil Tatuador</h3>
                <p>Añade información sobre ti</p>
            </div>

            <div className='contPublicP'>
              <div className='contTittle'>
                <p>Agrege informacion sobre usted</p>
              </div>
            <div id='datesBasics' className='datesBasics'>
              <div className='contN'>
                <label htmlFor="text">Nombre</label>
                <input name='name' className='boxInf' type="text"/>
              </div>
              <div className='contN'>
                <label htmlFor="text">Apellido</label>
                <input name='apellido'  className='boxInf' type="text"/>
              </div>
              <div className='contN'>
                <label htmlFor="email">Correo</label>
                <input name='email' className='boxInf' type="text" />
              </div>
            </div>
            <div className='contButtonSave'>
              <button className='buttons_global_StyleTatto' onClick={() => toast.success('Se guardaron cambios')}>Guardar</button>
              {/* <button className='buttons_global_StyleTatto' onClick={() => toast.error('Nombre o apellidos incorrectos')}>Error</button> */}
            </div>
            <Toaster/>
          </div>
          </div>    
        </div>
    </div>
  )
}
/*  B O T O N    L O A D I N G  */
// {/* <button onClick={() => {
//                 toast.loading('Cargando')
                
//               }}
              
//               >enviar a funcion</button> */}
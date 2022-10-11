import './UserName.scss'
import {PageProfileU} from '../../PageProfileU.jsx'
import { React,useEffect,useState } from 'react'
import Cookies from 'universal-cookie';
import  imgProfiles  from '../../../../../images/Icons/profile.jpeg'




/* F I R E B A S E */


export const UserName = () => {
  const [ imgProfileU, setImgProfileU ] = useState()
  useEffect(()=>{setImgProfileU(imgProfiles)})
  const cookies = new Cookies();

  return (
    <div className='Content_profleUser'>
      <PageProfileU/>
      <div className='contPublicP'>
          <div className='contTittle'>
            <h3>Perfil Publico</h3>
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


          <div className='contButtonSave'>
            <button className='buttons_global_StyleTatto'>Guardar</button>
          </div>

      </div>
    </div>
  )
}
// {/* editar img perfil */}
// <div id='ContImageUserEdit' className='ContImageUserEdit'>
// <h3>Edita Tu Foto</h3>
// <img className='FaceUserEdit' src={imgProfileU} alt="" />
// <div className='Edit'>
//   <span class="material-symbols-outlined">
//     photo_camera
//   </span>
//   <p>editar</p>
// </div>
// </div>
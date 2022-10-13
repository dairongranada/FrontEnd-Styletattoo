import '../UserImage/UserImage.scss'
import { LeftInfo } from '../../LeftInfo.jsx'
import { React,useEffect,useState } from 'react'
import Cookies from 'universal-cookie';
import  imgProfiles  from '../../../../../images/Icons/profile.jpeg'


import './username.scss'


/* F I R E B A S E */


export const UserName = () => {
  const [ imgProfileU, setImgProfileU ] = useState()
  useEffect(()=>{setImgProfileU(imgProfiles)})

  const cookies = new Cookies();
  console.log(cookies);

  return (
    <div className='BodyProfileUser'>
      <div className='Content_profleUser'>
          <LeftInfo/>
          <div className='ContentUserInfo'>
            <div class="contentHeaderTitle">
                <h3>Perfil Publico</h3>
                <p>Añade información sobre ti</p>
            </div>

            <div className='contPublicP'>
              <div className='contTittle'>
                <p>Agrege informacion sobre usted</p>
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
        



          

      </div>
    </div>
    )
}
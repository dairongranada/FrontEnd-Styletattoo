import '../UserImage/UserImage.scss'
import { LeftInfo } from '../../LeftInfo.jsx'
import { React,useEffect,useState } from 'react'
import Cookies from 'universal-cookie';
import  imgProfiles  from '../../../../../images/Icons/profile.jpeg'




/* F I R E B A S E */


export const UserPassword = () => {

  return (
    <div className='BodyProfileUser'>
      <div className='Content_profleUser'>
        <LeftInfo/>
        <div className='ContentUserInfo'>
            <div class="contentHeaderTitle">
                <h3>Perfil Publico</h3>
                <p>Edite la configuración de su cuenta y cambie su contraseña aquí.</p>
            </div>
        </div>
      </div>
    </div>
  )
}
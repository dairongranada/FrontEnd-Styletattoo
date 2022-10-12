import '../UserImage/UserImage.scss'
import {LeftInfo} from '../../LeftInfo.jsx'
import { React,useEffect,useState } from 'react'
import Cookies from 'universal-cookie';
import  imgProfiles  from '../../../../../images/Icons/perfilUsuarioAnonim.jpg'




/* F I R E B A S E */


export const UserImage = () => {

  return (
    <div className='BodyProfileUser'>
      <div className='Content_profleUser'>
        <LeftInfo/>
        <div className='ContentUserInfo'>
            <div class="contentHeaderTitle">
                <h3>Perfil Publico</h3>
                <p>Añade una bonita foto tuya para tu perfil.</p>
            </div>

            <div className="addPhotoMessenge">
              <p>coloca una foto tuya aqui</p>
            </div>

            <div className='contIconImg'>
              <label htmlFor="text">Añda Su Imagen</label>
              <div className="boxIconImg">
                <div className="contCamera">
                  <span class="material-symbols-outlined">
                    add_a_photo
                  </span>
                </div>
                <img className='checkImg' src={imgProfiles} alt="" />
              </div>
              <button className='buttons_global_StyleTatto'>Guardar</button>
            </div>
        </div>
      </div>
    </div>
  )
}
import './UserImage.scss'
import {LeftInfo} from '../../LeftInfo.jsx'
import { React,useEffect,useState } from 'react'
import Cookies from 'universal-cookie';




/* F I R E B A S E */


export const TattoImage = () => {

  return (
    <div className='BodyProfileUser'>
      <div className='Content_profleUser'>
        <LeftInfo/>
        <div className='ContentUserInfo'>
            <div className="contentHeaderTitle">
                <h3>Perfil Publico</h3>
                <p>Añade una bonita foto tuya para tu perfil.</p>
            </div>
            <div className='contIconImg'>
              <label className='labelsTxtProfile' htmlFor="text">Añda Su Imagen</label>
              <div className="boxIconImg">
                <div className="contCamera">
                  <span className="material-symbols-outlined">
                    add_a_photo
                  </span>
                </div>
                <img className='checkImg' alt="" />
              </div>
              <button className='buttons_global_StyleTatto'>Guardar</button>
            </div>
        </div>
      </div>
    </div>
  )
}
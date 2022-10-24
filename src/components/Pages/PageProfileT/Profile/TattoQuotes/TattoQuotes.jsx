import '../TattoImage/UserImage.scss'
import { LeftInfo } from '../../LeftInfo.jsx'
import { React,useEffect,useState } from 'react'
import Cookies from 'universal-cookie';




/* F I R E B A S E */


export const TattoQuotes = () => {

  return (
    <div className='BodyProfileUser'>
      <div className='Content_profleUser'>
        <LeftInfo/>
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
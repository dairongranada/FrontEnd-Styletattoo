import React from 'react'
import user1 from '../../../images/Tatuadores/user1.jpg'
import './LayoutsProfileU.scss'



export const LayoutsProfileU = () => {
  return (
    <div className='Content_profleUser'>
        <div className='FaceUser'>
          <div className='contImgUser'>
            <img className='User' src={user1} alt="" />
            <div>
              <a href=""><span class="material-symbols-outlined">edit</span></a>
            </div>
          </div>
        </div>
    </div>
  )
}

import React from 'react'
import tatu from '../../../images/Tatuadores/tatuador11.jpg'
import './PageConsejos.scss'


export const PageConsejos = () => {
  return (
    <div className='contConsejos' >
      <div className='contseondConsejos'>
        <h3>Consejos</h3>
        <img className='imgconsejos' src={tatu} alt="" />
      </div>
    </div>
  )
}

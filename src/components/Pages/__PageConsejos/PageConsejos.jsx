import React from 'react'
import tatu from '../../../images/Tatuadores/tatuador11.jpg'
import './PageConsejos.scss'


export const PageConsejos = () => {
  return (
    <div className='contConsejos' >
      <div className='contseondConsejos'>
        <h3>Consejos</h3>
        <img className='imgconsejos' src={tatu} alt="" />
        <li><a className='buttons_global_StyleTatto' href="/artistas">LEER MAS SOBRE</a></li>
      </div>
    </div>
  )
}

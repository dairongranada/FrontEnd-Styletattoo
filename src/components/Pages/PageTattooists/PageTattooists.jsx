import React,{useState} from 'react'
import './SearchTattoo.scss'

import { NavFooter } from '../../Layouts/NavigationFooter/NavFooter/NavFooter';
import { NavigationBar } from '../../Layouts/NavigationBar/NavigationBar';
import { CardTatuadores } from './CardTatuadores';



export const PageTattooists = () => {
    const tattoo = [
        {id:1,name: 'lewis holguin', image:'https://res.cloudinary.com/dsoovcjav/image/upload/v1660826276/ImagesTattoo/tatuador1_rvghbe.png',descripcion:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit nostrum eius laboriosam', ciudad:'montenegro'},
        {id:2,name: 'chris nuñez', image:'https://res.cloudinary.com/dsoovcjav/image/upload/v1660826273/ImagesTattoo/tatuador2_efzh1a.png', descripcion:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit nostrum eius laboriosam', ciudad:'calarca'},
        {id:3,name: 'oliver peck', image:'https://res.cloudinary.com/dsoovcjav/image/upload/v1660826274/ImagesTattoo/tatuador3_jd7kt9.png',descripcion:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit nostrum eius laboriosam?', ciudad:'armenia'},
    ]




  return(
    <>
    <NavigationBar/>
    <div className='Content_Tattooists'>
      <div className='Content_TattooistsTitle'>
        <h1>ARTISTAS</h1>
        <p style={{marginLeft:"5rem"}}>Contamos con un equipo de artistas profesionales e integrales que se 
          desempeñan en las diferentes técnicas o estilos del tatuaje, entre ellos, 
          sombras, realismo, sombras, color, realismo color, oriental, tradicional, 
          neotradicional, libre, liners, black work, black and grey y cover up</p>
      </div>
      

      <main className='main-contenido'>
        {               
                tattoo.map( tat => (
                  <CardTatuadores 
                    key ={tat.id}
                    id ={tat.id}
                    image ={tat.image}
                    name ={tat.name}
                    descripcion ={tat.descripcion}
                    ciudad = {tat.ciudad}
                  />
              ))}

      </main>
    </div>
    <NavFooter/>
    </>

  )
}
import React, { useState, useEffect } from 'react'
import './SearchTattoo.scss'

import { getAllTatuadores } from '../../.././Helpers/ApiConsumer/Tattuadores';

import { NavFooter } from '../../Layouts/NavigationFooter/NavFooter/NavFooter';
import { NavigationBar } from '../../Layouts/NavigationBar/NavigationBar';
import { CardTatuadores } from './CardTatuadores';




export const PageTattooists = () => {

  const [tatuadores, setTatuadores] = useState([]);


  useEffect(() => {

    getAllTatuadores()
      .then(info => {
        setTatuadores(info.data);
      })
  }, [])
  console.log(tatuadores);



  /* Capturar el valor */
  const CapValues =(e)=>{
    const data = e.target.value;

    /*FILTRO*/
    const filter = tatuadores.filter(tattoo => tattoo.PerfilProfesional[0].municipio.includes(data))
    setTatuadores(filter)
  }


  return (
    <>
      <NavigationBar />
      <div className='Content_Tattooists'>
        <div className='Content_TattooistsTitle'>
          <h1>ARTISTAS</h1>
          <p style={{ marginLeft: "5rem" }}>Contamos con un equipo de artistas profesionales e integrales que se
            desempeñan en las diferentes técnicas o estilos del tatuaje, entre ellos,
            sombras, realismo, sombras, color, realismo color, oriental, tradicional,
            neotradicional, libre, liners, black work, black and grey y cover up</p>
        </div>

        <div className="contSelectorTattuadors">
          <select onChange={CapValues} >
            <option>selecciona el artista mas cerca de ti</option>
            <option value="quimbaya">quimbaya</option>
            <option value="calarca">calarca</option>
          </select>
        </div>

        {tatuadores.map(data => (
        (data.perfilProfesional == 0) &&
          <main className='LoaderArtist'>
            <div className="loaderArtist">
              <div className="spinner">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>
              <p style={{ marginTop: "10px" }} >No hay artistas en este momento...</p>
            </div>
          </main>
          ))}




        <main className='main-contenido'>
          {tatuadores.map(data => (
            (data.PerfilProfesional.length >= 1) &&
            <CardTatuadores
              key={data.id}
              id={data.id}
              image={data.PerfilProfesional[0].img}
              first_name={data.first_name}
              last_name={data.last_name}
              descripcion={data.PerfilProfesional[0].description}
              departament={data.PerfilProfesional[0].departament}
              municipio={data.PerfilProfesional[0].municipio}
              ids={data.PerfilProfesional[0].id}
            />
          ))}
        </main>

        <div>
          <svg class="waves" xmlns="http://www.w3.org/2000/svg"
            viewBox="0 24 150 28" preserveAspectRatio="none" shape-rendering="auto">
            <defs>
              <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
            </defs>
            <g class="parallax">
              <use href="#gentle-wave" x="48" y="7" fill="rgba(18, 18, 18,)" />
            </g>
          </svg>
        </div>
      </div>

      <NavFooter />
    </>

  )
}
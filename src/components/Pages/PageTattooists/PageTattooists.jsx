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


        {(tatuadores.length === 0) &&
          <main className='LoaderArtist'>
            <div class="loaderArtist">
            <div class="spinner">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <p style={{marginTop:"10px"}} >No hay artistas en este momento...</p>
            
            </div>
          </main>
        }

        {(!!tatuadores) &&
          <main className='main-contenido'>
            {tatuadores.map(tat => (
              <CardTatuadores
                key={tat.id}
                id={tat.id}
                image={tat.image}
                first_name={tat.first_name}
                last_name={tat.last_name}
                descripcion={tat.perfilProfessional.description}
                ciudad={tat.perfilProfessional.municipio}
              />
            ))}
        </main>
        }


      </div>
      <NavFooter />
    </>

  )
}
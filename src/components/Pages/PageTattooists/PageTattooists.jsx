import React, { useState, useEffect } from 'react'
import './SearchTattoo.scss'

import { getAllTatuadores } from '../../.././Helpers/ApiConsumer/Tattuadores';

import { NavFooter } from '../../Layouts/NavigationFooter/NavFooter/NavFooter';
import { NavigationBar } from '../../Layouts/NavigationBar/NavigationBar';
import { CardTatuadores } from './CardTatuadores';



export const PageTattooists = () => {
  const [tatuadores, setTatuadores] = useState([]);
  const [perfilProfesional, setperfilProfesional] = useState({});



  useEffect(() => {

    getAllTatuadores()
      .then(info => {
        setTatuadores(info.data);
        setperfilProfesional(info.data[0].PerfilProfesional)
      })
  }, [])

        console.log(perfilProfesional)


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


        {(tatuadores.length === 0 && tatuadores.length === 1 && perfilProfesional.length === 0   ) &&
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
            <p style={{marginTop:"10px"}} >No hay artistas en este momento...</p>
            
            </div>
          </main>
        }

        {(perfilProfesional.length === 1) &&
          <main className='main-contenido'>
            {tatuadores.map(tat => (
                <CardTatuadores
                  key={tat.id}
                  id={tat.id}
                  image={tat.PerfilProfesional[0].img}
                  first_name={tat.first_name}
                  last_name={tat.last_name}
                  descripcion={tat.PerfilProfesional[0].description}
                  departament={tat.PerfilProfesional[0].departament}
                  municipio={tat.PerfilProfesional[0].municipio}
                  ids={tat.PerfilProfesional[0].id}
                />
              
            ))}
        </main>
        }


      </div>
      <NavFooter />
    </>

  )
}
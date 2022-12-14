import React, { useState, useEffect } from 'react'
import './SearchTattoo.scss'

import { getAllTatuadores } from '../../.././Helpers/ApiConsumer/Tattuadores';

import { NavFooter } from '../../Layouts/NavigationFooter/NavFooter/NavFooter';
import { NavigationBar } from '../../Layouts/NavigationBar/NavigationBar';
import { CardTatuadores } from './CardTatuadores';




export const PageTattooists = () => {

  const [tatuadores, setTatuadores] = useState([]);
  const [BuscarTat, setBuscarTat] = useState([]);
  const [validacion, setValidacion] = useState();




  useEffect(() => {

    getAllTatuadores()
      .then(info => {
        setTatuadores(info.data);
        setValidacion(true)
      })
  }, [])

  const allTaoits = tatuadores.filter(data => data.rol.includes('[ROLE_ARTISTA]'))

  console.log(allTaoits);

  /* Capturar el valor */
  const CapValues =(e)=>{
    const data = e.target.value;
 
    /*FILTRO*/
    const filter = allTaoits.filter(tattoo => tattoo.PerfilProfesional[0].municipio.includes(data))
    setBuscarTat(filter)
    setValidacion(false)
    if (data == "primero") {
      setValidacion("mapeo")
    }
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
          <select className='MenuSelectorTattuadors' onChange={CapValues} >
            <option value="primero">Selecciona Tu Municipio</option>
            <option value="armenia">Armenia</option>
            <option value="buenavista">Buenavista</option>
            <option value="calarca">Calarca</option>
            <option value="quimbaya">Quimbaya</option>
            <option value="montenegro">Montenegro</option>
            <option value="pijao">Pijao</option>
            <option value="genova">Genova</option>
            <option value="tebaida">Tebaida</option>
            <option value="filandia">Filandia</option>
            <option value="circasia">Circasia</option>
            <option value="cordoba">Cordoba</option>
            <option value="salento">Salento</option>
          </select>
        </div>

        {BuscarTat.map(data => (
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




          {(validacion == true || validacion == "mapeo") &&
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
                  like = {data.iDispo[0].like}
                />
              ))}
            </main>
          }
          
          {(validacion == false) &&
            <main className='main-contenido'>
            {BuscarTat.map(data => (
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
                like = {data.iDispo[0].like}
              />
            ))}
          </main>
          }

      
    

        <div>
          <svg className="waves" xmlns="http://www.w3.org/2000/svg"
            viewBox="0 24 150 28" preserveAspectRatio="none" shapeRendering="auto">
            <defs>
              <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
            </defs>
            <g className="parallax">
              <use href="#gentle-wave" x="48" y="7" fill="rgba(18, 18, 18,)" />
            </g>
          </svg>
        </div>
      </div>

      <NavFooter />
    </>

  )
}
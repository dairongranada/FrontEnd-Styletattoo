import React from 'react'
import '../___PagePiercings/PagePiercings.scss'
import { NavigationBar } from '../../Layouts/NavigationBar/NavigationBar';
import { Piercing } from '../../../Helpers/PagePiercing/Piercing';
import { useState } from 'react';
import { Paginacion } from './Paginacion';
import img from '../../.././images/Piercing/fondo.jpg'
import { NavFooter } from '../../Layouts/NavigationFooter/NavFooter/NavFooter';
import img5 from '../../../images/Tattos/pircings_dark.jpg'


export const PagePiercings = () => {

  const [pagina, setPagina] = useState(1)
  const [porPagina, setPorpagina] = useState(3)

  const maximo = Piercing.length / porPagina
  console.log(maximo);

  const FunctionScroll = () => {
    window.scroll({
      top: 1530,
      behavior: 'smooth'
    })
  }

  return (
    <>
      <NavigationBar />
      <div className='BigContPagePiercing'>
        <div className='ContConterPierncing'>
          <div className='ContImgPierncing'>
            <img src={img} alt="" />
          </div>
        </div>
        <div className='ContInfoP3'>
          <div className='ContInfopiercing'>
            <h3>todo sobre piercing en style tattoo</h3>
            <p>Si estás pensando en hacerte un piercing, primero infórmate bien investigando. Si tienes menos de 18 años, en algunos lugares no te dejarán hacerte un piercing sin el consentimiento de tus padres, y hay otros lugares que exigen que esté presente uno de los padres durante la perforación. En algunos estados, a los menores no se les permite hacerse piercings.</p>
            <button onClick={FunctionScroll} className='buttons_global_StyleTatto' >¿ SABER MAS ?</button>
          </div>
        </div>
      </div>
      <div className='ContainertatletypeP' >
        <div className='tipopiercing'>
          <h3>Tipos de piercing en</h3>
        </div>
        <div className='titlestylepier'>
          <h3>style tattoo</h3>
        </div>
      </div>
      <div className='Conttextpiercing'>
        <div className='Textinformapierc'>
          <p>Algunos tipos de piercing son :<br></br>Lóbulo central y superior Lóbulo transversal Tragus y antitragus Orbital Snug Conch Daith Rock Industrial Helix</p>
        </div>
      </div>
      <div className='containerPoke'>
        <div className='pokeContainer'>
          {Piercing
            .slice((pagina - 1) * porPagina, (pagina - 1) * porPagina + porPagina)
            .map((piercing, index) => {
              return <div key={index} className='imgContainer'>
                <img src={piercing.Image} alt="" />
                <div className='infoimg'>
                  <h1>{piercing.type}</h1>
                </div>
              </div>

            })}
        </div>
      </div>
      <Paginacion pagina={pagina} setPorpagina={setPorpagina} setPagina={setPagina} maximo={maximo} />
      <div className='PresentationMitos'>
        <div className="contTextPresentation">
          <div className="contTittleStyleP">
            <h2>Mitos Falsos Del</h2>
            <h2 className='TittlePiercingNThown'>Piercing</h2>
          </div>
          <div className='mito' >
            <p>Desde que las perforaciones comenzaron a tomar popularidad y aceptación en la sociedad, hasta nuestros días, donde perforarse alguna parte del cuerpo es sumamente rápido, fácil y tan común que hasta se considera una moda, han existido toda clase de mitos en torno al asunto Riesgos de toda índole, cosas que no deben hacerse y otras cuestiones similares entran en este grupo de mitos, algunos ciertos, otros falsos y otros que simplemente son graciosos e incomprensibles. Para conocer un poco más sobre los mitos y falsedades sobre hacerse un piercing, hoy analizaremos brevemente algunos de los más comunes.</p>
          </div>
          <br />
          <div className='contbutonmitoPie'>
            <a href="/all/artist/style"><button className='buttons_global_StyleTatto'>¿Ver mas?</button></a>
          </div>
        </div>
        <img className='TattoHeadPres' src={img5} alt="" />
      </div>
      <NavFooter />
    </>
  )
}

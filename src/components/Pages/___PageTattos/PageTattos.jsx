import React from 'react'
import './PageTattos.scss'
import studioTattoProcess from '../../../images/Tattos/tattoInProcessingDarck.jpg'

import { NavigationBar } from '../../Layouts/NavigationBar/NavigationBar';
import { NavFooter } from '../../Layouts/NavigationFooter/NavFooter/NavFooter';


export const PageTattos = () => {

 /*Animacion de Scroll*/

  const FunctionScroll = () => {
    window.scroll({
      top: 650,
      bottom: 0,
      behavior: 'smooth'})
  }

  return (
    <>
    <NavigationBar />
    <div className='contPrimaryPagesT'>
      <div className='HeadPresentationPgT'>
        <div className="TextCPages">
          <p>Style Tatto sabe todo sobre el tatuaje</p>
          <div className="StileTCont">
            <h2>Style</h2>
            <h2 className='ThowTittlePg'>Tattoo</h2>
          </div>
          <p>Creamos arte y contamos historias en tu piel</p>
          <br />
          <button onClick={FunctionScroll} className='buttons_global_StyleTatto'>¿Ver mas?</button>
        </div>
      </div>

      <div className="BodPresentationInfor">
        <div className="lentDarckInformation">

          <div className='BoxImgStudyTatto'>
            <img className='studioTattoInProcess' src={studioTattoProcess} alt="studioTattoProcess" />
          </div>

          <div className="contSecontTittleInfor">
            <div className="contTittleTheInf">
              <h2>Mitos Falsos Del</h2>
              <h2 className='MitTatt'>Tatuaje</h2>
            </div>
            <div className="contMitTatt">
              <mark>“CUALQUIERA SE PUEDE TATUAR”.</mark>
              <p>
                Falso. Esta técnica no es indicada para personas menores de edad, embarazadas, que sufran
                de dermatitis infecciosa (rubéola, sarampión, escarlatina), de psoriasis, o 
                que tengan tendencia a desarrollar 
                queloides, lunares o lesiones pigmentadas, o trastornos en la coagulación.
              </p>
            </div>
            <a href="/all/artist/style">
              <button className='buttons_global_StyleTatto'>¿Ver mas?</button>
            </a>
          </div>
        </div>
      </div>
    </div>
    <NavFooter/>
  </>
  )
}

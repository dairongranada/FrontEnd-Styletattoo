import React from 'react'
import './PageTattos.scss'
// import tatu from '../../../images/Tattos/pircings_dark.jpg'
// import img4 from '../../../images/Tattos/portafolio7.jpg'
import img5 from '../../../images/Tattos/portafolio9.jpg'
import studioTattoProcess from '../../../images/Tattos/tattoInProcessingDarck.jpg'

import { NavigationBar } from '../../Layouts/NavigationBar/NavigationBar';
import { NavFooter } from '../../Layouts/NavigationFooter/NavFooter/NavFooter';


export const PageTattos = () => {

  const FunctionScroll = () => {
    window.scroll(0, 600)
  }

  const FunctionScrollUp = () => {
    window.scroll(600, 0)
  }

  return (
    <>
    <NavigationBar />
    <div className='contPrimary'>
      <div className='HeadPresentationPt'>
        <div className="contTextHead">
          <p>Style Tatto sabe todo sobre el tatuaje</p>
          <div className="contTittleStyleT">
            <h2>Style</h2>
            <h2 className='TittleTattoNThow'>Tatto</h2>
          </div>
          <p>Creamos arte y contamos historias en tu piel</p>
          <br />
          <button onClick={FunctionScroll} className='buttons_global_StyleTatto'>¿Ver mas?</button>
        </div>
        <img className='TattoHeadPres' src={img5} alt="" />
      </div>

      <div className="BodPresentInformation">
        <div className="lentDarckInf">

          <div className='BoxImgStudyT'>
            <img className='studioTattoProcess' src={studioTattoProcess} alt="studioTattoProcess" />
          </div>

          <div className="contSecontTittleIn">
            <div className="contTittleTheInf">
              <h2>Mitos Flasos Del</h2>
              <h2 className='MitTattoTnT'>Tatuaje</h2>
            </div>
            <div className="contMitTattoL">
              <mark>“CUALQUIERA SE PUEDE TATUAR”.</mark>
              <p>
                Falso. Esta técnica no es indicada para personas menores de edad, embarazadas, que sufran
                de dermatitis infecciosa (rubéola, sarampión, escarlatina), de psoriasis, o 
                que tengan tendencia a desarrollar 
                queloides, lunares o lesiones pigmentadas, o trastornos en la coagulación.
              </p>
            </div>
            <button onClick={FunctionScrollUp} className='buttons_global_StyleTatto'>¿Ver mas?</button>
          </div>
        </div>
      </div>
    </div>
    <NavFooter/>
  </>
  )
}

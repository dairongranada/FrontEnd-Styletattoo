import React from 'react'
import './PageTattos.scss'
import studioTattoProcess from '../../../images/Tattos/tattoInProcessingDarck.jpg'

import { NavigationBar } from '../../Layouts/NavigationBar/NavigationBar';
import { NavFooter } from '../../Layouts/NavigationFooter/NavFooter/NavFooter';
import machineTattoosAndo from '../../../images/Tattos/machineTattoosAndo.jpg'


export const PageTattos = () => {

 /*Funcion de Scroll*/

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
        <div className="lentDrackHandsInT">
          <div className="TextCPages">
            <img className='ImgTMachineOp' src={machineTattoosAndo} alt="" />
          </div>

          <div className='StSsbTattoo'>
            <div className="StileTCont">
              <h2>Todo sobre el</h2>
              <h2 className='ThowTittlePg'>Tatuaje</h2>
            </div>
            <p>En Style Tattoo te recomendamos siempre que a la hora de hacerte tu tatauaje
              asegurate de que tu tatuador tenga todos los elementos necesarios para la realizacion de tu
              obra de arte y sobre todo aseguratede que las agujas de la maquina sean nuevas para evitar
              problemas como infecciones, enfermedades de transmisión sanguínea, hepatitis B, hepatitis C etcetra.  
            </p>
            <div className='ContButtonVM'>
              <button onClick={FunctionScroll} className='buttons_global_StyleTatto VermS'>¿Ver mas?</button>
            </div>
          </div>

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

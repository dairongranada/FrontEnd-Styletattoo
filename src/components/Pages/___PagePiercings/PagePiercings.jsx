import React from 'react'
import '../___PagePiercings/PagePiercings.scss'
import { NavigationBar } from '../../Layouts/NavigationBar/NavigationBar';
import { Piercing } from '../../../Helpers/PagePiercing/Piercing';
import { useState } from 'react';
import { Paginacion } from './Paginacion';


export const PagePiercings = () => {

  const [pagina, setPagina] = useState(1)
  const [porPagina, setPorpagina] = useState(3)

    const maximo = Piercing.length / porPagina
console.log(maximo);

  return (
    <>
      <NavigationBar />
      <div className='BigCont'>
        <div className='ContInfoP'>
          <div className='InfImgO'>
            <div className='ContInfor'>
              
            </div>
            <div className='contImg'>
             
            </div>
          </div>

          <div className='InfImgT'>
            <div className='contImgT'>
              
            </div>
            <div className='ContInforT'>
              
            </div>
          </div>
        </div>
      </div>
      <div className='BigCont3'>
        <div className='ContInfoP3'>
         <h3>tipos de piercing</h3>
          <div className='containerPoke'>
            <div className='pokeContainer'>
              {Piercing
                .slice((pagina - 1) * porPagina, (pagina - 1) * porPagina + porPagina)
                .map((piercing, index) => {
                  return <div key={index} className='imgContainer'>
                    <img src={piercing.Image} alt="" />
                  </div>

                })}
                <Paginacion pagina={pagina} setPagina={setPagina} maximo={maximo} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

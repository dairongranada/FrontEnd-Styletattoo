import React from 'react'
import'../___PagePiercings/PagePiercings.scss'
import img4 from '../../../images/Tattos/pircingOreja.jpg'
import img5 from '../../../images/Tattos/pircingblue.jpg'


export const PagePiercings = () => {
    return (
    <div className='BigCont'> 
      <div className='ContInfoP'>
        <div className='InfImgO'>
          <div className='ContInfor'>
            <h3>Sobre El Piercing</h3>
            <p>
            La práctica de adornar el cuerpo con perforaciones ya existía entre los pueblos y civilizaciones antiguas, y presentaba diversos fines. No hay fecha exacta en la que haya aparecido la práctica del piercing o perforación. Estas clases de ornamentos fueron utilizados por diversas civilizaciones antiguas que les proporcionaron diversos significados.

Por ejemplo, para los mayas y aztecas el piercing tenía fines religiosos. Mientras que los egipcios e indios se perforaban diversas partes del cuerpo para hacer notar sus posiciones en la jerarquía social o en el sistema de castas. Para los romanos, las perforaciones corporales fueron asunto de vanidad, nada más que adornos.

Para el siglo XIX esta práctica cayó en desuso y, de hecho, empezó a ser discriminada.
            </p>
          </div>
          <div className='contImg'>
            <img src={img4} alt="" />
          </div>
        </div>

        <div className='InfImgT'>
          <div className='contImgT'>
            <img src={img5} alt="" />
          </div>
          <div className='ContInforT'>
            <p>
            4000 a.C.  En las Islas Aleutianas, esquimales y pueblos locales utilizaban piercings en los labios como una forma de representar diversas etapas importantes en la vida de un ser humano, eran ritos de iniciación que marcaban la entrada a la pubertad, el matrimonio y el comienzo de una vida como cazador.

3000 a.C.  Los antiguos egipcios portaban adornos con perforaciones en el ombligo que los distinguían como miembros de la realeza. Los faraones solían utilizar estas piezas para indicar su posición en el poder.
2000 a.C.  En la antigua China, tanto en la dinastía Xia como en la Shang, existen registros sobre la existencia de aretes y piercings. En aquella época, era toda una tradición que a las jóvenes de 12 y 13 años que contraían matrimonio se les incrustaran agujas de oro en las orejas.
            </p>
          </div>
        </div>

        <div className='ContViewButton'>
          <li><a className='buttons_global_StyleTatto' href="/artistas">VER MAS</a></li>
        </div>
      </div>
    </div>
  )
}

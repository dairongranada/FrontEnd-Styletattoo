import React from 'react'
import './PageTattos.scss'
import tatu from '../../../images/Tattos/pircings_dark.jpg'
import { NavigationBar } from '../../Layouts/NavigationBar/NavigationBar';
import img4 from '../../../images/Tattos/portafolio7.jpg'
import img5 from '../../../images/Tattos/portafolio9.jpg'



export const PageTattos = () => {
  return (
    <>
    <NavigationBar/>
    <div className='contPrimary'> 
      <div className='contBack'>
        <div className='contInfo' >
          <h3>Todo sobre Tatuajes</h3>
          
            <p>
            El cuidado de tu nuevo tatuaje depende del tipo y la magnitud del trabajo realizado. No obstante, normalmente, tendrás que tener los siguientes cuidados:

            Mantén la piel tatuada limpia. Usa agua y jabón común con suavidad. Mientras te duchas, evita los chorros de agua directos sobre la piel recién tatuada. Para secar el área, da toques suaves, no frotes.
            Usa humectante. Aplica un humectante suave sobre la piel tatuada, varias veces al día.
            Evita la exposición al sol. No expongas el área tatuada al sol durante por lo menos algunas semanas.
            Evita nadar. Mantente fuera de piscinas, tinas de agua caliente, ríos, lagos y otras masas de agua mientras tu tatuaje se cura.
            No uses nada que podría adherirse al tatuaje.
            Espera hasta 2 semanas para que se cure. No quites las costras, esto aumenta el riesgo de infección y puede dañar el diseño y provocar cicatrices.
            Si piensas que tu tatuaje podría estar infectado o te preocupa que no se esté curando correctamente, comunícate con tu médico. Si tu tatuaje no es lo que esperabas y te interesa quitártelo, consulta a tu dermatólogo acerca de la cirugía láser u otras opciones para la remoción de tatuajes.


            </p>
        </div>
        <div className='contImg'>
          <img src={tatu} alt="" />
        </div>
    
      </div>
    </div>
    <hr />
    <div className='BigCont2'>
      <div className='ContInfoP2'>
        <div className='InfImgO2'>
          <div className='ContInfor2'>
            <h3>Falsos mitos sobre los tatuajes</h3>
            <p>
            Cierto. Diversos estudios han atestiguado que durante los meses que dure el embarazo no es recomendable 
            realizarse un tatuaje debido a que existe un porcentaje -aunque pequeño de contraer enfermedades
             o que surjan complicaciones relativas al tatuaje que pongan en peligro la salud del bebé. Antes o después
             , sin problema. No recomendable durante el embarazo. Como añadido, los expertos desaconsejan también los tatuajes en la zona lumbar 
             ya que no se puede utilizar anestesia epidural si la punción tiene que atravesar la zona con tinta del tatuaje. <br></br><br></br>Pese a lo que pudiera parecernos, el 84% de las personas adultas que se realiza un tatuaje no se arrepiente de habérselo hecho y no se lo quitaría o borraría nunca, según un estudio de Harris Interactive publicado en 2008. Pero, si estamos algo descontentos con el diseño, queremos retocar un viejo tatuaje o quizá de forma radical, borrarlo por completo de nuestro cuerpo, ¿se puede? Por supuesto. El proceso es caro pero definitivo. La cirugía con láser o tecnología fotoacústica  son algunas de las alternativas. Los tonos de colores más complejos de borrar son los verdes, azules claros, amarillos, naranjas y fluorescentes.
            </p>
          </div>
          <div className='contImg2'>
            <img src={img4} alt="" />
          </div>
        </div>
        <hr />
        <div className='InfImgT2'>
          <div className='contImgT2'>
            <img src={img5} alt="" />
          </div>
          <hr />
          <div className='ContInforT2'>
            <h2>¿Las personas con tatuajes pueden donar sangre?</h2>
            <p>
 Por supuesto. Esta duda es fruto de un antiguo prejuicio que relacionaba los tatuajes con “personas no sanas”. La única precaución que hay que tomar es esperar unos seis meses (en algunos países un año entero) una vez realizado el tatuaje, porque las defensas del tatuado se encuentran en niveles bajos tras la realización del dibujo con tinta en la piel, al igual que como cuando estás resfriado. Se trata de un impedimento temporal.
            </p>
          </div>
        </div>

        <div className='ContViewButton2'>
          <li><a className='buttons_global_StyleTatto' href="/all/artist/style">VER MAS</a></li>
        </div>
      </div>
    </div>
    </>
  )
}

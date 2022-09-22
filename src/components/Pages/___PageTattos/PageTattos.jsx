import React from 'react'
import './PageTattos.scss'
import tatu from '../../../images/Tattos/pircings_dark.jpg'

export const PageTattos = () => {
  return (
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
            Elije la ropa con cuidado. No uses nada que podría adherirse al tatuaje.
            Espera hasta 2 semanas para que se cure. No quites las costras, esto aumenta el riesgo de infección y puede dañar el diseño y provocar cicatrices.
            Si piensas que tu tatuaje podría estar infectado o te preocupa que no se esté curando correctamente, comunícate con tu médico. Si tu tatuaje no es lo que esperabas y te interesa quitártelo, consulta a tu dermatólogo acerca de la cirugía láser u otras opciones para la remoción de tatuajes.


            </p>
            <li><a className='buttons_global_StyleTatto' href="/artistas">MAS</a></li>
        </div>
        <div className='contImg'>
          <img src={tatu} alt="" />
        </div>
    
      </div>
    </div>
  )
}

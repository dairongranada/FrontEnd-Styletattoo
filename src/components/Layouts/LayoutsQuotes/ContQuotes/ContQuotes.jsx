import React from 'react'
import '../ContQuotes/ContQuotes.scss'

export const ContQuotes = () => {
  return (
    <div className='backgruondCont'>
        <div className='ShadowCont'>
            <form className='FormQuot'>
                <h3>Intruce la Infromacion</h3>
                <p>Fecha</p>
                <input className='input_global_style' type="text" required />
                <br />
                <h3>hora</h3>
                <input type="time"/>
                <div className='buttons_global_StyleTatto' id='addfile'>
                    <p>Muestranos tu idea</p>
                    <input id='btnEnviar' type="file" required/>
                </div>
                <p>dejanos un mensaje</p>
                <textarea name="" id="" cols="48" rows="6"></textarea>
                <button className='buttons_global_StyleTatto'>Enviar</button>
            </form>
        </div>
    </div>
  )
}

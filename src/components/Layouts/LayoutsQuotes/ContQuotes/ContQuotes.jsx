import React from 'react'
import '../ContQuotes/ContQuotes.scss'

export const ContQuotes = () => {
  return (
    <div className='backgruondCont'>
        <div className='ShadowCont'>
            <form className='FormQuot'>
                <h3>Intruce la Infromacion</h3>
                <input type="text" required placeholder='Fecha'/>
                <p>Hora</p> <input type="time"/>
                <div id='addfile' className='buttons_global_StyleTatto'>
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

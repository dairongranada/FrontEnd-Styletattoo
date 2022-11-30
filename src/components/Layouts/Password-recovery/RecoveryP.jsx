import React from 'react'
import './RecoveryP.scss'
import emailjs from '@emailjs/browser';


export const RecoveryP = () => {

   
    const sendEmail = (event)=>{
        event.preventDefault();
        /// ALERTA CHIMBA
      emailjs.sendForm('service_2ubfxp4','template_kw2sbzv',event.target,'xn_UfOyxzbh71P4TH')
        .then(response => console.log(response))
    
       setTimeout(() => {
            window.location.reload(false);
        }, 2000);
        
 }

    return (
        <div className='ContentcARDrECOVERYpASS'>
            <div className="cardRecoveryP">
                <h4 className="title">Recuperar Contraseña </h4>
                <p className='TextParrafo'>Por favor introduce tu correo electrónico<br/> para recuperar tu contraseña</p>
                <form className='FormRecovery' onSubmit={sendEmail} >
                    <div className="field">
                        <input autocomplete="off" id="logemail" placeholder="Email" className="input-field" name="logemail" type="email"/>
                    </div>
                    <button className="buttons_global_StyleTatto" type="submit">Enviar</button>
                </form>
            </div>


        </div>
    )
}


import React, { useState } from 'react'
import './RecoveryP.scss'
import emailjs from '@emailjs/browser';


export const RecoveryP = () => {
    const [first, setfirst] = useState(true)
    const [Second, setSecond] = useState(false)
    const [contcodigo, setcontcodigo] = useState()


    // GENERAR CODIGO DE VERIFICACION DE CORREO 

    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    }

    let CodigoParaEmail = (getRandomInt(111111, 99999))
    console.log(CodigoParaEmail)


    const sendEmail = (event) => {
        event.preventDefault();

        
        /// ALERTA CHIMBA
        emailjs.sendForm('service_2ubfxp4', 'template_kw2sbzv', event.target, 'xn_UfOyxzbh71P4TH')
            .then(response => (
                console.log(response.status),
                setfirst(false))
            )
    }
    const CapValues =(e)=>{
        const data = e.target.value;
        setcontcodigo(e.target.value)
    }
    
    
    const validacionCodigo = (event) => {
        if (contcodigo == CodigoParaEmail) {
            
            setSecond(true)
        }
    }
    
    return (
        <>
            <div className='ContentcARDrECOVERYpASS'>
                {first == true &&
                    <div className="cardRecoveryP">
                        <h4 className="title">Recuperar Contraseña </h4>
                        <p className='TextParrafo'>Por favor introduce tu correo electrónico<br /> para recuperar tu contraseña</p>
                        <form className='FormRecovery' onSubmit={sendEmail} >
                            <div className="field">
                                <input className="input-codigo" name="codigo" type="text" value={CodigoParaEmail} />
                                <input autoComplete="off" id="logemail" placeholder="Email" className="input-field" name="logemail" type="email" />
                            </div>
                            <button className="buttons_global_StyleTatto" type="submit">Enviar</button>
                        </form>
                    </div>
                }
                {first == false &&
                    <div className="cardRecoveryP">
                        <h4 className="title">Recuperar Contraseña </h4>
                        <p className='TextParrafo'>Por favor introduce el codigo<br /> Que enviamos a tu Correo</p>
                        <form className='FormRecovery' onSubmit={sendEmail} >
                            <div className="field">
                                <input onChange={CapValues} autoComplete="off" id="logemail" placeholder="codigo" className="input-field" name="logemail" type="numer" />
                            </div>
                            <button onClick={validacionCodigo} className="buttons_global_StyleTatto" type="submit">Enviar</button>
                        </form>
                    </div>
                }
                {Second == true &&
                    <div className="cardRecoveryP">
                        <h4 className="title">Recuperar Contraseña </h4>
                        <form className='FormRecovery' onSubmit={sendEmail} >
                            <div className="field">
                                <input autoComplete="off" id="logemail" placeholder="Contraseña" className="input-field" name="logemail" type="password" />
                                <input  style={{marginTop:"1.4rem"}} autoComplete="off" id="logemail" placeholder="Confirmar contraseña" className="input-field" name="logemail" type="password" />

                            </div>
                            <button className="buttons_global_StyleTatto" type="submit">Enviar</button>
                        </form>
                    </div>
                }


            </div>
        </>

    )
}


import React, { useState,useEffect } from 'react'
import './RecoveryP.scss'
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const RecoveryP = () => {
    const [first, setfirst] = useState("true")
    const [Second, setSecond] = useState(false)
    const [contcodigo, setcontcodigo] = useState()
    const [validarCodigo, setvalidarCodigo] = useState()




    // GENERAR CODIGO DE VERIFICACION DE CORREO 
    let CodigoParaEmail

    useEffect(() => {
        function getRandomInt(min, max) {
            return Math.floor(Math.random() * (max - min) + min);
        }
        CodigoParaEmail = (getRandomInt(111111, 99999))
        setvalidarCodigo(CodigoParaEmail)
    }, [])

    console.log(validarCodigo)




    const sendEmail = (event) => {
        event.preventDefault();

        
        /// ALERTA CHIMBA
        emailjs.sendForm('service_2ubfxp4', 'template_kw2sbzv', event.target, 'xn_UfOyxzbh71P4TH')
            .then(response => (
                console.log(response.status),
                setfirst("false"))
            )
    }
    const CapValues =(e)=>{setcontcodigo(e.target.value)}
    
    console.log(contcodigo);
    const validacionCodigo = () => {
        if (contcodigo == validarCodigo) {
            setSecond(true)
            setfirst("destroy")
            console.log("El codigo es verdadero");
        }
        if (contcodigo != validarCodigo) {
            toast.error('Error: Tu codigo es incorrecto',{
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });

                setTimeout(function () {
                    toast.warn('Advertencia: Solo Tienes 3 Intentos para colocar Tu codigo',{
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                        });
                }, 2000);
        
            
        }
    }
    
    return (
        <>
            <div className='ContentcARDrECOVERYpASS'>
                {first == "true" &&
                    <div className="cardRecoveryP">
                        <h4 className="title">Recuperar Contraseña </h4>
                        <p className='TextParrafo'>Por favor introduce tu correo electrónico<br /> para recuperar tu contraseña</p>
                        <form className='FormRecovery' onSubmit={sendEmail} >
                            <div className="field">
                                <input className="input-codigo" name="codigo" type="text" value={validarCodigo} />
                                <input autoComplete="off" id="logemail" placeholder="Email" className="input-field" name="logemail" type="email" />
                            </div>
                            <button className="buttons_global_StyleTatto" type="submit">Enviar</button>
                        </form>
                    </div>
                }
                {first == "false" &&
                    <div className="cardRecoveryP">
                        <h4 className="title">Recuperar Contraseña </h4>
                        <p className='TextParrafo'>Por favor introduce el codigo<br /> Que enviamos a tu Correo</p>
                        <form className='FormRecovery' >
                            <div className="field">
                                <input onChange={CapValues} autoComplete="off" id="logemail" placeholder="codigo" className="input-field" name="logemail" type="numer" />
                            </div>
                            <p onClick={validacionCodigo} className="buttons_global_StyleTatto">Enviar</p>
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


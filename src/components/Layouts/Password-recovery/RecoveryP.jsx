import React, { useState, useEffect } from 'react'
import './RecoveryP.scss'
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Formik, Form, Field } from 'formik';
import { NavigationBar } from '.././NavigationBar/NavigationBar';
import { NavFooter } from '.././NavigationFooter/NavFooter/NavFooter';
import { CambiarContraseña } from '../../.././Helpers/ApiConsumer/PostUsers'



export const RecoveryP = () => {
    const [first, setfirst] = useState("true")
    const [Second, setSecond] = useState(false)
    const [contcodigo, setcontcodigo] = useState()
    const [validarCodigo, setvalidarCodigo] = useState()

    const [active, setActive] = useState(0);


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
    const CapValues = (e) => { setcontcodigo(e.target.value) }

    console.log(contcodigo);
    const validacionCodigo = () => {
        if (contcodigo == validarCodigo) {
            setSecond(true)
            setfirst("destroy")
            console.log("El codigo es verdadero");
        }
        if (contcodigo != validarCodigo) {
            toast.error('Error: Tu codigo es incorrecto', {
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
                toast.warn('Advertencia: Solo Tienes 3 Intentos para colocar Tu codigo', {
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
    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("usuario");
        localStorage.removeItem("InfoUser");
        window.location = "/IngresarSesion";
    }



    return (
        <>
            <NavigationBar />
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
                        <Formik
                            initialValues={{
                                new_password: '',
                                confirm_password: ''
                            }}

                            //validaciones de cambio de contraseñas

                            validate={(val) => {
                                let rgb = {}
                                if (!val.confirm_password) {
                                    rgb.confirm_password = "Porfavor confirma tu Contraseña"
                                }
                                if (val.confirm_password.length >= 6) {
                                    if (val.confirm_password !== val.new_password) {
                                        setActive(0)
                                    }
                                    else {
                                        setActive(1)
                                    }
                                }



                            }}



                            //----------------------------------------------------------------

                            onSubmit={(valores, { resetForm }) => {
                                let validacion = {};


                                CambiarContraseña({
                                    new_password: valores.new_password,
                                }
                                ).then(info => {
                                    validacion = info
                                    if (validacion.status === 200) {

                                        toast.success('Contraseña Cambiada')
                                        resetForm()
                                        handleLogout()
                                        setTimeout(function () {
                                            window.location = '/IngresarSesion';
                                        }, 1500);
                                    } else if (validacion.status === 500) {
                                        toast.error("Verifica Tu contraseña")
                                    } else if (validacion.status === 400) {
                                        toast.error("Verifica Tu contraseña")
                                    }
                                })
                            }}
                        >

                            <Form >
                                <div className='ContentBoxtext'>
                                    <label className='label_global_style'>Nueva Contraseña</label>
                                    <Field name='new_password' className='TheTextBox' required type="password" placeholder='Cambia tu contraseña' />
                                </div>

                                <div className='ContentBoxtext'>
                                    <label className='label_global_style'>Confirmar Contraseña</label>
                                    <Field name='confirm_password' className='TheTextBox' required type="password" placeholder='Cambia tu contraseña' />
                                </div>
                                <div className='ContentBoxButtonConfirm'>
                                    <button id={`${active === 0 && "btnBlocked"}`} type='sumbit' className='ButtonConfirmDates'>Guardar</button>
                                </div>

                            </Form>

                        </Formik>
                    </div>
                }


            </div>
            <NavFooter />
        </>

    )
}


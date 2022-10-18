import './PageFormSe.scss'
import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom";


import { LoginUserAuth } from '../../.././Helpers/ApiConsumer/PostUser';
import { parseJwt } from '../../.././Helpers/getPayLoad'

import { Formik, Form, Field, ErrorMessage } from 'formik';
import axios from 'axios'
import md5 from 'md5'
import Cookies from 'universal-cookie';



export const PageFormSe = () => {

    const navigate = useNavigate()




    return (
        <div className="Content_FormsPrincipalLogin BackGround">
            <div className="Content_Forms">
                <h2>INICIO DE SESION</h2>
                <Formik
                    initialValues={{
                        email: '', password: ''
                    }}

                    validate={(valores) => {
                        let errores = {};

                        if (!valores.email.trim()) { errores.email = 'Por favor ingrese un correo'; }
                        else if (!/^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/.test(valores.email)) { errores.email = 'El correo no es un correo válido'; }
                        else if (!valores.password.trim()) { errores.password = 'Por favor ingrese una contaseña'; }


                        return errores;
                    }}

                    onSubmit={(valores, { resetForm }) => {

                        LoginUserAuth({
                            LoginEmail: valores.email,
                            LoginPassword: valores.password
                        }).then(info => {
                            console.log(info.status);
                            // console.log(valores);

                        });
                    }}

                    a
                >
                    <Form action="">
                        <div className="inputContent">
                            <Field
                                name='email'
                                className='input_global_styleLogin'
                                required type="text"
                            />

                            <label className='label_global_style'>Correo</label>
                        </div>
                        <div className="inputContent">
                            <Field
                                name='password'
                                className='input_global_styleLogin'
                                required type="password"
                            />

                            <label className='label_global_style'>Contraseña</label>
                        </div>
                        <div>
                            <button type='submit' className="buttons_global_StyleTatto">Iniciar sesión</button>
                        </div>
                        <div className="questions">
                            <Link to="#"> ¿A olvidado Su contraseña? </Link>
                            <Link to="/Registro">¿No tienes una Cuenta?</Link>
                        </div>
                    </Form>
                </Formik>
            </div>
        </div>
    )
}
import './PageFormSe.scss'
import './animation.scss'
import { MdOutlineCancel } from 'react-icons/md';
import { React, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { LoginUserAuth } from '../../.././Helpers/ApiConsumer/AuthLogin';
import { parseJwt } from '../../.././Helpers/getPayLoad'

import { Formik, Form, Field } from 'formik';

import toast, { Toaster } from 'react-hot-toast';


// EL ESTADO
// 1 - BIEN
// 2 - Inactivo
// 3 - PENDIENTE

export const PageFormSe = () => {

    const navigate = useNavigate()

    const [loading, setLoading] = useState(false)
    const [status, setStatus] = useState(null);
    const [mssStatus, setMssStatus] = useState(false);
    const [messageStatus, setMessageStatus] = useState("");



    return (
        <>
        <div className='BackGround'>
            <div className="Content_FormsPrincipalLogin">
                <div className="Content_Forms">
                    <Toaster/>
                    <div className='CloseBackLogin'> <a href="/"><MdOutlineCancel /></a></div>
                    <h2>INICIO DE SESION</h2>
                    <Formik
                        initialValues={{ email: '', password: '' }}

                        validate={(valores) => {
                            let errores = {};

                            if (!valores.email.trim()) { errores.email = 'Por favor ingrese un correo'; }
                            else if (!/^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/.test(valores.email)) { errores.email = 'El correo no es un correo válido'; }
                            else if (!valores.password.trim()) { errores.password = 'Por favor ingrese una contaseña'; }

                            return errores;
                        }}

                        onSubmit={(valores, { resetForm }) => {
                            setLoading(true);

                            LoginUserAuth(
                                valores
                            )
                                .then(info => {
                                    setStatus(info.status)
                                    if (info.status === 200) {

                                        let tokenInfo = info.data.authentication.jwt.access;
                                        let TokenAcet = tokenInfo
                                        let token = info.data.authentication.token;
                                        let InfoUser = info.data.info;


                                        let rol = info.data.info.rol;
                                        localStorage.setItem("token", token);
                                        localStorage.setItem("TokenAcces", TokenAcet);
                                        localStorage.setItem("InfoUser", JSON.stringify(InfoUser));
                                        localStorage.setItem("usuario", JSON.stringify(parseJwt(tokenInfo, rol, TokenAcet)));

                                        const data = info.data.info;


                                        console.log(data);

                                        if (data.activate === true) {
                                            resetForm();
                                            if (data.rol === "[ROLE_USUARIO]") {
                                                toast.success('Bienvenido a StyleTattoo')
                                                setTimeout(function () {
                                                    window.location = '/user/edit-profile';
                                                }, 1500);
                                            }
                                            else if (data.rol === "[ROLE_ARTISTA]") {
                                                toast.success('Bienvenido a StyleTattoo')
                                                setTimeout(function () {
                                                    window.location = '/userTatto/edit-profile';
                                                }, 1500);
                                            } else if (data.rol === "[ROLE_ADMIN]") {
                                                console.log(11);
                                                setTimeout(function () {
                                                    window.location = 'http://localhost:8000/admin/';
                                                }, 1500);
                                            }
                                        }
                                        else if (data.activate === false) {
                                            console.log("Inactivo");
                                            localStorage.removeItem("token");
                                            localStorage.removeItem("usuario");
                                            setMessageStatus("Tu estado es inactivo. Comunicate con el administrador para solventar el problema");
                                            setMssStatus(true);
                                        }
                                        else {
                                            console.log("Pendiente");
                                            localStorage.removeItem("token");
                                            localStorage.removeItem("usuario");
                                            setMessageStatus("Tu registro está siendo validado, por favor se paciente");
                                            setMssStatus(true);
                                        }
                                        setLoading(false);
                                    }

                                    if (info.status === 500) {
                                        setLoading(false);
                                    }

                                    if (info.status === 0) {
                                        setLoading(false);
                                    }
                                });

                            if (status === 401) { toast.error('Verifica tus datos'); }
                            if (status === 0) { toast.error('Estamos Presentando problemas,Intentalo más tarde'); }

                        }}
                    >
                        {({ errors, touched  })=> (
                        <Form>
                            <div className="inputContent">
                                <Field
                                    autoComplete = 'off'
                                    name='email'
                                    className='input_global_styleLogin'
                                    required type="text"
                                />
                                {touched.email && errors.email && <span style={{ color: "var(--colorOrange2)" }} >{errors.email}</span>}

                                <label className='label_global_style'>Correo</label>
                            </div>
                            <div className="inputContent">
                                <Field
                                    autoComplete = 'off'
                                    name='password'
                                    className='input_global_styleLogin'
                                    required type="password"
                                />
                                {touched.password && errors.password && <span style={{ color: "var(--colorOrange2)" }} >{errors.password}</span>}   
                                
                                <label className='label_global_style'>Contraseña</label>
                            </div>
                            <div>
                                <button type='submit' className="buttons_global_StyleTatto">Iniciar sesión</button>
                            </div>
                            <div className="questions">
                                <Link to="#"> ¿Has olvidado tu contraseña? </Link>
                                <Link to="/Registro">¿No tienes una Cuenta?</Link>
                            </div>
                        </Form>
                         )}
                    </Formik>
                </div>
            </div>
          
                <div>
                    <svg class="waves" xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 24 150 28" preserveAspectRatio="none" shape-rendering="auto">
                        <defs>
                            <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
                        </defs>
                        <g class="parallax">
                            <use href="#gentle-wave" x="48" y="0" fill="rgba(18, 18, 18, 0.769)"/>
                            <use href="#gentle-wave" x="48" y="3" fill="rgba(18, 18, 18, 0.869)"/>
                            <use href="#gentle-wave" x="48" y="5" fill="rgba(18, 18, 18, 0.869)"/>
                            <use href="#gentle-wave" x="48" y="7" fill="rgba(18, 18, 18, 0.969)"/>
                        </g>
                    </svg>
                </div>
        </div>
        </>
    )
}
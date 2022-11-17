import './PageFormSe.scss'
import { MdOutlineCancel } from 'react-icons/md';
import { React, useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'

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
        <div className="Content_FormsPrincipalLogin BackGround">
            <div className="Content_Forms">
            <div className='CloseBackLogin'> <a href="/"><MdOutlineCancel /></a></div>
                <h2>INICIO DE SESION</h2>
                <Formik
                    initialValues={{email: '', password: ''}}

                    validate={(valores) => {
                        let errores = {};

                        if (!valores.email.trim()) { errores.email = 'Por favor ingrese un correo'; }
                        else if (!/^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/.test(valores.email)) { errores.email = 'El correo no es un correo válido'; }
                        else if (!valores.password.trim()) { errores.password = 'Por favor ingrese una contaseña'; }

                        return errores;
                    }}

                    onSubmit={( valores, {resetForm} ) => {
                        setLoading(true);
                        
                        LoginUserAuth( 
                            valores 
                            )
                            .then( info => {
                            setStatus(info.status)
                            if ( info.status === 200 ) {

                                let tokenInfo = info.data.authentication.jwt.access;
                                let TokenAcet = tokenInfo
                                let token = info.data.authentication.token;
                                let InfoUser = info.data.info;


                                let rol = info.data.info.rol;
                                localStorage.setItem("token", token);
                                localStorage.setItem("TokenAcces", TokenAcet);
                                localStorage.setItem("InfoUser", JSON.stringify( InfoUser));
                                localStorage.setItem("usuario", JSON.stringify(parseJwt( tokenInfo, rol, TokenAcet )));

                                const data = info.data.info;
        

                                console.log(data);

                                if ( data.activate === true) {
                                    resetForm();
                                    if ( data.rol === "[ROLE_USUARIO]" ) {  
                                        toast.success('Bienvenido a StyleTattoo')
                                        setTimeout(function(){
                                            window.location = '/user/edit-profile';
                                        }, 1500);        
                                    }
                                    else if ( data.rol === "[ROLE_ARTISTA]" ){
                                        toast.success('Bienvenido a StyleTattoo')
                                        setTimeout(function(){
                                            window.location = '/userTatto/edit-profile';
                                        }, 1500);    
                                    }
                                }
                                else if( data.activate === false ) {
                                    console.log( "Inactivo" );
                                    localStorage.removeItem("token");
                                    localStorage.removeItem("usuario");
                                    setMessageStatus( "Tu estado es inactivo. Comunicate con el administrador para solventar el problema" );
                                    setMssStatus(true);
                                }
                                else {
                                    console.log( "Pendiente" );
                                    localStorage.removeItem("token");
                                    localStorage.removeItem("usuario");
                                    setMessageStatus( "Tu registro está siendo validado, por favor se paciente" );
                                    setMssStatus(true);
                                }
                                setLoading(false);
                            }

                            if ( info.status===500){
                                setLoading(false);}

                            if ( info.status===0){
                                setLoading( false );}
                        });

                        if (status === 401) {toast.error('Verifica tus datos');}
                        if (status === 0) {toast.error('Estamos Presentando problemas,Intentalo más tarde');}

                    }}
                >
                    <Form>      
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
                            <Link to="#"> ¿Has olvidado tu contraseña? </Link>
                            <Link to="/Registro">¿No tienes una Cuenta?</Link>
                        </div>
                    </Form>
                </Formik>

            </div>
        </div>
    </>
    )
}
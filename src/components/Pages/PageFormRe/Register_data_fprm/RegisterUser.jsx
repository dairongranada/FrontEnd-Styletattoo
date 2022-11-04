import './sass/userRegister.scss'

import React, { useState } from 'react'
import { Link } from 'react-router-dom';
// import emailjs from 'emailjs-com'

import { GoArrowSmallLeft } from 'react-icons/go';
import { AiOutlineUserAdd } from 'react-icons/ai';


import { Formik, Form, Field } from 'formik';
import { signUpUser } from '../../../../Helpers/ApiConsumer/AuthRegistro';
import { ButtonUI } from '../../.././UI/ButtonUI/ButtonUI';



export const RegisterUser = ( { change_step } ) => {

    const [serverError, setServerError] = useState(false);
    const [loading, setLoading] = useState(false);
    const [duplicatedData, setDuplicatedData] = useState(false);
    const [registered, setRegistered] = useState(false);


    //MENSAJE AL CORREO AL REGISTRARSE
    // const sendEmail = (event)=>{
    //     event.preventDefault();
    //     // ALERTA CHIMBA
    //     emailjs.sendForm('service_abfu3cf','template_u6bd07e',event.target,'Hc--z4JAH7zQRaJwb')
    //     .then(response => {
    //         alert('Gracias por registarse')
    //     })
    //     .catch(err => console.error(err))
    
    //     setTimeout(() => {
    //         window.location = "/IngresarSesion";
    //     }, 2000);
        
    // }


    const [showPassword, setShowPassword] = useState("password")
    const handlePassword = () => {
        if ( showPassword === "password") {setShowPassword("text");}
        else {setShowPassword("password")}
    }





    return (
        <>

            {/* -----  REGISTRO COMO USUARIO  ----- */}
            <div id='register_steps'>
                <div className='step color_step'>1</div >
                <div className='linea_step color_linea' >——</div>
                <div className='step color_step'>2</div>
            </div>
            <div className="cont_icon">
                <div onClick={change_step} className='rows_register'><GoArrowSmallLeft/></div>
                <div className="user_icon"><AiOutlineUserAdd /></div>
            </div>

            
                <div className='Content_FormsPrincipal'>
                    <Formik 
                        initialValues={{
                            username:"",
                            first_name:"",
                            last_name:"",
                            cellPhone:"",
                            email:"",
                            password:"",
                            passwordConfirm: '',
                            rol:"[ROLE_USUARIO]",
                        }}
                        
                        validate={(valores) => {
                            let ers = {}
                            // VALIDACION NOMBRE
                            if (!valores.first_name){ 
                                ers.first_name = "Porfavor ingresa un nombre"
                            }else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.first_name)) {
                                ers.first_name = "Porfavor ingresa solo letras"}

                            // VALIDACION APELLIDO
                            if (!valores.last_name){ 
                                ers.last_name = "Porfavor ingresa un apellido"
                            }else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.last_name)) {
                                ers.last_name = "Porfavor ingresa solo letras"}

                            // VALIDACION EMAIL
                            if (!valores.email){ 
                                ers.email = "Porfavor ingresa un Correo"
                            }else if(!/^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/.test(valores.email)) {
                                ers.email = "Porfavor ingresa un Correo valido @"}

                                 // VALIDACION cellPhone 
                            if (!valores.cellPhone){ 
                                ers.cellPhone = "Porfavor ingresa un numero"
                            }else if(!/^\d{10,10}$/.test(valores.cellPhone)) {
                                ers.cellPhone = "Porfavor ingresa solo numeros"}



                            // VALIDACION CONTRASEÑA
                            if (!valores.password){ 
                                ers.password = "Porfavor ingresa una contraseña"
                            }else if((valores.password.length < 8)) {
                                ers.password = "Contraseña mayor a 8 caracteres "}
                                
                            // VALIDACION CONFIRMAR CONTRASEÑA
                            if (!valores.passwordConfirm){ 
                                ers.passwordConfirm = "Porfavor confirma tu Contraseña"
                            }else if(valores.password !== valores.passwordConfirm) {
                                ers.passwordConfirm = "Las Contraseñas no Coinciden"
                            }

                            return ers  

                        }}

                        onSubmit = {( valores, { resetForm } ) => {
                            let validacion = {};
                            
                            signUpUser({
                                username:"UserStyle",
                                first_name:valores.first_name,
                                last_name:valores.last_name,
                                cellPhone:valores.cellPhone,
                                email:valores.email,
                                password:valores.password,
                                rol:"[ROLE_USUARIO]",
                                image:"https://i.postimg.cc/T2N5CnwK/perfil-Usuario-Anonim.png"

                            }).then( info => {
                                validacion = info
                                setLoading(true);
                                if ( validacion.status === 400 ) {
                                    setDuplicatedData( true );
                                    setServerError( false );
                                    setLoading(false);
                                }
                                else if( validacion.status === 500 ){
                                    setServerError( true );
                                    setDuplicatedData( false );
                                    setLoading( false );
                                }
                                else {
                                    setDuplicatedData( false );
                                    resetForm();
                                    setLoading(false);
                                    setRegistered( true );
                                    window.location = "/IngresarSesion";
                                }
                            });


                        }}
                        

                    >
                        {({ errors, touched  })=> (
                            <Form className='formRegisterUser'>
                                { duplicatedData && <p id='registerUser__error'>El ya se encuentran registrados.</p> }
                                <div className="inputContent">
                                    <div>
                                        <Field
                                            className='global_styleRegistroIn'   
                                            name='first_name' 
                                            id='first_name' 
                                            type="text"
                                            placeholder='Nombre'
                                        />
                                        {touched.name && errors.name && <span>{errors.name}</span>}
                                    </div>
                                    <div>
                                        <Field
                                            className='global_styleRegistroIn'
                                            name='last_name'  
                                            id='last_name'   
                                            type="text"
                                            placeholder='Apellido'

                                        />                                                                                
                                        {touched.last_name && errors.last_name && <span>{errors.last_name}</span>}   
                                    </div>
                                </div>
                                    <div className="inputContent">
                                        <div>
                                            <Field 
                                                className='global_styleRegistroIn EmailInput'
                                                name='email' 
                                                id='email' 
                                                type="email" 
                                                placeholder='Correo'

                                            />              
                                            {touched.email && errors.email && <span>{errors.email}</span>}   
                          
                                        </div>
                                        <div>
                                            <Field 
                                                className='global_styleRegistroIn cellPhoneLogin'
                                                name='cellPhone' 
                                                id='cellPhone' 
                                                type="text" 
                                                placeholder='Celular'
                                                maxLength='10'
                                            /> 
                                             {touched.cellPhone && errors.cellPhone && <span>{errors.cellPhone}</span>}
                             
                            
                                        </div>
                                    </div>
                                    <div className="inputContent">
                                        <div>
                                            <Field 
                                                
                                                className='global_styleRegistroIn'
                                                name='password' 
                                                id='password' 
                                                type="password"
                                                placeholder='Contraseña'

                                            />                                            
                                            {touched.password && errors.password && <span>{errors.password}</span>}   
                                        </div>
                                        <div>
                                            <Field 
                                                
                                                className='global_styleRegistroIn'
                                                name='passwordConfirm' 
                                                id='passwordConfirm' 
                                                type="password"
                                                placeholder='Contarseña Contraseña'


                                            />                                            
                                            {errors.passwordConfirm && <span className='emailSpam' >{errors.passwordConfirm}</span>}   

                                        </div>
                                    </div>
                                    <div className="sameline terminos-condiciones">
                                        <label>
                                            <input required type="checkbox" />
                                            <span className='checkBox'></span>
                                        </label>
                                        <p className='AceptTerm'>Acepto los <Link className='anchor' to="/terminos-condiciones">Terminos y condiciones</Link></p>
                                    </div>


                                    <div className='Btn_Register'>
                                        <ButtonUI 
                                            styleName = "buttons_global_StyleTatto"
                                            text="Registrar"
                                            type={"submit"}
                                        />
                                    </div>

                                <div className= "questions">
                                    <a href="/IngresarSesion">Ya tienes una Cuenta?</a>
                                </div>
                            </Form>
                            
                        )}
                      
                    </Formik>
                </div>
             
            </>
    )
}

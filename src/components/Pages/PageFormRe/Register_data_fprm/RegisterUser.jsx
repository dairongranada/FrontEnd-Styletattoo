import React, { useState } from 'react'
import { AiOutlineUserAdd } from 'react-icons/ai';
import { GoArrowSmallLeft } from 'react-icons/go';

import './sass/userRegister.scss'

import { postUsuario,getUsuario } from '../../../.././Helpers/ApiConsumer/PostUser';


import { Formik, Form, Field } from 'formik';
import axios from 'axios'
import md5 from 'md5'

export const RegisterUser = ( {change_step} ) => {

    const [serverError, setServerError] = useState(false);
    const [loading, setLoading] = useState(false);
    const [duplicatedData, setDuplicatedData] = useState(false);
    const [registered, setRegistered] = useState(false);
    const [terminos, setTerminos] = useState(false);


    const [showPassword, setShowPassword] = useState("password")

    const handlePassword = () => {
        if ( showPassword === "password") {setShowPassword("text");}
        else {setShowPassword("password")}
    }

    console.log(getUsuario([Object]));

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
                            name:'',
                            lastName:'',
                            email: '',
                            password: '',
                            passwordConfirm: '',
                            urlImage:" ",
                        }}
                        
                        validate={(valores) => {
                            let ers = {}
                            // VALIDACION NOMBRE
                            if (!valores.name){ 
                                ers.name = "Porfavor ingresa un nombre"
                            }else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.name)) {
                                ers.name = "Porfavor ingresa solo letras"}

                            // VALIDACION APELLIDO
                            if (!valores.lastName){ 
                                ers.lastName = "Porfavor ingresa un apellido"
                            }else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.lastName)) {
                                ers.lastName = "Porfavor ingresa solo letras"}

                            // VALIDACION EMAIL
                            if (!valores.email){ 
                                ers.email = "Porfavor ingresa un Correo"
                            }else if(!/^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/.test(valores.email)) {
                                ers.email = "Porfavor ingresa un Correo valido @"}
                            
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

                        onSubmit={(valores, {resetForm}) =>{

                            let validacion = {};

                            postUsuario(valores)
                            .then( info => {
                                validacion = info
                                setLoading(true);
                                if ( validacion.status === 400 ) {
                                    setDuplicatedData( true );
                                    setServerError( false );
                                    setLoading(false);
                                    alert( 'Error usuario ya registrado')
                                }
                                else {
                                    setDuplicatedData( false );
                                    resetForm();
                                    setLoading(false);
                                    setRegistered( true );
                                    alert( 'Usuario registrado')
                                    // window.location = "/IngresarSesion";
                                }
                            });

                            
                        }}
                        
                        

                    >
                        {({ errors, touched  })=> (
                            <Form className='formRegisterUser'>
                                <div className="inputContent">
                                    <div>
                                        <Field
                                            className='global_styleRegistroIn'   
                                            name='name' 
                                            id='name' 
                                            type="text"
                                        />
                                            <label  htmlFor='name' className='label_global_styleRegistro'>Nombre</label>
                                        {touched.name && errors.name && <span>{errors.name}</span>}
                                    </div>
                                    <div>
                                        <Field
                                            
                                            className='global_styleRegistroIn'
                                            name='lastName'  
                                            id='lastName'   
                                            type="text"
                                        />                                        
                                        <label htmlFor='lastName' className='label_global_styleRegistro'>Apellido</label>
                                        
                                        {touched.lastName && errors.lastName && <span>{errors.lastName}</span>}   
                                    </div>
                                </div>
                                    <div className="inputContent">
                                        <Field 
                                            
                                            className='global_styleRegistroIn EmailInput'
                                            name='email' 
                                            id='email' 
                                            type="email" 
                                        />                                        
                                        <label htmlFor='email' className='label_global_styleRegistro'>Correo electronico</label>
                                    </div>
                                        <div className='errosEmail'>{touched.email && errors.email && <span>{errors.email}</span>}</div>
                                    <div className="inputContent">
                                        <div>
                                            <Field 
                                                
                                                className='global_styleRegistroIn'
                                                name='password' 
                                                id='password' 
                                                type="password"

                                            />                                            
                                            <label htmlFor='password' className='label_global_styleRegistro'>Contraseña</label>
                                            {touched.password && errors.password && <span>{errors.password}</span>}   
                                        </div>
                                        <div>
                                            <Field 
                                                
                                                className='global_styleRegistroIn'
                                                name='passwordConfirm' 
                                                id='passwordConfirm' 
                                                type="password"

                                            />                                            
                                            <label htmlFor='confirmPassword' className='label_global_styleRegistro'>Confirmar Contraseña</label>

                                            
                                            {errors.passwordConfirm && <span className='emailSpam' >{errors.passwordConfirm}</span>}   

                                        </div>
                                    </div>
                                    <div className='Btn_Register'>
                                        <button type='submit' className="buttons_global_StyleTatto">Registrarse</button>
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

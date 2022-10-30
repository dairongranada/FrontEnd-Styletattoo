import React ,{useState} from 'react'
import { AiOutlineUserAdd } from 'react-icons/ai';
import { GoArrowSmallLeft } from 'react-icons/go';
import { Link } from 'react-router-dom';

import './sass/userRegister.scss'

import { signUpTatto } from '../../../.././Helpers/ApiConsumer/AuthRegistro';

import { ButtonUI } from '../../.././UI/ButtonUI/ButtonUI'


import { Formik, Form, Field } from 'formik';


export const RegisterTatto = ( { change_step } ) => {

    const [serverError, setServerError] = useState(false);
    const [loading, setLoading] = useState(false);
    const [duplicatedData, setDuplicatedData] = useState(false);
    const [registered, setRegistered] = useState(false);






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
                            name:'',
                            lastName:'',
                            email: '',
                            password: '',
                            telefono: '',
                            passwordConfirm: '',
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

                                 // VALIDACION TELEFONO 
                            if (!valores.telefono){ 
                                ers.telefono = "Porfavor ingresa un numero"
                            }else if(!/^\d{10,10}$/.test(valores.telefono)) {
                                ers.telefono = "Porfavor ingresa solo numeros"}



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
                            
                            signUpTatto({
                                nombre:valores.name,
                                apellido:valores.lastName,
                                email: valores.email,
                                contraseña: valores.password,
                                telefono: valores.telefono,
                                role: "[ROLE_USUARIO]",
                                urlImage:""

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
                                    // window.location = "/user/edit-profile";
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
                                            name='name' 
                                            id='name' 
                                            type="text"
                                            placeholder='Nombre'
                                        />
                                        {touched.name && errors.name && <span>{errors.name}</span>}
                                    </div>
                                    <div>
                                        <Field
                                            className='global_styleRegistroIn'
                                            name='lastName'  
                                            id='lastName'   
                                            type="text"
                                            placeholder='Apellido'

                                        />                                                                                
                                        {touched.lastName && errors.lastName && <span>{errors.lastName}</span>}   
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
                                                className='global_styleRegistroIn TelefonoLogin'
                                                name='telefono' 
                                                id='telefono' 
                                                type="text" 
                                                placeholder='Telefono'
                                                maxLength='10'
                                            /> 
                                             {touched.telefono && errors.telefono && <span>{errors.telefono}</span>}
                             
                            
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

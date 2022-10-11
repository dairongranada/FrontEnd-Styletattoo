import React, { useState } from 'react'
import { AiOutlineUserAdd, AiFillCheckCircle } from 'react-icons/ai';
import { GoArrowSmallLeft } from 'react-icons/go';
import './PageFormRe.scss';

import { Formik, Form, Field, ErrorMessage } from 'formik';
import axios from 'axios'
import md5 from 'md5'

export const RegisterUser = ( {change_step} ) => {

    const [showPassword, setShowPassword] = useState("password")

    const handlePassword = () => {
        if ( showPassword === "password") {setShowPassword("text");}
        else {setShowPassword("password")}
    }


    
    //  const [user, setUser] = useState({
    //     "name": "",
    //     "lastName": "",
    //     "email": "",
    //     "password": "",
    // })


    // /*Obtener El valor de los inputs*/
    // const handlechange = ({target:{name,value}}) =>{
    //     setUser({ ...user, [name]:value})
    // }


    // const axiosfuntion = () =>{
    //     axios.post('http://localhost:3001/usuarios', 
    //         {
    //             "name": user.name,
    //             "lastName":user.lastName,
    //             "email": user.email,
    //             "password": md5(user.password),
    //             "url":" ",
    //         })
    //       .then(function (response) {
    //         console.log(response.data);
    //       })
    //       .catch(function (error) {console.log(error);});
    // }

    return (
        <>

            {/* ----- REGISTRO COMO USUARIO ----- */}
            <div id='register_steps'>
                <div className='step color_step'>1</div >
                <div className='linea_step color_linea' >——</div>
                <div className='step color_step'>2</div>
            </div>
            <div className="cont_icon">
                <div onClick={change_step} className='rows_register'>
                    <GoArrowSmallLeft />
                </div>
                {/* <div className="user_icon"><AiOutlineUserAdd /></div> */}
            </div>
            <div className='Content_FormsPrincipal'>
            <Formik 
                    initialValues={{
                        name:'',
                        lastName:'',
                        email: '',
                        password: '',
                        passwordConfirm: '',
                        url:" ",
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
                            ers.lastName = "Porfavor ingresa un solo letras"}

                         // VALIDACION EMAIL
                        if (!valores.email){ 
                            ers.email = "Porfavor ingresa un Correo"
                        }else if(! /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valores.email)) {
                            ers.email = "Porfavor ingresa un Correo valido"}

                        // VALIDACION CONTRASEÑA
                        if (!valores.password){ 
                            ers.password = "Porfavor ingresa una contraseña"
                        }else if(!/^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{6,16}$/.test(valores.password)) {
                            ers.password = "Contraseña mayor a 6 caracteres "}
                        
                        // VALIDACION CONFIRMAR CONTRASEÑA
                        if (!valores.confirmPassword){ 
                            ers.confirmPassword = "Porfavor ingresa una Contraseña"
                        }if (valores.password !== valores.confirmPassword) {
                            ers.confirmPassword = "Las Contraseñas no Coinciden"
                        }if (valores.confirmPassword === valores.password ) {
                            ers.confirmPassword = ""}

                        return ers

                    }}

                    onSubmit={(valors) =>{ console.log(valors);}}
                >
                    {({ values,errors, handleSubtmit, handleChange, handleBlur  })=> (
                        <form onSubmit={handleSubtmit}>
                                <div className="inputContent">
                                    <div>
                                        <input
                                            className='global_styleRegistroIn'   
                                            name='name' 
                                            id='name' 
                                            type="text"
                                            value={values.name}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                        />
                                         <label  htmlFor='name' className='label_global_styleRegistro'>Nombre</label>
                                        {errors.name && <span>{errors.name}</span>}
                                    </div>
                                    <div>
                                        <input
                                            className='global_styleRegistroIn'
                                            name='lastName'  
                                            id='lastName'   
                                            type="text"
                                            value={values.lastName}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                        />                                        
                                        <label htmlFor='lastName' className='label_global_styleRegistro'>Apellido</label>
                                        {errors.lastName && <span>{errors.lastName}</span>}   
                                    </div>
                                </div>
                                    <div className="inputContent">
                                        <input 
                                            className='global_styleRegistroIn EmailInput'
                                            name='email' 
                                            id='email' 
                                            type="email" 
                                            value={values.email}
                                            onChange={handleChange} 
                                            onBlur={handleBlur} 
                                        />                                        
                                        <label htmlFor='email' className='label_global_styleRegistro'>Correo electronico</label>
                                    </div>
                                        <div className='errosEmail'>{errors.email && <span>{errors.email}</span>}</div>
                                    <div className="inputContent">
                                        <div>
                                            <input 
                                                className='global_styleRegistroIn'
                                                name='password' 
                                                id='password' 
                                                type="password"
                                                value={values.password}
                                                onChange={handleChange} 
                                                onBlur={handleBlur}
                                            />                                            
                                            <label htmlFor='password' className='label_global_styleRegistro'>Contraseña</label>
                                            {errors.password && <span>{errors.password}</span>}   
                                        </div>
                                        <div>
                                            <input 
                                                className='global_styleRegistroIn'
                                                name='passwordConfirm' 
                                                id='passwordConfirm' 
                                                type="password"
                                                value={values.passwordConfirm}
                                                onChange={handleChange} 
                                                onBlur={handleBlur}
                                            />                                            
                                            <label htmlFor='confirmPassword' className='label_global_styleRegistro'>Confirmar Contraseña</label>
                                            {errors.confirmPassword && <span className='emailSpam' >{errors.confirmPassword}</span>}   

                                        </div>
                                    </div>
                                    <div className='Btn_Register'>
                                        <button className="buttons_global_StyleTatto">Registrarse</button>
                                        {/* onClick={'axiosfuntion'}    va aca |*/} 
                                    </div>
                                <div className= "questions">
                                    <a href="/Registro">¿No tienes una Cuenta?</a>
                                </div>
                        </form>
                    )}
                </Formik>
            </div>
        </>
    )
}

import './PageFormRe.scss'
import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'

import { useNavigate } from "react-router-dom";

import { Formik } from 'formik';
import axios from 'axios'
import md5 from 'md5'



export const PageFormRe = () => {

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
    <div>
        <div className="Content_FormsPrincipal BackGroundFormA">
            <div className="Content_Forms">
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
                            ers.name = "Ingrese un nombre con letras"}

                        // VALIDACION APELLIDO
                        if (!valores.lastName){ 
                            ers.lastName = "Porfavor ingresa un apellido"
                        }else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.name)) {
                            ers.lastName = "Porfavor ingresa un apellido"}

                         // VALIDACION EMAIL
                        if (!valores.email){ 
                            ers.email = "Porfavor ingresa un apellido"
                        }else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.name)) {
                            ers.name = "Porfavor ingresa un apellido"}

                        // VALIDACION CONTRASEÑA
                        if (!valores.password){ 
                            ers.password = "Porfavor ingresa una contraseña"
                        }else if(!/^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{8,16}$/.test(valores.name)) {
                            ers.password = "ingresa una contraseña mayor a 6 caracteres "}
                        
                        // VALIDACION CONFIRMAR CONTRASEÑA
                        if (!valores.passwordConfirm){ 
                            ers.passwordConfirm = "Porfavor ingresa una Contraseña"
                        }if (valores.password === valores.passwordConfirm) {
                            ers.passwordConfirm = "Las Contraseñas no Coinciden"}
                        return ers

                    }}

                    onSubmit={(valors) =>{ console.log(valors);}}
                >
                    {({ values,errors, handleSubtmit, handleChange, handleBlur  })=> (
                        <form onSubmit={handleSubtmit}>
                            <div><h2>Registro</h2></div>
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
                                        {errors.email && <span>{errors.email}</span>}   
                                    </div>
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
                                            {errors.confirmPassword && <span>{errors.confirmPassword}</span>}   

                                        </div>
                                    </div>
                                    <div>
                                        <button className="buttons_global_StyleTatto">Registrarse</button>
                                        {/* onClick={'axiosfuntion'}    va aca |*/} 
                                    </div>
                                <div className= "questions">
                                    <Link to="/Registro">¿No tienes una Cuenta?</Link>
                                </div>
                        </form>
                    )}
                </Formik>
            </div>
        </div>
    </div>
  )
}



    // const handleSubtmit = async(e) =>{
    //     e.preventDefault()
    //     setMenssageError('')
    //     try { 
    //         await singUp(user.email, user.password,user.displayName,user.apellido)  
    //     }catch (er) {
    //         if (er.code === 'auth/invalid-email') {
    //             setMenssageError('StyleTattoo: Correo No valido')
    //         } if (er.code === 'auth/weak-password') {
    //             setMenssageError('StyleTattoo: La contraseña debe tener al menos 6 caracteres ')
    //         } if (er.code === 'auth/internal-error') {
    //             setMenssageError('StyleTattoo: Tienes Campos Sin Llenar')} if (er.code === 'auth/email-already-in-use') {
    //             setMenssageError('StyleTattoo: El email ya se Encuentra En Uso')}  
    //         console.log(er.code);
    //         console.log(er.message);
    //     }

    // }
    // console.log(user);
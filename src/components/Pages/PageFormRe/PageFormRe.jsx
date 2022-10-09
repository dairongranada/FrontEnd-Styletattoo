import './PageFormRe.scss'
import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'

import { useNavigate } from "react-router-dom";
import axios from 'axios'


export const PageFormRe = () => {

     const [user, setUser] = useState({
        "id": "",
        "name": "",
        "lastName": "",
        "email": "",
        "password": "",
        "rol": ""
    })


    /*Obtener El valor de los inputs*/
    const handlechange = ({target:{name,value}}) =>{
        setUser({ ...user, [name]:value})
    }


    const axiosfuntion = () =>{
        axios.post('http://localhost:3001/usuarios', 
            {
                "id": user.password,
                "name": user.name,
                "lastName":user.lastName,
                "email": user.email,
                "password": user.password,
                "rol": user.name
            })
          .then(function (response) {
            console.log(response.data);
          })
          .catch(function (error) {console.log(error);});
    }

    console.log(user);


  return (
    <div>
        <div className="Content_FormsPrincipal BackGroundFormA">
            <div className="Content_Forms">
                <form >
                    <div><h2>Registro</h2></div>
                    <div className="inputContent">
                            <div>
                                <input name='name'className='global_styleRegistroIn' required  type="text"
                                    onChange={handlechange}/>
                                <label  htmlFor='name' className='label_global_styleRegistro' >Nombre</label>
                            </div>
                            <div>
                                <input name='lastName' className='global_styleRegistroIn' required type="text"
                                    onChange={handlechange} />
                                <label htmlFor='apellido' className='label_global_styleRegistro' >Apellido</label>
                            </div>
                        </div>
                            <div className="inputContent">
                                <input name='email'className='global_styleRegistroIn EmailInput' required  type="email" 
                                    onChange={handlechange} />
                                <label htmlFor='email' className='label_global_styleRegistro ' >Correo electronico</label>
                            </div>
                            <div className="inputContent">
                                <div>
                                    <input name='password' className='global_styleRegistroIn' required type="password"
                                        onChange={handlechange} />
                                    <label htmlFor='password' className='label_global_styleRegistro'>Contraseña</label>
                                </div>
                                <div>
                                    <input name='passwordConfirm' className='global_styleRegistroIn' required type="password"
                                        onChange={handlechange} />
                                    <label htmlFor='confirmPassword' className='label_global_styleRegistro'>Confirmar Contraseña</label>
                                </div>
                            </div>
                        <div>
                            <button onClick={axiosfuntion} className="buttons_global_StyleTatto">Registrarse</button>
                        </div>
                        <div className= "questions">
                            <Link to="/IngresarSesion">¿Ya tienes una Cuenta?</Link>
                        </div>
                </form>
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
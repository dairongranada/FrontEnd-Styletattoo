import './PageFormSe.scss'
import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom";

import axios from 'axios'
import md5 from 'md5'
import Cookies from 'universal-cookie';



export const PageFormSe = () => {

    const navigate = useNavigate()   
    const urlUsersAuth = "http://localhost:3001/usuarios"
    const cookies = new Cookies();


    const [userTatto, setUserTatto] = useState({
        email: '', password: '',
    })

    /*Obtener El valor de los inputs SEGUN SU (NAME)*/
    const handlechange = ({target:{name,value}}) =>{
        setUserTatto({ ...userTatto, [name]:value})
    }


    const LoginUserAuth = async() =>{
        await axios.get(urlUsersAuth,{params:{ 
            email:userTatto.email, 
            password: md5(userTatto.password)
        }})

        .then(response =>{
            return(response.data); 
        }).then(response =>{
            if(response.length > 0){
                let respuesta= response[0];
                cookies.set("id", respuesta.id, {path:"/"} )
                cookies.set("name", respuesta.name, {path:"/"} )
                cookies.set("lastName", respuesta.lastName, {path:"/"} )
                cookies.set("email", respuesta.email, {path:"/"} )
                console.log(respuesta);
                navigate('/user/edit-profile')   

            }else{alert("usuario Incorrecto!");}
        })
        .catch(error =>{
            console.log(error);
        })
    }




    return (
        <div className="Content_FormsPrincipalLogin BackGround">
            <div className="Content_Forms">
                    <h2>INICIO DE SESION</h2>
                        <div className="inputContent">
                            <input onChange={handlechange}  name='email' className='input_global_styleLogin' required type="text" />
                            <label className='label_global_style'>Correo</label>
                        </div>
                        <div className="inputContent">
                            <input onChange={handlechange} name='password' className='input_global_styleLogin' required type="password" />
                            <label className='label_global_style'>Contraseña</label>
                        </div>
                        <div>
                            <button onClick={LoginUserAuth} className="buttons_global_StyleTatto">Iniciar sesión</button>
                        </div>
                    <div className= "questions">
                        <Link to="#"> ¿A olvidado Su contraseña? </Link>
                        <Link to="/Registro">¿No tienes una Cuenta?</Link>
                    </div>
            </div>
        </div>
    )
}

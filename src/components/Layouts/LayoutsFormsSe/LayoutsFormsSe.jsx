import './LayoutsFormsSe.scss'
import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../../../context/AuthContext'


import { useNavigate } from "react-router-dom";


export const LayoutsFormsSe = () => {
    const [user, setUser] = useState({
        email: '',
        password: '',
    })

    const { loginUp } = useAuth()
    const navigate = useNavigate()
    const [menssageError, setMenssageError] = useState()


    const handlechange = ({target:{name,value}}) =>{
        setUser({ ...user, [name]:value})
    }

    const handleSubtmit = async(e) =>{
        e.preventDefault()
        setMenssageError('')
        try {        
            await loginUp(user.email, user.password)   
            navigate('/')      
        }catch (er) {
            if (er.code === 'auth/user-not-found') {
                setMenssageError('StyleTattoo: Correo No valido')
            }if (er.code === 'auth/wrong-password') {
                setMenssageError('StyleTattoo: Contraseña Incorrecta')
            }
            console.log(er.code);
            console.log(er.message);
        }
    }

    return (
        <div className="Content_FormsPrincipalLogin BackGround">
            <div className="Content_Forms">
                <form onSubmit={handleSubtmit}>
                    <h2>INICIO DE SESION</h2>
                        <div className="inputContent">
                            <input name='email' className='input_global_styleLogin' required type="text" 
                                onChange={handlechange}
                            />
                            <label className='label_global_style'>Correo</label>
                        </div>
                        <div className="inputContent">
                            <input name='password' className='input_global_styleLogin' required type="password" 
                                onChange={handlechange}
                            />
                            <label className='label_global_style'>Contraseña</label>
                        </div>
                        <div>
                            <button className="buttons_global_StyleTatto">Iniciar sesión</button>
                        </div>
                    <div className= "questions">
                        <Link to="#"> ¿A olvidado Su contraseña? </Link>
                        <Link to="/Registro">¿No tienes una Cuenta?</Link>
                    </div>
                    <button>Google</button>
                </form>
                { menssageError && <p className='ErrorMenssage'>{menssageError}</p> }
            </div>
        </div>
    )
}

import './LayoutsFormsRe.scss'
import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../../../context/AuthContext'
import { useNavigate } from "react-router-dom";


export const LayoutsFormsRe = () => {
    const [user, setUser] = useState({
        name: '',
        apellido: '',
        email: '',
        password: '',
        passwordConfirm: ''
    })

    const { singUp } = useAuth()
    const navigate = useNavigate()
    const [menssageError, setMenssageError] = useState()

    /*Obtener El valor de los inputs*/
    const handlechange = ({target:{name,value}}) =>{
        setUser({ ...user, [name]:value})
    }

    const handleSubtmit = async(e) =>{
        e.preventDefault()
        setMenssageError('')
        try { 
            await singUp(user.email, user.password,user.name,user.apellido)   
            navigate('/artistas')      
        }catch (er) {
            if (er.code === 'auth/invalid-email') {
                setMenssageError('StyleTattoo: Correo No valido')
            } if (er.code === 'auth/weak-password') {
                setMenssageError('StyleTattoo: La contraseña debe tener al menos 6 caracteres ')
            } if (er.code === 'auth/internal-error') {
                setMenssageError('StyleTattoo: Tienes Campos Sin Llenar')
            } if (er.code === 'auth/email-already-in-use') {
                setMenssageError('StyleTattoo: El email ya se Encuentra En Uso')
            }  
            console.log(er.code);
            console.log(er.message);

        }

    }



  return (
    <div>
        <div className="Content_FormsPrincipal BackGroundFormA">
            <div className="Content_Forms">
                <form onSubmit={handleSubtmit}>
                    <div><h2>Registro</h2></div>
                    <div className="inputContent">
                            <div>
                                <input name='name'className='input_global_styleRegistro' required  type="text" 
                                    onChange={handlechange}
                                />
                                <label  htmlFor='name' className='label_global_styleRegistro' >Nombres</label>
                            </div>
                            <div>
                                <input name='apellido' className='input_global_styleRegistro' required type="text" 
                                    onChange={handlechange}
                                />
                                <label htmlFor='apellido' className='label_global_styleRegistro' >Apellidos</label>
                            </div>

                        </div>
                        <div className="inputContent">
                            <input name='email'className='input_global_styleRegistro EmailInput' required  type="email"
                                onChange={handlechange}    
                            />
                            <label htmlFor='email' className='label_global_styleRegistro ' >Correo electronico</label>
                        </div>
                        <div className="inputContent">
                            <div>
                                <input name='password' className='input_global_styleRegistro' required type="password"
                                    onChange={handlechange}
                                />
                                <label htmlFor='password' className='label_global_styleRegistro'>Contraseña</label>
                            </div>
                            <div>
                                <input name='passwordConfirm' className='input_global_styleRegistro' required type="password"
                                    onChange={handlechange}
                                />
                                <label htmlFor='confirmPassword' className='label_global_styleRegistro'>Confirmar Contraseña</label>
                            </div>
                        </div>
                        <div>
                            <button className="buttons_global_StyleTatto">Registrarse</button>
                        </div>
                        <div className= "questions">
                            <Link to="/IngresarSesion">¿Ya tienes una Cuenta?</Link>
                        </div>
                </form>
                { menssageError && <p className='ErrorMenssage'>{menssageError}</p> } 
            </div>
        </div>
    </div>
  )
}

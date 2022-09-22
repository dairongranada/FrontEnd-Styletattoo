import React from 'react'
import { Link } from 'react-router-dom'
import './LayoutsFormsSe.scss'
import { useState } from 'react'


export const LayoutsFormsSe = () => {

    const [user, serUser] = useState({
        user: '',
        password: ''
    
    }) 

    return (
        <div className="Content_FormsPrincipal BackGround">
            <div className="Content_Forms">
                <form>
                    <h1>INICIO DE SESION</h1>
                        <div className="inputContent">
                            <input className='input_global_style' required type="text" />
                            <label className='label_global_style'>Correo</label>
                        </div>
                        <div className="inputContent">
                            <input className='input_global_style' required type="password" />
                            <label className='label_global_style'>Contraseña </label>
                        </div>
                        <div>
                            <button className="buttons_global_StyleTatto">Iniciar sesión</button>
                        </div>
                    <div className= "questions">
                        <Link to="#"> ¿A olvidado Su contraseña? </Link>
                        <Link to="/Registro">¿No tienes una Cuenta?</Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

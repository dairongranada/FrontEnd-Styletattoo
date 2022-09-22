import React from 'react'
import { Link } from 'react-router-dom'
import './LayoutsFormsRe.scss'




export const LayoutsFormsRe = () => {
  return (
    <div>
        <div className="Content_FormsPrincipal BackGroundFormA">
            <div className="Content_Forms">
                <form>
                    <div className="inputContent">
                            <div>
                                <input className='input_global_styleRegistro' required type="text" />
                                <label className='label_global_styleRegistro' >Nombres</label>
                            </div>
                            <div>
                                <input className='input_global_styleRegistro' required type="text" />
                                <label className='label_global_styleRegistro' >Apellidos</label>
                            </div>

                        </div>
                        <div className="inputContent">
                            <input className='input_global_styleRegistro EmailInput' required type="text" />
                            <label className='label_global_styleRegistro ' >Correo electronico</label>
                        </div>
                        <div className="inputContent">
                            <div>
                                <input className='input_global_styleRegistro' required type="password" />
                                <label className='label_global_styleRegistro'>Contraseña </label>
                            </div>
                            <div>
                                <input className='input_global_styleRegistro' required type="password" />
                                <label className='label_global_styleRegistro'>Confirmar Contraseña </label>
                            </div>
                        </div>
                        <div>
                            <button className="buttons_global_StyleTatto">Registrarse</button>
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

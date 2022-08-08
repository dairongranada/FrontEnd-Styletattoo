import React from 'react'
import './LayoutsFormsSe.scss'

export const LayoutsFormsSe = () => {
    return (
        <div className="contentLogin">
            <div className="login">
                <form>
                    <h1>INICIO DE SESION</h1>
                        <div className="inputContent">
                            <input required type="text" />
                            <label>Nombre Usuario</label>
                        </div>
                        <div className="inputContent">
                            <input required type="password" />
                            <label>Contraseña </label>
                        </div>
                        <div className="Checkbox">
                            <input type="checkbox"/>
                            <p>¿ Deseas Guardar Sesion ? </p>
                        </div>
                        <div>
                            <button className="buttons_global_StyleTatto">Iniciar sesión</button>
                        </div>
                    <div className= "questions">
                        <a href="/"> ¿A olvidado Su contraseña? </a>
                        <a href="/">¿No tienes una una Cuenta?</a>
                    </div>
                </form>
            </div>
        </div>
    )
}

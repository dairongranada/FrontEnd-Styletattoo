import React from 'react';
import { Link } from 'react-router-dom';


import './noAutenticado.scss';

export const NoAutenticado = () => {
    return (
        <div className="modal_perfil_no_autorizado">
            <div className="modal_perfil_no_autorizado_info">
                <h5 className="autorizado_infoTitle">Al parecer no tienes permiso para entrar a esta Ruta.</h5>
                <div style={{width:"50%"}}>
                    <button onClick={()=> {window.location = "/IngresarSesion"}} className='buttons_global_StyleTatto'>Login</button>
                    <div className='modal_perfil_no_autorizado-registro'>
                        ¿Aún no tienes una cuenta? Registrate
                        <Link to="/Registro"> Aquí</Link>
                    </div>
                </div>
            </div>

        </div>
    )
}

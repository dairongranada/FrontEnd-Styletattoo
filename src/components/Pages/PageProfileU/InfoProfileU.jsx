import './PageProfileU.scss'
import { React } from "react";
import { Link } from "react-router-dom";

export const InfoProfileU = () => {





  return (
    
    <div className="perfil-usuario-body">
      <div className="perfil-usuario-footer">
        <ul className="lista-datos">
          <li className='icono'><Link to="/user/edit-name"><span className="material-symbols-outlined Icons-Options">badge</span>Nombre y correo</Link></li>
          <li className='icono'><Link to="/user/edit-password"><span className="material-symbols-outlined Icons-Options">vpn_key</span>Contraseña </Link></li>
        </ul>
        <ul className="lista-datos">
          <li className='icono'><Link to="/user/edit-quotes"><span className="material-symbols-outlined Icons-Options">auto_stories</span>Citas agendadas</Link></li>
          <li className='icono'><Link to="/"><span className="material-symbols-outlined Icons-Options">logout</span>Cerrar sesion</Link></li>
        </ul>
      </div>
    </div>


  );
};

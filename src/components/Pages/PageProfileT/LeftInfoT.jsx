import './PageProfileT.scss' 
import { React,useEffect,useState } from 'react'
import { useNavigate } from 'react-router'
import { Link } from 'react-router-dom'


export const LeftInfoT = () => {

  const [ imgProfileU, setImgProfileU ] = useState("https://i.postimg.cc/T2N5CnwK/perfil-Usuario-Anonim.png")


  return (

    <div className='BodyProfileUser'>
          <section className="seccion-perfil-usuario">
        <div className="perfil-usuario-header">
            <div className="perfil-usuario-portada">
                <div className="perfil-usuario-avatar">
                    <img src={imgProfileU} alt="img-avatar"/>
                    <button type="button" className="boton-avatar">
                        <span class="material-symbols-outlined">
                            photo_camera
                        </span>
                    </button>
                </div>
            </div>
        </div>
        <div className="perfil-usuario-body">
            <div className="perfil-usuario-bio">
                <h3 className="titulo">Samuel Lopez Muñoz</h3>
                <p className="texto">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div className="perfil-usuario-footer">
                <ul className="lista-datos">
                  <li className='icono'><Link  to="/userTatto/edit-name"><span className="material-symbols-outlined Icons-Options">badge</span>Nombre y correo</Link></li>
                  <li className='icono'><Link  to="/userTatto/edit-image"><span className="material-symbols-outlined Icons-Options">person</span>Foto de perfil </Link></li>
                  <li className='icono'><Link  to="/userTatto/edit-password"><span className="material-symbols-outlined Icons-Options">vpn_key</span>Contraseña </Link></li>
                </ul>
                <ul className="lista-datos">
                  <li className='icono'><Link  to="/userTatto/edit-quotes"><span className="material-symbols-outlined Icons-Options">auto_stories</span>Citas agendadas</Link></li>
                 <li className='icono'><Link  to="/"><span className="material-symbols-outlined Icons-Options">logout</span>Cerrar sesion</Link></li>
                </ul>
            </div>
            <div className="redes-sociales">
                <a href="" className="boton-redes facebook fab fa-facebook-f"><i className="icon-facebook"></i></a>
                <a href="" className="boton-redes twitter fab fa-twitter"><i className="icon-twitter"></i></a>
                <a href="" className="boton-redes instagram fab fa-instagram"><i className="icon-instagram"></i></a>
            </div>
        </div>
    </section>
        </div>


  )
}

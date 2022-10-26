import './PageProfileT.scss'
import { React, useState } from 'react'




export const UptInfoT = () => {

    const [imgProfileU, setImgProfileU] = useState("https://i.postimg.cc/T2N5CnwK/perfil-Usuario-Anonim.png")

    return (
        <div className='perfil-usuario-content'>
            <div className="perfil-usuario-header">
                <div className="perfil-usuario-portada">
                    <div className="perfil-usuario-avatar">
                        <img src={imgProfileU} alt="img-avatar"/>
                        <div className='boton-avatar' type="button" id="addfile">
                            <span className="material-symbols-outlined">photo_camera</span>
                            <input id="changeImg" type="file" required />
                        </div>
                    </div>
                </div>
            </div>
            <div className="perfil-usuario-body">
                <div className="perfil-usuario-bio">
                    <i className='bx bxl-mailchimp'></i>
                    <h3 className="titulo">Samuel Lopez Muñoz</h3>
                    <p className="texto">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                <div className="redes-sociales">
                    <a href="/" className="boton-redes facebook fab fa-facebook-f"><i className='bx bx-home-alt'></i></a>
                    <li className="boton-redes twitter fab fa-twitter"><i className='bx bxl-mailchimp'></i> </li>
                    <li className="boton-redes instagram fab fa-instagram"><i className='bx bxs-paint'></i></li>
                </div>
            </div>
        </div>

    )
}

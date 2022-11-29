import './PageProfileU.scss'
import { React, useState, useEffect } from 'react'
import { getusers } from '../../../Helpers/ApiConsumer/PostUsers';


export const UptInfoU = ({imagenURL}) => {


    const [user, setUser] = useState(JSON.parse(localStorage.getItem("usuario")));
    const [tokenID, setTokenID] = useState(localStorage.getItem("token"));
    const [userData, setUserData] = useState({});
    const [image, setImage] = useState("https://i.postimg.cc/T2N5CnwK/perfil-Usuario-Anonim.png")



    useEffect(() => {
        if (!!user) {
            getusers(tokenID)
                .then(data => setUserData(data.data))
        } else {console.log("No se ha autenticado")}
    }, [])


    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("usuario");
        localStorage.removeItem("InfoUser");
        localStorage.removeItem("TokenAcces")
        window.location = "/IngresarSesion";
    }

    return (
        <div className='perfil-usuario-content'>
            <div className="perfil-usuario-header">
                <div className="perfil-usuario-portada">
                    <div className="perfil-usuario-avatar">
                        <img src={ userData.image } alt="img-avatar" />
                        <a href="/user/edit-image" type="button" className="boton-avatar">
                            <span className="material-symbols-outlined"> photo_camera </span>
                        </a>
                    </div>
                </div>
            </div>
            <div className="perfil-usuario-body">
                <div className="perfil-usuario-bio">
                    <i className='bx bxl-mailchimp'></i>
                    <h3  style={{textAlign: "center"}} className="titulo">{userData.first_name + " " + userData.last_name}</h3>
                    <p className="textoTrasnparent">ㅤㅤ   ㅤ  ㅤ   ㅤ  ㅤ  ㅤ  ㅤ  ㅤ  ㅤ  ㅤ  ㅤ  ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ</p>
                </div>
                <div className="redes-sociales">
                    <a href="/" className="boton-redes facebook fab fa-facebook-f"><i className='bx bx-home-alt'></i></a>
                    <li className="boton-redes twitter fab fa-twitter"><i className='bx bxl-mailchimp'></i> </li>
                    <a onClick={handleLogout} className="boton-redes twitter fab fa-twitter"><span className="material-symbols-outlined Icons-Options">logout</span></a>
                </div>
            </div>
        </div>

    )
}

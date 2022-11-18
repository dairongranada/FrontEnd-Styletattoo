import './PageProfileT.scss'
import { React, useState, useEffect } from 'react'
import { getusers } from '../../../Helpers/ApiConsumer/PostUsers';
import { getAllTatuadoresID } from '../../.././Helpers/ApiConsumer/Tattuadores'



export const UptInfoT = () => {

    const [user, setUser] = useState(JSON.parse(localStorage.getItem("usuario")));
    const [tokenID, setTokenID] = useState(localStorage.getItem("token"));
    const [userData, setUserData] = useState({});
    const [IMGAGEN, setIMGAGEN] = useState({});





    useEffect(() => {
        if (!!user) { getusers(tokenID).then(data => setUserData(data.data)); }
    }, [])


    const [tattoInfoIMG, setTattoInfoIMG] = useState({});
    const [InfoUser, setInfoUser] = useState(JSON.parse(localStorage.getItem("InfoUser")));

    useEffect(() => {
        if (!!user) { getAllTatuadoresID(InfoUser.id)
            .then(data => setTattoInfoIMG(data.data.PerfilProfesional[0])) }
    }, [])

    let imagePROFILE  = tattoInfoIMG.img

    if (imagePROFILE == null) {
        setIMGAGEN("https://i.postimg.cc/T2N5CnwK/perfil-Usuario-Anonim.png")
    } else {
        setIMGAGEN(imagePROFILE)
    }

    // console.log(userData.first_name)

    return (
        <div className='perfil-usuario-content'>
            <div className="perfil-usuario-header">
                <div className="perfil-usuario-portada">
                    <div className="perfil-usuario-avatar">
                        <img src={imagePROFILE} alt="img-avatar" />
                    </div>
                </div>
            </div>
            <div className="perfil-usuario-body">
                <div className="perfil-usuario-bio">
                    <i className='bx bxl-mailchimp'></i>
                    <h3 className="titulo">{userData.first_name + " " + userData.last_name}</h3>
                    <p className="texto">ㅤㅤ   ㅤ  ㅤ  ㅤ  ㅤ  ㅤ  ㅤ  ㅤ  ㅤ  ㅤ  ㅤ  ㅤ  ㅤ  ㅤ  ㅤ  ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ</p>
                </div>
                <div className="redes-sociales">
                    <a href="/" className="boton-redes facebook fab fa-facebook-f"><i className='bx bx-home-alt'></i></a>
                    <li className="boton-redes twitter fab fa-twitter"><i className='bx bxl-mailchimp'></i> </li>
                    <a href={`/all/artist/style`}className="boton-redes instagram fab fa-instagram"><i className='bx bxs-paint'></i></a>
                </div>
            </div>
        </div>

    )
}

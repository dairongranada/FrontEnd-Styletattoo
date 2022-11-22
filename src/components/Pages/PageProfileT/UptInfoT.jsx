import './PageProfileT.scss'
import { React, useState, useEffect } from 'react'
import { getusers } from '../../../Helpers/ApiConsumer/PostUsers';
import { getAllTatuadoresID } from '../../.././Helpers/ApiConsumer/Tattuadores'

import gorroNavidad from '../../../images/Icons/gorroNavidad.png'


export const UptInfoT = () => {

    const [user, setUser] = useState(JSON.parse(localStorage.getItem("usuario")));
    const [tokenID, setTokenID] = useState(localStorage.getItem("token"));
    const [userData, setUserData] = useState({});

  
    let idTatu = userData.id
  
  
    useEffect(() => {
      if (!!user) {
        getusers(tokenID)
          .then(data => setUserData(data.data));
      }
    }, [])
  



    useEffect(() => {
        if (!!user) { getusers(tokenID).then(data => setUserData(data.data)); }
    }, [])


    const [tattoInfoIMG, setTattoInfoIMG] = useState({});
    const [InfoUser, setInfoUser] = useState(JSON.parse(localStorage.getItem("InfoUser")));

    useEffect(() => {
        if (!!user) { getAllTatuadoresID(InfoUser.id)
            .then(data => setTattoInfoIMG(data.data.PerfilProfesional[0])) }
    }, [])

    let imagePROFILE = ""

    if (tattoInfoIMG == null) {
        imagePROFILE  = "https://i.postimg.cc/T2N5CnwK/perfil-Usuario-Anonim.png"
    }else { 
        imagePROFILE  =  tattoInfoIMG.img 
    }

    // console.log(tattoInfoIMG);

    // console.log(userData.first_name)

    return (
        <div className='perfil-usuario-content'>
            <div className="perfil-usuario-header">
                <div className="perfil-usuario-portada">
                    <div className = " GorroRotate"><img className = "gorroNavidadPerfil" src={gorroNavidad} alt={gorroNavidad} /></div>
                    <div className="perfil-usuario-avatar">
                        <img src={imagePROFILE} alt="img-avatar" />
                    </div>
                </div>
            </div>
            <div className="perfil-usuario-body">
                <div className="perfil-usuario-bio">
                    <i className='bx bxl-mailchimp'></i>
                    <div className="conNameAndEnla">
                        <h3 className="titulo">{userData.first_name + " " + userData.last_name}</h3>
                        <a href={`/tatto/view/profile/${idTatu}`}>Ver Perfil profesional</a>
                    </div>

                    
                    <p className="texto">ㅤㅤ   ㅤ  ㅤ  ㅤ  ㅤ  ㅤ  ㅤ  ㅤ  ㅤ  ㅤ  ㅤ  ㅤ  ㅤ  ㅤ  ㅤ  ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ</p>
                </div>
                <div className="redes-sociales">
                    <a href="/" className="boton-redes facebook fab fa-facebook-f"><i className='bx bx-home-alt'></i></a>
                    <li className="boton-redes twitter fab fa-twitter"><i className='bx bxl-mailchimp'></i> </li>
                </div>
            </div>
        </div>

    )
}

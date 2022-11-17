import './PageProfileT.scss'
import { React, useState, useEffect } from 'react'
import { getusers } from '../../../Helpers/ApiConsumer/PostUsers';



export const UptInfoT = () => {

    const [fileU, setFileU] = useState("")
    const [image, setImage] = useState("https://i.postimg.cc/T2N5CnwK/perfil-Usuario-Anonim.png")
    const [user, setUser] = useState(JSON.parse(localStorage.getItem("usuario")));
    const [tokenID, setTokenID] = useState(localStorage.getItem("token"));
    const [userData, setUserData] = useState({});


    const uploadImage = async (e) => {
        const files = e.target.files;
        const data = new FormData();
        data.append("file", files[0]);
        data.append("upload_preset", "images")
        const res = await fetch(
            "https://api.cloudinary.com/v1_1/dryg8dmrb/image/upload",
            {
                method: "POST",
                body: data,

            }
        )
        const file = await res.json()

        setImage(file.secure_url)
        setFileU(file.secure_url)
        console.log(file.secure_url);
    }

    useEffect(() => {
        if (!!user) {
            getusers(tokenID)
                .then(data => setUserData(data.data));
        } else {
            console.log("No se ha autenticado");
        }

    }, [])
    console.log(userData.first_name)

    return (
        <div className='perfil-usuario-content'>
            <div className="perfil-usuario-header">
                <div className="perfil-usuario-portada">
                    <div className="perfil-usuario-avatar">
                        <img src={image} alt="img-avatar" />
                        <div className='boton-avatar' type="button" id="addfile">
                            <span className="material-symbols-outlined">photo_camera</span>
                            <input onChange={uploadImage} id="changeImg" type="file" required />
                        </div>
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
                    <a href='/tatto/view/profile' className="boton-redes instagram fab fa-instagram"><i className='bx bxs-paint'></i></a>
                </div>
            </div>
        </div>

    )
}

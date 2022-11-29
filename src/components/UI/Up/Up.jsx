import React from 'react'
import { useState } from 'react'
import './Up.scss'
import { getusers } from '../../../Helpers/ApiConsumer/PostUsers'
import { useEffect } from 'react'

export const Up = () => {

    const [datuser, setDatuser] = useState({})
    const [userToken, setUserToken] = useState(JSON.parse(localStorage.getItem("usuario")))
    const [token, setToken] = useState(localStorage.getItem("token"))

    useEffect(()=> {
        if (!!userToken) {
            getusers(token)
            .then(dat => setDatuser(dat.data))
        }else {
            //console.log("No se ha autenticado");
        }
    },[])
    // console.log(datuser);

    //aqui se le agrega el active
    const ChangeClass =()=> {
        let menuToggle = document.querySelector('.menuToggle');
        // let MenuRespoM = document.querySelector('.MenuRespoM');
        menuToggle.classList.toggle('active') 
    }

    return (

        <>
            { ( !!token ) && 
                <div className='navigationBTNResp'>
                    <div onClick={ChangeClass} className='menuToggle'></div>
                    <div className='menuOpcionesCellW'>
                        <ul>
                            <li>
                                <a href="/"><span id="iconsMenuCELL" className="material-symbols-outlined"> home </span></a>
                            </li>
                            
                            <li>
                                {(datuser.rol === '[ROLE_USUARIO]') &&
                                    <li>
                                        <a href="/user/edit-profile"><span id="iconsMenuCELL" className="material-symbols-outlined"> person </span></a>
                                    </li>
                                }

                                {(datuser.rol === '[ROLE_ARTISTA]') &&
                                    <li>
                                        <a href="/userTatto/edit-profile"><span id="iconsMenuCELL" className="material-symbols-outlined"> person </span></a>
                                    </li>
                                }{ (userToken.rol === null) && <li></li>}

                            </li>

                            <li>
                                <a href="/all/artist/style"><span id="iconsMenuCELL" className="material-symbols-outlined"> groups </span></a>
                            </li>
                        </ul>
                    </div>
                </div>
            }

            { ( token === null ) && 
                <div className='navigationBTNResp'>
                    <div onClick={ChangeClass} className='menuToggle'></div>
                    <div className='menuOpcionesCellW'>
                        <ul>
                            <li>
                                <a href="/"><span id="iconsMenuCELL" className="material-symbols-outlined"> home </span></a>
                            </li>
                            

                            <li>
                                <a href="/all/artist/style"><span id="iconsMenuCELL" className="material-symbols-outlined"> groups </span></a>
                            </li>
                        </ul>
                    </div>
                </div>
            }         
        </>


    )
}

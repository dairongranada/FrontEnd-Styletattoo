import './NavigationBar.scss'

import { useState , useEffect } from 'react'
import perfilUsuarioAnonim from '../../../images/Icons/perfilUsuarioAnonim.jpg'
import logoStyleT from '../../../images/Icons/logo.jpg'
import { getusers }  from '../../../Helpers/ApiConsumer/PostUsers';






export const NavigationBar = () => {

    const [user, setUser] = useState(JSON.parse(localStorage.getItem("usuario")));
    const [token, setToken] = useState(localStorage.getItem("token"));
    const [userData, setUserData] = useState({});

    useEffect(()=>{
        if ( !!user ) {
            getusers( token )
            .then( data => setUserData( data.data ));
            console.log(userData);
        }else {
          console.log("No se ha autenticado");
        }
        
  
    }, [])

    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("usuario");
        localStorage.removeItem("InfoUser");
        window.location = "/IngresarSesion";
   }
   





    const [sidebarNav, setSidebarnav] = useState("")
    const [barMenuIcon, setBarMenuIcon] = useState("bx bx-menu")
    const [navClose, setNavClose] = useState(false)

    const handleChangeNavs = () => {
        if (navClose === false) {
            setSidebarnav("open")
            setBarMenuIcon("bx bx-menu-alt-right")
            setNavClose(true)
        }else{
            setSidebarnav("")
            setBarMenuIcon("bx bx-menu")
            setNavClose(false)

        }
    };


    return (
        <>
        { ( !!token ) &&
            <div id="sidebar" className={ sidebarNav } >
                <div className="logo-details">
                    <div className="logo_name">STYLE TATTOO</div>
                    <i className={barMenuIcon} id="CloseBtnNav" onClick={handleChangeNavs} ></i>
                </div>
                <ul className="nav-list">
                    <li>
                        <a href="/">
                            <i className='bx bx-home' ></i>
                            <span className="links_name">Inicio</span>
                        </a>
                        <span className="tooltip">Inicio</span>
                    </li>
                    

                        { (user.rol === '[ROLE_USUARIO]') &&
                            <li>
                                <a href="/user/edit-profile">
                                    <i className='bx bx-user' ></i>
                                    <span className="links_name">Cuenta</span>
                                </a>
                                <span className="tooltip">Cuenta</span>
                            </li> 
                        }
                        
                        { (user.rol === '[ROLE_ARTISTA]') &&
                            <li>
                                <a href="/userTatto/edit-profile">
                                    <i className='bx bx-user' ></i>
                                    <span className="links_name">Cuenta</span>
                                </a>
                                <span className="tooltip">Cuenta</span>
                            </li>
                        }{ (user.rol === null) && <li></li>}
                        
                    
                    <li>

                        <a href="/all/artist/style">

                            <i className='bx bxs-user-account'></i>
                            <span className="links_name">Artistas</span>
                        </a>
                        <span className="tooltip">Artistas</span>
                    </li>

                    <div className="logo-details ImgLogoStyleContent" style={{ height:"15rem", justifyContent: "center"}}>
                        <img className='icon ImgLogoStyle' src={logoStyleT} alt="" style={{ width:"150px" }}/>
                    </div>


                    <li className="profile">
                        <div className="profile-details">
                            <img src={perfilUsuarioAnonim} alt="profileImg" />
                            <div className="name_job">
                                <div className="name">{ userData.first_name +" "+ userData.last_name }</div>
                                { (user.rol === '[ROLE_USUARIO]') && <div className="job">| ROL: USUARIO  |</div>}
                                { (user.rol === '[ROLE_ARTISTA]') && <div className="job">| ROL: ARTISTA  |</div>}

                            </div>
                        </div>
                        <i className='bx bx-log-out' id="log_out" onClick={handleLogout}  ></i>
                    </li>
                </ul>
            </div>

        }{ (token === null ) &&
            <div id="sidebar" className={ sidebarNav } >
                <div className="logo-details">
                    <div className="logo_name">STYLE TATTOO</div>
                    <i className={barMenuIcon} id="CloseBtnNav" onClick={handleChangeNavs} ></i>
                </div>
                <ul className="nav-list">
                    <li>
                        <a href="/">
                            <i className='bx bx-home' ></i>
                            <span className="links_name">Inicio</span>
                        </a>
                        <span className="tooltip">Inicio</span>
                    </li>
                    <li>
                        <a href="/all/artist/style">
                            <i className='bx bxs-user-account'></i>
                            <span className="links_name">Artistas</span>
                        </a>
                        <span className="tooltip">Artistas</span>
                    </li>
                    <div className="logo-details ImgLogoStyleContent" style={{ height:"15rem", justifyContent: "center"}}>
                        <img className='icon ImgLogoStyle' src={logoStyleT} alt="" style={{ width:"150px" }}/>
                    </div>
                </ul>
            </div>

        }
        
        </>
    )
}

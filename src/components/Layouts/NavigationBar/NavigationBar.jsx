import './NavigationBar.scss'

import { useState , useEffect } from 'react'
import perfilUsuarioAnonim from '../../../images/Icons/perfilUsuarioAnonim.jpg'
import { getAllTatuadoresID }  from '../../../Helpers/ApiConsumer/Tattuadores';
import Maquuina from '../../../images/Icons/Maquuina.png'
import Pirncings from '../../../images/Icons/Pirncings.png'


import './Sidebar.scss'


export const NavigationBar = () => {
    const [userToken, setUserToken] = useState(JSON.parse(localStorage.getItem("usuario")));
    const [token, setToken] = useState(localStorage.getItem("InfoUser"));
    const [userData, setUserData] = useState({});
    
    useEffect(()=>{
        if (userToken) {
          let id = userToken.token.user_id;
          getAllTatuadoresID(id)
            .then( data => setUserData(data.data));
        }else {
          //console.log("No se ha autenticado");
        }
        
  
    }, [])






    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("usuario");
        localStorage.removeItem("InfoUser");
        localStorage.removeItem("TokenAcces");
        window.location = "/IngresarSesion";
   }
   





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


  const [sidebarNav, setSidebarnav] = useState("close")

  const HandleClick =()=>{setSidebarnav("showMenu")}
  const HandleClickOpen =()=>{setSidebarnav("close")}


  




  return (
    <div>
      <div className={`sidebar ${sidebarNav}`} >
        <div className="logo-details">
        <div className="home-content">
          { sidebarNav == "close" &&
             <i  onClick={HandleClick} style={{cursor:"pointer"}} className='bx bx-menu' ></i>
          }

          { sidebarNav == "showMenu" &&
             <i  onClick={HandleClickOpen} style={{cursor:"pointer"}} className='bx bx-menu' ></i>
          }



        </div>
        </div>
        <ul className="nav-links">
          <li>
            <a href="/">
              <i className='bx bx-home' ></i>
              <span className="link_name">Home</span>
            </a>
            <ul className="sub-menu blank">
              <li><a className="link_name" href="#">Inicio</a></li>
            </ul>
          </li>



        { (userData.rol === '[ROLE_ARTISTA]') &&
          <li>
            <div className="iocn-link">
              <a href="/userTatto/edit-profile">
              <i className='bx bx-user' ></i>
                <span className="link_name">Ver perfil</span>
              </a>
              <i className='bx bxs-chevron-down arrow' ></i>
            </div>
            <ul className="sub-menu">
              <li><a className="link_name" href="/userTatto/edit-profile">Perfil</a></li>
              <li><a href="/userTatto/edit-name">Informacion</a></li>
              <li><a href="/userTatto/edit-quotes">Citas Pendientes</a></li>
              <li><a href="/userTatto/edit-password">Cambiar Contraseña</a></li>
            </ul>
          </li>
        }

        { (userData.rol === '[ROLE_USUARIO]') &&
          <li>
            <div className="iocn-link">
              <a href="/user/edit-profile">
              <i className='bx bx-user' ></i>
                <span className="link_name">Ver perfil</span>
              </a>
              <i className='bx bxs-chevron-down arrow' ></i>
            </div>
            <ul className="sub-menu">
              <li><a className="link_name" href="/user/edit-profile">Perfil</a></li>
              <li><a href="/user/edit-name">Informacion</a></li>
              <li><a href="/user/edit-quotes">Citas Pendientes</a></li>
              <li><a href="/user/edit-image">Cambiar Imagen</a></li>

              <li><a href="/user/edit-password">Cambiar Contraseña</a></li>
            </ul>
          </li>
        }

          <li>
            <a href="/all/artist/style">
            <i className='bx bxs-user-account'></i>
              <span className="link_name">Artistas</span>
            </a>
            <ul className="sub-menu blank">
              <li><a className="link_name" href="/all/artist/style">Artistas</a></li>
            </ul>
          </li>



          <li style={{marginTop:"20px"}}>
            <a href="/infoTatuajes">
              <img style={{width:"25px",marginLeft:"28px" }} src={Maquuina} alt={Maquuina} />
              <span style={{ marginLeft: "1.5rem"}} className="link_name">Tatuajes</span>

            </a>
            <ul className="sub-menu blank">
              <li><a className="link_name" href="#">Tatuajes</a></li>
            </ul>
          </li>

      
          <li style={{marginTop:"25px"}}>
            <a href="/infoPiercings">
              <img style={{width:"25px",marginLeft:"28px" }} src={Pirncings} alt={Maquuina} />
              <span style={{ marginLeft: "1.5rem"}} className="link_name">Piercings</span>

            </a>
            <ul className="sub-menu blank">
              <li><a className="link_name" href="#">Piercings</a></li>
            </ul>
          </li>





          <li>
            <div className="profile-details">
              <div className="profile-content">
              { (userData.rol === '[ROLE_USUARIO]') && 
                <img src={userData.image} alt="" />
              }
              { (userData.rol === '[ROLE_ARTISTA]') && 
                  ( userData.PerfilProfesional &&
                      <img src={userData.PerfilProfesional[0].img} alt={userData.PerfilProfesional[0].img} />
                  )
              }{ (userData.rol === '[ROLE_ARTISTA]') && 
                (!userData.PerfilProfesional &&
                    <img src={userData.PerfilProfesional.img} alt={userData.PerfilProfesional.img} />
                )
              }{ (userToken == null) && <li></li>}
              </div>



              {(userToken ) && 
              <div className="name-job">
                <div className="profile_name">
                {userData.first_name +" "+ userData.last_name }
                  
                </div>
                <div className="job">
                {userToken  && 
                   (userData.rol === '[ROLE_USUARIO]') && <div className="job">| ROL: USUARIO  |</div>
                }

                {userToken  && 
                 (userData.rol === '[ROLE_ARTISTA]') && <div className="job">| ROL: ARTISTA  |</div>
                }
                
                </div>
              </div>
              }
              
              { (!userToken == null ) && 
              <div className="name-job"> </div>
              }



              <i  onClick={handleLogout} style={{color:"#fff"}} className='bx bx-log-out' ></i>
            </div>
            

          </li>
        </ul>
      </div>
    </div>
  )
}


// import './NavigationBar.scss'

// import { useState , useEffect } from 'react'
// import perfilUsuarioAnonim from '../../../images/Icons/perfilUsuarioAnonim.jpg'
// import { getusers }  from '../../../Helpers/ApiConsumer/PostUsers';

// import logoStyleT from '../../../images/Icons/logopreview.png'
// import LogoTextStyle from '../../../images/Icons/LogoTextStyle.jpg'





// export const NavigationBar = () => {

//     const [userToken, setUserToken] = useState(JSON.parse(localStorage.getItem("usuario")));
//     const [token, setToken] = useState(localStorage.getItem("token"));
//     const [userData, setUserData] = useState({});

//     useEffect(()=>{
//         if ( !!userToken ) {
//             getusers( token )
//             .then( data => setUserData( data.data ));
//         }else {
//           //console.log("No se ha autenticado");
//         }
        
  
//     }, [])

//     const handleLogout = () => {
//         localStorage.removeItem("token");
//         localStorage.removeItem("usuario");
//         localStorage.removeItem("InfoUser");
//         localStorage.removeItem("TokenAcces");
//         window.location = "/IngresarSesion";
//    }
   





//     const [sidebarNav, setSidebarnav] = useState("")
//     const [barMenuIcon, setBarMenuIcon] = useState("bx bx-menu")
//     const [navClose, setNavClose] = useState(false)

//     const handleChangeNavs = () => {
//         if (navClose === false) {
//             setSidebarnav("open")
//             setBarMenuIcon("bx bx-menu-alt-right")
//             setNavClose(true)
//         }else{
//             setSidebarnav("")
//             setBarMenuIcon("bx bx-menu")
//             setNavClose(false)

//         }
//     };


//     return (
//         <>
//         { ( !!token ) &&
//             <div id="sidebar" className={ sidebarNav } >
//                 <div className="logo-details">
//                 <div className="logo_name">STYLE TATTOO</div>
//                     <i className={barMenuIcon} id="CloseBtnNav" onClick={handleChangeNavs} ></i>
//                 </div>
//                 <hr/>
//                 <ul className="nav-list">
//                     <li>
//                         <a href="/">
//                             <i className='bx bx-home' ></i>
//                             <span className="links_name">Inicio</span>
//                         </a>
//                         <span className="tooltip">Inicio</span>
//                     </li>
                    
//                         { (userData.rol === '[ROLE_USUARIO]') &&
//                             <li>
//                                 <a href="/user/edit-profile">
//                                     <i className='bx bx-user' ></i>
//                                     <span className="links_name">Cuenta</span>
//                                 </a>
//                                 <span className="tooltip">Cuenta</span>
//                             </li> 
//                         }
                        
//                         { (userData.rol === '[ROLE_ARTISTA]') &&
//                             <li>
//                                 <a href="/userTatto/edit-profile">
//                                     <i className='bx bx-user' ></i>
//                                     <span className="links_name">Cuenta</span>
//                                 </a>
//                                 <span className="tooltip">Cuenta</span>
//                             </li>
//                         }{ (userToken.rol === null) && <li></li>}
                        
//                     <li>
//                         <a href="/all/artist/style">

//                             <i className='bx bxs-user-account'></i>
//                             <span className="links_name">Artistas</span>
//                         </a>
//                         <span className="tooltip">Artistas</span>
//                     </li>
//                     <hr/>
//                     <div className="logo-details ImgLogoStyleContent" style={{ height:"15rem", justifyContent: "center"}}>
//                         <img className='icon ImgLogoStyle' src={logoStyleT} alt="" style={{ width:"150px" }}/>
//                     </div>


//                     <li className="profile">
//                         <div className="profile-details">
//                             <img src={perfilUsuarioAnonim} alt="profileImg" />
//                             <div className="name_job">
//                                 <div className="name">{ userData.first_name +" "+ userData.last_name }</div>
//                                 { (userData.rol === '[ROLE_USUARIO]') && <div className="job">| ROL: USUARIO  |</div>}
//                                 { (userData.rol === '[ROLE_ARTISTA]') && <div className="job">| ROL: ARTISTA  |</div>}
//                             </div>
//                         </div>
//                         <i className='bx bx-log-out' id="log_out" onClick={handleLogout}  ></i>
//                     </li>
//                 </ul>
//             </div>

//         }{ (token === null ) &&
//             <div id="sidebar" className={ sidebarNav } >
//                 <div className="logo-details">
//                     <div className="logo_name">STYLE TATTOO</div>
//                     <i className={barMenuIcon} id="CloseBtnNav" onClick={handleChangeNavs} ></i>
//                 </div>
//                 <hr/>
//                 <ul className="nav-list">
//                     <li>
//                         <a href="/">
//                             <i className='bx bx-home' ></i>
//                             <span className="links_name">Inicio</span>
//                         </a>
//                         <span className="tooltip">Inicio</span>
//                     </li>
//                     <li>
//                         <a href="/all/artist/style">
//                             <i className='bx bxs-user-account'></i>
//                             <span className="links_name">Artistas</span>
//                         </a>
//                         <span className="tooltip">Artistas</span>
//                     </li>
//                     <hr/>
//                     <div className="logo-details ImgLogoStyleContent" style={{ height:"15rem", justifyContent: "center"}}>
//                         <img className='icon ImgLogoStyle' src={logoStyleT} alt="" style={{ width:"150px" }}/>
//                     </div>
//                 </ul>
//             </div>

//         }
        
//         </>
//     )
// }

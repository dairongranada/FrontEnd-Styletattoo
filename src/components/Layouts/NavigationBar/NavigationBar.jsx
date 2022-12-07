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


  
 const [imgnav , setimgnav] = useState("https://i.postimg.cc/T2N5CnwK/perfil-Usuario-Anonim.png")



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
              <a  href="/user/edit-profile">
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


          <li>
            <a style={{height:"50px"}} href="/infoTatuajes">
              <img style={{width:"25px",marginLeft:"28px" }} src={Maquuina} alt={Maquuina} />
              <span style={{ marginLeft: "1.5rem"}} className="link_name">Tatuajes</span>

            </a>
            <ul className="sub-menu blank">
              <li><a className="link_name" href="#">Tatuajes</a></li>
            </ul>
          </li>

      
          <li>
          <a style={{height:"50px"}} href="/infoPiercings">
              <img style={{width:"25px",marginLeft:"28px" }} src={Pirncings} alt={Maquuina} />
              <span style={{ marginLeft: "1.5rem"}} className="link_name">Piercings</span>

            </a>
            <ul className="sub-menu blank">
              <li><a className="link_name" href="#">Piercings</a></li>
            </ul>
          </li>


          {userToken  && 
          <li>
            <a href="/all/artist/style">
              <i  onClick={handleLogout} style={{color:"#fff"}} className='bx bx-log-out' ></i>
              <span className="link_name">Cerrar Sesion</span>
            </a>
            <ul className="sub-menu blank">
              <li><a className="link_name" href="/all/artist/style">Cerrar Sesion</a></li>
            </ul>
          </li>
        }



          <li>
            <div className="profile-details">
              <div className="profile-content">
              { (userData.rol === '[ROLE_USUARIO]') && 
                <img src={userData.image} alt="" />
              }
             
              { (userData.rol === '[ROLE_ARTISTA]') && 
                (!userData.PerfilProfesional &&
                    <img src={userData.PerfilProfesional.img} alt={userData.PerfilProfesional.img} />
                )
              }
             
              { (userData.rol === '[ROLE_ARTISTA]') && 
              ( userData.PerfilProfesional.length == 0 &&
                  <img src={imgnav} alt="..." />
              )
              }
             { (userData.rol === '[ROLE_ARTISTA]') && 
                  ( userData.PerfilProfesional.length >= 1 &&
                      <img src={userData.PerfilProfesional[0].img} alt={userData.PerfilProfesional[0].img} />
                  )
              }
              
              { (userToken == null) && <li></li>
              }
              </div>

 
              {(userToken ) && 
              <div  className="name-job">
                <div  style={{fontSize: "15px"}}  className="profile_name">
                {userData.first_name +" "+ userData.last_name }
                  
                </div>
                <div className="job">
                {userToken  && 
                   (userData.rol === '[ROLE_USUARIO]') && <div style={{fontSize: "10px"}} className="job">| ROL: USUARIO  |</div>
                }

                {userToken  && 
                 (userData.rol === '[ROLE_ARTISTA]') && <div  style={{fontSize: "10px"}}  className="job">| ROL: ARTISTA  |</div>
                }
                
                </div>
              </div>
              }
              
              { (!userToken == null ) && 
              <div className="name-job"> </div>
              }
            </div>
            

          </li>
        </ul>
      </div>
    </div>
  )
}

import './NavigationBar.scss'

import React, { useState } from 'react'
import perfilUsuarioAnonim from '../../../images/Icons/perfilUsuarioAnonim.jpg'
import logoStyleT from '../../../images/Icons/logo.jpg'






export const NavigationBar = () => {
    const [sidebarNav, setSidebarnav] = useState("")
    const [navClose, setNavClose] = useState(false)

    const handleChangeNavs = () => {
        if (navClose === false) {
            setSidebarnav("open")
            setNavClose(true)
        }else{
            setSidebarnav("")
            setNavClose(false)
        }
    };

    // let sidebar = document.querySelector(".sidebar");
    // let closeBtn = document.querySelector("#btn");
    // let searchBtn = document.querySelector(".bx-search");

    // closeBtn.addEventListener("click", ()=>{
    //   sidebar.classList.toggle("open");
    //   menuBtnChange();//calling the function(optional)
    // });

    // searchBtn.addEventListener("click", ()=>{ // Sidebar open when you click on the search iocn
    //   sidebar.classList.toggle("open");
    //   menuBtnChange(); //calling the function(optional)
    // });

    // // following are the code to change sidebar button(optional)
    // function menuBtnChange() {
    //  if(sidebar.classList.contains("open")){
    //    closeBtn.classList.replace("bx-menu", "bx-menu-alt-right");//replacing the iocns class
    //  }else {
    //    closeBtn.classList.replace("bx-menu-alt-right","bx-menu");//replacing the iocns class
    //  }
    // }







    return (
        <>
            <div id="sidebar" className={ sidebarNav } >
                <div className="logo-details">
                    <img className='bx bxl-c-plus-plus icon' style={{ marginRight:"10px" }} src={logoStyleT} alt=""/>
                    <div className="logo_name">Style Tattoo</div>
                    <i className='bx bx-menu' id="CloseBtnNav" onClick={handleChangeNavs} ></i>
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
                        <a href="user/edit-profile">
                            <i className='bx bx-user' ></i>
                            <span className="links_name">Cuenta</span>
                        </a>
                        <span className="tooltip">Cuenta</span>
                    </li>
                    <li>
                        <a href="#">
                            <i className='bx bx-chat' ></i>
                            <span className="links_name">Artistas</span>
                        </a>
                        <span className="tooltip">Artistas</span>
                    </li>


                    <li className="profile">
                        <div className="profile-details">
                            <img src={perfilUsuarioAnonim} alt="profileImg" />
                            <div className="name_job">
                                <div className="name">Nombre Apellido</div>
                                <div className="job">| Usuario o Tatuador |</div>
                            </div>
                        </div>
                        <i className='bx bx-log-out' id="log_out" ></i>
                    </li>

                </ul>
            </div>



























            {/* <div className='barNavigate'>            
                <nav className='menu' id='js-nav'>
                    <div className='contOptionsNav'>
                        <a href="/"><ImgTemplate srcImg={logo} className='logoStyleTatto' alt=''  /></a>
                        
                        <ul className='menu-items'>
                            <li><a className='option2' href="/" >INICIO</a></li>
                            <li><a className='option2' href="/artistas">ARTISTAS</a></li>
                        </ul>
                    </div>
                    <span onClick={menu} id='burguer' className="material-symbols-outlined">menu</span>


                {/*  ICON PERFIL  USUARIO....  */ }
            {/* <ul class="menu-horizontal">
                        <li>
                            <a href="#"><img id='logoP' className='ImgUserProfile' src={perfilUsuarioAnonim} alt="" /></a>
                            <ul class="menu-vertical">
                                <div className='UpArrow'><BiUpArrow/></div>
                                <li className='menuOpcionsNav'><a href="/user/edit-profile"><AiOutlineUser/> Cuenta</a></li>
                                <li className='menuOpcionsNav'><a href="#">Citas Agendadas</a></li>
                                <ul className='cerrarSesionUL'><li className='menuOpcionsNav'><a href="#">Cerrar sesion</a></li></ul>
                            </ul>
                        </li>
                    </ul> */}
            {/*  ICON PERFIL  TATUADR....  */}
            {/* <ul class="menu-horizontal">
                        <li>
                            <a href="#"><img id='logoP' className='ImgUserProfile' src={perfilUsuarioAnonim} alt="" /></a>
                            <ul class="menu-vertical">
                                <li><a href="#"><AiOutlineUser/> Cuenta</a></li>
                                <li><a href="#">Citas Agendadas</a></li>
                                <li><a href="#">Cerrar sesion</a></li>
                            </ul>
                        </li>
                    </ul> */}



            {/* </nav>
                <div id='despleg' className='despleg'>
                    <ul>
                        <li>Perfil</li>
                        <li>Cerrar Sesion</li>
                    </ul>
                </div> */}
            {/* </div> */}



        </>
    )
}

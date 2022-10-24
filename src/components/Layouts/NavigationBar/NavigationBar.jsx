import React, { useState } from 'react'
import './NavigationBar.scss'
import perfilUsuarioAnonim from '../../../images/Icons/perfilUsuarioAnonim.jpg'
import logo from '../../../images/Icons/logo2.png'
import Cookies from 'universal-cookie';


const cookies = new Cookies();



export const NavigationBar = () => {
    
    const sidebar = document.querySelector(".sidebar");
    const closeBtn = document.querySelector("#btn");

    const [btnMenu, setBtnMenu] = useState("bx-menu")

const hanleChange = () => {
        sidebar.classList.toggle("open");
        menuBtnChange();//calling the function(optional)
    }


// following are the code to change sidebar button(optional)
function menuBtnChange() {
    if (sidebar.classList.contains("open")) {
        setBtnMenu("bx-menu", "bx-menu-alt-right")
        closeBtn.classList.replace("bx-menu", "bx-menu-alt-right");//replacing the iocns class
    } else {
        closeBtn.classList.replace("bx-menu-alt-right", "bx-menu");//replacing the iocns class
    }
}




    return (
        <>
            <div className="sidebar">
                <div className="logo-details">
                    <i className='bx bxl-c-plus-plus icon'></i>
                    <div className="logo_name">CodingLab</div>
                    <i className='bx bx-menu' id="btn"  onClick={hanleChange} ></i>
                </div>
                <ul className="nav-list">
                    <li>
                        <a href="#">
                            <i className='bx bx-user' ></i>
                            <span className="links_name">Cuenta</span>
                        </a>
                        <span className="tooltip">User</span>
                    </li>
                    <li>
                        <a href="#">
                            <i className='bx bx-chat' ></i>
                            <span className="links_name">Messages</span>
                        </a>
                        <span className="tooltip">Messages</span>
                    </li>
                    <li>
                        <a href="#">
                            <i className='bx bx-pie-chart-alt-2' ></i>
                            <span className="links_name">Analytics</span>
                        </a>
                        <span className="tooltip">Analytics</span>
                    </li>
                    <li>
                        <a href="#">
                            <i className='bx bx-folder' ></i>
                            <span className="links_name">File Manager</span>
                        </a>
                        <span className="tooltip">Files</span>
                    </li>
                    <li>
                        <a href="#">
                            <i className='bx bx-cart-alt' ></i>
                            <span className="links_name">Order</span>
                        </a>
                        <span className="tooltip">Order</span>
                    </li>
                    <li>
                        <a href="#">
                            <i className='bx bx-heart' ></i>
                            <span className="links_name">Saved</span>
                        </a>
                        <span className="tooltip">Saved</span>
                    </li>
                    <li>
                        <a href="#">
                            <i className='bx bx-cog' ></i>
                            <span className="links_name">Setting</span>
                        </a>
                        <span className="tooltip">Setting</span>
                    </li>

                    <li className="profile">
                        <div className="profile-details">
                            <img src={perfilUsuarioAnonim} alt="profileImg" />
                            <div className="name_job">
                                <div className="name">Prem Shahi</div>
                                <div className="job">Usuario</div>
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

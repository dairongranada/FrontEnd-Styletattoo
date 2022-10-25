import "./PageProfileT.scss";
import { React, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { AiOutlineUserAdd } from "react-icons/ai";
import { Link } from "react-router-dom";
import { GoArrowSmallLeft } from "react-icons/go";

export const InfoProfileT = () => {
  const [imgProfileU, setImgProfileU] = useState(
    "https://i.postimg.cc/T2N5CnwK/perfil-Usuario-Anonim.png"
  );




  return (
    <div className='BodyProfileUser'>
      <section className="seccion-perfil-usuario">
        <div className="perfil-usuario-header">
          <div className="perfil-usuario-portada">
            <div className="perfil-usuario-avatar">
              <img src={imgProfileU} alt="img-avatar" />
              <button type="button" className="boton-avatar">
                <i className="far fa-image"></i>
              </button>
            </div>
            <button type="button" className="boton-portada">
              <i className="far fa-image"></i> Cambiar fondo
            </button>
          </div>
        </div>
        <div className="perfil-usuario-body">
          <div className="perfil-usuario-bio">
            <h3 className="titulo">Maria Alejandra De la Cruz</h3>
            <p className="texto">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="perfil-usuario-footer">
            <div className="cont_icon">
              <div className="rows_register">
               <Link to="/userTatto/edit-profile" ><GoArrowSmallLeft/></Link>
                
              </div>
              <div className="user_icon">
                <AiOutlineUserAdd />
              </div>
            </div>
          </div>
          <div className="redes-sociales">
            <a href="" className="boton-redes facebook fab fa-facebook-f">
              <i className="icon-facebook"></i>
            </a>
            <a href="" className="boton-redes twitter fab fa-twitter">
              <i className="icon-twitter"></i>
            </a>
            <a href="" className="boton-redes instagram fab fa-instagram">
              <i className="icon-instagram"></i>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

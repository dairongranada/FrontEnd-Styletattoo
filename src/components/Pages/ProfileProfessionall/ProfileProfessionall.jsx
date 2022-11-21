import React, { useState,useEffect } from "react";
import axios from "axios"
import { useNavigate, useParams } from 'react-router';

import { motion } from "framer-motion"
import './ProfileProfessionall.scss'

import { NavFooter } from '../../Layouts/NavigationFooter/NavFooter/NavFooter';
import { NavigationBar } from '../../Layouts/NavigationBar/NavigationBar';
import {Portafolio  } from './Portafolio';

import {  getAllTatuadoresID } from '../../../Helpers/ApiConsumer/Tattuadores'


import imgStyle from '../../../images/Tatuadores/tatuador1.png'
import { GoHeart } from 'react-icons/go';
const baseURL = "https://rickandmortyapi.com/api/character";


export const ProfileProfessionall = () => {

  const { id } = useParams();
  const idTT = id




  const [imgDefecto, setImgDefecto] = useState([])
  const [Estatus, setEstatus] = useState('')



  const [tatuadores, setTatuadores] = useState([]);
  const [perfilProfesional, setperfilProfesional] = useState({});

  const {first_name, last_name,email} = tatuadores
  const {departament,description,direction ,experience,img,municipio}= perfilProfesional


  const [perilPortafolio, setPerilPortafolio] = useState([]);
  const [disponiblidad, setdisponiblidad] = useState([]);




  useEffect( () => {
    
    getAllTatuadoresID(idTT)
    .then( info => {
        setTatuadores( info.data );
        setperfilProfesional(info.data.PerfilProfesional[0])
        setPerilPortafolio(info.data.Portafolio)
        setdisponiblidad(info.data.iDispo[0].dispo)
        
        if (disponiblidad == true) {
          setEstatus('switch-toggle Disponible-btn')
        }if (disponiblidad == false) {
          setEstatus('switch-toggle Ocupado-btn')
        }
        
    })
  }, [])


console.log(disponiblidad);

  return (
    <>
      <NavigationBar />
      <div className='ContentBodyInfoTattois'>
        <div className='RightInftoTT'>
          <div className='ImgRightInftoTT'><img src={img} alt="" /></div>
          <p style={{display:"flex",fontSize:"15px",marginTop:"0.6rem",alignItems: "center"}} ><span  style={{fontSize: "19px"}} className="material-symbols-outlined">location_on</span>{municipio} -- {departament}</p>
          <p style={{display:"flex",fontSize:"15px",alignItems: "center"}}>Direccion:  { direction}</p>
          <div className='ButtonsRightInftoTT'>
            <button className='Btn-Citas buttons_global_StyleTatto'>AGENDAR CITA</button>
            <button className='tooltip buttonLike'>
              <GoHeart className='HeartLike' />
              <span className='tooltiptext'>Me Gusta</span>
            </button>
          </div>
          <div>
            <div className="switch-holder">
              <div className="switch-label">
                <i className="fa fa-bluetooth-b"></i><span>Servicio</span>
              </div>
              <div className={`${ disponiblidad == true && "switch-toggle Disponible-btn" }  ${ disponiblidad == false && "switch-toggle Ocupado-btn"}` }>
                <input style={{visibility: "hidden"}}  type="checkbox" id="bluetooth" />
                <label htmlFor="bluetooth"></label>
              </div>
            </div>
          </div>
        </div>

        <div className='InfoTattois'>
          <div className='LeftInftoTT'>
            <div className='NameLeftInftoTT'><h5> {first_name} {last_name} </h5></div>
            <div className='EmailLeftInftoTT'><p> {email} </p></div>
            <div className='DescriLeftInftoTT'><p>{description}</p></div>
            <div className='DescriLeftInftoTT'style={{display: "flex", gap:"5px" }}> <p style={{color:"var(--colorOrange2)"}} >Experiencia :</p><p>{experience} </p> <p>Años</p> </div>
            </div>
        </div>

        <div className='PortaFInftoTT'>
          <div className='PortaFTitle'><h5>MI TRABAJO</h5></div>
          <div className='PortaFTitleImages'>

          {(perilPortafolio.length === 0) &&
                    <>
                      <div className="NoPortafolio">
                      <div className="loadPortafolio  loaderArtist">
                          <div style={{marginRight: "8rem"}} className="spinner">
                            <span style={{width: "67px"}}  ></span>
                            <span style={{width: "67px"}}  ></span>
                            <span style={{width: "67px"}}  ></span>
                            <span style={{width: "67px"}}  ></span>
                            <span style={{width: "67px"}}  ></span>
                            <span style={{width: "67px"}}  ></span>
                            <span style={{width: "67px"}}  ></span>
                            <span style={{width: "67px"}}  ></span>
                          </div>
                          <p style={{marginTop:"10px"}} >Este artista aun no tiene trabajos...</p>
                          </div>
                      </div>
                    </>
                }



            <motion.div className='slider-container'>
              <motion.div className='slider' drag='x'
                dragConstraints={{ right: 0, left: -4000 }} >
               {perilPortafolio.map(data =>(
                  (perilPortafolio.length >=1) &&
                    <Portafolio
                      key={data.id}
                      image1={data.img1}
                      image2={data.img2}
                      image3={data.img3}
                      image4={data.img4}
                      image5={data.img5}
                    />
                ))} 
              </motion.div>
            </motion.div>
          </div>
        </div>

        <div className="ContentHorarioBack">    
          <div><h2>HORARIO</h2></div>      
          <div className="loader"><span className="hour"></span><span className="min"></span><span className="circel"></span></div>
        </div>
      </div>
    </>
  )
}


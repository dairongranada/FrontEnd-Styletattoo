import React, { useState,useEffect } from "react";
import axios from "axios"
import { useNavigate, useParams } from 'react-router';

import { motion } from "framer-motion"
import './ProfileProfessionall.scss'

import { NavFooter } from '../../Layouts/NavigationFooter/NavFooter/NavFooter';
import { NavigationBar } from '../../Layouts/NavigationBar/NavigationBar';

import {  getAllTatuadoresID } from '../../../Helpers/ApiConsumer/Tattuadores'


import imgStyle from '../../../images/Tatuadores/tatuador1.png'
import { GoHeart } from 'react-icons/go';
const baseURL = "https://rickandmortyapi.com/api/character";


export const ProfileProfessionall = () => {



  const [imgDefecto, setImgDefecto] = useState([])
  const [Estatus, setEstatus] = useState('switch-toggle Ocupado-btn')
  const [tatuadores, setTatuadores] = useState([]);
  const [perfilProfesional, setperfilProfesional] = useState({});



  const {first_name, last_name,email} = tatuadores
  const {nameArtistic,departament,description,direction ,experience,img,municipio}= perfilProfesional



  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setImgDefecto(response.data.results);
    });
  }, []);


  const { id } = useParams();

  const idTT = id
  // console.log(idTT)


  useEffect( () => {
    getAllTatuadoresID(idTT)
    .then( info => {
        setTatuadores( info.data );
        setperfilProfesional(info.data.PerfilProfesional[0])
    })

  }, [])



console.log(perfilProfesional);


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
              <div className={Estatus}>
                <input style={{visibility: "hidden"}}  type="checkbox" id="bluetooth" />
                <label for="bluetooth"></label>
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
            <motion.div className='slider-container'>
              <motion.div className='slider' drag='x'
                dragConstraints={{ right: 0, left: -4000 }} >

                {imgDefecto.map((data) => (
                  <motion.div key={data.id} className='item'>
                    <div className="PortafolioImg">
                      <div className="card-img">
                        <img className='item-image' src={data.image} alt="Imagen producto" />
                      </div>
                    </div>
                  </motion.div>
                ))
                }
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


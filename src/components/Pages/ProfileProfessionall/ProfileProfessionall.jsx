import React, { useState, useEffect } from "react";
import './ProfileProfessionall.scss'
import './citas.scss'

import { getAllTatuadoresID } from '../../../Helpers/ApiConsumer/Tattuadores'


import { useNavigate, useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { Formik, Form, Field } from 'formik';

import { motion } from "framer-motion"

import { Portafolio } from './Portafolio';
import { NavFooter } from '../../Layouts/NavigationFooter/NavFooter/NavFooter';
import { NavigationBar } from '../../Layouts/NavigationBar/NavigationBar';
import { signUpUser } from '../../../Helpers/ApiConsumer/AuthRegistro';


import { GoHeart } from 'react-icons/go';




export const ProfileProfessionall = () => {



  const [serverError, setServerError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [duplicatedData, setDuplicatedData] = useState(false);
  const [registered, setRegistered] = useState(false);

  const { id } = useParams();
  const idTT = id




  const [imgDefecto, setImgDefecto] = useState([])
  const [Estatus, setEstatus] = useState('')



  const [tatuadores, setTatuadores] = useState([]);
  const [perfilProfesional, setperfilProfesional] = useState({});

  const { first_name, last_name, email } = tatuadores
  const { departament, description, direction, experience, img, municipio } = perfilProfesional


  const [perilPortafolio, setPerilPortafolio] = useState([]);
  const [disponiblidad, setdisponiblidad] = useState([]);




  useEffect(() => {

    getAllTatuadoresID(idTT)
      .then(info => {
        setTatuadores(info.data);
        setperfilProfesional(info.data.PerfilProfesional[0])
        setPerilPortafolio(info.data.Portafolio)
        setdisponiblidad(info.data.iDispo[0].dispo)

        if (disponiblidad == true) {
          setEstatus('switch-toggle Disponible-btn')
        } if (disponiblidad == false) {
          setEstatus('switch-toggle Ocupado-btn')
        }

      })
  }, [])



  return (
    <>
      <NavigationBar />
      <div className='ContentBodyInfoTattois'>
        <div className='RightInftoTT'>
          <div className='ImgRightInftoTT'><img src={img} alt="" /></div>
          <p style={{ display: "flex", fontSize: "15px", marginTop: "0.6rem", alignItems: "center" }} ><span style={{ fontSize: "19px" }} className="material-symbols-outlined">location_on</span>{municipio} -- {departament}</p>
          <p style={{ display: "flex", fontSize: "15px", alignItems: "center" }}>Direccion:  {direction}</p>
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
              <div className={`${disponiblidad == true && "switch-toggle Disponible-btn"}  ${disponiblidad == false && "switch-toggle Ocupado-btn"}`}>
                <input style={{ visibility: "hidden" }} type="checkbox" id="bluetooth" />
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
            <div className='DescriLeftInftoTT' style={{ display: "flex", gap: "5px" }}> <p style={{ color: "var(--colorOrange2)" }} >Experiencia :</p><p>{experience} </p> <p>Años</p> </div>
          </div>
        </div>

        <div className='PortaFInftoTT'>
          <div className='PortaFTitle'><h5>MI TRABAJO</h5></div>
          <div className='PortaFTitleImages'>

            {(perilPortafolio.length === 0) &&
              <>
                <div className="NoPortafolio">
                  <div className="loadPortafolio  loaderArtist">
                    <div style={{ marginRight: "8rem" }} className="spinner">
                      <span style={{ width: "67px" }}  ></span>
                      <span style={{ width: "67px" }}  ></span>
                      <span style={{ width: "67px" }}  ></span>
                      <span style={{ width: "67px" }}  ></span>
                      <span style={{ width: "67px" }}  ></span>
                      <span style={{ width: "67px" }}  ></span>
                      <span style={{ width: "67px" }}  ></span>
                      <span style={{ width: "67px" }}  ></span>
                    </div>
                    <p style={{ marginTop: "10px" }} >Este artista aun no tiene trabajos...</p>
                  </div>
                </div>
              </>
            }



            <motion.div className='slider-container'>
              <motion.div className='slider' drag='x'
                dragConstraints={{ right: 0, left: -4000 }} >
                {perilPortafolio.map(data => (
                  (perilPortafolio.length >= 1) &&
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

        <div className="ContentTimeBackgournd">
          <div className="ContentHorarioBack">
            {/* <div className="loader"><span className="hour"></span><span className="min"></span><span className="circel"></span></div> */}






            <div style={{ marginLeft: "-4rem" }} className='Content_FormsPrincipal'>
              <Formik
                initialValues={{
                  Date: "",
                  Time: "",
                  Img: "",
                }}

                validate={(valores) => {
                  let ers = {}
                  // VALIDACION NOMBRE
                  if (!valores.first_name) {
                    ers.first_name = "Porfavor ingresa un nombre"
                  } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.first_name)) {
                    ers.first_name = "Porfavor ingresa solo letras"
                  }

                  return ers

                }}

                onSubmit={(valores, { resetForm }) => {
                  let validacion = {};

                  signUpUser({
                    Date: valores.Date,
                    Time: valores.Time,
                    Img: valores.Img,


                  }).then(info => {
                    validacion = info
                    setLoading(true);
                    if (validacion.status === 400) {
                      setDuplicatedData(true);
                      setServerError(false);
                      setLoading(false);
                    }
                    else if (validacion.status === 500) {
                      setServerError(true);
                      setDuplicatedData(false);
                      setLoading(false);
                    }
                    else {
                      setDuplicatedData(false);
                      resetForm();
                      setLoading(false);
                      setRegistered(true);
                      window.location = "/user/edit-quotes";
                    }
                  });


                }}


              >
                {({ errors, touched }) => (
                  <Form className='formCitas'>
                    <h2>Agenda tu cITA</h2>
                    <div className="inputContentCitas">
                      <div>
                        <label style={{fontWeight: "100"}} htmlFor="Time">Ingresa el dia</label>
                        <Field
                          className='inputsCitas'
                          name='Date'
                          id='Date'
                          type="Date"
                          placeholder='Date'
                        />
                        {touched.name && errors.name && <span>{errors.name}</span>}
                      </div>
                      <div>
                        <label style={{fontWeight: "100"}} htmlFor="Time">Ingresa la hora</label>
                        <Field
                          className='inputsCitas'
                          name='Time'
                          id='Time'
                          type="Time"
                        />
                        {touched.last_name && errors.last_name && <span>{errors.last_name}</span>}
                      </div>
                    </div>

                    <div className="inputContentCitas">
                  
                      <div style={{display: "flex", gap: ".5rem", flexDirection: "column", alignItems: "center"}}> 
                      <label style={{fontWeight: "100"}} htmlFor="Time">Muestrame tu idea</label>
                        <button class="contenedor-btn-file">
                            <span class="material-symbols-outlined"> photo_camera </span>
                            <label for="btn-file"></label>
                            <input type="file" id="btn-file"/>
                        </button>
                        {touched.email && errors.email && <span>{errors.email}</span>}

                      </div>
                    </div>
                    <div className="inputContentCitas">
                      <div>
                        <label style={{fontWeight: "100"}} htmlFor="Time">Describe</label>
                        <Field
                          className='inputsCitas'
                          name='Description'
                          id='Description'
                          as="textarea"
                          placeholder='...'
                          maxLength='150'
                        />
                        {touched.cellPhone && errors.cellPhone && <span>{errors.cellPhone}</span>}
                      </div>
                    </div>


                    <div className='Btn_Citas' >
                      <button
                        style ={{width: "22rem"}}
                        className="buttons_global_StyleTatto"
                        type={"submit"}>
                        Agendar Cita
                      </button>
                    </div>

                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}


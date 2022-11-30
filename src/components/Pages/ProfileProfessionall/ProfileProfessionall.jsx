import React, { useState, useEffect } from "react";
import './ProfileProfessionall.scss'
import './citas.scss'
import './Estrellas.scss'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { getAllTatuadoresID, MetodoPUTLikes, MetodoGETLikes } from '../../../Helpers/ApiConsumer/Tattuadores'

import { Formik, Form, Field } from 'formik';
import { SubirTrabajos, CreateDisponibilidad } from '../../.././Helpers/ApiConsumer/AuthRegistro'
import { getusers, getTatois } from '../../.././Helpers/ApiConsumer/PostUsers'
import { MdOutlineCancel } from 'react-icons/md';

import emailjs from '@emailjs/browser';
import { useNavigate, useParams } from 'react-router';
import { Link } from 'react-router-dom';


import { motion } from "framer-motion"

import { Portafolio } from './Portafolio';
import { NavFooter } from '../../Layouts/NavigationFooter/NavFooter/NavFooter';
import { NavigationBar } from '../../Layouts/NavigationBar/NavigationBar';
import { AgendarCita } from '../../../Helpers/ApiConsumer/AuthRegistro';


import { GoHeart } from 'react-icons/go';
import { Input } from "reactstrap";




export const ProfileProfessionall = () => {
  const FunctionScroll = () => {
    window.scroll({
      top: 1530,
      behavior: 'smooth'
    })
  }




  const notify = () => toast.info('Primero te tienes que registrar', {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });

  const notifyTatto = () => toast.warn('Ups, No puedes darte Like tu mismo', {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });

  const notifyTattoCitas = () => toast.warn('Inicia sesion como usuario para poder usar esta funcion', {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });






  const { id } = useParams();
  const idTT = id

  const [user, setUser] = useState(JSON.parse(localStorage.getItem("usuario")));
  const [InfoUser, setInfoUser] = useState(JSON.parse(localStorage.getItem("InfoUser")));
  const [tokenID, setToken] = useState(localStorage.getItem("token"));

  const [userData, setUserData] = useState({});

  let idTatu = userData.id




  useEffect(() => {
    if (!!user) {
      getusers(tokenID)
        .then(data => setUserData(data.data));
    }


  }, [])





  useEffect(() => {
    getTatois(tokenID)
      .then(info => {
        setperfilProfesional(info.data.PerfilProfesional.length)
      })
  }, [])

  
  const [image2, setImage] = useState("")

  const uploadImage = async (e) => {
    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "images")
    const res = await fetch(
      "https://api.cloudinary.com/v1_1/dryg8dmrb/image/upload",
      {
        method: "POST",
        body: data,
      }
    )
    const file = await res.json()

    setImage(file.secure_url)
  }


  const [serverError, setServerError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [duplicatedData, setDuplicatedData] = useState(false);
  const [registered, setRegistered] = useState(false);
  const [abrir, setAbrir] = useState(0)


  const [tatuadores, setTatuadores] = useState([]);
  const [perfilProfesional, setperfilProfesional] = useState({});

  const { first_name, last_name, email } = tatuadores
  const { departament, description, direction, experience, img, municipio } = perfilProfesional


  const [perilPortafolio, setPerilPortafolio] = useState([]);



  const [disponiblidad, setdisponiblidad] = useState([]);
  const [Likes, setLikes] = useState([]);

  let IDisponiblidad = disponiblidad.id

  const [nameArtst, setnameArtst] = useState([]);
  const [lastArtst, setlastArtst] = useState([]);


  useEffect(() => {

    getAllTatuadoresID(idTT)
      .then(info => {
        setTatuadores(info.data);
        setperfilProfesional(info.data.PerfilProfesional[0])
        setPerilPortafolio(info.data.Portafolio)
        setdisponiblidad(info.data.iDispo[0])
        setLikes(info.data.iDispo[0].like)
        setnameArtst(info.data.first_name)
        setlastArtst(info.data.last_name)

      })
  }, [])



  ////////////////////////////////////////////
  // L I K E S
  let likeIcon = document.querySelector("#icon"),
    count = document.querySelector("#count");
  let clicked = false;
  let Numberslike = Likes

  const likeBtn = () => {
    if (!clicked) {
      clicked = true;
      count.textContent++;
      Numberslike++

    } else {
      clicked = false;
      count.textContent--;
      Numberslike--
    }

    ///////////////////////////////////////////
    // M E T O D O    P  U  T    L I K E S

    let valores = {
      dispo: disponiblidad.dispo,
      like: Numberslike,
      iDispo: disponiblidad.iDispo
    }

    MetodoPUTLikes(valores, IDisponiblidad)


    
  };


//   const sendEmail = (event)=>{
//     event.preventDefault();
//     // ALERTA CHIMBA
//     toast.success('Se envio correctamente')
//     emailjs.sendForm('service_6n0k3ay','template_jct8opt',event.target,'3shfZ5IuzLrmV8lcH')
//     .then(response => console.log(response))
//     .catch(err => console.error(err))

//     setTimeout(() => {
//         window.location.reload(false);
//     }, 2000);
    
// }
  return (
    <>
      <NavigationBar />
      <div className='ContentBodyInfoTattois'>
        <div className='RightInftoTT'>
          <div className='ImgRightInftoTT'><img src={img} alt="" /></div>
          <p style={{ display: "flex", fontSize: "15px", marginTop: "0.6rem", alignItems: "center" }} ><span style={{ fontSize: "19px" }} className="material-symbols-outlined">location_on</span>{municipio} -- {departament}</p>
          <p style={{ display: "flex", fontSize: "15px", alignItems: "center" }}>Direccion:  {direction}</p>
          <div style={{ display: "flex", gap: "1rem", alignItems: "flex-end" }} className='ButtonsRightInftoTT'>
            <button onClick={FunctionScroll} style={{ width: "190px" }} className='Btn-Citas buttons_global_StyleTatto'>AGENDAR CITA</button>


            {/* 
          ██████╗░████████╗███╗░░██╗    ██╗░░░░░██╗██╗░░██╗███████╗
          ██╔══██╗╚══██╔══╝████╗░██║    ██║░░░░░██║██║░██╔╝██╔════╝
          ██████╦╝░░░██║░░░██╔██╗██║    ██║░░░░░██║█████═╝░█████╗░░
          ██╔══██╗░░░██║░░░██║╚████║    ██║░░░░░██║██╔═██╗░██╔══╝░░
          ██████╦╝░░░██║░░░██║░╚███║    ███████╗██║██║░╚██╗███████╗
          ╚═════╝░░░░╚═╝░░░╚═╝░░╚══╝    ╚══════╝╚═╝╚═╝░░╚═╝╚══════╝*/}
            {(tokenID ) &&
            (idTatu !== InfoUser && InfoUser.rol == "[ROLE_USUARIO]" ) &&
              <button onClick={likeBtn} className="like__btn">
                <span id="count">{Numberslike}</span> Like
              </button>
            }
            {(tokenID == null) &&
              <button style={{ cursor: "not-allowed" }} onClick={notify} className="like__btn btnBlocked">
                <span>{Numberslike}</span> Likes
              </button>
            }
            {(tokenID ) &&
            (InfoUser.rol == "[ROLE_ARTISTA]") &&
              <button style={{ cursor: "not-allowed" }} onClick={notifyTatto} className="like__btn btnBlocked">
                <span>{Numberslike}</span> Like
              </button>
            }
          </div>
          <div>
            <div className="switch-holder">
              <div className="switch-label">
                <i className="fa fa-bluetooth-b"></i><span>Servicio</span>
              </div>
              <div className={`${disponiblidad.dispo == true && "switch-toggle Disponible-btn"}  ${disponiblidad.dispo == false && "switch-toggle Ocupado-btn"}`}>
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
          <div className='PortaFTitle' ><p  style={{fontFamily: 'Amatic SC',fontWeight: "600", marginTop:"1rem"}}>MI TRABAJO</p></div>
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
                    <p style={{ margin: "10px 0 10px 20px" }} >Este artista aun no tiene trabajos...</p>
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


      {/*
      ░█████╗░    ██╗    ████████╗    ░█████╗░    ░██████╗
      ██╔══██╗    ██║    ╚══██╔══╝    ██╔══██╗    ██╔════╝
      ██║░░╚═╝    ██║    ░░░██║░░░    ███████║    ╚█████╗░
      ██║░░██╗    ██║    ░░░██║░░░    ██╔══██║    ░╚═══██╗
      ╚█████╔╝    ██║    ░░░██║░░░    ██║░░██║    ██████╔╝
      ░╚════╝░    ╚═╝    ░░░╚═╝░░░    ╚═╝░░╚═╝    ╚═════╝░
      */}

        <div className="ContentTimeBackgournd">
          <div className="ContentHorarioBack">
            {/* <div className="loader"><span className="hour"></span><span className="min"></span><span className="circel"></span></div> */}
            <div style={{ marginLeft: "-4rem" }} className='Content_FormsPrincipal'>
              <Formik
                initialValues={{
                  date: "",
                  time: "",
                  img: "",
                  description: "",
                }}

                
                onSubmit={(valores, { resetForm }) => {
                  let validacion = {};

                  AgendarCita({
                    date: valores.date,
                    time: valores.time,
                    img: image2,
                    description: valores.description,
                    userID: idTatu,
                    artist_tattoo: idTT,
                    isActive: "false",
                    userTatto: nameArtst  +" "+ lastArtst,
                    userName: InfoUser.first_name  +" "+ InfoUser.last_name,


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
                      window.location = "/";
                    }
                  });


                }}


              >
                {({ errors, touched }) => (
                  <Form className='formCitas'>
                    <p  className="TitleCitasss" style={{fontFamily: 'Amatic SC',fontWeight: "500", margin:"1rem 0 2rem 0"}} >Agenda tu cita</p>
                    <div className="inputContentCitas">
                      <div>
                        <label style={{ fontWeight: "100" }}>Ingresa el dia</label>
                        <Field
                          className='inputsCitas'
                          name='date'
                          id='Date'
                          type="Date"
                          placeholder='Date'
                        />
                        {touched.name && errors.name && <span>{errors.name}</span>}
                      </div>
                      <div>
                        <label style={{ fontWeight: "100" }}>Ingresa la hora</label>
                        <Field
                          className='inputsCitas'
                          name='time'
                          id='Time'
                          type="Time"
                        />
                        {touched.last_name && errors.last_name && <span>{errors.last_name}</span>}
                      </div>
                    </div>

                    <div className="inputContentCitas">

                      <div style={{ display: "flex", gap: ".5rem", flexDirection: "column", alignItems: "center" }}>
                        <label style={{ fontWeight: "100" }}>Muestrame tu idea</label>
                          <Input onChange={uploadImage} name="img" type="file" id="btn-file" />
                        {touched.email && errors.email && <span>{errors.email}</span>}

                      </div>
                    </div>
                    <div className="inputContentCitas">
                      <div>
                        <label style={{ fontWeight: "100" }}>Describe</label>
                        <Field
                          className='inputsCitas'
                          name='description'
                          id='Description'
                          as="textarea"
                          placeholder='...'
                          maxLength='150'
                        />
                        {touched.cellPhone && errors.cellPhone && <span>{errors.cellPhone}</span>}
                      </div>
                    </div>



                    {/*
                    ██████╗░████████╗███╗░░██╗    ░█████╗░██╗████████╗░█████╗░░██████╗
                    ██╔══██╗╚══██╔══╝████╗░██║    ██╔══██╗██║╚══██╔══╝██╔══██╗██╔════╝
                    ██████╦╝░░░██║░░░██╔██╗██║    ██║░░╚═╝██║░░░██║░░░███████║╚█████╗░
                    ██╔══██╗░░░██║░░░██║╚████║    ██║░░██╗██║░░░██║░░░██╔══██║░╚═══██╗
                    ██████╦╝░░░██║░░░██║░╚███║    ╚█████╔╝██║░░░██║░░░██║░░██║██████╔╝
                    ╚═════╝░░░░╚═╝░░░╚═╝░░╚══╝    ░╚════╝░╚═╝░░░╚═╝░░░╚═╝░░╚═╝╚═════╝░ */}

                    <div className='Btn_Citas' >
                    {(tokenID ) &&
                      (idTatu !== InfoUser && InfoUser.rol == "[ROLE_USUARIO]" ) &&
                          <button
                          className="buttons_global_StyleTatto"
                          type="submit">
                          Agenda Tu Cita
                        </button>
                      }
                      {(tokenID == null) &&
                        <p onClick={notify} className="buttons_global_StyleTatto"
                          style={{ width: "22rem", cursor: "not-allowed" }}>
                          Agenda Tu Cita
                        </p>
                      }{(tokenID ) &&
                        (InfoUser.rol == "[ROLE_ARTISTA]") &&
                        <p onClick={notifyTattoCitas} className="buttons_global_StyleTatto"
                          style={{ width: "22rem", cursor: "not-allowed" }}>
                          Agenda Tu Cita
                        </p>
                      }
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


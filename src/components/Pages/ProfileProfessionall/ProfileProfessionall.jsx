import React, { useState, useEffect } from "react";
import './ProfileProfessionall.scss'
import './citas.scss'
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { getAllTatuadoresID, MetodoPUTLikes, MetodoGETLikes } from '../../../Helpers/ApiConsumer/Tattuadores'

import { Formik, Form, Field } from 'formik';
import { SubirTrabajos, CreateDisponibilidad } from '../../.././Helpers/ApiConsumer/AuthRegistro'
import { getusers, getTatois } from '../../.././Helpers/ApiConsumer/PostUsers'
import { MdOutlineCancel } from 'react-icons/md';


import { useNavigate, useParams } from 'react-router';
import { Link } from 'react-router-dom';


import { motion } from "framer-motion"

import { Portafolio } from './Portafolio';
import { NavFooter } from '../../Layouts/NavigationFooter/NavFooter/NavFooter';
import { NavigationBar } from '../../Layouts/NavigationBar/NavigationBar';
import { signUpUser } from '../../../Helpers/ApiConsumer/AuthRegistro';


import { GoHeart } from 'react-icons/go';
import { Input } from "reactstrap";




export const ProfileProfessionall = () => {
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


  const { id } = useParams();
  const idTT = id

  const [user, setUser] = useState(JSON.parse(localStorage.getItem("usuario")));
  const [tokenID, setToken] = useState(localStorage.getItem("token"));

  const [userData, setUserData] = useState({});

  let idTatu = userData.id


  useEffect(() => {
    if (!!user) {
      getusers(tokenID)
        .then(data => setUserData(data.data));
    }


  }, [])



  console.log(tokenID);


  useEffect(() => {
    getTatois(tokenID)
      .then(info => {
        setperfilProfesional(info.data.PerfilProfesional.length)
      })
  }, [])

  const [fileU, setFileU] = useState("")
  const [image, setImage] = useState("")
  const [image2, setImage2] = useState("")
  const [image3, setImage3] = useState("")
  const [image4, setImage4] = useState("")
  const [image5, setImage5] = useState("")

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
    setImage2(file.secure_url)
    setImage3(file.secure_url)
    setImage4(file.secure_url)
    setImage5(file.secure_url)
    setFileU(file.secure_url)

  }


  let imgUrl1 = image;

  let imgUrl2 = image2;

  let imgUrl3 = image3;

  let imgUrl4 = image4;

  let imgUrl5 = image5;


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




  useEffect(() => {

    getAllTatuadoresID(idTT)
      .then(info => {
        setTatuadores(info.data);
        setperfilProfesional(info.data.PerfilProfesional[0])
        setPerilPortafolio(info.data.Portafolio)
        setdisponiblidad(info.data.iDispo[0])
        setLikes(info.data.iDispo[0].like)
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
    ////////////////////////////////////////////


    // M E T O D O    P  U  T    L I K E S

    let valores = {
      dispo: disponiblidad.dispo,
      like: Numberslike,
      iDispo: disponiblidad.iDispo
    }

    MetodoPUTLikes(valores, IDisponiblidad)
  };




  return (
    <>
      <NavigationBar />
      <div className='ContentBodyInfoTattois'>
        <div className='RightInftoTT'>
          <div className='ImgRightInftoTT'><img src={img} alt="" /></div>
          <p style={{ display: "flex", fontSize: "15px", marginTop: "0.6rem", alignItems: "center" }} ><span style={{ fontSize: "19px" }} className="material-symbols-outlined">location_on</span>{municipio} -- {departament}</p>
          <p style={{ display: "flex", fontSize: "15px", alignItems: "center" }}>Direccion:  {direction}</p>
          <div style={{ display: "flex", gap: "1rem", alignItems: "flex-end" }} className='ButtonsRightInftoTT'>
            <button style={{ width: "190px" }} className='Btn-Citas buttons_global_StyleTatto'>AGENDAR CITA</button>

            {(tokenID) &&
              <button onClick={likeBtn} className="like__btn">
                <span id="count">{Numberslike}</span> Like
              </button>
            }
            {(tokenID == null) &&
              <button onClick={notify} className="like__btn">
                <span className="btnBlocked">{Numberslike}</span> Like
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
                        <label style={{ fontWeight: "100" }}>Ingresa el dia</label>
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
                        <label style={{ fontWeight: "100" }}>Ingresa la hora</label>
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

                      <div style={{ display: "flex", gap: ".5rem", flexDirection: "column", alignItems: "center" }}>
                        <label style={{ fontWeight: "100" }}>Muestrame tu idea</label>
                        <button className="contenedor-btn-file">
                          <span className="material-symbols-outlined"> photo_camera </span>
                          <input type="file" id="btn-file" />
                        </button>
                        {touched.email && errors.email && <span>{errors.email}</span>}

                      </div>
                    </div>
                    <div className="inputContentCitas">
                      <div>
                        <label style={{ fontWeight: "100" }}>Describe</label>
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
                        style={{ width: "22rem" }}
                        className="buttons_global_StyleTatto"
                        type="submit">
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
      {(abrir === 2) &&

        <div className='FondBackGPp'>
          <div className='ModalBuildProfilep'>
            <div className='CloseBackProfileP'> <a href="/userTatto/edit-profile"><MdOutlineCancel /></a></div>
            <div className="contImgAndTittlear">
              <div className='ContIcontInMBPP'>
              </div>
              <div className="SecondContIconCMBPP">
                <h3>Crea tu perfil profesional</h3>
              </div>
            </div>
            <Formik
              initialValues={{
                img1: "",
                img2: "",
                img3: "",
                img4: "",
                img5: "",
                idTatuador: "",
              }}

              onSubmit={(valores, { resetForm }) => {
                let validacion = {};

                SubirTrabajos({
                  img1: imgUrl1,
                  img2: imgUrl2,
                  img3: imgUrl3,
                  img4: imgUrl4,
                  img5: imgUrl5,
                  idTatuador: idTatu,

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
                    CreateDisponibilidad({
                      like: 0,
                      dispo: true,
                      iDispo: idTatu
                    })
                    setDuplicatedData(false);
                    resetForm();
                    setLoading(false);
                    setRegistered(true);
                    window.location = `/tatto/view/profile/${idTatu}`;
                  }
                })

              }}

            >

              <Form>
                <div className="contInfoUserBoxes">
                  <div className="SelectContent">
                    <div>
                      <Input onChange={uploadImage} required className='select' type='file' name="img1" />

                    </div>
                    <div>
                      <Input onChange={uploadImage} required className='select' type='file' name="img2" />

                    </div>
                  </div>
                  <div className="SelectContent">
                    <div>
                      <Input onChange={uploadImage} className='inputProfile' placeholder='Ingresa Tu Expreciencia' type="file" name="img3" />
                    </div>
                    <div>
                      <Input onChange={uploadImage} className='inputProfile' name='img4' required placeholder="Direccion" type="file" />
                    </div>
                  </div>

                  <div className="SelectContent">
                    <div style={{ width: "100%", textAlign: "center", marginTop: "5px", marginBottom: "5px" }}>


                      <div style={{ height: "40px", marginTop: "5px", marginBottom: "10px", marginLeft: "60px", color: "white" }} >
                        <Input onChange={uploadImage} className='sapos' type="file" name="img5" />
                      </div>
                    </div>
                  </div>
                  <div>
                    <button style={{ width: "100%", textAlign: "center" }} type='submit' className='buttons_global_StyleTatto'>Crear Perfil</button>
                  </div>
                </div>
              </Form>
            </Formik>

          </div>


        </div>

      }
    </>
  )
}


import './PageProfileT.scss'
import { React } from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import { Formik, Form, Field } from 'formik';
import { CreateProfesionalprofile, CreateDisponibilidad } from '../../.././Helpers/ApiConsumer/AuthRegistro'
import { getusers, getTatois } from '../../.././Helpers/ApiConsumer/PostUsers'
import { MdOutlineCancel } from 'react-icons/md';
import { useParams } from 'react-router';
import { getAllTatuadoresID } from '../../../Helpers/ApiConsumer/Tattuadores'
import { MetodoPUTdispo } from '../../../Helpers/put'
import toast, { Toaster } from 'react-hot-toast';




import './createProfile.scss'

export const InfoProfileT = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("usuario")));

  const [InfoUser, setInfoUserUser] = useState(JSON.parse(localStorage.getItem("InfoUser")));
  const [tokenID, setToken] = useState(localStorage.getItem("token"));

  const [userData, setUserData] = useState({});
  const [disponiblidad, setDisponibilidad] = useState({})
  // const [likes, setLikes] = useState()
  // const [iDispo, setiDispo] = useState()

  let idTatu = userData.id


  useEffect(() => {

    getAllTatuadoresID(InfoUser.id)
      .then(dat => {
        setDisponibilidad(dat.data.iDispo[0])
      })

    if (!!user) {
      getusers(tokenID)
        .then(data => setUserData(data.data));
    }


  }, [])

  
  const [serverError, setServerError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [duplicatedData, setDuplicatedData] = useState(false);
  const [registered, setRegistered] = useState("mjsErrorRe");


  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("usuario");
    localStorage.removeItem("InfoUser");
    localStorage.removeItem("TokenAcces")
    window.location = "/IngresarSesion";
  }

  const [fileU, setFileU] = useState("")
  const [image, setImage] = useState("")
  const [abrir, setAbrir] = useState(0)

  const OpenModalProfP = () => {

    setAbrir(1)
    
  }


  const [perfilProfesional, setperfilProfesional] = useState({});

  useEffect(() => {
    getTatois(tokenID)
      .then(info => {
        setperfilProfesional(info.data.PerfilProfesional.length)
      })
  }, [])


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
    setFileU(file.secure_url)
  }
  let imgUrl = image;
  return (
    <>
      {(abrir === 0) &&
        <div className="perfil-usuario-body">
          <div className="perfil-usuario-footer">
            <ul className="lista-datos">
              <li className='icono'><Link to="/userTatto/edit-name"><span className="material-symbols-outlined Icons-Options">badge</span>Nombre y correo</Link></li>
              <li className='icono'id={`${ perfilProfesional === 1 && "ocultarliCreate" }`} ><a onClick={OpenModalProfP} href="#"><span className="material-symbols-outlined Icons-Options">person</span>Crear Perfil Profesional</a></li>
              <li className='icono2'id={`${ perfilProfesional === 1 && "mostrarliCreate" }`} ><a onClick={OpenModalProfP} href="#"><span className="material-symbols-outlined Icons-Options">person</span>Subir Trabajos</a></li>
              <li className='icono'><a href="#"><span class="material-symbols-outlined"> work_history </span>Disponiblidad </a></li>
            </ul>
            <ul className="lista-datos">
              <li className='icono'><Link to="/userTatto/edit-quotes"><span className="material-symbols-outlined Icons-Options">auto_stories</span>Citas agendadas</Link></li>
              <li className='icono'><Link to="/userTatto/edit-password"><span className="material-symbols-outlined Icons-Options">vpn_key</span>Contraseña </Link></li>
              <li onClick={handleLogout} className='icono'><Link to="/"><span className="material-symbols-outlined Icons-Options">logout</span>Cerrar sesion</Link></li>
            </ul>
          </div>
          <Toaster/>
        </div>
      }      {(abrir === 1) &&
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
                img: "",
                like: 0,
                departament: "",
                municipio: "",
                direction: "",
                experience: "",
                description: "",
                artist: "",
              }}
             
              onSubmit={(valores, { resetForm }) => {
                let validacion = {};

                CreateProfesionalprofile({
                  img: imgUrl,
                  departament: valores.departament,
                  municipio: valores.municipio,
                  direction: valores.direction,
                  experience: valores.experience,
                  description: valores.description,
                  artist: idTatu,

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
                      iDispo:idTatu
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
                          <Field required className='select' as="select" name="departament">
                            <option>Escoje tu departamento</option>
                            <option value="Manizales">Manizales</option>
                            <option value="Quindio">Quindio</option>
                            <option value="Risaralda">Risaralda</option>
                          </Field>
                          </div>
                          <div>
                          <Field required className='select'as="select" name="municipio">
                            <option>Escoje tu municipio</option>
                            <option value="armenia">armenia</option>
                            <option value="calarca">calarca</option>
                            <option value="quimbaya">quimbaya</option>
                            <option value="montenegro">montenegro</option>
                            <option value="pijao">pijao</option>
                            <option value="genova">genova</option>
                            <option value="tebaida">tebaida</option>
                            <option value="filandia">filandia</option>
                            <option value="circacia">circacia</option>
                            <option value="cordoba">cordoba</option>
                            <option value="salento">salento</option>
                            <option value="buena vista">buena vista</option>
                          </Field>
                          </div>
                        </div>
                        <div className="SelectContent">
                          <div>
                            <Field className='inputProfile' placeholder='Ingresa Tu Expreciencia'type="number" name="experience" />
                          </div>
                          <div>
                            <Field className='inputProfile' name='direction' required placeholder="Direccion" type="text"/>
                          </div>
                        </div>
                        <div className="SelectContent">
                          <Field className="TextareaProfile" readonly  maxLength="100" required as="textarea" placeholder='Descripcion' name="description" id="textarea" />
                        </div>


                        <div className="SelectContent">
                          <div  style={{width: "100%", textAlign:"center",marginTop:"5px",marginBottom:"5px" }}>
                            
                            <label  style={{fontSize:"12px",color:"#fffff9"}} htmlFor="">Añade una foto de perfil</label>
                            <div style={{height: "40px",marginTop:"5px",marginBottom:"10px" ,marginLeft:"60px",color:"white" }} >
                              <input onChange={uploadImage} className='sapos' type="file" name="img" />
                            </div>
                          </div>
                        </div>
                      <div>
                        <button style={{width: "100%", textAlign:"center" }} type='submit' className='buttons_global_StyleTatto'>Crear Perfil</button>
                      </div>
                  </div>
                </Form>
            </Formik>
          </div>
        </div>
      }
    </>

  );
};

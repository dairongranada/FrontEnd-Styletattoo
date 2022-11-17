import './PageProfileT.scss'
import { React } from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import Maquuina from '../../../images/Icons/Maquuina.png'
import { Formik, Form, Field } from 'formik';
import { CreateProfesionalprofile } from '../../.././Helpers/ApiConsumer/AuthRegistro'
import { getusers } from '../../.././Helpers/ApiConsumer/PostUsers'

export const InfoProfileT = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("usuario")));
  const [tokenID, setToken] = useState(localStorage.getItem("token"));

  const [userData, setUserData] = useState({});
  let idTatu = userData.id

  useEffect(() => {
    if (!!user) {
      getusers(tokenID)
        .then(data => setUserData(data.data));
    } else {
      console.log("No se ha autenticado");
    }


  }, [])

  console.log(userData.id);


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
  console.log(imgUrl);
  return (
    <>
      {(abrir === 0) &&
        <div className="perfil-usuario-body">
          <div className="perfil-usuario-footer">
            <ul className="lista-datos">
              <li className='icono'><Link to="/userTatto/edit-name"><span className="material-symbols-outlined Icons-Options">badge</span>Nombre y correo</Link></li>
              <li onClick={OpenModalProfP} className='icono BuldProfileP'><span className="material-symbols-outlined">person</span>Crear Perfil Profesional</li>
              <li className='icono'><Link to="/userTatto/edit-password"><span className="material-symbols-outlined Icons-Options">vpn_key</span>Contraseña </Link></li>
            </ul>
            <ul className="lista-datos">
              <li className='icono'><Link to="/userTatto/edit-quotes"><span className="material-symbols-outlined Icons-Options">auto_stories</span>Citas agendadas</Link></li>
              <li onClick={handleLogout} className='icono'><Link to="/"><span className="material-symbols-outlined Icons-Options">logout</span>Cerrar sesion</Link></li>
            </ul>
          </div>
        </div>
      }

      {(abrir === 1) &&
        <div className='FondBackGPp'>
          <div className='ModalBuildProfilep'>
            <div className="contImgAndTittlear">
              <div className='ContIcontInMBPP'>
                <img className='IconMaquuina' src={Maquuina} alt="Maquuina" />
              </div>
              <div className="SecondContIconCMBPP">
                <h3>Crea tu perfil profesional</h3>
              </div>
            </div>
            <Formik
              initialValues={{
                img: "",
                like: "0",
                departament: "",
                municipio: "",
                direction: "",
                experience: "",
                description: "",
                artist: "",
              }}
              validate={(valores) => {
                let ers = {}
                
                // VALIDACION DIRECCION 
                if (!valores.direction) {
                  ers.direction = "Porfavor ingresa una direcccion"
                }
                return ers

              }}

              onSubmit={(valores, { resetForm }) => {
                let validacion = {};
                CreateProfesionalprofile({
                  img: imgUrl,
                  like: "0",
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
                    setDuplicatedData(false);
                    resetForm();
                    setLoading(false);
                    setRegistered(true);
                    window.location = `/tatto/view/profile/${idTatu}`;
                  }
                })

              }}

            >
              {({ errors, touched }) => (
                <Form>
                  <div className="contInfoUserBoxes">
                    <div className="columBoxesMBPP">

                      <div className="groupLandInpMBPP">

                        <Field required className='SelectorOptionD' as="select" name="departament">
                          <option defaultValue disabled>Escoje tu departamento</option>
                          <option value="Quindio">Quindio</option>
                          <option value="Risaralda">Risaralda</option>
                        </Field>
                      </div>

                    </div>


                    <div className="columBoxesMBPP">

                      <div className="groupLandInpMBPP">

                        <Field
                          name='direction'
                          className='BoxinpMBPP'
                          required
                          placeholder="Direccion"
                          type="text"
                        />
                        {touched.direction && errors.direction && <span>{errors.direction}</span>}
                      </div>

                      <div className="groupLandInpMBPP">

                        <Field required className='SelectorOptionD' as="select" name="municipio">
                          <option defaultValue disabled >Escoje tu municipio</option>
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

                    <div className="ContTextTareaDescriptionT">

                      <Field required as="textarea"
                        className='DescriptionExotic'
                        placeholder='Descripcion'
                        name="description"
                        id="textarea" >
                      </Field>


                    </div>

                    <div className='groupLandInpMBPP'>
                      <p placeholder=''>Introduce tu imagen</p>

                      {/* un onChange para subir imagen a cludinary */}
                      <Field onChange={uploadImage} name='img' type="file" />
                    </div>

                    <div className='groupLandInpMBPP'>
                      <p>Años de experiencia</p>
                      <Field className='YearsOldExpe' type="text" name="experience" />
                    </div>

                    <div className="contOtionsButtonsMBPP">
                      <button type='submit' className='buttons_global_StyleTatto'>Crear Perfil</button>
                    </div>
                  </div>

                </Form>
              )}
            </Formik>
          </div>
        </div>
      }
    </>

  );
};

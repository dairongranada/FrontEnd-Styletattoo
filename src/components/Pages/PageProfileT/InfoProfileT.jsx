import './PageProfileT.scss'
import { React } from "react";
import { Link } from "react-router-dom";
import { useState } from 'react';
import Maquuina from '../../../images/Icons/Maquuina.png'
import { Formik, Form, Field } from 'formik';

export const InfoProfileT = () => {

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("usuario");
    localStorage.removeItem("InfoUser");
    window.location = "/IngresarSesion";
}


  const [abrir, setAbrir] = useState(0)

  const OpenModalProfP = () => {
    setAbrir(1)
  }

  const CloseModalMBPP = () => {
    setAbrir(0)
  }



  return (
    <>
      {(abrir === 0) &&
        <div className="perfil-usuario-body">
          <div className="perfil-usuario-footer">
            <ul className="lista-datos">
              <li className='icono'><Link to="/userTatto/edit-name"><span className="material-symbols-outlined Icons-Options">badge</span>Nombre y correo</Link></li>
              <li onClick={OpenModalProfP} className='icono BuldProfileP'><span class="material-symbols-outlined">person</span>Crear Perfil Profesional</li>
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
                nameArtistic:"",
                departament:"",
                direction:"",
                municipio:"",
                experience:"",
                rol:"[ROLE_ARTISTA]"
              }}
            >

              <Form>

                <div className="contInfoUserBoxes">
                  <div className="columBoxesMBPP">

                    <div className="groupLandInpMBPP">

                      <Field
                      name='nameArtistic'
                      className='BoxinpMBPP' 
                      required 
                      type="text"
                      placeholder = "Nombre Artistico" 
                      />
                    </div>

                    <div className="groupLandInpMBPP">

                      <select className='SelectorOptionD' name="departament">
                        <option selected disabled>Escoje tu departamento</option>
                        <option value="Quindio">Quindio</option>
                      </select>

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

                    </div>

                    <div className="groupLandInpMBPP">

                      <select className='SelectorOptionD' name="departament">

                        <option selected disabled >Escoje tu municipio</option>
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

                      </select>
                      
                    </div>

                  </div>
                  
                  <div className="ContTextTareaDescriptionT">
                    
                    <textarea
                      className='DescriptionExotic' 
                      placeholder='Descripcion' 
                      name="description" 
                      id="" 
                      cols="70" 
                      rows="5">
                    </textarea>

                  </div>

                  <div className='groupLandInpMBPP'>
                    <p placeholder=''>Introduce tu imagen</p>
                    <input type="file" />
                  </div>

                  <div className='groupLandInpMBPP'>
                    <p>Años de experiencia</p>
                    <input className='YearsOldExpe' type="number" name="experience" />
                  </div>

                  <div className="contOtionsButtonsMBPP">
                    <button onClick={CloseModalMBPP} className='buttons_global_StyleTatto'>Cancelar</button>
                    <button type='submit' className='buttons_global_StyleTatto'>Crear Perfil</button>
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

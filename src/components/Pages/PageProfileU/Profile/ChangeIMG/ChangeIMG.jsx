import { React, useState, useEffect } from 'react'
import './ChangeIMG.scss'
import toast, { Toaster } from 'react-hot-toast';
import { NavFooter } from '../../../../Layouts/NavigationFooter/NavFooter/NavFooter';
import { NavigationBar } from '../../../../Layouts/NavigationBar/NavigationBar';
import { userUpdate } from '../../../../../Helpers/ApiConsumer/PostUsers';
import { ChevronsLeft } from '../../../../UI/ChevronsLeft/ChevronsLeft.jsx'

import { Formik, Form, Field } from 'formik';
import { UptInfoU } from '../../UptInfoU'
import { getTatois } from '../../../../../Helpers/ApiConsumer/PostUsers'





export const ChangeIMG = () => {
  const [userID, setUserID] = useState(JSON.parse(localStorage.getItem("InfoUser")));

  const [InfoUsuario, setInfoUsuario] = useState({});
  const [tokenID, setToken] = useState(localStorage.getItem("token"));
  const [active, setActive] = useState(0);
  const [image, setImage] = useState("")


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
  let imgUrl = image;


  useEffect(() => {
    getTatois(tokenID)
      .then(info => {
        setInfoUsuario(info.data)
      })
  }, [])



  return (
    <>
      <NavigationBar />
      <Toaster />
      <div className='BodyProfileUser'>
        <section className="seccion-perfil-usuario">
          <UptInfoU />
          <div className="perfil-usuario-body">
            <div className="perfil-usuario-footer">
              <div className="BackgroundIcon">
                <div className="BackgroundIcon">
                  <div><ChevronsLeft LinkExotico="/user/edit-profile" className="ChevronsLeft" /></div>
                  <div className='BoxtTittleEditFiles'>
                    <h3 className='TittleEditsFiles'>Cambia tu Imagen</h3>
                  </div>
                  <div><i className='bx bxs-user-detail'></i></div>
                </div>
              </div>

            </div>

            <div className='contentBoxFiles'>
              <Formik
                initialValues={{ imageType: '' }}
                //validaciones de cambio de contraseñas

                validate={(val) => {
                  if (val.imageType.length >= 6) {
                    setActive(0)
                  }
                  else { setActive(1) }

                  console.log(val.imageType);



                }}

                onSubmit={(valores) => {
                  let validacion = {};
                  userUpdate({
                    first_name: InfoUsuario.first_name,
                    last_name: InfoUsuario.last_name,
                    image: imgUrl,
                  }, userID.id
                  ).then(info => {
                    validacion = info
                    if (validacion.status === 200) {
                      toast.success('Foto De Perfil Cambiada')
                    }
                  })
                }}
              >
                <Form>
                  <div className='ContentBoxtext'>
                    <div className='UploadFileIMG'>
                      <div id='addUploadFileIMG'>
                        <span class="material-symbols-outlined"> cloud_upload </span>
                        <p>Subir Un Archivo</p>
                        <input id='inputuploadFileIMG' type="file" required />
                      </div>

                    </div>
                    <div style={{marginTop:"20px"}} className='ContentBoxButtonConfirm'>
                      <button id={`${active === 1 && "btnBlocked"}`} type='sumbit' className='ButtonConfirmDates'>Guardar</button>
                    </div>
                  </div>
                </Form>
              </Formik>


            </div>

          </div>
        </section>
      </div>
      <NavFooter />
    </>
  )
}
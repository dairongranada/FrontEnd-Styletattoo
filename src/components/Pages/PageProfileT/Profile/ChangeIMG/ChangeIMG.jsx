import { React, useState,useEffect } from 'react'

import toast, { Toaster } from 'react-hot-toast';
import { NavFooter } from '../../../../Layouts/NavigationFooter/NavFooter/NavFooter';
import { NavigationBar } from '../../../../Layouts/NavigationBar/NavigationBar';
import { userUpdate }  from '../../../../../Helpers/ApiConsumer/PostUsers';
import { ChevronsLeft }  from '../../../../UI/ChevronsLeft/ChevronsLeft.jsx'

import { Formik, Form, Field } from 'formik';
import { UptInfoU } from '../../../PageProfileU/UptInfoU'
import { getTatois} from '../../../../../Helpers/ApiConsumer/PostUsers'





export const ChangeIMG = () => {
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
    <NavigationBar/>
    <Toaster/>
    <div className='BodyProfileUser'>
      <section className="seccion-perfil-usuario">
        <UptInfoU />
        <div className="perfil-usuario-body">
          <div className="perfil-usuario-footer">

            <div className="BackgroundIcon">
                <div className="BackgroundIcon">
                    <div><ChevronsLeft LinkExotico ="/user/edit-profile"  className= "ChevronsLeft" /></div>
                    <div className='BoxtTittleEditFiles'>
                      <h3 className='TittleEditsFiles'>Cambia tu Imagen</h3>
                    </div>
                    <div><i className='bx bxs-user-detail'></i></div>
                  </div>
            </div>

          </div>

          <div className='contentBoxFiles'>
          <Formik
                  initialValues={{image:''}}

                  //validaciones de cambio de contraseñas

                  validate={(val)=> {
                    let rgb = {}
                    if (!val.confirm_password) {
                      rgb.confirm_password = "Porfavor confirma tu Contraseña"
                    }
                    if (val.confirm_password.length >= 6) {
                      if (val.confirm_password !== val.new_password) {
                        setActive(0)
                      } 
                      else{ 
                        setActive(1)
              }
                    }



                  }}


                  
                  onSubmit = {(valores) =>{
                    let validacion = {};
                      userUpdate({
                          first_name: InfoUsuario.first_name,
                          last_name: InfoUsuario.last_name,
                          image: imgUrl,
                        }
                        ).then( info => {
                          validacion = info
                          if( validacion.status === 200 ){
                            toast.success('Foto De Perfil Cambiada')
                          }
                        })
                  } }
                >

              <Form>
                <div className='ContentBoxtext'>
                    <div>
                      scss
                    </div>

                </div>
              </Form>
            </Formik>
         

          </div>

        </div>
      </section>
    </div>
    <NavFooter/>
    </>
  )
}
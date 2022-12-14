import { React, useState,useEffect } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { UptInfoU } from '../../UptInfoU'
import { NavigationBar } from '../../../../Layouts/NavigationBar/NavigationBar';
import { NavFooter } from '../../../../Layouts/NavigationFooter/NavFooter/NavFooter';
import { ChevronsLeft }  from '../../../../UI/ChevronsLeft/ChevronsLeft.jsx'
import { CambiarContraseña } from '../../../../../Helpers/ApiConsumer/PostUsers'
import toast, { Toaster } from 'react-hot-toast';
import emailjs from '@emailjs/browser';
import {getTatois} from '../../../../.././Helpers/ApiConsumer/PostUsers'
import swal from 'sweetalert';


export const UserPassword = () => {
  const [active, setActive] = useState(0);

  const [perfilProfesional, setperfilProfesional] = useState({});

  const [tokenID, setToken] = useState(localStorage.getItem("token"));

  let emailTatu = perfilProfesional.email
  let firstmane =perfilProfesional.first_name
  let lastname = perfilProfesional.last_name


  useEffect(() => {
    getTatois(tokenID)
      .then(info => {
        setperfilProfesional(info.data)
      })
  }, [])

  console.log(emailTatu);
  // console.log(firstmane);



const handleLogout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("usuario");
  localStorage.removeItem("InfoUser");
  window.location = "/IngresarSesion";
}


const [InfoUser, setInfoUserUser] = useState(JSON.parse(localStorage.getItem("InfoUser")));

console.log(InfoUser.email);



const Mostraralert = ()=>{
  swal({
      title: "Estas seguro de continuar?",
      text: "Al cambiar tu contraseña deberas iniciar secion nuevamente!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        swal("Tu contraseña ah sido cambiada exitosamente!", {
          icon: "success",
          buttons: false,
        });
        handleLogout()
        setTimeout(function () {
              window.location = "/IngresarSesion";
          }, 2500);
      } else {
        swal("Tu cambio de contraseña ah sido cancelado!",{
            icon: "error",
            buttons: false,
        });
        setTimeout(function () {
          window.location = "/userTatto/edit-profile";
      }, 500);
      }
    });


}
  return (
    <>
    <NavigationBar/>
    <div className='BodyProfileUser'>
      <section className="seccion-perfil-usuario">
        <UptInfoU />
        <div className="perfil-usuario-body">
          <div className="perfil-usuario-footer">

            <div className="BackgroundIcon">
              <div className="BackgroundIcon">
                  <div><ChevronsLeft LinkExotico ="/user/edit-profile"  className= "ChevronsLeft" /></div>
                  <div className='BoxtTittleEditFiles'>
                    <h3 className='TittleEditsFiles'>Edita Tu Contraseña</h3>
                  </div>
                  <div><i className='bx bxs-user-detail' ></i></div>
                </div>
            </div>
          </div>

          <div className='contentBoxFiles'>
          <Formik
                  initialValues={{
                    email:'',
                    last_name:'',
                    first_name:'',
                    old_password:'',
                    new_password: '',
                    confirm_password:''
                  }}

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


                  
                //----------------------------------------------------------------

                  onSubmit = {(valores , {resetForm} ) =>{
                    let validacion = {};
                      

                        CambiarContraseña({
                          old_password: valores.old_password,
                          new_password: valores.new_password,
                        }
                        ).then( info => {
                          validacion = info
                          if( validacion.status === 200 ){
                            Mostraralert()
                          }else if( validacion.status === 500 ){  
                            toast.error("Verifica Tu contraseña")
                          }else if ( validacion.status === 400 ) {
                            toast.error("Verifica Tu contraseña")
                          }
                        })
                  } }
                >

              <Form >
              
                <div className='ContentBoxtext'>
                  <label className='label_global_style'>Contraseña Antigua</label>
                  <Field name='old_password' className='TheTextBox' type="password" placeholder='Escribe tu contraseña' /> 
                </div>

                <div className='ContentBoxtext'>
                  <label className='label_global_style'>Nueva Contraseña</label>
                  <Field name='new_password' className='TheTextBox' required type="password" placeholder='Cambia tu contraseña' /> 
                </div>
                
                <div className='ContentBoxtext'>
                  <label className='label_global_style'>Confirmar Contraseña</label>
                  <Field name='confirm_password' className='TheTextBox' required type="password" placeholder='Cambia tu contraseña' /> 
                </div>
                <div className='ContentBoxtext'>
                  <Field id='block'  name='email' value={emailTatu} />
                  <Field id='block' name='first_name' value={firstmane} />
                  <Field id='block'  name='last_name' value={lastname} />
                </div>
                
                <div className='ContentBoxButtonConfirm'>
                  <button id={`${ active === 0 && "btnBlocked" }`}  type='sumbit' className='ButtonConfirmDates'>Guardar</button>
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
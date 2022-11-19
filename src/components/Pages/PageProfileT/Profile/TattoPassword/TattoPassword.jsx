import { React,useState,useEffect } from 'react'
import { UptInfoT } from '../../UptInfoT'
import { Formik, Form, Field } from 'formik';
import { ChevronsLeft }  from '../../../../UI/ChevronsLeft/ChevronsLeft.jsx'
import { NavigationBar } from '../../../../Layouts/NavigationBar/NavigationBar';
import { NavFooter } from '../../../../Layouts/NavigationFooter/NavFooter/NavFooter';
import emailjs from '@emailjs/browser';
import {getTatois} from '../../../../.././Helpers/ApiConsumer/PostUsers'

import { CambiarContraseña } from '../../../../../Helpers/ApiConsumer/PostUsers'
import toast, { Toaster } from 'react-hot-toast';



export const TattoPassword = () => {

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


  const sendEmail = (event)=>{
    event.preventDefault();
    // ALERTA CHIMBA
    toast.success('Se envio correctamente')
    emailjs.sendForm('service_6n0k3ay','template_jct8opt',event.target,'3shfZ5IuzLrmV8lcH')
    .then(response => console.log(response))
    .catch(err => console.error(err))

    setTimeout(() => {
        window.location.reload(false);
    }, 2000);
    
}



  return (
    <>
    <NavigationBar/>
    <div className='BodyProfileUser'>
      <section className="seccion-perfil-usuario">
        <UptInfoT />

        <div className="perfil-usuario-body">
          <div className="perfil-usuario-footer">

            <div className="BackgroundIcon">
              <div className="BackgroundIcon">
                  <div><ChevronsLeft LinkExotico ="/userTatto/edit-profile"  className= "ChevronsLeft" /></div>
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
                    // last_name:'',
                    // first_name:'',
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
                            toast.success('Contraseña Cambiada')
                          }else if( validacion.status === 500 ){
                            toast.error("Verifica Tu contraseña")
                          }else if ( validacion.status === 400 ) {
                            toast.error("Verifica Tu contraseña")
                          }
                        })
                  } }
                >

              <Form onSubmit={sendEmail}>
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
                  <label className='label_global_style'>Confirmar Contraseña</label>
                  <Field name='email' value={emailTatu} />
                  <Field name='first_name' value={firstmane} />
                  <Field name='last_name' value={lastname} />
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
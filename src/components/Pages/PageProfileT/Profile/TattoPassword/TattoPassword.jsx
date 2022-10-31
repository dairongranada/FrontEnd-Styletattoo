import { React } from 'react'
import { UptInfoT } from '../../UptInfoT'
import { Formik, Form, Field } from 'formik';
import { ChevronsLeft }  from '../../../../UI/ChevronsLeft/ChevronsLeft.jsx'
import { NavigationBar } from '../../../../Layouts/NavigationBar/NavigationBar';


import { CambiarContraseña } from '../../../../../Helpers/ApiConsumer/PostUsers'
import toast, { Toaster } from 'react-hot-toast';



export const TattoPassword = () => {

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
                    old_password:'',
                    new_password: ''
                  }}
                
                  onSubmit = {(valores , {resetForm} ) =>{
                    let validacion = {};

                        CambiarContraseña({
                          old_password: valores.old_password,
                          new_password: valores.new_password
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

              <Form>
                <div className='ContentBoxtext'>
                  <label className='label_global_style'>Contraseña Antigua</label>
                  <Field name='old_password' className='TheTextBox' type="password" placeholder='Escribe tu contraseña' /> 
                </div>

                <div className='ContentBoxtext'>
                  <label className='label_global_style'>Nueva Contraseña</label>
                  <Field name='new_password' className='TheTextBox' required type="password" placeholder='Cambia tu contraseña' /> 
                </div>

                <div className='ContentBoxButtonConfirm'>
                  <button type='sumbit' className='ButtonConfirmDates'>Guardar</button>
                </div>
              </Form>
            </Formik>



          </div>

        </div>
      </section>
    </div>
    </>
  )
}
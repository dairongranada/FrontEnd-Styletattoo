import { NavigationBar } from '../../../../Layouts/NavigationBar/NavigationBar';
import { React } from 'react'
import { ChevronsLeft }  from '../../../../UI/ChevronsLeft/ChevronsLeft.jsx'
import { Formik, Form, Field } from 'formik';
import { UptInfoU } from '../../UptInfoU'





export const UserPassword = () => {

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
                  password:'',
                  Confirmpassword: ''
              }}
              
                onSubmit = {(valores , {resetForm} ) =>{
                } }
            >

              <Form>

                <div className='ContentBoxtext'>
                  <label className='label_global_style'>Contraseña Antigua</label>
                  <Field name='password' className='TheTextBox' type="password" placeholder='Escribe tu contraseña' /> 
                </div>

                <div className='ContentBoxtext'>
                  <label className='label_global_style'>Nueva Contraseña</label>
                  <Field name='Confirmpassword' className='TheTextBox' required type="password" placeholder='Cambia tu contraseña' /> 
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
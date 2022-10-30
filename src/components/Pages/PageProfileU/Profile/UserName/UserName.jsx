import { NavigationBar } from '../../../../Layouts/NavigationBar/NavigationBar';

import { ChevronsLeft }  from '../../../../UI/ChevronsLeft/ChevronsLeft.jsx'
import { Formik, Form, Field } from 'formik';
import { UptInfoU } from '../../UptInfoU'





export const UserName = () => {

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
                      <h3 className='TittleEditsFiles'>Edita Tus Datos</h3>
                    </div>
                    <div><i className='bx bxs-user-detail' ></i></div>
                  </div>
            </div>
          </div>

          <div className='contentBoxFiles'>

            <Formik
                initialValues={{
                  name:'',
                  email: ''
              }}
              
                onSubmit = {(valores , {resetForm} ) =>{

                } }
            >

              <Form>

                <div className='ContentBoxtext'>
                  <label className='label_global_style'>Nombre</label>
                  <Field name='name' className='TheTextBox' type="text" placeholder='Cambia tu nombre' /> 
                </div>

                <div className='ContentBoxtext'>
                  <label className='label_global_style'>Correo</label>
                  <Field name='email' className='TheTextBox' type="email" placeholder='Cambia tu correo' /> 
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
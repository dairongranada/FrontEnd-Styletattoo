import { React, useState,useEffect } from 'react'

import { NavigationBar } from '../../../../Layouts/NavigationBar/NavigationBar';
import { getusers }  from '../../../../../Helpers/ApiConsumer/PostUsers';
import { ChevronsLeft }  from '../../../../UI/ChevronsLeft/ChevronsLeft.jsx'

import { Formik, Form, Field } from 'formik';
import { UptInfoU } from '../../UptInfoU'





export const UserName = () => {

  const [user, setUser] = useState(JSON.parse(localStorage.getItem("usuario")));
  const [tokenID, setToken] = useState(localStorage.getItem("token"));

  const [userData, setUserData] = useState({});



  useEffect(()=>{
    if ( !!user ) {
        getusers( tokenID )
        .then( data => setUserData( data.data ));
        console.log(userData);
    }else {
      console.log("No se ha autenticado");
    }

    
}, [])


console.log(userData);






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
                      <h3 className='TittleEditsFiles'>Datos Personales</h3>
                    </div>
                    <div><i className='bx bxs-user-detail' ></i></div>
                  </div>
            </div>
          </div>

          <div className='contentBoxFiles'>
            
            <Formik>
              <Form>
                <div className='ContentBoxtext'>
                  <label className='label_global_style'>Nombre</label>
                  <Field 
                    style={{color:"#363a3a"}}
                    name='first_name' 
                    className='TheTextBox' 
                    type="text" 
                    placeholder='Cambia tu nombre'
                    value={ userData.first_name }
                  /> 

                </div>
                <div className='ContentBoxtext'>
                  <label className='label_global_style'>Apellido</label>
                  <Field 
                    style={{color:"#363a3a"}}
                    name='last_name' 
                    className='TheTextBox' 
                    type="text" 
                    placeholder='Cambia tu apellido'
                    value={ userData.last_name }
                  /> 

                </div>
                <div className='ContentBoxtext'>
                  <label className='label_global_style'>Correo</label>
                  <Field 
                    style={{color:"#363a3a"}}
                    name='email' 
                    className='TheTextBox' 
                    type="email" 
                    placeholder='Cambia tu correo' 
                    value={ userData.email }
                  /> 
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
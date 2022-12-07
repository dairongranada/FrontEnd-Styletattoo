import { React,useState,useEffect } from 'react'
import { UptInfoT } from '../../UptInfoT'
import { Formik, Form, Field } from 'formik';
import { ChevronsLeft }  from '../../../../UI/ChevronsLeft/ChevronsLeft.jsx'
import { NavigationBar } from '../../../../Layouts/NavigationBar/NavigationBar';
import { NavFooter } from '../../../../Layouts/NavigationFooter/NavFooter/NavFooter';
import { CambiarContraseña } from '../../../../../Helpers/ApiConsumer/PostUsers'
import toast, { Toaster } from 'react-hot-toast';
import swal from 'sweetalert';


export const TattoPassword = () => {

  const [active, setActive] = useState(0);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("usuario");
    localStorage.removeItem("InfoUser");
    localStorage.removeItem("TokenAcces")
    window.location = "/IngresarSesion";
  }


  
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
        <Toaster/>
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

                  onSubmit = {(valores, {resetForm} ) =>{
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

              
              <Form>
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
                <div className='ContentBoxButtonConfirm'>
                  <button  id={`${ active === 0 && "btnBlocked" }`} type='sumbit' className='ButtonConfirmDates'>Guardar</button>
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
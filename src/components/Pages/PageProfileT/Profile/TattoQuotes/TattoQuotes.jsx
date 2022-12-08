import { React, useState, useEffect } from 'react'
import { UptInfoT } from '../../UptInfoT'
import { ChevronsLeft } from '../../../../UI/ChevronsLeft/ChevronsLeft.jsx'
import { MostrarCita } from '../../../../.././Helpers/ApiConsumer/AuthRegistro';
import { getAllTatuadoresID } from '../../../../.././Helpers/ApiConsumer/Tattuadores'
import { NavigationBar } from '../../../../Layouts/NavigationBar/NavigationBar';
import { NavFooter } from '../../../../Layouts/NavigationFooter/NavFooter/NavFooter';
import { AiFillFile } from "react-icons/ai";
import './TattoQuotes.scss'
import swal from 'sweetalert';

import { AceptarCita,DeleteCita } from '../../../../.././Helpers/ApiConsumer/Citas'




/* F I R E B A S E */


export const TattoQuotes = () => {

  const [InfoUser, setInfoUser] = useState(JSON.parse(localStorage.getItem("InfoUser")));

  let idLocal = InfoUser.id

  const [perfil, setperfil] = useState([]);




  useEffect(() => {
    MostrarCita()
      .then(info => {
        setperfil(info.data)
      })
  }, [])

 

  const OnAceptarCita = (e) => {
    let idUserCita = e.target.value
    AceptarCita({isActive: "true"},idUserCita)
   window.location.reload()
  }

  const OnDeleteCita = (e) => {
    let idUserCita = e.target.value
    AceptarCita({isActive: "destroy"},idUserCita)
   window.location.reload()
  }


  const Mostraralert = (e)=>{
    swal({
        title: "Estas seguro de aceptar la cita?",
        text: "Al aceptar una cita ya no podras cancelarla!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
      .then((willDelete) => {
        if (willDelete) {
          setTimeout( swal("Cita aceptada con exito!", {
            icon: "success",
            buttons: false,
          }
          ),1000);
          OnAceptarCita(e)
        } else {
          swal("Cita no aceptada con exito!",{
              icon: "error",
              buttons: false,
          });
          setTimeout(function () {
            window.location.reload(false);
        }, 800);
        }
      });
  
  
  }

  const Borrarcita = (e)=>{
    swal({
        title: "Estas seguro de cancelara la cita?",
        text: "Al cancelar la cita ya no podras aceptarla nunca mas!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
      .then((willDelete) => {
        if (willDelete) {
          setTimeout( swal("Cita aceptada con exito!", {
            icon: "success",
            buttons: false,
          }
          ),1000);
          OnDeleteCita(e)
        } else {
          swal("has cerrado caancelar cita!",{
              icon: "error",
              buttons: false,
          });
          setTimeout(function () {
            window.location.reload(false);
        }, 800);
        }
      });
  
  
  }

  return (
    <>
      <NavigationBar />
      <div className='BodyProfileUser'>
        <section className="seccion-perfil-usuario">
          <UptInfoT />

          {/* 
            ██████╗░███████╗███╗░░██╗██████╗░██╗███████╗███╗░░██╗████████╗███████╗░██████╗
            ██╔══██╗██╔════╝████╗░██║██╔══██╗██║██╔════╝████╗░██║╚══██╔══╝██╔════╝██╔════╝
            ██████╔╝█████╗░░██╔██╗██║██║░░██║██║█████╗░░██╔██╗██║░░░██║░░░█████╗░░╚█████╗░
            ██╔═══╝░██╔══╝░░██║╚████║██║░░██║██║██╔══╝░░██║╚████║░░░██║░░░██╔══╝░░░╚═══██╗
            ██║░░░░░███████╗██║░╚███║██████╔╝██║███████╗██║░╚███║░░░██║░░░███████╗██████╔╝
            ╚═╝░░░░░╚══════╝╚═╝░░╚══╝╚═════╝░╚═╝╚══════╝╚═╝░░╚══╝░░░╚═╝░░░╚══════╝╚═════╝░
        */}

          <div style={{ width: "100%" }} className="perfil-usuario-body">
            <div className="perfil-usuario-footer">
              <div className="BackgroundIcon">
                <div className="BackgroundIcon">
                  <div><ChevronsLeft LinkExotico="/userTatto/edit-profile" className="ChevronsLeft" /></div>
                  <div className='BoxtTittleEditFiles'>
                    <h3 className='TittleEditsFiles'>Citas PENDIENTES</h3>
                  </div>
                  <div><i className='bx bxs-user-detail' ></i></div>
                </div>
              </div>
            </div>
            <div className='contentBoxFiles'>
              <table id="customers" >
                <tr>
                  <th>Fecha</th>
                  <th>Hora</th>
                  <th>Usuario</th>
                  <th>Imagen de referencia</th>
                  <th>Aceptar</th>
                  <th>Rechazar</th>
                </tr>
                {perfil.map(data => (
                  (idLocal == data.artist_tattoo) && (data.isActive == "false") &&
                  <tr key={data.id_quotes}>
                    <td>{data.date}</td>
                    <td>{data.time}</td>
                    <td>{data.userName}</td>
                    <td><a href={data.img} className='imgFile'><AiFillFile/></a></td>
                    {/* ACEPTAR CITA */}
                    <td><input onClick={Mostraralert} className="Inputproved" defaultValue={`${data.id_quotes}`} />
                       <span className="proved material-symbols-outlined"> file_download_done </span>
                    </td>
                    {/* ELIMINAR CITA */}
                    <td>
                        <input style={{cursor: "pointer"}}  onClick={Borrarcita} className="Inputdelete" defaultValue={`${data.id_quotes}`} />
                        <span className="delete material-symbols-outlined">delete</span>
                    </td>
                  </tr>
                ))}


              </table>
            </div>
          </div>









        {/* CITAS ACEPTADAS */}

          <div style={{ width: "100%" }} className="perfil-usuario-body">
            <div className="perfil-usuario-footer">
              <div className="BackgroundIcon">
                <div className="BackgroundIcon">
                  <div className='BoxtTittleEditFiles'>
                    <h3 className='TittleEditsFiles'>CITAS ACEPTADAS</h3>
                  </div>
                  <div></div>
                </div>
              </div>
            </div>
            <div className='contentBoxFiles'>
              <table id="customers" >
                <tr>
                  <th>Fecha</th>
                  <th>Hora</th>
                  <th>Usuario</th>
                  <th>Imagen de referencia</th>
                </tr>
                {perfil.map(data => (
                  (idLocal == data.artist_tattoo) && (data.isActive == "true") &&
                  <tr key={data.id_quotes}>
                    <td>{data.date}</td>
                    <td>{data.time}</td>
                    <td>{data.userName}</td>
                    <td><a href={data.img}><AiFillFile/></a></td>
                  </tr>
                ))}
              </table>
            </div>
          </div>


        </section>
      </div>
      <NavFooter />
    </>
  )
}
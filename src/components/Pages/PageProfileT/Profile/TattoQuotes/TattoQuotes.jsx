import { React , useState, useEffect  } from 'react'
import { UptInfoT } from '../../UptInfoT'
import { ChevronsLeft } from '../../../../UI/ChevronsLeft/ChevronsLeft.jsx'
import { MostrarCita } from '../../../../.././Helpers/ApiConsumer/AuthRegistro';
import { getAllTatuadoresID } from '../../../../.././Helpers/ApiConsumer/Tattuadores'
import { NavigationBar } from '../../../../Layouts/NavigationBar/NavigationBar';
import { NavFooter } from '../../../../Layouts/NavigationFooter/NavFooter/NavFooter';
import { AiFillFile } from "react-icons/ai";
import './TattoQuotes.scss'



/* F I R E B A S E */


export const TattoQuotes = () => {

  const [InfoUser, setInfoUser] = useState(JSON.parse(localStorage.getItem("InfoUser"))); 

  let idLocal = InfoUser.id

  const [perfil, setperfil] = useState([]);

  const [perfil2, setperfil2] = useState("");

  const [nameA , setnameA] = useState([])



  useEffect(() => {
    MostrarCita()
      .then(info => {
        setperfil(info.data)
        setperfil2(info.data)
        getAllTatuadoresID(perfil2)
        .then(info => {
          setnameA(info.data);
      })

      })
  }, [])



  console.log(perfil);

  let sumadre = nameA

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

          <div style={{ width: "87%" }} className="perfil-usuario-body">
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
                {perfil.map(data =>  (
                  (idLocal == data.artist_tattoo) &&
                  <tr>
                  <td>{data.date}</td>
                  <td>{data.time}</td>
                  <td>{data.userName}</td>
                  <td><a href={data.img}><AiFillFile/></a></td>
                  <td><span className="material-symbols-outlined"> file_download_done </span></td>
                  <td><span className="material-symbols-outlined"> delete </span></td>
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
import { React , useEffect , useState} from 'react'
import { UptInfoU } from '../../UptInfoU'
import { ChevronsLeft }  from '../../../../UI/ChevronsLeft/ChevronsLeft.jsx'
import { MostrarCita } from '../../../../.././Helpers/ApiConsumer/AuthRegistro';
import { NavigationBar } from '../../../../Layouts/NavigationBar/NavigationBar';
import { NavFooter } from '../../../../Layouts/NavigationFooter/NavFooter/NavFooter';





export const UserQuotes = () => {

  const [InfoUser, setInfoUser] = useState(JSON.parse(localStorage.getItem("InfoUser")));   

  const [perfil, setperfil] = useState([]);

  const [perfil2, setperfil2] = useState("");

  const [nameA , setnameA] = useState([])

  useEffect(() => {
    MostrarCita()
      .then(info => {
        setperfil(info.data)
        setperfil2(info.data)
        .then(info => {
          setnameA(info.data);
      })

      })
  }, [])

  let idLocal = InfoUser.id

  console.log(perfil);



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
                    <h3 className='TittleEditsFiles'>Citas Agendadas</h3>
                  </div>
                  <div><i className='bx bxs-user-detail' ></i></div>
                </div>
            </div>

          </div>
          


          <div className='contentBoxFiles'>
          <table id="customers">
          
          <tr>
              <th>Fecha</th>
              <th>Hora</th>
              <th>Tatuador</th>
              <th>Cancelar cita</th>
            </tr>
              {perfil.map(data =>  (
              (idLocal == data.userID) &&
              <tr >
                <td>{data.date}</td>
                <td>{data.time}</td>
                <td>{data.time}</td>
                <td><span class="material-symbols-outlined"> delete </span></td>
              </tr>
              ))}
            </table>
          </div>



        </div>
      </section>
    </div>
    <NavFooter/>

    </>
  )
}
import { React , useEffect , useState} from 'react'
import { UptInfoU } from '../../UptInfoU'
import { ChevronsLeft }  from '../../../../UI/ChevronsLeft/ChevronsLeft.jsx'
import { MostrarCita } from '../../../../.././Helpers/ApiConsumer/AuthRegistro';
import { NavigationBar } from '../../../../Layouts/NavigationBar/NavigationBar';
import { NavFooter } from '../../../../Layouts/NavigationFooter/NavFooter/NavFooter';


import { AceptarCita } from '../../../../.././Helpers/ApiConsumer/Citas'


export const UserQuotes = () => {

  const [InfoUser, setInfoUser] = useState(JSON.parse(localStorage.getItem("InfoUser")));   

  const [perfil, setperfil] = useState([]);

  const [perfil2, setperfil2] = useState("");
  const [validationsLegthn , setValidationsLegthn] = useState([])

  useEffect(() => {
    MostrarCita()
      .then(info => {
        setperfil(info.data)
        setperfil2(info.data)
        setValidationsLegthn(info.data);


      })
  }, [])


  console.log(validationsLegthn);

  let idLocal = InfoUser.id
  const OnDeleteCita = (e) => {
    let idUserCita = e.target.value
  
    AceptarCita({isActive: "destroy"},idUserCita)
   window.location.reload()
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
                <th>Cancelar</th>
              </tr>
              {perfil.map(data =>  (
              (idLocal == data.userID) && (data.isActive == "true") &&
              <tr >
                <td>{data.date}</td>
                <td>{data.time}</td>
                <td>{data.userTatto}</td>
                {/* ELIMINAR CITA */}
                <td>
                  <input onClick={OnDeleteCita} className="Inputdelete" defaultValue={`${data.id_quotes}`} />
                  <span className="delete material-symbols-outlined">delete</span>
                </td>
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
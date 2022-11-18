import { React } from 'react'
import { UptInfoT } from '../../UptInfoT'
import { ChevronsLeft }  from '../../../../UI/ChevronsLeft/ChevronsLeft.jsx'


import { NavigationBar } from '../../../../Layouts/NavigationBar/NavigationBar';
import { NavFooter } from '../../../../Layouts/NavigationFooter/NavFooter/NavFooter';

import './TattoQuotes.scss'



/* F I R E B A S E */


export const TattoQuotes = () => {

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
                <th>Usuario</th>
                <th>Eliminar</th>
              </tr>
              <tr>
                <td>18/11/22</td>
                <td>3:30pm</td>
                <td>Maria Anders</td>
                <td><span class="material-symbols-outlined"> delete </span></td>
              </tr>
            </table>
          </div>


        </div>
      </section>
    </div>
    <NavFooter/>
    </>
  )
}
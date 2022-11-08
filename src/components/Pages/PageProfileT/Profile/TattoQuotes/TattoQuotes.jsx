import { React } from 'react'
import { UptInfoT } from '../../UptInfoT'
import { ChevronsLeft }  from '../../../../UI/ChevronsLeft/ChevronsLeft.jsx'


import { NavigationBar } from '../../../../Layouts/NavigationBar/NavigationBar';
import { NavFooter } from '../../../../Layouts/NavigationFooter/NavFooter/NavFooter';





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
            
          </div>


        </div>
      </section>
    </div>
    <NavFooter/>
    </>
  )
}
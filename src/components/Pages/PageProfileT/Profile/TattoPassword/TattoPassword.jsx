import { React } from 'react'
import { UptInfoT } from '../../UptInfoT'
import { ChevronsLeft }  from '../../../../UI/ChevronsLeft/ChevronsLeft.jsx'



/* F I R E B A S E */


export const TattoPassword = () => {

  return (
    <div className='BodyProfileUser'>
      <section className="seccion-perfil-usuario">
        <UptInfoT />

        <div className="perfil-usuario-body">
          <div className="perfil-usuario-footer">

            <div className="BackgroundIcon">
              <div className="BackgroundIcon">
                  <div><ChevronsLeft LinkExotico ="/userTatto/edit-profile"  classExotico= "ChevronsLeft" /></div>
                  <div><i class='bx bxs-user-detail' ></i></div>
                </div>
            </div>
            CONTENIDO

          </div>
        </div>
      </section>
    </div>
  )
}
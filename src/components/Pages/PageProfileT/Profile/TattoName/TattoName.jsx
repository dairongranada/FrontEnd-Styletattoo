import { ChevronsLeft }  from '../../../../UI/ChevronsLeft/ChevronsLeft.jsx'
import { UptInfoT } from '../../UptInfoT'




/* F I R E B A S E */


export const TattoName = () => {

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

            

          </div>
        </div>
      </section>
    </div>
  )
}
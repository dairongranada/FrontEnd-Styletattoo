import { ChevronsLeft }  from '../../../../UI/ChevronsLeft/ChevronsLeft.jsx'
import { UptInfoU } from '../../UptInfoU'



/* F I R E B A S E */


export const UserName = () => {

  return (
    <div className='BodyProfileUser'>
      <section className="seccion-perfil-usuario">
        <UptInfoU />

        <div className="perfil-usuario-body">
          <div className="perfil-usuario-footer">

            <div className="BackgroundIcon">
                <div className="BackgroundIcon">
                    <div><ChevronsLeft LinkExotico ="/user/edit-profile"  classExotico= "ChevronsLeft" /></div>
                    <div><i class='bx bxs-user-detail' ></i></div>
                  </div>
            </div>

            

          </div>

          <div className='contentBoxFiles'>
            <div className='BoxtTittleEditFiles'>
              <h3 className='TittleEditsFiles'>Edita Tus Datos</h3>
            </div>
            <div className='ContentBoxtext'>
              <label className='label_global_style'>Nombre</label>
              <input className='TheTextBox' type="text" placeholder='Cambia tu nombre' /> 
            </div>

            <div className='ContentBoxtext'>
              <label className='label_global_style'>Correo</label>
              <input className='TheTextBox' type="email" placeholder='Cambia tu correo' /> 
            </div>

            <div className='ContentBoxButtonConfirm'>
              <button className='buttons_global_StyleTatto'>Guardar</button>
            </div>
            
          </div>

        </div>
      </section>
    </div>
  )
}
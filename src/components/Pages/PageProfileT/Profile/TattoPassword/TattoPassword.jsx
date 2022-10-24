import { LeftInfo } from '../../LeftInfo.jsx'
import { React,useEffect,useState } from 'react'




/* F I R E B A S E */


export const TattoPassword = () => {

  return (
    <div className='BodyProfileUser'>
      <div className='Content_profleUser'>
        <LeftInfo/>
        <div className='ContentUserInfo'>
            <div className="contentHeaderTitle">
                <h3>Perfil Publico</h3>
                <p>Edite la configuración de su cuenta y cambie su contraseña aquí.</p>
            </div>
            <div id='datesBasics' className='datesBasics'>
              <div className='contN'>
                <label className='labelsTxtProfile' htmlFor="text">Contraseña Anterior</label>
                <input name='name' placeholder='**********'  className='boxInf' type="text"/>
              </div>
              <div className='contN'>
                <label  className='labelsTxtProfile' htmlFor="text">Nueva Contraseña</label>
                <input name='apellido' placeholder='**********'  className='boxInf' type="text"/>
              </div>

              <div className='contButtonSave'>
                <button className='buttons_global_StyleTatto'>Guardar</button>
              </div>

            </div>
        </div>
      </div>
    </div>
  )
}
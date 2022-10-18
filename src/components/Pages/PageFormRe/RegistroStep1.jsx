// REACT - ICONS
import { MdOutlineCancel } from 'react-icons/md';
import { AiOutlineUser } from 'react-icons/ai';
import { FaCrop } from 'react-icons/fa';

import { Link, Navigate, useNavigate } from 'react-router-dom'
import { ButtonUI } from '../../UI/ButtonUI/ButtonUI'
import { useState } from 'react';


export const RegistroStep1 = ( {step_change, setUserType } ) => {

    const navigate = useNavigate();
    const [active, setActive] = useState("0");


    const handleExit = () => {
        navigate ("/IngresarSesion");
    }

    const handleButton = () => {
        step_change(2);
    }

    return (
        <>
          
            <div className="register_container">
                <div id='registerType' className="registerData animate__animated animate__fadeIn">
                    <div id='titulo_MdOutlineCancel1'>
                        <h2>Rol</h2>
                            <div id='MdOutlineCancel' onClick={handleExit}>
                                <MdOutlineCancel />
                            </div>
                    </div>
                    
                    <div id='register_steps'>
                        <div className='step color_step'>1</div >
                        <div className='linea_step linea_step1'>——</div>
                        <div className='step'>2</div>
                    </div>
                    <p className='warn_check'>
                        Por favor, selecciona un rol antes de continuar
                    </p>

                    <div className="types_users">
                        <button 
                            id={active === "2" &&  "type__user-active"}
                            onClick={()=> {
                            setUserType("2") 
                            setActive("2")}}
                        
                            className='type__user-button type__user-user'>
                            <AiOutlineUser className='type__user-button-icon'/>
                            <h1 className='type__user-button-h1' >Usuario</h1>
                        </button>

                        <button 
                            id={active === "3" && "type__user-active"}
                            onClick={()=> {
                                setUserType("3")
                                setActive("3")
                            }}
                        
                            className='type__user-button type__user-clinica'>
                            <FaCrop className='type__user-button-icon'/>
                            <h1 className='type__user-button-h1' >Artista</h1>
                        </button>

                    </div>

                    <ButtonUI 
                        text={'Siguiente'}
                        styleName= "buttons_global_StyleTatto"
                        event={handleButton}
                    />

                    {/* ---------------- WARNING ---------------- */}


                </div>
            </div>
        </>
    )
}

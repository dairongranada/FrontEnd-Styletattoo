import React, { useState } from 'react'
import { AiOutlineUserAdd, AiFillCheckCircle } from 'react-icons/ai';
import { GoArrowSmallLeft } from 'react-icons/go';
import { Formik, Form, Field, ErrorMessage } from 'formik';

import './PageFormRe.scss';


export const RegisterUser = ( {change_step} ) => {

    const [showPassword, setShowPassword] = useState("password")
    const handlePassword = () => {
        if ( showPassword === "password") {setShowPassword("text");}
        else {setShowPassword("password")}
    }



    return (
        <>

            {/* ----- REGISTRO COMO USUARIO ----- */}
            <div id='register_steps'>
                <div className='step color_step'>1</div >
                <div className='linea_step color_linea' >——</div>
                <div className='step color_step'>2</div>
            </div>
            <div className="cont_icon">
                <div onClick={change_step} className='rows_register'>
                    <GoArrowSmallLeft />
                </div>
                <div className="user_icon">
                    <AiOutlineUserAdd />
                </div>
            </div>
            <Formik>   
                
            </Formik>
        </>
    )
}

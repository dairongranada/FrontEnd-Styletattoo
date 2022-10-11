import React, { useState } from 'react'
import { AiOutlineUserAdd } from 'react-icons/ai';
import { GoArrowSmallLeft } from 'react-icons/go';



import { ButtonUI } from '../../../UI/ButtonUI/ButtonUI';
import { Formik, Form, Field, ErrorMessage } from 'formik';

import './sass/tattoRegister.scss'

export const RegisterTatto = ( {change_step} ) => {

    const [step_cli, setStep_cli] = useState(1)
    const [showPassword, setShowPassword] = useState("password")

    const handlePassword = () => {
        if ( showPassword === "password") {setShowPassword("text");}
        else {setShowPassword("password")}
    }


    return (
        <>

            {/* ----- REGISTRO COMO  ----- */}

            {
                ( step_cli === 1 ) &&
                <>
                    <div id='register_steps'>
                        <div className='step color_step'>1</div >
                        <div className='linea_step color_linea' >——</div>
                        <div className='step color_step'>2</div>
                    </div>

                    <div className="cont_icon">
                        <div onClick={change_step} className='rows_register'><GoArrowSmallLeft/></div>
                        <div className="user_icon"><AiOutlineUserAdd /></div>
                    </div>
                    <Formik>
                        {( {errors} ) => (
                            <Form className='registerArtistas'>
                               
                            </Form>
                        )}
                    </Formik>
                </>

            }
               
            
        </>
    )
}

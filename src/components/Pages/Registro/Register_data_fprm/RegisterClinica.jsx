import React, { useState } from 'react'
import { GoArrowSmallLeft } from 'react-icons/go';
import { FaHospital } from 'react-icons/fa';
import {  AiFillCheckCircle } from 'react-icons/ai';
import { ButtonUI } from '../../../UI/ButtonUI/ButtonUI';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { VscEye,VscEyeClosed } from "react-icons/vsc";
import './PageFormRe.scss';

export const RegisterClinica = ( {change_step} ) => {

    const [step_cli, setStep_cli] = useState(1)
    const [loading, setLoading] = useState(false);
    const [dataCli, setDataCli] = useState([]);
    const [duplicatedData, setDuplicatedData] = useState(false);
    const [registered, setRegistered] = useState(false);

    const [showPassword, setShowPassword] = useState("password")

    const handlePassword = () => {
        if ( showPassword === "password") {setShowPassword("text");}
        else {setShowPassword("password")}
    }


    return (
        <>

            {/* ----- REGISTRO COMO CLINICA ----- */}

            {
                ( step_cli === 1 ) &&
            
                <>
                    <div id='register_steps'>
                        <div className='step color_step'>
                            1
                        </div >
                        <div className='linea_step color_linea' >——</div>
                        <div className='step color_step'>
                            2
                        </div>
                    </div>
                    <div className='hr'>
                        <hr />
                    </div>

                    <div className="cont_icon">
                        <div onClick={change_step} className='rows_register'>
                            <GoArrowSmallLeft />
                        </div>
                        <div className="user_icon">
                            <FaHospital />
                        </div>
                    </div>
                    <Formik>
                        {( {errors} ) => (
                            <Form className='registerClinica__form'>
                               

                        
                            </Form>
                        )}
                    </Formik>
                </>

            }
               
            
        </>
    )
}

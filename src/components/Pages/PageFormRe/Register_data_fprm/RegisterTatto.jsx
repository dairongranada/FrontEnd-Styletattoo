import React, { useState } from 'react'
import { AiOutlineUserAdd } from 'react-icons/ai';
import { GoArrowSmallLeft } from 'react-icons/go';

import './sass/userRegister.scss'
import { postUsuario, AuthEmail } from '../../../.././Helpers/ApiConsumer/PostUser';


import { Formik, Form, Field } from 'formik';


export const RegisterTatto = ( { change_step } ) => {



    return (
        <>

            {/* -----  REGISTRO COMO USUARIO  ----- */}
            <div id='register_steps'>
                <div className='step color_step'>1</div >
                <div className='linea_step color_linea' >——</div>
                <div className='step color_step'>2</div>
            </div>
            <div className="cont_icon">
                <div onClick={change_step} className='rows_register'><GoArrowSmallLeft/></div>
                <div className="user_icon"><AiOutlineUserAdd /></div>
            </div>

            
                <div className='Content_FormsPrincipal'>
                    <Formik>
                

                        {({ errors, touched  })=> (
                            <Form className='formRegisterTatto'>

                            </Form>
                        )}
                    </Formik>
                </div>
        </>
    )
}

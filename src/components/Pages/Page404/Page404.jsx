import React from 'react'
import './Page404.scss'
import { NavigationBar } from '../../Layouts/NavigationBar/NavigationBar';
import error404 from '../../../images/Tattos/tatto5.jpg'
import { Link } from 'react-router-dom'


export const Page404 = () => {

    return (
        <>
        <NavigationBar/>
        <div className='Error404'>
            <div className='Content_img_Error404'>
                <img src={error404} alt="" />
            </div>
            <div className='Content_text_Error404'>
                <h1>404</h1>
                <div className='separator'></div>
                <h3>PÁGINA PERDIDA</h3>
                <p>Oops!</p>
                <Link className='buttons_global_StyleTatto' to="/">IR AL INICIO</Link>
            </div>
        </div>
        </>
    )
}

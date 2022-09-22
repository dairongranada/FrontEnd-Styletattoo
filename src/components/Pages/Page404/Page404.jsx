import React from 'react'
import error404 from '../../../images/Tattos/tatto5.jpg'
import './Page404.scss'


export const Page404 = () => {
    return (
        <div className='Error404'>
            <div className='Content_img_Error404'>
                <img src={error404} alt="" />
            </div>
            <div className='Content_text_Error404'>
                <h1>404</h1>
                <div className='separator'></div>
                <h3>PÁGINA PERDIDA</h3>
                <p>Oops!</p>
<<<<<<< HEAD
                <Link className='BackHome' to="/">IR AL INICIO</Link>
=======
                <li><a className='volver' href="/">VOLVER AL INICIO</a></li>
             
>>>>>>> 40d785f0d189d21f682d190bc7e8236ba5bc94b4
            </div>
        </div>
    )
}

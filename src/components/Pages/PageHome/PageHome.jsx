import './PageHome.scss'
import './xNosotross.scss'

import React from 'react'
import { NavigationBar } from '../../Layouts/NavigationBar/NavigationBar';
import {useState} from 'react'

import { Home_MainView } from '../.././UI/UiHome/Home_MainView/Home_MainView'
import { Home_NewTattooists } from '../.././UI/UiHome/Home_NewTattooists/Home_NewTattooists'
import { Home_Services } from '../.././UI/UiHome/Home_Services/Home_Services'









export const PageHome = () => {

    const Nosotros = [
        {name: 'Dairon Granada', image:'https://i.postimg.cc/cLWp6F6c/Dairon.jpg' ,gitHub: 'https://github.com/dairongranada',insta:'https://www.instagram.com/dairongranadaa23/',},
        {name: 'Samuel Lopez',image:'https://i.postimg.cc/g0M2PN3g/samuel.jpg' , gitHub:'https://github.com/SAMUEL0126', insta:'https://www.instagram.com/samuel.lopez0114/',  },
        {name: 'Juan David Correa',image:'https://i.postimg.cc/pLHTQ92J/juanda.jpg',gitHub:'https://github.com/juandacorrea112',insta:'https://www.instagram.com/juandavidc02_bmx/ '},
        {name: 'Steven',image:'',gitHub:'https://github.com/juandacorrea112',insta:'https://www.instagram.com/juandavidc02_bmx/ '},
        {name: 'Luisa',image:'',gitHub:'https://github.com/juandacorrea112',insta:'https://www.instagram.com/juandavidc02_bmx/ '},
        {name: 'Santiago',image:'',gitHub:'https://github.com/juandacorrea112',insta:'https://www.instagram.com/juandavidc02_bmx/ '}

    ]

    const [searchTattoo, setsearchTattoo] = useState(Nosotros)

    return (
        <div>
            <NavigationBar/>
            <Home_MainView/>
            <Home_NewTattooists/>
            <Home_Services/>
            <div className='EquOFDev'><h3>Equipo de desarrollo</h3></div>
            <div className='ContentNosotros'>
            {searchTattoo.map((Nosotros, index) => {
                return <div className="card-Nosotros">
                    <div className="card-img" key={index}>
                        <img src={Nosotros.image} alt={Nosotros.image} />
                    </div>
                    <ul className="social-media">
                        {/* <li><a href={Nosotros.gitHub}><i class='bx bxl-facebook-circle'></i></a></li> */}
                        <li><a href={Nosotros.insta}><i className='bx bxl-instagram' ></i></a></li>
                        <li><a href={Nosotros.gitHub}><i className='bx bxl-github' ></i></a></li>
                    </ul>
                    <div className="card-info">
                        <p className="title">{Nosotros.name}</p>
                        <p className="subtitle">Web Developer</p>
                    </div>
                </div>
        
        
            })}

            </div>    
        </div>

    )
}

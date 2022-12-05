import './PageHome.scss'
import './xNosotross.scss'

import React from 'react'
import { NavigationBar } from '../../Layouts/NavigationBar/NavigationBar';
import { NavFooter } from '../../Layouts/NavigationFooter/NavFooter/NavFooter';

import {useState} from 'react'

import { Home_MainView } from '../.././UI/UiHome/Home_MainView/Home_MainView'
import { Home_NewTattooists } from '../.././UI/UiHome/Home_NewTattooists/Home_NewTattooists'
import { Home_Services } from '../.././UI/UiHome/Home_Services/Home_Services'









export const PageHome = () => {

    const Nosotros = [
        {id:1,name: 'Dairon Granada', image:'https://i.postimg.cc/cLWp6F6c/Dairon.jpg' ,gitHub: 'https://github.com/dairongranada',insta:'https://www.instagram.com/dairongranadaa23/',rol:'Front-End y Back-EndㅤㅤㅤㅤㅤㅤDeveloper'},
        {id:2,name: 'Samuel Lopez',image:'https://i.postimg.cc/g0M2PN3g/samuel.jpg' , gitHub:'https://github.com/SAMUEL0126', insta:'https://www.instagram.com/samuel.lopez0114/', rol:'Front-End Developer' },
        {id:3,name: 'Juan David Correa',image:'https://i.postimg.cc/pLHTQ92J/juanda.jpg',gitHub:'https://github.com/juandacorrea112',insta:'https://www.instagram.com/juandavidc02_bmx/ ',rol:'Front-End Developer'},
        {id:4,name: 'Steven',image:'https://i.postimg.cc/rpQYKV62/steven.jpg',gitHub:'https://github.com/juandacorrea112',insta:'https://www.instagram.com/juandavidc02_bmx/ ',rol:'Back-End Developer'},
        {id:5,name: 'Luisa',image:'https://i.postimg.cc/2jH0JFKS/luisa.jpg',gitHub:'https://github.com/lugsanchez',insta:'https://www.instagram.com/luisa_gsanchez/',rol:' Documentacion'},
        {id:6,name: 'Santiago',image:'https://i.postimg.cc/0jXrXJJ2/santiago.jpg',gitHub:'https://github.com/santiagoortiz3',insta:'https://www.instagram.com/santiortiz0303/ ',rol:' Apoyar al equipo'}

    ]

    const [searchTattoo, setsearchTattoo] = useState(Nosotros)

    return (
        <><NavigationBar/>
        <div className='ContBigVeryH'>
            <Home_MainView/>
            <Home_NewTattooists/>
            <Home_Services/>
            
        </div>
        <NavFooter/>
        </>

    )
}

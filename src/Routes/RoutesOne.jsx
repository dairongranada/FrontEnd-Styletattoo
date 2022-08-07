import { Route,Routes } from 'react-router-dom';
import React from 'react'
/*======================  V I E W S    C O M P O N E N T S  ===============================*/ 

import { PageHome } from '../components/Pages/PageHome/PageHome'
import { PageProfileT } from '../components/Pages/PageProfileT/PageProfileT';
import { PageProfileU } from '../components/Pages/PageProfileU/PageProfileU';
import { PageQuotes } from '../components/Pages/PageQuotes/PageQuotes';
import { PageTattooists } from '../components/Pages/PageTattooists/PageTattooists';
import { Page404 } from '../components/Pages/Page404/Page404';


export const RoutesOne = () => {
    return (
        <Routes>
            <Route path='*' element = {<Page404 />} />
            <Route path='/' element = {<PageHome />} />
            <Route path='/perfilUsuarios' element = {<PageProfileU/>}/>
            <Route path='/perfilTatuadores' element = {<PageProfileT/>}/>
            <Route path='/citas' element = {<PageQuotes/>}/>
            <Route path='/tatuadores' element = {<PageTattooists/>}/>
        </Routes>
    )
}

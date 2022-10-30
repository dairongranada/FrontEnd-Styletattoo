import './PageHome.scss'
import React from 'react'
import { NavigationBar } from '../../Layouts/NavigationBar/NavigationBar';

import { Home_MainView } from '../.././UI/UiHome/Home_MainView/Home_MainView'
import { Home_NewTattooists } from '../.././UI/UiHome/Home_NewTattooists/Home_NewTattooists'
import { Home_Services } from '../.././UI/UiHome/Home_Services/Home_Services'


export const PageHome = () => {
    return (
        <div>
            <NavigationBar/>
            <Home_MainView/>
            <Home_NewTattooists/>
            <Home_Services/>
        </div>

    )
}

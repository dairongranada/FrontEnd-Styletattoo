import {React, useContext} from 'react'
import { LayoutsHome } from '../../Layouts/LayoutsHome/LayoutsHome'
import { context, useAuth } from '../../.././context/AuthContext'

import './PageHome.scss'


export const PageHome = () => {
    const {user} = useAuth()
    console.log(user);

    
    return (
        <div><LayoutsHome/></div>
    )
}

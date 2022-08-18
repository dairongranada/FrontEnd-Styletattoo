import React from 'react'
import {Tattooists} from '../../Layouts/LayoutsTattooists/Tattooists/Tattooists.jsx'
import { SearchTattoo } from '../../Layouts/LayoutsTattooists/SearchTattoo/SearchTattoo.jsx'

export const PageTattooists = () => {
    return (
        <div>
            <Tattooists/>
            <SearchTattoo/>
        </div>
    )
}

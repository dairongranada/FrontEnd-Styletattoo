import React from 'react'
import './Home_CardsTattooists.scss'

export const Home_CardsTattooists = ({ImgTattooists,NameTattooists,SocialTattooists}) => {
    return (
        <div className='pather'>
            <div class="container">
                <div class="card">
                    <div class="face facel">
                        <div class="content">
                            <img src={ImgTattooists}/>
                            <h3>{NameTattooists}</h3>
                        </div>
                    </div>
                    <div class="face face2">
                        <div class="content">
                            <a href="/"> <span>@ </span>{SocialTattooists}</a>
                            <a href="#">Ver Mi Perfil</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

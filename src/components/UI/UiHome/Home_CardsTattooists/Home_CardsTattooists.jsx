import React from 'react'

export const Home_CardsTattooists = ({ImgTattooists,NameTattooists,SocialTattooists}) => {
    return (
        <div className="ArtistasIndex">
            <div className='ImgTattooists'><img src={ImgTattooists}/></div>
            <h3>{NameTattooists}</h3>
            <a href="/"> <span>@ </span>{SocialTattooists}</a>
        </div>
    )
}

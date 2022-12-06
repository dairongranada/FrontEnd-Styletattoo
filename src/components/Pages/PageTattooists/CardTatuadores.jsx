import React from 'react'

export const CardTatuadores = ({id,image,first_name,last_name ,descripcion,departament,municipio}) => {
  return (
        <>
            <div className="cardArtistptt">
                <div className="miniBannerArtist">
                    <div className='contentImgCadrArtistpgt'>
                       <img className='ImgProfleCardPGT' src={image} alt="..." /> 
                    </div>
                </div>
                <div className="contentInfoartist">
                    <div className='SecondContenInfoTpg'>
                         <p>{municipio}{" "}{departament}</p>
                         <p>{first_name} {last_name}</p>
                    </div>
                    <div className="rating">
                        <span class="material-symbols-outlined">star</span>
                        <span class="material-symbols-outlined">star</span>
                        <span class="material-symbols-outlined">star</span>
                        <span class="material-symbols-outlined">star</span>
                        <span class="material-symbols-outlined">star</span>
                    </div>
                    <div className='contentButtons'>
                        <div className="ButtonViewProfileApt">
                            <a href={`/tatto/view/profile/${id}`} className='btnA_menu'>Ver perfil</a>
                        </div>
                        <div className="ButtonViewProfileApt">
                            <a href={`/tatto/view/profile/${id}`} className='btnA_menu'>Agendar cita</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
        // <div className='pather'>
        //       <div className="containerTattois">
        //         <div className="cardsTattooists">
        //             <div className="face facel">
        //                 <div className="content">
        //                     <img src={image} alt="#" />
        //                 </div>
        //             </div>
        //             <div className="face face2">
        //                 <div className="content">
        //                     <p className='location_on'>{municipio} -- {departament}</p>
        //                     <p className='nameTattooists' >{first_name} {last_name}</p>
        //                     <p className='descripTattooists'href="/">{descripcion}</p>
        //                     <a href={`/tatto/view/profile/${id}`} className='btnA_menu'>Ver perfil</a>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </div>

  )
}

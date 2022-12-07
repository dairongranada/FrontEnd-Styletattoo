import React from 'react'
import { useState } from 'react'
import { Start } from '../.././Layouts/Start/Start'
import { Start1 } from '../.././Layouts/Start/Start'
import { Start2 } from '../.././Layouts/Start/Start'
import { Start3 } from '../.././Layouts/Start/Start'
import { Start4 } from '../.././Layouts/Start/Start'
import { Start5 } from '../.././Layouts/Start/Start'

export const CardTatuadores = ({like,id,image,first_name,last_name ,descripcion,departament,municipio}) => {

    const [likeTattoist, setLikeTattoits] = useState(like)



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

                        {(likeTattoist == 0) &&
                            <Start/>
                        }

                        {(likeTattoist == 1) &&
                            <Start1/>
                        }
                        {(likeTattoist == 2) &&
                            <Start2/>
                        }

                        {(likeTattoist == 3) &&
                            <Start3/>
                        }

                        {(likeTattoist == 4) &&
                            <Start4/>
                        }

                        {(likeTattoist == 5) &&
                            <Start5/>
                        }
                    </div>
                    <div className='contentButtons'>
                        <div className="ButtonViewProfileApt">
                            <a href={`/tatto/view/profile/${id}`} className='btnA_menu'>Ver perfil</a>
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

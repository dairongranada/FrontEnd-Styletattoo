import React, { useState, useEffect } from 'react'
import './Home_NewTattooists.scss'
import { getAllTatuadores } from '../../../../Helpers/ApiConsumer/Tattuadores';
import { Start } from '../../../Layouts/Start/Start'
import { Start1 } from '../../../Layouts/Start/Start'
import { Start2 } from '../../../Layouts/Start/Start'
import { Start3 } from '../../../Layouts/Start/Start'
import { Start4 } from '../../../Layouts/Start/Start'
import { Start5 } from '../../../Layouts/Start/Start'

// import tatuador3 from '../../../../images/Tatuadores/tatuador3.png'


export const Home_NewTattooists = () => {
    const [tatuadores, setTatuadores] = useState([]);



    useEffect(() => {
        getAllTatuadores()
          .then(info => {
            setTatuadores(info.data)


          })
      }, [])

    //   console.log(tatuadores);

      const allTaoits = tatuadores.filter(data => data.rol.includes('[ROLE_ARTISTA]'))

      console.log(tatuadores);
    



    return (
        <section className='NewTattooists'>
            {(allTaoits.length >= 1 || allTaoits.like >= 1)&&
                <div>
                    <h1 style={{margin:"2rem 0 2rem 0"}} className='titleMP4'>Artistas del momento</h1>
                </div>
            }

            <div className="containerCardsArts">
                {allTaoits.map(dat => (
                    (dat.PerfilProfesional.length >=1 && dat.iDispo[0].like >= 50) &&

                    <div className="CardArtist">
                        <div className="PosterTatuador">
                            {(dat.iDispo[0].like >= 50) &&                            
                                <span></span>
                            }
                            <img src={dat.PerfilProfesional[0].img} alt="..." />
                        </div>
                        <div className="detailsCard">
                            <p className='NmeLtatoo'>{dat.first_name} {dat.last_name}</p>
                            <div className="rating">
                                <div className="contStarsCardsH">

                                    {(dat.iDispo[0].like == 0) &&
                                        <Start/>
                                    }
                                    {(dat.iDispo[0].like == 1) &&
                                        <Start1/>
                                    }
                                    {(dat.iDispo[0].like == 2) &&
                                        <Start2/>
                                    }

                                    {(dat.iDispo[0].like == 3) &&
                                        <Start3/>
                                    }

                                    {(dat.iDispo[0].like == 4) &&
                                        <Start4/>
                                    }

                                    {(dat.iDispo[0].like == 5) &&
                                        <Start5/>
                                    }
                                </div>
                            </div>
                            <p>{dat.PerfilProfesional[0].description}</p>
                            <div><button className='ViewProfileCard'><a href={`/tatto/view/profile/${dat.id}`}>Ver Perfil</a></button></div>
                            
                        </div>
                    </div>


                ))}

                {(allTaoits.length == 0) &&
                    <main className='LoaderArtist'>
                        
                    </main>
                }

            </div>
        </section>

    )
}

import React, { useState, useEffect } from 'react'
import './Home_NewTattooists.scss'
import { getAllTatuadores } from '../../../../Helpers/ApiConsumer/Tattuadores';

// import tatuador3 from '../../../../images/Tatuadores/tatuador3.png'


export const Home_NewTattooists = () => {
    const [tatuadores, setTatuadores] = useState([]);



    useEffect(() => {
        getAllTatuadores()
          .then(info => {
            setTatuadores(info.data)


          })
      }, [])

      console.log(tatuadores);

      const allTaoits = tatuadores.filter(data => data.rol.includes('[ROLE_ARTISTA]'))


    



    return (
        <section className='NewTattooists'>
            <div>
                <h1 style={{marginTop:"2rem"}} className='titleMP4'>Artistas del momento</h1>
            </div>
            <div className="containerCardsArts">
                {allTaoits.map(dat => (
                    (dat.PerfilProfesional.length >=1 && dat.iDispo[0].like >= 1) &&

                    // <div className="CardArtist">

                    //     <img src={dat.PerfilProfesional[0].img} alt="" />

                    //     <div className="detailsCard">
                    //         <h3>{dat.first_name} {dat.last_name}</h3>
                    //         <div className='ContNumberLike'>
                    //             <div className="contSimbolAndNumL">
                    //                 <span class="material-symbols-outlined">thumb_up</span>
                    //                 <p>{dat.iDispo[0].like}</p>
                    //             </div>
                    //         </div>

                    //         <div className="descriptionCardTatt">
                    //             <p style={{marginTop:"1rem"}} >{dat.PerfilProfesional[0].description}</p>
                    //         </div>
                    //     </div>
                    // </div>

                    <div className="CardArtist">
                        <div className="PosterTatuador">
                            <img src={dat.PerfilProfesional[0].img} alt="..." />
                        </div>
                        <div className="detailsCard">
                            <p className='NmeLtatoo'>{dat.first_name} {dat.last_name}</p>
                            <div className="rating">
                                <p><label>★</label><label>★</label><label>★</label><label>★</label><label>★</label></p>
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

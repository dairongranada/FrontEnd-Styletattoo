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
            <div className="contTittleCards">
                <h1>Artistas del momento</h1>
            </div>
            <div className="containerCardsArts">
                {allTaoits.map(dat => (
                    (dat.PerfilProfesional.length >=1 && dat.iDispo[0].like >= 1) &&

                    <div className="CardArtist">

                        <img src={dat.PerfilProfesional[0].img} alt="" />

                        <div className="detailsCard">
 
                             <h3>{dat.first_name} {dat.last_name}</h3>


                            <div className='ContNumberLike'>
                                <h4>Me gusta</h4>
                                <div className="contSimbolAndNumL">
                                    <span class="material-symbols-outlined">thumb_up</span>
                                    <p>{dat.PerfilProfesional[0].like}</p>
                                </div>
                            </div>

                            <div className="descriptionCardTatt">
                                <h4>Descripcion:</h4>
                                <p>{dat.PerfilProfesional[0].description}</p>
                            </div>
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

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


    
    // const allTaoits = tatuadores.filter(data => data.rol.includes('[ROLE_ARTISTA]'))
    // const allTaoitsTwo = allTaoits.filter(data =>{
    //     if (data.PerfilProfesional.length >= 0) {
    //     //   console.log(data);
    //     }else{
    //     }
      
    // })


    return (
        <section className='NewTattooists'>
            <div className="contTittleCards">
                <h1>Artistas del momento</h1>
            </div>
            <div className="containerCardsArts">
                {allTaoits.map(dat => (
                    (dat.PerfilProfesional.length >=1) &&

                    <div className="CardArtist">
                        <div className="ImgArtistCard">
                            <img src={dat.PerfilProfesional[0].img} alt="" />
                        </div>
                        <div className="detailsCard">
                            <div className="nameTatuadorCard">
                                <h3>{dat.first_name}</h3>
                            </div>
                            <div className="descriptionCardTatt">
                                <h4>Descripcion:</h4>
                                <p>{dat.PerfilProfesional[0].description}</p>
                            </div>
                        </div>
                    </div>


                ))}
                
            </div>
        </section>

    )
}

import React from 'react'

export const CardTatuadores = ({id,image,first_name,last_name ,descripcion,ciudad}) => {
  return (
        <div className='pather'>
              <div className="containerTattois">
                <div className="cardsTattooists">
                    <div className="face facel">
                        <div className="content">
                            <img src={image} alt="#" />
                        </div>
                    </div>
                    <div className="face face2">
                        <div className="content">
                            <p className='nameTattooists' >{first_name} {last_name}</p>
                            <p className='descripTattooists'href="/">{descripcion}</p>
                            <p className='descripTattooists'><span className="material-symbols-outlined">location_on</span>{ciudad}</p>
                            
                            <a href={`/tatto/view/profile/${id}`} className='btnA_menu'>Ver perfil</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

  )
}

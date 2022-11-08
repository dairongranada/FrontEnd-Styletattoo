import React,{useState} from 'react'
import './SearchTattoo.scss'
import { NavigationBar } from '../../Layouts/NavigationBar/NavigationBar';




export const PageTattooists = () => {
    const tattoo = [
        {name: 'lewis holguin', image:'https://res.cloudinary.com/dsoovcjav/image/upload/v1660826276/ImagesTattoo/tatuador1_rvghbe.png',descripcion:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit nostrum eius laboriosam', ciudad:'montenegro'},
        {name: 'chris nuñez', image:'https://res.cloudinary.com/dsoovcjav/image/upload/v1660826273/ImagesTattoo/tatuador2_efzh1a.png', descripcion:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit nostrum eius laboriosam', ciudad:'calarca'},
        {name: 'oliver peck', image:'https://res.cloudinary.com/dsoovcjav/image/upload/v1660826274/ImagesTattoo/tatuador3_jd7kt9.png',descripcion:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit nostrum eius laboriosam?', ciudad:'armenia'},
    ]

 // const [searchTattoo, setsearchTattoo] = useState(tattoo)
    const [filterCityartist, setFilterCityartist] = useState(tattoo)
    const filterCity = (event) => {
        const data = event.target.value;
        const filtro = tattoo.filter (tatoo => tatoo.ciudad.toUpperCase().includes(data.toUpperCase()))
        setFilterCityartist(filtro)
    }


/*  A N I M A C I O N   D E   I C O N O   D E L   M E N U   D E   C I U D A D E S */
    const [changeM, setChangeM] = useState(false)

    const ChangeClassIconM = () => {
      setChangeM(true)
    }



  return(
    <>
    <NavigationBar/>
    <div className='Content_Tattooists'>
      <div className='Content_TattooistsTitle'>
        <h1>ARTISTAS</h1>
        <p style={{marginLeft:"5rem"}}>Contamos con un equipo de artistas profesionales e integrales que se 
          desempeñan en las diferentes técnicas o estilos del tatuaje, entre ellos, 
          sombras, realismo, sombras, color, realismo color, oriental, tradicional, 
          neotradicional, libre, liners, black work, black and grey y cover up</p>
      </div>
      
      <div onClick={ChangeClassIconM} className='contSearch'>
        <select onClick={ChangeClassIconM} className='MenuOptions' onChange={filterCity}>
          <option selected disabled >BUSCAR ARTISTAS DE TU CIUDAD</option>
          {
            tattoo.map((parametro => <option id='OptionFilter' className='OptionFilter'>{parametro.ciudad}</option>))
          }
        </select>
        <div className={`IconDespliegMen ${changeM &&  "IconRotation"}`}>
          <span id='IconDespliegMen' className="material-symbols-outlined">
            expand_less
          </span>
        </div>
      </div>
 
      <main className='main-contenido'>
        {filterCityartist.map((tattoo, index) => {
            return<div className='pather'>
              <div className="containerTattois">
                <div className="cardsTattooists">
                    <div className="face facel">
                        <div className="content" key={index}>
                            <img src={tattoo.image} alt="#" />
                        </div>
                    </div>
                    <div className="face face2">
                        <div className="content">
                            <p className='nameTattooists' >{tattoo.name}</p>
                            <p className='descripTattooists'href="/">{tattoo.descripcion}</p>
                            <p className='descripTattooists'><span className="material-symbols-outlined">location_on</span>{tattoo.ciudad}</p>
                            
                            <a href="/tatto/view/profile" className='btnA_menu'>Ver perfil</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
              })}
      </main>
    </div>
    </>

  )
}
import React,{useState} from 'react'
import './SearchTattoo.scss'



export const SearchTattoo = () => {

    const tattoo = [
        {name: 'lewis holguin', image:'https://res.cloudinary.com/dsoovcjav/image/upload/v1660826276/ImagesTattoo/tatuador1_rvghbe.png',descripcion:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit nostrum eius laboriosam aut quos, vitae deserunt a nisi qui esse?' },
        {name: 'chris nuñez', image:'https://res.cloudinary.com/dsoovcjav/image/upload/v1660826273/ImagesTattoo/tatuador2_efzh1a.png', descripcion:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit nostrum eius laboriosam aut quos, vitae deserunt a nisi qui esse?'},
        {name: 'oliver peck', image:'https://res.cloudinary.com/dsoovcjav/image/upload/v1660826274/ImagesTattoo/tatuador3_jd7kt9.png',descripcion:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit nostrum eius laboriosam aut quos, vitae deserunt a nisi qui esse?' },
        {name: 'lisa orth', image:'https://res.cloudinary.com/dsoovcjav/image/upload/v1660826299/ImagesTattoo/tatuador4_i7gdfl.jpg', descripcion:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit nostrum eius laboriosam aut quos, vitae deserunt a nisi qui esse?' },
    ]

    const [searchTattoo, setsearchTattoo] = useState(tattoo)

    const filterTattoo = (event) =>{
        const data = event.target.value;
        const filter = tattoo.filter(tattoo => tattoo.name.includes(data))
        setsearchTattoo(filter);
    }

  return (
    <div className='Content_Tattooists'>
      <div className='Content_TattooistsTitle'>
        <h1>ARTISTAS</h1>

        <p>Contamos con un equipo de artistas profesionales e integrales que se 
          desempeñan en las diferentes técnicas o estilos del tatuaje, entre ellos, 
          sombras, realismo, sombras, color, realismo color, oriental, tradicional, 
          neotradicional, libre, liners, black work, black and grey y cover up</p>
      </div>
      <input className="Filter_Tatto" onChange={filterTattoo} type="text" placeholder='Ingrese un nombre' />
      
      
      
    

      <main className='main-contenido'>
        
        {searchTattoo.map((tattoo, index) => {
            return<div className="our-team-section" key={index}>
                  <div className="member-container">
                      <img src={tattoo.image} alt={tattoo.name} />
                      <h3 className="member-name">{tattoo.name}</h3>
                      <p className="member-description">{tattoo.descripcion}</p>
                      <a href="http://localhost:3000/Tatuadores" className="button">VER MI PERFIL!</a>
                  </div>
                </div>
              })}


      </main>
    </div>
  )
}



import React,{useState} from 'react'
import './SearchTattoo.scss'
export const SearchTattoo = () => {

    const tattoo = [
        {name: 'lewis holguin', image:'https://res.cloudinary.com/dsoovcjav/image/upload/v1660826276/ImagesTattoo/tatuador1_rvghbe.png'},
        {name: 'chris nuñez', image:'https://res.cloudinary.com/dsoovcjav/image/upload/v1660826273/ImagesTattoo/tatuador2_efzh1a.png'},
        {name: 'oliver peck', image:'https://res.cloudinary.com/dsoovcjav/image/upload/v1660826274/ImagesTattoo/tatuador3_jd7kt9.png'},
        {name: 'lisa orth', image:'https://res.cloudinary.com/dsoovcjav/image/upload/v1660826299/ImagesTattoo/tatuador4_i7gdfl.jpg'},
    ]

    const [searchTattoo, setsearchTattoo] = useState(tattoo)

    const filterTattoo = (event) =>{
        const data = event.target.value;
        const filter = tattoo.filter(tattoo => tattoo.name.includes(data))
        setsearchTattoo(filter);
    }
  return (
    <div className='div-card'>
      <input classname="input" onChange={filterTattoo} type="text" placeholder='Ingrese un nombre' />
      <main>
        {
          searchTattoo.map((tattoo, index) => {
            return <div className='card' key={index}>
                    <h2 className='titleTattoo'>{tattoo.name}</h2>
                    <img class="imgtattoo" src={tattoo.image} alt={tattoo.name} />
                  </div>})}
      </main>
    </div>
  )
}



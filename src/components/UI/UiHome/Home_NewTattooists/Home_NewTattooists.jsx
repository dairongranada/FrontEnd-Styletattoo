import React from 'react'
import './Home_NewTattooists.scss'
import { useState } from 'react'




export const Home_NewTattooists = () => {
    const tattoo = [
        { 
            name: 'lewis holguin', 
            image: 'https://res.cloudinary.com/dsoovcjav/image/upload/v1660826276/ImagesTattoo/tatuador1_rvghbe.png', 
            descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi perferendis laboriosam officiis veritatis, ab mollitia, doloremque velit quibusdam ad corporis deleniti veniam, dolores pariatur  ' },
        { 
            name: 'chris nuñez', 
            image: 'https://res.cloudinary.com/dsoovcjav/image/upload/v1660826273/ImagesTattoo/tatuador2_efzh1a.png', 
            descripcion: ' i perfer amet consectetur adipisi cendis laboriosam officiiLorem ipsum dolor siting elit. Excepturs veritatis, ab mollitia, doloremque velit quibusdam ad corporis deleniti veniam, dolores pariatur adipisci possimus provident architecto expedita? Sit.' },
        { 
            name: 'oliver peck', 
            image: 'https://res.cloudinary.com/dsoovcjav/image/upload/v1660826274/ImagesTattoo/tatuador3_jd7kt9.png', 
            descripcion: ' pturi perferendis laboriosam officiis veri psum dolor sit ametLoreectetur adipisicing elit.m  cons Excetatis, ab mollitia, doloremque velit quibusdam ad corporis deleniti veniam, dolores pariatur adipisci possimus provident architecto expedita? Sit.' },
    ]


    const [selected, setSelected] = useState(0)
    const tlength = tattoo.length

    console.log(tlength);



    return (
        <section className='NewTattooists'>
            <div className="lentDarckNewT">

                <div className='contArtistas'>
                </div>
                    <div className="artistasFromHome">
                        <div className="left-t">
                            <span>ARTISTAS</span>
                            <span className="stroke-text">Mas Destacados </span>
                            <span>{tattoo[selected].descripcion}</span>
                            

                            <span style={{ color: "var(--colorOrange2)", margin: "2rem" }}>
                                <span>{tattoo[selected].name}</span>
                                {" "}-{" "} Artista
                            </span>
                            <div className='SeeTattooists'><a className='buttons_global_StyleTatto' href="/all/artist/style">VER MAS</a></div>
                        </div>
                        <div className="right-t">
                            <div></div>
                            <div></div>
                            <img src={tattoo[selected].image} alt="" />
                        <div className='arrows' >
                            <img onClick={() => {selected === 0 ? setSelected(tlength - 1) :setSelected((prev) => prev - 1)}}src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAtCAYAAADoSujCAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAALWSURBVHgB1ZrbbepAEIbHRiDEk0uAB24SD6GD0EFOBQkVkFQQTgUhFUAqOJwKQgfkAYmrhEvwCzyAgPwTmSgXCLNhbMMnRbbCCs2/u7P77ywWBcBoNLrA42Gz2fDTsSyrs1qtqsVi0SVlLFJmMplcI9gGXp0vH3nL5bJSKpVeSBGbFPGDb9H34BknkUg8kDJqAsbj8b0f/F4wpS5JGRUBHPx6va4LmrqkzNECDILnEfhPyhyVxFhteKW5FTZv5/P5P6TMr0cAwTelwWOEnoIInjEegW6366RSqSZeryTtIfKxUChIR8kYIwF+8M94vZC0R8//xeZVpwARC+j3+2nbtv/RCQXPiAT4wXPPpyXtMW3uMG0aFAIHBZgGj55nz9OikPhRgGHwHv6qWG3aFCJ7BbCjxFTg4B06jAfHWcnlcqpGTcLOfQA9f2kQvBtV8Ezs6z/YUeLB0yBJh3Ex5ytI2AFFxKcRwLSpHXKUH3gLPohDignvOWBiyoCHtncUgLuUgE7rbN/fBBgGfwq4vkVpWEjYGyyVTTpDeMNE7HaNzhSsfjVOYpG3OVHSLMCl8+XF5mSgMwULz6PNmczWl84LjxOYTeP7PoDVqI6Evpd+A7tOimD6xWIxbzabueVymc3jZzM3GAxukdnS4tNp7cRbDPeFyEXstNOGVjpSETvtNFtjtsgkm+N86On2er1I9pO9dSEWwT1LMhFOPB5/Hg6HolKLJupnYnCDY+UThcTByhzPbYORYFrsbikkTOtC4pFA23o2mw18gzSqzE2nU2exWIgrc2GIMCruZjIZD7csPJ1EpRM+JAU9nX5dXseK08LjWtIWS3ILq1qVAuCo+wFD/9Sez+fVrYfR4qgbGi7eGjjZq2QyqV5mP/qKyUREEMdXlUs+AxESb2WE2jWrL+LHROUbe1JG9aKbT0i+iF2J6vHPDUgZVQGML6L8obe5ct1hdxuE5X4FLihqMNKrIDAAAAAASUVORK5CYII=" alt="" />
                            <img onClick={() => {selected === tlength - 1? setSelected(0) :setSelected((prev) => prev + 1)}}src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAbCAYAAABr/T8RAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADxSURBVHgB5ZfhDYIwEIWfTsAGOoIj6AY4gWwAG8AIbAAb6AhsoBswAiOcd1KiiaUEci0/+JKXNJD0I7m2R4EFEFHK6UxyhIBFCf1TYSZ7zCeyPJOPeXKO8IVMzmnJTrtp+Qm+4MkjU1sbsuJv8AkLahrH73ZjQbFZeeaQV5zPObAzg5Rzhh6yoqORdy/OVcR3HsQISyNiwgrIWd0gPI+hxiXnAD2manyBNtT36jHqYVVrS3OHtIQPJqQFtKG+UVQOaQZtaLo7JdCG3P1YpPr9mNb4AzHSLqjUiMdan9Raf4/+iGOL1M/BYJEX9L1JFFjAG4XRmJQfpPVeAAAAAElFTkSuQmCC" alt="" /></div>
                        </div>
                </div>
            </div>
        </section>

    )
}

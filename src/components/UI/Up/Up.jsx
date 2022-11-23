import React from 'react'
import'./Up.scss'

export const Up = () => {
    const FunctionScroll = () => {
        window.scroll({
          top: 0,
          behavior: 'smooth'
        })
      }
    return (

        <p onClick={FunctionScroll}  id="edgtf-back-to-top" className="on">
            <span className="edgtf-icon-stack">
                <i style={{color: "#fff"}} className="edgtf-icon-ion-icon ion-android-arrow-dropup material-symbols-outlined">expand_less</i>                
            </span>
		    <span className="edgtf-btt-text">Subir</span>
		</p>
        

    )
}

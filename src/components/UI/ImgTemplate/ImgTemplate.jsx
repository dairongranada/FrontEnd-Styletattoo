import React from 'react'

export const ImgTemplate = ({srcImg,className,alt}) => {
    return (
        <img className={className}  src={srcImg} alt={alt}/>
    )
}

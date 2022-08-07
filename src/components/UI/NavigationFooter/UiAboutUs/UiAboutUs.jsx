import React from 'react'

export const UiAboutUs = ({NameAbout,classSpanLogo,NameSpanLogo}) => {
    return (
        <div  className='AboutUs box'>
            <h2>{NameAbout}<span class={classSpanLogo}>{NameSpanLogo}</span></h2>
            <div className="content">
                <form action="#">
                    <div className='email'>
                        <div className="text">Email</div>
                        <input type="text" required />
                    </div>
                    <div className='msg'>
                        <div className="text">Mensaje</div>
                        <textarea  cols="25" rows="2" required ></textarea>
                    </div>
                    <div>
                        <button type='submit' className='buttons_global_StyleTatto' >Enviar</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

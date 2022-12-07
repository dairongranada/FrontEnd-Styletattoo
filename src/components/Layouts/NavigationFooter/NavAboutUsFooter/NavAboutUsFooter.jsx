import {React , useState} from 'react'
import emailjs from '@emailjs/browser';
import { Toaster, toast } from 'react-hot-toast';
import { useNavigate } from 'react-router';



export const NavAboutUsFooter = ({NameAbout,classSpanLogo,NameSpanLogo}) => {

const navigate = useNavigate()


const sendEmail = (event)=>{
    event.preventDefault();
    // ALERTA CHIMBA
    toast.success('Se envio correctamente')
    emailjs.sendForm('service_4mrciiq','template_mr2pmtq',event.target,'QiP2ouJ-zjh1PcZPE')
    .then(response => console.log(response))
    .catch(err => console.error(err))

    setTimeout(() => {
        window.location.reload(false);
    }, 1000);
    
}


    return (
        <div className='AboutUs box'>
           
            <h2>{NameAbout}<span className={classSpanLogo}>{NameSpanLogo}</span></h2>
            <div className="contentNavFooter">
                <form onSubmit={sendEmail}>
                    <div className='email'>
                        <div className="text">Email</div>
                        <input type="email" name='email' required />
                    </div>
                    <div className='msg'>
                        <div className="text">Mensaje</div>
                        <textarea name='message'  maxLength={100}  cols="25" rows="3" style={{resize: "none", paddingTop:"5px"}} ></textarea>
                    </div>
                    <div>
                        <button id="liveToastBtn" type='submit' className='PostEmailFooter'>
                            <div className='svg-wrapper-1'>
                                <div className='svg-wrapper'>
                                    <span className="material-symbols-outlined">send</span>
                                </div>
                            </div>
                            <span>Enviar</span>
                        </button>
                        <Toaster/> 
                    </div>
                </form> 
            </div>
    </div>
    )
}

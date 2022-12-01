import React, { useEffect } from 'react'
import { useState } from 'react'
import './Bot.scss'


export const Bot = () => {


  const [openChat, setOpenchat] = useState('ocultarBot')


  const OpenchatStyleBotC =()=> {
    setOpenchat('mostrarBot')
  }



  useEffect(()=> {
    let res_msg = document.createElement('div')
    res_msg.innerHTML = "Hola! soy Style Bot, ¿puedo ayudarte en algo?"
    res_msg.setAttribute("class","izquierdMesna")

    document.getElementById('msg_area').appendChild(res_msg)
  },[])
  



  const Fasynyc = async(e) => {

    /*opciones*/
    let artista = "como ser un artista"
    let usuario = "como ser un usuario"
    let subirTrabajo = "como subir mis trabajos"
    let reacuperarContraseña = "como recupero mi contraseña"
    let agendarCita = "como agendar una cita"
    let no = "no"
    let si  = "si"

    e.preventDefault();
    let req = document.getElementById('text').value;
    let mensaje_ususario= document.createElement('div')
    mensaje_ususario.innerHTML=req
    mensaje_ususario.setAttribute("class","derechaMesna")
    document.getElementById('msg_area').appendChild(mensaje_ususario)

    if (req == undefined || req == "") {
      let res_msg = document.createElement('div')
      res_msg.innerHTML = "No entiendo que tratas de decirme, respondeme si o no"
      res_msg.setAttribute("class","izquierdMesna")

      document.getElementById('msg_area').appendChild(res_msg)
    }
    else if( req == si){

      let res_msg = document.createElement('div')
      res_msg.innerHTML = "dime en que puedo ayudarte segun la siguiente lista [como ser un artista, como ser un usuario, como subir mis trabajos, como agendar una cita, como recupero mi contraseña]"
      res_msg.setAttribute("class","izquierdMesna")

      document.getElementById('msg_area').appendChild(res_msg) 
      
    }

    else if( req == no){

      let res_msgdes = document.createElement('div')
      res_msgdes.innerHTML = "Entendido, hasta la proxima!"
      res_msgdes.setAttribute("class","izquierdMesna")

      document.getElementById('msg_area').appendChild(res_msgdes) 
      
    }
    
    else if (req == artista || req == usuario) {
      let res_msgR = document.createElement('div')
      res_msgR.innerHTML = "Entendido te llevare enseguida"
      res_msgR.setAttribute("class","izquierdMesna")

      document.getElementById('msg_area').appendChild(res_msgR)
      window.location.assign('/Registro')
    }
    else if(req == subirTrabajo) {
      let res_msgT = document.createElement('div')
      res_msgT.innerHTML = "Primero debes registrarte como un artista, luego en tu perfil personal selecciona la opcion crear perfil profecional, una vez creado ve a tu perfil personal y selecciona la opcion subir trabajos, una vez subidos estaran en tu perfil profesional ¿puedo ayudarte en algo mas? (responde solo si o no)"
      res_msgT.setAttribute("class","izquierdMesna")

      document.getElementById('msg_area').appendChild(res_msgT)
    }
    else if(req == agendarCita){
      let res_msgC = document.createElement('div')
      res_msgC.innerHTML = "Primero debes registrarte como un usuario, luego ve al perfil del tatuador que mas te guste, habra un boton que dice (agendar cita) dale click y te llevara al registro de la cita.  ¿Puedo ayudarte en algo mas? (responde solo si o no)"
      res_msgC.setAttribute("class","izquierdMesna")

      document.getElementById('msg_area').appendChild(res_msgC)
    }
    else if (req == reacuperarContraseña) {
      let res_msgRc = document.createElement('div')
      res_msgRc.innerHTML = "Si olvidaste tu contraseña, en login hay una opcion que te pregunta si olvidaste tu contraseña, dale click y sigue los pasos que te indiquen.  ¿Puedo ayudarte en algo mas? (responde solo si o no)"
      res_msgRc.setAttribute("class","izquierdMesna")

      document.getElementById('msg_area').appendChild(res_msgRc)
    }

    else if(req != si || req != no || req != artista || req != usuario || req != subirTrabajo || req != agendarCita || req != reacuperarContraseña){
      let res_msgRErr = document.createElement('div')
      res_msgRErr.innerHTML = "No entiendo que tratas de decirme :("
      res_msgRErr.setAttribute("class","izquierdMesna")

      document.getElementById('msg_area').appendChild(res_msgRErr)
    }
    
  }


  return (
    <>
      <div id={`${openChat}`}></div>
        <div id='ContChatWinmain'>
          <h2 className='TittleChatB'>Style Bot</h2>
          <div id='msg_area'>
            <div id='robot'>
              <div id='bot'></div>
              <h3 id='ChatBotAco'>StyleBot</h3>

            </div>

          </div>

          <div id='input'>
            <input type="text" placeholder='Escribe un mensaje' id='text'/>
            <button onClick={Fasynyc} id='send'>Enviar <span class="material-symbols-outlined"> send </span></button>
          </div>

        </div>



        <div onClick={OpenchatStyleBotC} className='OpenchatStylebot'>

        </div>

    </>
  )
}

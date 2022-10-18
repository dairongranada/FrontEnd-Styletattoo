import md5 from 'md5'
import axios from "axios";
import Cookies from 'universal-cookie';
import { CorsRequest } from 'cors';

const cors = require('cors');

// const URL = "http://localhost:8080";
const URL = "https://despliegue-back.onrender.com/api/RegistroUsuario/"
const cookies = new Cookies();





export const postUsuario = async( userApi ) => {
    userApi.estadoUs = 1;
 
     try {
         const response = await axios({
             url: URL,
             method: "POST",
             data: userApi

         }).catch( function( error ) {
 
             if ( error.response ) {
                 console.log( error );
                 return { status : error.response.status }
             }
         });
         
         console.log(response);
         return response;
     } catch (error) {
         console.log( error );
     }
 
 }


 
export const getUsuario = async() => {
 
    try {
        const respuesta = await axios.get(URL,);
        return respuesta;
        
    } catch (error) {
        if ( error.response ) {
            console.log(error.response.status);
            return error.response.status;
        }
        
    }
}




export const LoginUserAuth = async({LoginEmail,LoginPassword}) =>{

    await axios.get(URL,{params:{ 
            email: LoginEmail,
            password: LoginPassword
        }})

    .then(response =>{
        return(response.data);
        
         
    }).then(response =>{
        if(response.length > 0){
            alert("Usuario Correcto")
            console.log(response);
            // let respuesta= response[0];
            // cookies.set("id", respuesta.id, {path:"/"} )
            // cookies.set("name", respuesta.name, {path:"/"} )
            // cookies.set("lastName", respuesta.lastName, {path:"/"} )
            // cookies.set("email", respuesta.email, {path:"/"} )
            // // navigate('/user/edit-profile')   

        }else{
            alert("usuario Incorrecto!");
        }
    })
    .catch(error =>{
        console.log(error);
    })
}



export const AuthEmail = async({ LoginEmail }) =>{

    await axios.get(URL,{params:{ 
        email: LoginEmail
    }})

    .then(response =>{
        console.log(response.data);
        return(response.data);
        
    }).then(response =>{
        if(response.length < 0){
            console.log(response.data[0].email);
            alert("Ese Correo Electronico Ya se Encuentra en uso");
        }
    })
    .catch(error =>{
        console.log(error);
})
}

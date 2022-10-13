
import axios from "axios";
// const URL = "http://localhost:8080";


export const postUsuario = async( userApi ) => {

    userApi.estadoUs = 1;
 
     try {
         const response = await axios({
             url: "http://localhost:3001/usuarios",
             method: "POST",
             data: userApi

         }).catch( function( error ) {
 
             if ( error.response ) {
                 console.log( error );
                 return { status : error.response.status }
             }
         });
         
         return response;
     } catch (error) {
         console.log( error );
     }
 
 }


 
export const getUsuario = async() => {
 
    
    try {
        const respuesta = await axios.get("http://localhost:3001/usuarios",);
        return respuesta;
        
    } catch (error) {
        if ( error.response ) {
            console.log(error.response.status);
            return error.response.status;
        }
        
    }
}
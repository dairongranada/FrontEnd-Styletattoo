/* disponibilidad */ 
import axios from'axios';
const URL = "http://localhost:8000/";

let token = localStorage.getItem("token")


export const getdispo = async ( id ) => {
    try {
        const response = await axios(URL+"dispo/"+id+"/")
        .catch( function( error ) {

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



export const MetodoPUTdispo = async ( valores,id ) => {

    try {
        const resp = await axios({
            url: URL+"dispo/"+id+"/",
            method: "PUT",
            // dispo: valores,
            headers: {
                "Authorization" :"Token "+token,
                "Content-Type":"application/json"
            },
            data: valores

        }).catch( function( error ) {

            if (error.response) {
                return { status : error.response.status};
            } 
        });
        return resp;
    } catch (error) {}
}
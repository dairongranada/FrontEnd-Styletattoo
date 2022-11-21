import axios from "axios";

const URL = "http://localhost:8000/";

let token = localStorage.getItem("token")




export const getAllTatuadores = async () => {
    try {
        const response = await axios(URL+"auth/listTattoo/TattoList/");

        return response;
    } catch (error) {
        console.log( error );
    }
}





export const getAllTatuadoresID = async ( id ) => {
    try {
        const response = await axios(URL+"auth/listTattoo/TattoList/"+id)
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










export const MetodoGETLikes = async ( id ) => {

    try {
        const resp = await axios({
            url: URL+"dispo/"+id,
            method: "GET",
            headers: {
                "Authorization" :"Token "+token,
                "Content-Type":"application/json"
            }
        })
        return resp;
    } catch (error) {
    }
}




export const MetodoPUTLikes = async ( valores,id ) => {

    try {
        const resp = await axios({
            url: URL+"dispo/"+id+"/",
            method: "PUT",
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
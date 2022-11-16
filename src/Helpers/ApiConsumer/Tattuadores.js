import axios from "axios";

const URL = "http://localhost:8000/";

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


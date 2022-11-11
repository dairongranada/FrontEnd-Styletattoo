import axios from "axios";

export const getAllTatuadores = async () => {

    const URL = "http://localhost:3000/";

    try {
        const response = await axios(URL+"AllArtistas");

        return response;
    } catch (error) {
        console.log( error );
    }

}




export const getAllTatuadoresID = async ( id ) => {

    try {
        const response = await axios("http://localhost:3000/AllArtistas/"+id)
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


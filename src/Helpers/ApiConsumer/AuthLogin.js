import axios from "axios";


const URL = "http://localhost:8000/";
// const URL = "https://despliegue-back.onrender.com/api"


// VALDAR SI EL USURIO EXISTE 

export const LoginUserAuth = async ( valores ) => {

    try {
        const resp = await axios({
            url: URL+"auth/login/",
            method: "POST",
            headers: {
                "Content-Type":"application/json"
            },
            data: valores
        }).catch( function( error ) {

            if (error.response) {
                return { status : error.response.status};
            } 
        });

        return resp;

    } catch (error) {
        console.log( error );
    }
}



import md5 from 'md5'
import axios from "axios";


// const URL = "http://localhost:8080";
const URL = "https://despliegue-back.onrender.com/api"





export const postUsuario = async (userApi) => {
    // userApi.estadoUs = "a";
    // userApi.role = "[ROLE_USUARIO]"

    try {
        const response = await axios({
            url: URL+"/RegistroUsuario/",
            method: "POST",
            data: userApi

        }).catch(function (error) {

            if (error.response) {
                console.log(error);
                return { status: error.response.status }
            }
        });

        console.log(response);
        return response;
    } catch (error) {
        console.log(error);
    }

}




// VALDAR SI EL USURIO EXISTE 

export const LoginUserAuth = async ( valores ) => {

    try {
        const resp = await axios({
            url: URL+"/auth/iniciarSesion",
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



// axios.get(URL+"/RegistroUsuario/", {
//     params: {
//         email: "montoyatorressteven0@gmail.com",
//         contraseña: "careloco"
//     }
//   })
//   .then(function (response) {
//     console.log(response);
//   })
//   .catch(function (error) {
//     console.log(error);
//   })
//   .then(function () {
// }); 

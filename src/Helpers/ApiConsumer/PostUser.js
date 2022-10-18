import md5 from 'md5'
import axios from "axios";


// const URL = "http://localhost:8080";
const URL = "https://despliegue-back.onrender.com/api/RegistroUsuario/"





export const postUsuario = async (userApi) => {
    // userApi.estadoUs = "a";
    // userApi.role = "[ROLE_USUARIO]"

    try {
        const response = await axios({
            url: URL,
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



export const getUsuario = async () => {

    try {
        const respuesta = await axios.get(URL,);
        return respuesta;

    } catch (error) {
        if (error.response) {
            console.log(error.response.status);
            return error.response.status;
        }

    }
}


// export const LoginUserAuth = async ( valores ) => {

//     try {
//         const resp = await axios({
//             url: URL,
//             method: "GET",
//             headers: {
//                 "Content-Type":"application/json"
//             },

//             data: {
//                 "nombre": "dairosdadn",
//                 "apellido": "Granadas",
//                 "telefono": "3218666262",
//                 "contraseña": "210521Dairon",
//                 "email": "daironssdasd@gmail.com",
//                 "rol": "U"
//             }
//         }).catch( function( error ) {

//             if (error.response ) {
//                 console.log(error);
//                 return { status : error.response.status};
//             } 
//         });

//         return resp;

//     } catch (error) {
//         console.log( error );
//     }
// }

export const LoginUserAuth = async ({ LoginEmail, LoginPassword }) => {

    await axios.get(URL, {
        params: {
            email: LoginEmail,
            contraseña: LoginPassword
        }
    })
        .then(response => {
            console.log(response.data.length);

            for (let i = 0; i < response.data.length; i++) { console.log(response.data[i].email); }
            for (let i = 0; i < response.data.length; i++) { console.log(response.data[i].contraseña); }

            return (response.data);


        }).then(response => {
            if (response.length > 0) {
                alert("Usuario Correcto")
                console.log(response);
            } else {
                alert("usuario Incorrecto!");
            }
        })
        .catch(error => {
            console.log(error);
        })
}



export const AuthEmail = async ({ LoginEmail }) => {

    await axios.get(URL, {
        params: {
            email: LoginEmail
        }
    })

        .then(response => {
            console.log(response.data);
            return (response.data);

        }).then(response => {
            if (response.length < 0) {
                console.log(response.data[0].email);
                alert("Ese Correo Electronico Ya se Encuentra en uso");
            }
        })
        .catch(error => {
            console.log(error);
        })
}

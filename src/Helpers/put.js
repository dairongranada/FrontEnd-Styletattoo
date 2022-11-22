// /* disponibilidad */

// import axios from "axios";


// const URL = "http://localhost:8000/"
// let token = localStorage.getItem("token")


// export const Actualization = async ( valores, id ) => {
//     try {
//         const resp = await axios({
//             url: URL+"dispo/"+ id,
//             method: "GET",
//             headers: {
//                 "Authorization" :"Token "+token,
//                 "Content-Type":"application/json"
//             },
//             data: valores

//         }).catch( function( error ) {

//             if (error.response) {
//                 return { status : error.response.status};
//             } 
//         });

//         return resp;

//     } catch (error) {

//     }
// }
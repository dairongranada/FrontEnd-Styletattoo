import axios from "axios";


const URL = "http://localhost:8000/";
// const URL = "https://despliegue-back.onrender.com/api"




export const CreateProfesionalprofile =  async (userApi) => {

    try {
        const response = await axios({
            url: URL+"/tattos/",
            method: "POST",
            data: userApi

        }).catch(function (error) {

            if (error.response) {
                console.log(error);
                return { status: error.response.status }
            }
        });
        return response;
    } catch (error) {
    }

}



export const signUpUser = async (userApi) => {

    try {
        const response = await axios({
            url: URL+"auth/signup/",
            method: "POST",
            data: userApi

        }).catch(function (error) {

            if (error.response) {
                console.log(error);
                return { status: error.response.status }
            }
        });
        return response;
    } catch (error) {
    }

}



export const signUpTatto = async (userApi) => {
    // userApi.estadoUs = "a";
    // userApi.role = "[ROLE_USUARIO]"

    try {
        const response = await axios({
            url: URL+"auth/signup/",
            method: "POST",
            data: userApi

        }).catch(function (error) {

            if (error.response) {
                console.log(error);
                return { status: error.response.status }
            }
        });

        return response;
    } catch (error) {
    }

}




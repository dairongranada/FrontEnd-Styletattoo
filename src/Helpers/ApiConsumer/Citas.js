
import axios from "axios";
import {useState } from 'react'


const URL = "http://localhost:8000/";
let token = localStorage.getItem("token")



export const AceptarCita = async ( valores, id ) => {

    try {
        const resp = await axios({
            url: URL+"quotes/"+id +"/",
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

    } catch (error) {
    }
}




export const DeleteCita = async ( id ) => {

    try {
        const resp = await axios({
            url: URL+"quotes/"+id +"/",
            method: "DELETE",
            headers: {
                "Authorization" :"Token "+token,
                "Content-Type":"application/json"
            },

        }).catch( function( error ) {

            if (error.response) {
                return { status : error.response.status};
            } 
        });

        return resp;

    } catch (error) {
    }
}
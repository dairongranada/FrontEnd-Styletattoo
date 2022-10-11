
export const validacionCorreo = ( correo ) => {

    if ( !/^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/.test(correo) ) {
        return{
            resp : false,
            msj : "El correo no es válido"
        }
    }

    return{
        resp : true,
        msj : ""
    }

}


export const validacionPassword = ( password ) => {

    if ( !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,15}/.test(password) ) {
        return{
            resp : false,
            msj : "La contraseña debe contener caracteres especiales, minusculas, mayusculas y números"
        }
    }

    return{
        resp : true,
        msj : ""
    }

}

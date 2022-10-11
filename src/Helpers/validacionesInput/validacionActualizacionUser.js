
export const validacionActualizacionUser = ( user, cambiarEstado, txtEstado ) => {
    

    const { nombreUs,apellidoUs,telefonoUs,sexoUs } = user;

    if (!nombreUs.trim()) {
         txtEstado("El campo nombre está vacío");
        }
    else if(!/^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/.test(nombreUs)) {
         txtEstado("El campo nombre no puede contener números");
        }

    else if(!apellidoUs.trim()) {
         txtEstado("El campo apellido está vacío");
        }
    else if(!/^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/.test(apellidoUs)) {
         txtEstado("El campo apellido no puede contener números");
        }

    else if(!telefonoUs.trim()) {
         txtEstado("El campo teléfono está vacío");
        }
    else if(!/^\d{10,10}$/.test(telefonoUs)) {
         txtEstado("El número telefónico no es válido");
        }

    else if(sexoUs === "none") {
         txtEstado("No has seleccionado un sexo");
        }

    else {
        cambiarEstado( false );
        return "ok";
    }
    
    cambiarEstado( true );
    return "bad";

}

export const actualizacionPasswordUser = ( password ) => {

    if (!password.oldPassword.trim() && !password.newPassword.trim() ) { return { resp:false , msj:"Debes completar los dos campos" } }
    else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,15}/.test(password.newPassword)) {return {resp : false , msj : 'Debes incluir minúsculas, mayúsculas, números y caracteres especiales'} }

    return {
        resp:true,
        msj:""
    };
}


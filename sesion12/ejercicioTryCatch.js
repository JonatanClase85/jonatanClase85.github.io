/*
Hacer una función que guarde en un fichero la dirección de email
y la constraseña de un usuario. Si la dirección de email no contiene @ 
lanzamos excepción; si el tamaño de la contraseña es <6, lanzamos error.
El nombre del fichero será el texto anterior a la @ de la dirección email
con la extesión user.
*/

const fs = require('node:fs');

class EmailCorrectoError {
    constructor(message){
        this.message=message;
    }
}

class TamañoPaswordError {
    constructor(message){
        this.message=message;
    }
}

function guardarCredenciales(email, contraseña) {
    const TAMAÑO_MINIMO = 6;
    if ( !email.includes('@')) {
        throw new EmailCorrectoError("El email tiene que contener Email");
    } 
    if( contraseña.length < TAMAÑO_MINIMO) {
        throw new TamañoPaswordError("El passwor no puede ser mayor de seis caracteres")
    }
    try {
        let nombreArchivo = email.substring(0,email.indexOf('@'));
        fs.writeFileSync(nombreArchivo, email+";"+contraseña);
    } catch (e) {
        console.error('Ha ocurrido un eror al tratar de escribir en un fichero ' + e.message);
        throw e;
    }
}

try {
    guardarCredenciales('jonatan@gmail.com', 'jhsadjknjs');
    console.log('El proceso ha terminado correctamente');
} catch (e) {
    if ( e instanceof EmailCorrectoError ) {
        console.error('Email Incorrecto');
    } else if ( e instanceof TamañoPaswordError ) {
        console.error('Tamaño minimo de passwor insuficiente');
    } else {
        console.error(e.message);
    }
} 
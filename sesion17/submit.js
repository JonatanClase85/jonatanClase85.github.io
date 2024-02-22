let url = 'http://127.0.0.1:5500/sesion17/password.json'
let resultado;
let passwordProhibidas = passwordsUsadas(url);
validacion();
mostraError();



async function passwordsUsadas(url) {
    try{
        const respuesta = await fetch(`${url}`);
        resultado = await respuesta.json();
        return resultado
    } catch (error) {
        console.error(error);
    }
}

function validacion() {
    document.querySelector('#botonEnviar').onclick = (e ) => {
        e.preventDefault();
        let contraseñaUsuario = document.querySelector('#contraseña').value;
        if(resultado.some(pwd => pwd === contraseñaUsuario)) {
            console.log('Password prohibidas');
            mostraError('Todo Mal')
        } else {
            console.warn('Password correcta');
            mostraError('Todo ok')
        }
        
        if(resultado.includes(contraseñaUsuario)) {
            console.log('Password prohibidas');
            mostraError('Todo Mal')
        } else {
            console.warn('Password correcta');
            mostraError('Todo ok')
        }
        validarFormulario();
    }
    
}

function mostraError(mensaje) {
    errorSpan = document.querySelector('#error').innerHTML = mensaje
}

function validarFormulario() {
    let formulario = document.forms[0];
    if(formulario.checkValidity()) {
        console.warn('Todo ok Jose Luis');
    } else {
        console.warn('Todo mal Jose Luis');
        var elementosFormularios = document.forms[0].elements;
        for(let elementoFormularios of elementosFormularios) {
            if(!elementoFormularios.checkValidity()) {
                console.error(elementoFormularios.validationMessage);
            }
        }
    }
}




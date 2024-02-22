const { warn } = require("console");

class DefinitivoTerribleError{
    constructor(email, password) {
        this.email = email;
        this.password = password;
        this.time = new Date().getTime();
    }
    ejecutarAccion() {
        console.warn('Despedir RRHH: ' + this.email);
    }
}

function accesoAlSistemaCriticoYMasSeguroDeLaEmpresa(email, password) {
    if (email === 'jefazo@gmail.com' && password === 'patata') {
        console.log('palante');
    } else {
        throw new DefinitivoTerribleError(email, password);
    }
}

try {
    accesoAlSistemaCriticoYMasSeguroDeLaEmpresa('becario@gamil.com', 'snusjs')
} catch (e) {
    if ( e instanceof DefinitivoTerribleError) {
        e.ejecutarAccion()
    } else {
        console.error('Ha ocurrido algo');
    }
}
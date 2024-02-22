let mascota1 = {
    nombre: 'Tobi',
    forma: 'Esferica',
    especie: 'Naranja'
}

console.log(mascota1);
mascota1.peso = 15;
console.log(mascota1);

// El Operador in no indica si un atributo est en un objeto
if( 'edad' in mascota1) {
    console.log(mascota1.edad);
} else {
    console.log( 'El atributo edad no esta definido'    );
}

// OPERAROR delete -- Elimina un atributo de un objeto
delete mascota1.peso;
console.log( 'peso' in mascota1 ? mascota1.peso : 'No tiene peso');
console.log(mascota1);

function funcionar() {
    let nombre = window.prompt('Dime tu npmbre');
    console.log(`te llamas ${nombre}`);
}

let total = 0

function sumar() {
    total ++;
    document.getElementById('resultado').innerHTML = total;
    console.log(total);
}

// Metodos importantes de string
// endWidth - Determina si 
// includes - determina si contiene una cadena
// length - Te da la longitud de una cadena
// split - Parte tokens en cadena
// stardWidth - determina si empieza o no por una cadena
// trim - Quita los espacios de los extremos 
// toLowerCase - Convierte a Mayusculas
// toUpperCase - Convierte a Minusculas

const TamañoMinimo = 5

function carga() {
    let email = window.prompt('Dime tu direccion')
    email = email.trim();
    console.info('Soy un info');
    console.error('Soy un error');
    console.warn('Soy un warning');
    console.log(`Has introducido ${email}`);

    if (email.length < TamañoMinimo) {
        console.log('Tamaño insuficiente');
    } else if (email.includes('remo')) {
        console.log('No puede contener remo');
    } else if (email.toLocaleLowerCase().startsWith('a')) {
        console.log('No puede empezar por la letra A');
    } else if (email.toLocaleLowerCase().endsWith('txt')) {
        console.log('No puede ser una cadena txt');
    } else {
        console.warn('Tamaño Suficiente');
    }
    
}

// Expresiones regulares para hacer pruebas regex101.com
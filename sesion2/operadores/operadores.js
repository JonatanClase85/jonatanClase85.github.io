// Operadores aritmeticos: +, -, *, /
// Potencia elevado a **
console.log(3**3); //27

// Ejercicios dos funciones muestra un texto (calculando) y la otra muestra el texto (Reduciendo)
// La primera variable devuelve un 5, la segunda funcion devuelve un 3
// La variable resultado tomara el valor de la funcion calculando si el numero de la variable dato es > 10
// La variable resultado tomara el valor de la funcion reduciendo si el numero de la variable dato es <= 10
// Utilizar expresiones ternarias

let dato = 15;

function calculando() {
    console.log('...Calculando');
    return 5;
}

function reduciendo() {
    console.log('Reduciendo...');
    return 3;
}

let resultado1 = ( dato > 10) ? calculando() : reduciendo();
let resultado2 = ( dato <= 10) ? calculando() : reduciendo(); 



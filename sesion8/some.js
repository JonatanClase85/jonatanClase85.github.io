let numeros = [1, 2, 8, 9, 11];
let letras = ['a', 'b', 'c'];

// Some
console.log(numeros.some((n) => {
    return (n%2)==0; // El numero es par
}));

// Concat
let todoJunto = numeros.concat(letras);
console.log(todoJunto);

// Includes -> Indica si existe o no un elemento en un array
console.log(numeros.includes(8));

// Join -> Genera una cadena con todos los elementos
console.log(numeros.join());
console.log(numeros.join('-'));

let fichero = 'selfie.jpg';

let posicionPunto1 = fichero.lastIndexOf('.');
console.log(fichero.slice(posicionPunto1+1,));


let mascotas = ['perrito.jpg', 'gatito.mp3', 'galapago.docx', 'gallo.jpg'];

// Obtener una lista con los nombres de las mascotas que tienen la extension jpg
// La nueva lista no debe tener la extension, solo los nombre
// Los nombres deben de estar en mayusculas
// Utilizar slice, filter, map.
let posicionPunto = mascotas.lastIndexOf('.');

let filtarJpg = mascotas.filter(mascota =>{
    return mascota.endsWith('.jpg'); 
})

let sinExtension = filtarJpg.map(mascota => {
    return mascota.slice( 0 ,mascota.lastIndexOf('.')).toUpperCase();
})


console.log(sinExtension);


// flat()
let datos = [3, 'hola', true, ()=>{console.log('Soy una funcion');}, [3, 8]];
// El metodo flat aplanada de el arry
datos = datos.flat()
console.log(datos);

// splice()
datos = datos.splice(1,0,'insertado'); // Inserta en la posicion 1 por que el primer dato es para insertar y el segundo es para eliminar
console.log(datos);


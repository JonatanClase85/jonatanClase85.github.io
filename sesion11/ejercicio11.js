// Crea una funcion
// Recibe como argumento un objeto Pelicula(con 3 atributos)
// Recibe como argumento nombre de fichero(por defecto es 'pelicula.txt)
// Escribrir en el fichero los datos de la Pelicula

const fs = require('node:fs');

function guardarPelicula(pelicula , fichero = 'fichero.txt') {
    // const contenido = `Titulo: ${pelicula.titulo} Año: ${pelicula.año} Genero: ${pelicula.genero}`
    const contenido = JSON.stringify(pelicula);
    fs.writeFile(`./${fichero}`, contenido, err=> {
        if (err) {
            console.error(err);
        } else {
            console.log('OK');
        }
    })
}

let peliculaObjeto = {
    titulo: 'titanic',
    año: 1999,
    genero: 'r',
}

guardarPelicula(peliculaObjeto);

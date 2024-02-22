/*
    Crea un array con 5 objetos Pelicula que tienen los atributos:
        - Titulo
        - Numero de temporadas
        - Plataforma

    Con map vamos a construir un nuevo array con los mismos objetos
    pero añadiendo el atributo 'en-emision' que trenda el valor true
    convirtiendo el titulo a mayusculas.
    
    Con el filter obtenemos la lista series que proyectan en Netflix y tienen mas de 1 temporada

    Mostrar los datos de la lista con un foreach
*/

let peliculas = [
    {
        titulo: 'Farmacia de Guardia',
        NumeroDeTemporadas: 3,
        Plataforma: 'Netflix'
    },
    {
        titulo: 'Juego de tronos',
        NumeroDeTemporadas: 6,
        Plataforma: 'HBO'
    },
    {
        titulo: 'True Detective',
        NumeroDeTemporadas: 3,
        Plataforma: 'HBO'
    },
    {
        titulo: 'Top Gear',
        NumeroDeTemporadas: 4,
        Plataforma: 'Amazon'
    },
    {
        titulo: 'El Principe De BellAir',
        NumeroDeTemporadas: 9,
        Plataforma: 'Netflix'
    },
]

// let peliculasEmision = peliculas.map(pelicula => {
    //     pelicula.enEmision= true
    //     return pelicula;
    
 // });
    
// let listaNetflix2 = peliculasEmision.filter(pelicula => {
    //     pelicula.Plataforma.includes('Netflix');
    //     pelicula.NumeroDeTemporadas > 1;
    //     return peliculas
// })
        
// let mostrarPeliculas2 = listaNetflix2.forEach(pelicula => {
    //     console.log(pelicula);
// });
            
let peliculasEmision2 = peliculas.map(pelicula => {
    pelicula.titulo = pelicula.titulo.toUpperCase()
    peliculaCopia = {
        ...pelicula,
        peliculaPEmision: true
    }

    return peliculaCopia;
    
});

let listaNetflix = peliculas.filter(pelicula => {
    pelicula.Plataforma.includes('Netflix');
    pelicula.NumeroDeTemporadas > 1;
    return peliculas
})

let mostrarPeliculas = peliculas.forEach(pelicula => {
    console.log(pelicula);
});




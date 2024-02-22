class Pelicula {
    titulo:string;
    numerosTemporadas:number;
    // Constructo con argumentos con valor por defecto
    constructor(_titulo:string , _numeroTemporadas:number) {
        this.titulo = _titulo;
        this.numerosTemporadas = _numeroTemporadas;

    }
}

let pelicula:Pelicula = new Pelicula('Bataman', 1);

class Serie {
    titulo:string;
    numeroTemporadas:number;
    // Constructor con argumento opcional
    constructor(titulo:string, _numeroTemporadas?:number) {
        this.titulo = titulo;
        this.numeroTemporadas = _numeroTemporadas;
    }
}

let serie1:Serie = new Serie('El principe De BelAir', 3);
let serie2:Serie = new Serie('El principe De BelAir');
class Pelicula {
    titulo:string;
    director:string;
    // podemos encapsular atributos para que no sean publicos y sean privados
    private presupuesto:number;
    constructor(titulo:string, director:string, presupuesto:number) {
        this.titulo = titulo;
        this.director = director;
        this.presupuesto  = presupuesto;
    }
    // Si tenemos atributos y metodos privados podemos hacer un get
    get _presupuesto():number {
        return this.presupuesto
    }

    set _presupuesto(nuevoPrsesupuesto:number) {
        this.presupuesto = nuevoPrsesupuesto;
    }
}

let movie1:Pelicula = new Pelicula('Titanic', 'Rodolfo', 9999);
console.log(movie1.titulo);
// No podemos acceder ya que el atrubuto es privado
console.log(movie1._presupuesto);



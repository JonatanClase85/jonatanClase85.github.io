// Crear un ts con la clase alumno.
// constructor
// -nombre
// -email
// -telefono
// -direccion Postal (es una interface con calle, numero y localidad)
// -fechaNacimiento(privado)
// get y set de la fecha de nacimiento que provoque una exception si es menor de edad

// Metodos:
// -calcularCoeficiente. Recibe un numero y devuelve un numero. metodo Publico
// -obtendion de eficiencia . no recibe ningun argumento y recibe un string. metodo privado

interface DireccionPostal {
    calle: string;
    numero: number;
    localidad: string;
}

class Alumno {
    static readonly NUM_MS_18_AÑOS = 18*365*24*60*60*1000;
    nombre:string;
    email:string;
    telefono: number;
    direccionPostas: DireccionPostal;
    private fechaNacimiento: Date;

    constructor(nombre:string, email:string, telefono:number, fechaNacimiento:Date, direccionPostal:DireccionPostal) {
        this.nombre = nombre;
        this.email = email;
        this.telefono = telefono;
        this.fechaNacimiento = fechaNacimiento;
        this.direccionPostas = direccionPostal;
    }
    
    get _fechaNacimiento():Date {
        if(this.isMenorEdad()) {
            throw new Error('Es menor de edad');
        }
        return this.fechaNacimiento;
    }
    
    set fechaDeNacimiento(fechaNacimiento:Date) {
        this.fechaNacimiento = fechaNacimiento
        
    }

    public calculaCoeficiente(valor:number):number {
        return valor * 2;
    }

    private obtecionEficiencia(): string {
        return 'eficiencia'
    }
    private isMenorEdad():boolean {
        let ahora = new Date().getTime();
        let nacimientoMS = this.fechaNacimiento.getTime();
        return ahora-nacimientoMS<Alumno.NUM_MS_18_AÑOS;
    }
}


const direccionPostal:DireccionPostal = {calle:'La Rea', numero: 7, localidad: 'Madrid'};
let manuel:Alumno = new Alumno('Manuel', 'j@hshshs', 6353536373 ,new Date(1990, 10, 22), direccionPostal  )
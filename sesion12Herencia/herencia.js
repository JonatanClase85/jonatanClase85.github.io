class Enemigo {
    constructor(nombre, salud, fortaleza, x, y) {
        this.nombre = nombre;
        this.saluda = salud;
        this.fortaleza = fortaleza
        this.vivo = this.vivo
        this.x = x
        this.y = y
    }

    atacar() {
        console.log(`Soy ${this.nombre} y estoy atacando`);
    }

    recibirDanyo(cantidad) {
        this.salud = this.salud - cantidad;
        if (this.salud <= 0) {
            this.morir();
        }
    }

    morir() {
        console.log((`Soy ${this.morir} y acabo de morir`));
        console.log((`Soy ${this.morir} desaparezco y suena una explosion`));
        this.vivo = false;
    }
}

class EnemigoMovil extends Enemigo {
    desplazar(deltaX, deltaY) {
        console.log(`Soy ${this.nombre} y me estoy desplanzado`);
        this.x+=deltaX;
        this.y+=deltaY;
    }

    morir() {
        console.log((`Soy ${this.morir} murió dando por culo `));
        // this.vivo = false;
        super.morir();// Ejecuta la version de la clase padre del metodo
    }
}

let pinguino = new Enemigo('Pinguino', 50, 10, 10);
let wario = new EnemigoMovil('Wario', 100, 10, 10);
wario.atacar();
pinguino.atacar();
wario.desplazar(1, -1)

console.log(pinguino instanceof Enemigo);// True
console.log(pinguino instanceof EnemigoMovil);// False
console.log(wario instanceof Enemigo);// True
console.log(wario instanceof EnemigoMovil);// True

pinguino.recibirDanyo(150);
wario.recibirDanyo(150);

pinguino.morir();
wario.morir();
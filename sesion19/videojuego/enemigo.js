class Enemigo {
    constructor(nombre, img, x, y, ancho, alto, velocidad, ctx) {
        if(arguments.length != 8) {
            throw new Error('Hay un error en la construccion de la clase Enemigo');
        }
        this.nombre = nombre;
        this.img = document.getElementById('messi');
        this.x = x;
        this.y = y;
        this.ancho = ancho;
        this.alto = alto;
        this.velocidad = velocidad;
        this.ctx = ctx;
    }

    mover() {
        console.log("Moviendo..." + this.nombre);
        this.x = this.x + this.velocidad;
        console.log(this.x = this.x + this.velocidad);
        console.log(this.y);
        if (this.x>550){
            this.velocidad=this.velocidad*-1;
            this.y = 200;
        } 
        if (this.x<-20) {
            this.velocidad=this.velocidad+1;
            this.y = 300;
        }

    }

    disparar() {

    }

    dibujar() {
        this.ctx.drawImage(this.img, this.x, this.y, this.ancho, this.alto);
    }
}
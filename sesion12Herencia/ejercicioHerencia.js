/*
    Clase: FiguraGeometrica (atributo nombre)
    Clse derivada o hijas siguientes:
        - cuadrdado
        - Triángulo
        - Rectángulo
        - Círculo
    
    - Metodos:
    -- Calcular el area
*/

class FiguraGeometrica {
    constructor(nombre) {
        this.nombre = nombre
    }
}

class AreaFiguraGeometrica extends FiguraGeometrica {
    cuadrado(lado1, lado2) {
        this.lado1 = lado1
        this.lado1 = lado2
        let area = lado1 * lado2
        console.log(`El area del ${this.nombre} es ${area}`);
    }
    triangulo(base, altura) {
        console.log(`El area del ${this.nombre} es ${(base * altura)/2}`);
        this.base = base
        this.altura = altura
    }
    rectangulo(longitud, anchura) {
        console.log(`El area del ${this.nombre} es ${longitud * anchura}`);
        this.longitud = longitud
        this.anchura = anchura
    }
    circulo( radio) {
        this.radio = radio
        let pi = 3.14;
        let radioCuadrado = cuadrado ** 2;
        let area = pi *radioCuadrado;
        console.log(`El area del ${this.nombre} es ${area}`);
    }

}

class Cuadrado extends FiguraGeometrica {
    constructor(nombre, lado1, lado2) {
        super(nombre)
        this.lado1 = lado1
        this.lado2 = lado2    
    }
    calcularArea() {
        let area = this.lado1 * this.lado2;
        return area;
    }
}

class Triangulo extends FiguraGeometrica {
    constructor(nombre, base, altura) {
        super(nombre)
        this.base = base
        this.altura = altura
    }
    calcularArea() {
        let area = (this.base * this.altura)/2;
        return area;
    }
}

class Rectángulo extends FiguraGeometrica {
    constructor(nombre, longitud, anchura) {
        super(nombre)
        this.longitud = longitud
        this.anchura = anchura
    }
    calcularArea() {
        let area = this.longitud * this.anchura;
        return area;
    }
}

class Circulo extends FiguraGeometrica {
    constructor(nombre, radio) {
        super(nombre)
        this.radio = radio
    }
    calcularArea() {
        let pi = 3.14;
        let radioCuadrado = this.radio ** 2;
        let area = pi *radioCuadrado;
        console.log(`El area del ${this.nombre} es ${area}`);
    }
}

let cuadrado = new AreaFiguraGeometrica('Cuadrado');
cuadrado.cuadrado(10, 10);


let circulo = new Circulo('ciruculo', 19, 33);
circulo.calcularArea();
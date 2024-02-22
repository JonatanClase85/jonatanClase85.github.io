// Se admite el uso de las clases abstractas
abstract class Calculadora {
    abstract sumar(s1:any, s2:any):any;
}

class CalculadoraDecimal extends Calculadora {
    sumar(s1: number, s2: number) {
        console.log('Suma decimal');
    }
}

class CalculadoraHexadecimal extends Calculadora {
    sumar(s1: any, s2: any) {
        console.log('Suma hexadecimal');
        
    }
}

function calculo(calculadora:Calculadora) {
    calculadora.sumar(3,5);
}

let miCalculadora = new CalculadoraHexadecimal();
calculo(miCalculadora);

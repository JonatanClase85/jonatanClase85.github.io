function sumar(numeros) {
    const resultado = numeros.reduce((a,b)=>a+b);
    return resultado;
}

const sumar1 = sumar(1, 2);
console.log(sumar1);

function sumarGuay(...numeros) {
    const resultado = numeros.reduce((a,b) => a + b);
    return resultado;
}

const sumarGuay1 = sumarGuay(1, 2);
console.log(sumarGuay1);
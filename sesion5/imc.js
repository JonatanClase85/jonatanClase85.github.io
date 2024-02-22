document.querySelector('#boton').addEventListener('click', function(){
    let peso = document.querySelector('#peso').vale;
    let altura = document.querySelector('#altura').value;
    let imc = CalcularImc(peso, altura);
    document.querySelector('#calculo').innerHTML = imc;
})


function CalcularImc(peso=0, altura=0) {
    alturaCuadrado = peso / ( altura ** 2 );
    return alturaCuadrado;
}


const apagado = 0;
const medioEncendido = 5;
const encendido = 10
document.querySelector('#range').addEventListener('input', cambiarOpacity)

function cambiarOpacity(){
    let valor = document.querySelector('#range').value;
    const llama = document.querySelector('#llama');
    llama.style.opacity=valor/100;
}



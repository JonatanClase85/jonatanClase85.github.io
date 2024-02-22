document.addEventListener('DOMContentLoaded', function(){
    const tiposDeCartas = ['A', 'B', 'C', 'D', 'F', 'G', 'H'];
    const totalCartas = tiposDeCartas.length;
    const cartasDuplicadas = {...tiposDeCartas, ...tiposDeCartas};

    cartasDuplicadas.sort(() => Math.random() - 0.5);

    const contenedorJuego = document.querySelector('#juegoContenedor');

})
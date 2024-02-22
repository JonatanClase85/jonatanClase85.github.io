// Construir una pagina web desde la que se pueda agregar productos a la cesta
// y consular los productos de las cesta

let cesta = []

document.querySelector('#boton').addEventListener('click', function () {
    let item = document.querySelector('#añadir').value;
    let itemCesta = agregarCesta(item);
    
    document.querySelector('#cesta').innerHTML = '';

    cesta.map((productos) => {
        // let div = document.createElement('p');
        document.querySelector('#cesta').innerHTML += `<br> ${productos} `;
        // div.innerHTML = productos;
        // document.body.appendChild(div)
    });

} )

document.querySelector('#botonBorrar').addEventListener('click', borrarCarrito)


function agregarCesta (item) {
    let añadir = cesta.push(item)
    return añadir
}

function borrarCarrito () {
    let cestaVacia = cesta = []
    return document.querySelector('#cesta').innerHTML = cestaVacia
}

console.log(cesta);



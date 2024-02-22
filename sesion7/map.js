let productos = [
    {
        nombre: 'CocaCola',
        precio: 10,
        numeroUnidades: 12
    },
    {
        nombre: 'Chocolate',
        precio: 8,
        numeroUnidades: 18
    },
    {
        nombre: 'Jamón Pata Nregra',
        precio: 100,
        numeroUnidades: 3
    },
]

let informacion = productos.map(producto => {

    let informacion = document.querySelector('#map').innerHTML += `<br> El Producto ${producto.nombre}, cuesta ${producto.precio} $ y hay disponibles ${producto.numeroUnidades} unidades`;
    
})

document.querySelector('#agregar').addEventListener('click', function() {
    let nombre = document.querySelector('#nombre').value;
    let precio = document.querySelector('#precio').value;
    let unidades = document.querySelector('#unidades').value;

    let productos = [
        {
            nombre,
            precio,
            unidades
        }
    ]

    let porducto2 = productos.map(producto => {
        let informacion = document.querySelector('#pMap').innerHTML += `<br> El Producto ${producto.nombre}, cuesta ${producto.precio} $ y hay disponibles ${producto.unidades} unidades`;

    })

})
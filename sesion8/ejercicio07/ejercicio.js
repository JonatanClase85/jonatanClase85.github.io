api();
async function api() {
    let url = 'https://dummyjson.com/products';
    try{
        const respuesta = await fetch(`${url}`);
        const resultado = await respuesta.json();
        datosPruebas(resultado.products)
    } catch (error){
        console.log(error);
    }
}


// function esperar () {
//     try {
//         const respode = fetch(`${url}`)
//             .then(response => response.json())
//             .then(data => console.log(data));
//     } catch {

//     }

// }

// let llamar = esperar()

pedirPokemon();
async function pedirPokemon() {
    const url = "https://pokeapi.co/api/v2/pokemon?offset=0&limit=150";
    try{
      const respuesta = await fetch(url);
      const resultado = await respuesta.json();
      pokedes(resultado.results);
    } catch (error) {
      console.log(error);
    }
  }

const URL = 'https://dummyjson.com/products/1';
const xmlHttp = new XMLHttpRequest();
xmlHttp.onreadystatechange = function() {
    if(xmlHttp.readyState == 4 && xmlHttp.status == 200) {
        console.log(xmlHttp.responseText);
        mostrar(JSON.parse(xmlHttp.responseText))
    }
}
xmlHttp.open('GET', URL, false);
xmlHttp.send(null);

function mostrar (producto) {
    document.querySelector('#title').innerHTML = producto.title;
    document.querySelector('#description').innerHTML = producto.description
    document.querySelector('#stock').innerHTML = producto.price

    let imagen = document.createElement("img");
    imagen.setAttribute("src",producto.thumbnail);
    document.querySelector("#imagen").appendChild(imagen);
    // document.querySelector("#imgImagen").setAttribute("src", producto.images);

   console.log(producto.images.map(image => {
        console.log(image);
   }));

}

function datosPruebas(datos) {
    console.log(datos);
}

function pokedes(data) {
    console.log(data);
}

function mostrarloading() {
    document.querySelector('#title'),innerHTML = "<img src='./loading.gif'>"
}
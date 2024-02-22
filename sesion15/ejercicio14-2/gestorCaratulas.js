
 var juegos;
function findGame(title) {
  const url = `https://fpaniaguaangular.github.io/gamecovers/assets/gamecovers/covers_gameboy/gameboy_covers.json`;
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.onreadystatechange = function () {
    if (xmlHttp.readyState == 4) {
      if (xmlHttp.status == 200) {
        juegos = JSON.parse(xmlHttp.responseText)
        processResponde(juegos);
      } else {
        console.error("Ha ocurrido un error:" + xmlHttp.status);
        throw "Ha Ocurrido un error" + xmlHttp.status;
      }
    }
  };
  xmlHttp.open("GET", encodeURI(url), true); //encodeUri adaota la cadena url al formato de la web
  xmlHttp.send(null);
}

function processResponde(juegos){
    juegos.forEach(juego => {
        createCard(juego);
    });
}


function createCard(juego) {

        let URL_IMAGENES = 'https://fpaniaguaangular.github.io/gamecovers/assets/gamecovers/covers_gameboy/';
        let articulo = document.createElement('article');
        articulo.setAttribute('class', 'vj');
        let titulo = document.createElement('h1');
        let textoTitulo = document.createTextNode(juego.title);
        let imagen = document.createElement('img');
        imagen.src = URL_IMAGENES + juego.image

        articulo.classList.add('contenedorArticulo');
        imagen.classList.add('contenedorImg');
        
        articulo.appendChild(titulo);
        titulo.appendChild(textoTitulo);
        articulo.appendChild(imagen);
        
        document.querySelector('#main').appendChild(articulo)
        if (juego.atenudado) {
          juego.classList.add('atenuado')
        }
    
}
findGame();


document.querySelector('#botonBuscador').addEventListener('input', () => {
    document.querySelector("#main").innerHTML="";
    let buscarJuego = document.querySelector('#escrituraBuscador');
    let buscadorKey = buscarJuego.value.trim().toUpperCase();
    let juegosFiltrados = juegos.map((juego) => {
        if (juego.title.toUpperCase().includes(buscadorKey)) {
          juego.atenudado = false;
        } else {
          juego.atenudado = true;
        }
        return juego
    })
  
    processResponde(juegosFiltrados)
});



function findMovie(title){
    const apiKey = '2e5737d7';
    const URL = `http://www.omdbapi.com/?apikey=${apiKey}&t=${title}`;
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() {
        if(xmlHttp.readyState == 4 ) {
            if(xmlHttp.status == 200)
            processResponde(JSON.parse(xmlHttp.responseText))
        } else {
            console.error( 'Ha ocurrido un error:' + xmlHttp.status );
            throw 'Ha Ocurrido un error' + xmlHttp.status
        }
    }
    xmlHttp.open('GET', encodeURI(URL), true);//encodeUri adaota la cadena url al formato de la web
    xmlHttp.send(null);
}

document.querySelector('#botonBuscar').addEventListener('click', function() {
    let inputPeli = document.querySelector('#buscar');
    let buscador = inputPeli.value;
    inputPeli.value="";
    findMovie(buscador)
    
});


function processResponde(data) {
    console.log(data);
    document.querySelector('#titulo').innerHTML = data.Title;
    document.querySelector('#descripcion').innerHTML = data.Plot;
    document.querySelector('#imagen').setAttribute('src', data.Poster)
    data.Ratings.map(rating => {
        console.log(rating);
        document.querySelector('#puntuacion').innerHTML = rating.Source;
        document.querySelector('#nota').innerHTML = rating.Value;
    })
}


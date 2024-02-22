export function findMovie(title){
    const apiKey = '2e5737d7';
    const url = `http://www.omdbapi.com/?apikey=${apiKey}&t=${title}`;
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


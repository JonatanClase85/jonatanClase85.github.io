const jugador = 'ramos'
//const key = `https://transfermarkt-api.vercel.app/players/search/${jugador}?page_number=1`;
const key = 'https://transfermarkt-api.vercel.app/players/search/ramos?page_number=1';


async function api(key) {
    try {
        respuesta = await fetch(`${key}`)
        resultado = await respuesta.json();
        console.log(resultado.results);
        resultado.results.forEach(player => {
            console.log(player);
        });
    } catch(error) {
        console.error(error);
    }
}

api(key);
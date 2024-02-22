const apiKey = '2e5737d7'

export default async function api(title) {
    const url = `http://www.omdbapi.com/?apikey=${apiKey}&t=${title}`
    try{
        const respuesta = await fetch(`${url}`);
        const resultado = await respuesta.json();
        console.log();(resultado.products)
    } catch (error){
        console.log(error);
    }
}

// Crear una funcion para verificar que el email recibio como argumento es correcto
    // Es correcto si tiene una arroba @
    // Es correcto si tiene una logitud de mas de 5 caracteres.


// function verificar(email) {
//     if(email.includes('@') && email.length > 5) {
//         return true
//     } else  {
//         throw 'El email no contiene @ o tiene menos de cinco caracteres'
//     }
// }

function verificar(email) {
    if(email.includes('@') && email.length > 5) {
        return true
    } else if(!email.includes('@')) {
        throw 'El email no tiene @'
    } else if (! email.length < 5) {
        throw 'El email tiene menos de cinco caracteres'
    }
}

console.log(verificar('jonaa@'));


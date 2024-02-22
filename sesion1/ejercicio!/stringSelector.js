function liberar() {
    // Paso 1. Obtener la referencia al input
    let elInput = document.getElementById('email');
    // Paso 1. Obtener la referencia al div
    const eldiv = document.querySelector('#divTexto');
    // Paso 2. Modificar el contenido

    // Tres manera diferentes de hacer lo mismo
    // eldiv.innerHTML = elInput.value.replaceAll('a', '@').replaceAll('A', '@');
    // eldiv.innerHTML = elInput.value.split('a').join('@').split('A').join('@');
    eldiv.innerHTML = elInput.value.replaceAll(/a|A/g, '@');

}

function cambiarColor() {
    let colorDiv = document.querySelector('#divTexto')
    let inPutColor = document.querySelector('#inputColor');
    colorDiv.style.color = inPutColor.value;
}


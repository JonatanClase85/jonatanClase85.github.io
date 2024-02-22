// Definición de constantes para las posiciones del menú
const POS__MENU__ON = "0px";
const POS_MENU_OF = "-70%";

// Seleccionar el elemento del menú utilizando su id
const menu = document.querySelector('#menu');

// Agregar un evento de clic al menú
menu.onclick = function (e) {
    // Verificar si la posición actual del menú es la posición activada
    if (menu.style.left === POS__MENU__ON) {
        // Si es así, cambiar la posición a la posición desactivada
        menu.style.left = POS_MENU_OF;
    } else {
        // Si no, cambiar la posición a la posición activada
        menu.style.left = POS__MENU__ON;
    }
}

// Seleccionar todos los elementos con la clase "opcion"
let opciones = document.querySelectorAll(".opcion");

// Agregar un evento de clic a cada elemento con la clase "opcion"
opciones.forEach(opcion => {
    opcion.addEventListener("click", (e) => {
        // Obtener el valor del atributo "screen" del elemento clicado
        let pantallaId = e.target.getAttribute("screen");

        // Iterar sobre todos los elementos con la clase "pantalla"
        document.querySelectorAll(".pantalla").forEach(pantalla => {
            // Mostrar la pantalla correspondiente al elemento clicado
            if (pantalla.id == pantallaId) {
                document.querySelector(`#${pantalla.id}`).style.display = "block";
            } else {
                // Ocultar las demás pantallas
                document.querySelector(`#${pantalla.id}`).style.display = "none";
            }
        });
    });
});

// Definición de una constante que representa la clave en localStorage
const ID_APP = "guasap.id";

// Intentar recuperar el ID del almacenamiento local
var id = localStorage.getItem(ID_APP);

// Si se encuentra un ID en el almacenamiento local, se establece en el campo de identificación
if (id != null) {
    document.querySelector("#identificador").value = id;
}

// Manejo del clic en el botón de inicio de sesión
document.querySelector("#bLogin").onclick = () => {
    console.log("Guardando credenciales");

    // Guardar el ID ingresado en el campo de identificación en el almacenamiento local
    localStorage.setItem(ID_APP, document.querySelector("#identificador").value);

    // Actualizar la variable 'id' con el nuevo valor
    id = document.querySelector("#identificador").value;
}

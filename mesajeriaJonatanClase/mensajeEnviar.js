// Importación de las funciones necesarias desde Firebase
import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js'
import { getDatabase, ref, set, child, push, update, onValue } from 'https://www.gstatic.com/firebasejs/10.4.0/firebase-database.js'

// Configuración de la aplicación Firebase con la URL de la base de datos
const firebaseConfig = {
    databaseURL: "https://mesajeriajonatanclase-default-rtdb.europe-west1.firebasedatabase.app/",
};
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

// Manejo del clic en el botón "Enviar"
document.querySelector("#bEnviar").onclick = function(){
    console.log("Leyendo mensaje...");
    const texto = document.querySelector("#mensaje").value;
    document.querySelector("#mensaje").value = "";
    // Llamada a la función enviarTexto para enviar el mensaje
    enviarTexto(texto, id);
};

// Función para enviar un mensaje
function enviarTexto(texto, emisor, receptor="EVERYBODY"){
    console.log(id + ": Enviando texto: " + texto);
    // Generación de una nueva clave para el mensaje usando push
    const newKey = push(child(ref(database), 'mensajes')).key;
    const data = {};
    // Construcción de la estructura del mensaje
    data[newKey]={
        'emisor': emisor,
        'receptor': receptor,
        'mensaje': texto,
        'fecha': new Date(),
        'idEmisor': id 
    };
    // Actualización de la base de datos con el nuevo mensaje
    update(ref(database), data);
}

// Suscripción a cambios en la rama "/"
const mensajes = ref(database, '/');
onValue(mensajes, (snapshot) => {
    let divMensajes = document.querySelector("#mensajes");
    divMensajes.innerHTML="";
    // Iteración sobre los mensajes en la base de datos
    const data = snapshot.forEach(element => {
        console.log(element.val().emisor);

        const claseCSS = `emisor-${element.val().idEmisor}`;
        console.log(claseCSS);

        // Mostrar los mensajes en el elemento HTML con id "mensajes"
        divMensajes.innerHTML += `<div class='${claseCSS}'><br><strong>${element.val().emisor}</strong>: ${element.val().mensaje}</div>`;
});

});


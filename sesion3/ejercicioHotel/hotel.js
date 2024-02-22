function dobles() {
    let dobles = document.querySelectorAll(".cama-doble");
    console.log(dobles);
    for(let i = 0; dobles.length; i++) {
        dobles[i].style.color = 'red';
    }
    // let divContenido = document.querySelector("#divHabitaciones");
    // divContenido.innerHTML = dobles

}

function ofertas() {
    let ofertas = document.querySelectorAll(".oferta");
    console.log(ofertas);
    ofertas.forEach(oferta => {
        oferta.style.color = 'blue';
    })
    // let divContenido = document.querySelector("#divHabitaciones");
    // divContenido.innerHTML = ofertas
}

function todos() {
    let todos = document.querySelectorAll(".room");
    todos.forEach(todo => {
        todo.style.color = 'orange'
    })
}

let botonTodos = document.querySelector("#todos");
botonTodos.addEventListener('click', todos);

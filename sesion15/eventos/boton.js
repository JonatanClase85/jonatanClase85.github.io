

// El body esta cargado
document.querySelector('body').onload = ()=> {
    console.log('El body esta cargado');
}

document.querySelector('#boton1').onclick = ()=>{
    console.log('Accion 1');
}
// document.querySelector('#boton1').onclick = ()=>{
//     console.log('Accion 2 de uno');
// }

// document.querySelector('#boton2').addEventListener('click', ()=> {
//     console.log('Accion 1 de 2');
// })

// document.querySelector('#boton2').addEventListener('click', ()=> {
//     console.log('Accion 2 de 2');
// })

// document.querySelector('html').onwheel = (e)=>{
//     console.log('Rueda del raton');
//     console.log(e.deltaY);
//     console.log(e.target.id);
// }

// const imagenes = document.querySelectorAll("img");
// imagenes.forEach(imagen => {
//     imagen.onwheel = (e) => {
//         let ancho = e.target.width;
//         ancho+=e.deltaY;
//         e.target.width = ancho;
//     }
// });
   
// const imagenes = document.querySelectorAll("img");

// imagenes.forEach(imagen => {
//     imagen.onwheel = (e) => {
//         let ancho = e.target.width + e.deltaY;
        
//         // Limitar el tamaño mínimo y máximo
//         ancho = Math.max(50, Math.min(ancho, 500));
        
//         e.target.width = ancho;
//     };
// });

const imagenes = document.querySelectorAll("img");

imagenes.forEach(imagen => {
    let escala = 1;

    imagen.onwheel = (e) => {
        escala += e.deltaY * 0.01;

        // Limitar la escala mínima y máxima
        escala = Math.max(0.5, Math.min(escala, 2));

        imagen.style.transform = `scale(${escala})`;
    };
});

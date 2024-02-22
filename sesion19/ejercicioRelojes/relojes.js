setInterval(() => {
    horaPaises()
}, 1000);




function horaPaises() {
    let fecha = new Date();
    
    let mA = {timeZone: "Europa/Madrid"};
    let nY = {timeZone: "America/New_York"};
    let tY = {timeZone: "Asia/Tokyo"};
    let madrid = document.querySelector('#horaMadrid');
    let newYork = document.querySelector('#horaNewYork');
    let tokyo = document.querySelector('#horaTokyo');
    // let hora = fecha.getHours();
    // let minuto = fecha.getMinutes();
    // let segundo = fecha.getSeconds();
    madrid.innerHTML = fecha.toLocaleTimeString(mA)
    newYork.innerHTML = fecha.toLocaleTimeString("es", nY)
    tokyo.innerHTML = fecha.toLocaleTimeString("es", tY)
    
}

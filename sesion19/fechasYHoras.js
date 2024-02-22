let hoy = new Date();
let shoy = Date();
console.log(typeof hoy);
console.log(typeof shoy);
console.log(hoy);
console.log(shoy);

console.log(
    hoy.getDate()
);

console.log(
    hoy.getTimezoneOffset()
);

console.log(
    hoy.getHours()
);
console.log(
    hoy.getUTCHours()
);

const options = {timeZone: "Eruope/Madrid"};
console.log(hoy.toLocaleString("es", options));


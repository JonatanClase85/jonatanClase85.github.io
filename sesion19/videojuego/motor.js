const imagen =
  "https://www.freeiconspng.com/thumbs/cristiano-ronaldo-png/cristiano-ronaldo-football-pic-6.png";
// const enemigo = ''
const canvas = document.getElementById("pantalla");
const ctx = canvas.getContext("2d");

function drawScreen() {
  // FONDO NEGRO DE LA PANTALLA
  ctx.fillStyle = "#000000";
  ctx.fillRect(0, 0, 600, 800);

  // SCRORE
  ctx.fillStyle = "#FFFFFF";
  ctx.font = "48px serif";
  ctx.fillText("SCORE", 10, 58);

  // LINEA
  ctx.strokeStyle = "#00FF00";
  ctx.beginPath();
  ctx.moveTo(50, 700);
  ctx.lineTo(550, 700);
  ctx.stroke();
}

let enemigo = new Enemigo("Alien", "messi", 100, 100, 100, 100, 1, ctx);
let enemigo2 = new Enemigo("Alien", "messi", 200, 100, 100, 100, 1, ctx);


setInterval(()=>{
    drawScreen();
    enemigo.mover();
    enemigo.dibujar();
    enemigo2.mover();
    enemigo2.dibujar();
},17);




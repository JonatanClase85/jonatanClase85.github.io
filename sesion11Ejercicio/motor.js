
const superman = document.querySelector('#superman');
const DELTA = 1;
const DELTA_X = 1;
const PosXInicial = Math.random()*window.innerWidth;
const PosYInicial = window.innerHeight;
var y = PosYInicial;
var x = PosXInicial;
setInterval(() => {
    superman.style.left = (x+=DELTA_X)+"px";
    superman.style.top = (y-=DELTA)+"px";
    if((y<-200) || (x>(window.innerWidth+200))){
        y = PosYInicial;
        x = Math.random()*window.innerWidth-window.innerWidth;
        superman.style.left = x+ "px";
        superman.style.top = y+"px";
    } 
},5);

setTimeout(() => {
    
})




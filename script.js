const obj=document.getElementById("ss");
const game = document.querySelector(".game-area");
const alien1=document.getElementById("alien1")
const alien2=document.getElementById("alien2")
const alien3=document.getElementById("alien3")
let x=0;
let y=0;
let x1=0;
let y1=0;
let x2=0;
let y2=0;
let x3=0;
let y3=0;

document.addEventListener('keydown',(key)=>{
  if (key.key==='ArrowLeft'){
    x-= 20;
  }
  else if(key.key==='ArrowRight'){
    x+=20;
  }
  else if(key.key==='ArrowUp'){
    y-=20;
  }
  else if(key.key==='ArrowDown'){
    y+=20;
  }

const maxX = game.clientWidth - obj.clientWidth;
const maxY = game.clientHeight - obj.clientHeight;

x = Math.max(0, Math.min(x, maxX));
y = Math.max(0, Math.min(y, maxY));

  obj.style.left= x+"px";
  obj.style.top=y+"px";
})

setInterval(() => {
  x1+= Math.random()*10-20;
  x2+= Math.random()*10-20;
  x3+= Math.random()*10-20;
  y1+= Math.random()*10-20;
  y2+= Math.random()*10-20;
  y3+= Math.random()*10-20;
const maxX = game.clientWidth - obj.clientWidth;
const maxY = game.clientHeight - obj.clientHeight;

x1 = Math.max(0, Math.min(x1, maxX));
y1 = Math.max(0, Math.min(y1, maxY));

obj.style.left= x1+"px";
obj.style.top=y1+"px";
const maxX1 = game.clientWidth - obj.clientWidth;
const maxY1 = game.clientHeight - obj.clientHeight;

x = Math.max(0, Math.min(x2, maxX1));
y = Math.max(0, Math.min(y2, maxY1));

  obj.style.left= x2+"px";
  obj.style.top=y2+"px";
}, 100);


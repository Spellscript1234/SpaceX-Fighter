const obj=document.getElementById("ss");
const game = document.querySelector(".game-area");
let x=0;
let y=0;

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



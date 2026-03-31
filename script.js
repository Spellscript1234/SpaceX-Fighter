const obj = document.getElementById("ss");
const plan1 = document.getElementById("plan1");
const plan2 = document.getElementById("plan2");
const plan3 = document.getElementById("plan3");
const plan4 = document.getElementById("plan4");
const game = document.querySelector(".game-area");
const alien1 = document.getElementById("alien1")
const alien2 = document.getElementById("alien2")
const alien3 = document.getElementById("alien3")
const life = document.getElementById("life");
const bullet = document.getElementById("bullet")
const points = document.getElementById("point");
let x = 0;
let y = 0;
let x1 = 600;
let y1 = 300;
let x2 = 10;
let y2 = 300;
let x3 = 250;
let y3 = 30;

document.addEventListener('keydown', (key) => {
  if (key.key === 'ArrowLeft') {
    x -= 20;
  }
  else if (key.key === 'ArrowRight') {
    x += 20;
  }
  else if (key.key === 'ArrowUp') {
    y -= 20;
  }
  else if (key.key === 'ArrowDown') {
    y += 20;
  }

  else if (key.key === ' ') {
    shoot();
  }

  const maxX = game.clientWidth - obj.clientWidth;
  const maxY = game.clientHeight - obj.clientHeight;

  x = Math.max(0, Math.min(x, maxX));
  y = Math.max(0, Math.min(y, maxY));

  obj.style.left = x + "px";
  obj.style.top = y + "px";
})

const alienmove = setInterval(() => {
  x1 += Math.random() * 200 - 100;
  x2 += Math.random() * 200 - 100;
  x3 += Math.random() * 200 - 100;
  y1 += Math.random() * 200 - 100;
  y2 += Math.random() * 200 - 100;
  y3 += Math.random() * 200 - 100;
  const maxX = game.clientWidth - alien1.clientWidth;
  const maxY = game.clientHeight - alien1.clientHeight;

  x1 = Math.max(0, Math.min(x1, maxX));
  y1 = Math.max(0, Math.min(y1, maxY));

  x2 = Math.max(0, Math.min(x2, maxX));
  y2 = Math.max(0, Math.min(y2, maxY));

  x3 = Math.max(0, Math.min(x3, maxX));
  y3 = Math.max(0, Math.min(y3, maxY));

  alien1.style.left = x1 + "px";
  alien2.style.left = x2 + "px";
  alien3.style.left = x3 + "px";
  alien1.style.top = y1 + "px";
  alien2.style.top = y2 + "px";
  alien3.style.top = y3 + "px";
  transpose();
}, 100);

function transpose() {
  if ((x1 == 0) && (y1 == 0)) {
    x1 += Math.random() * 700;
    y1 += Math.random() * 700;
  }
  if ((x2 == 0) && (y2 == 0)) {
    x2 += Math.random() * 700;
    y2 += Math.random() * 700;
  }
  if ((x3 == 0) && (y3 == 0)) {
    x3 += Math.random() * 700;
    y3 += Math.random() * 700;
  }
}

function isColliding(a, b) {
  const rect1 = a.getBoundingClientRect();
  const rect2 = b.getBoundingClientRect();

  return !(
    rect1.top > rect2.bottom ||
    rect1.bottom < rect2.top ||
    rect1.right < rect2.left ||
    rect1.left > rect2.right
  );
}
let l = 3;
let canhit = true;
const checkcollision = setInterval(() => {
  if (canhit && (isColliding(obj, alien1) || isColliding(obj, alien2) || isColliding(obj, alien3) || isColliding(obj, plan1) || isColliding(obj, plan2) || isColliding(obj, plan3) || isColliding(obj, plan4))) {
    canhit = false;
    if (l > 0) {
      l--;
      life.innerText = (l)
    }
    else {
      endgame();
    }
    setTimeout(() => {
      canhit = true;
    }, 1000);
  }
}, 50);

function endgame() {
  clearInterval(alienmove);
  clearInterval(checkcollision);
  clearInterval(bulletInterval)
}

function getShipTip() {
  const rect = obj.getBoundingClientRect();
  const gameRect = game.getBoundingClientRect();

  return {
    x: rect.left - gameRect.left + rect.width / 2,
    y: rect.top - gameRect.top
  };
}

function shoot() {
  const tip = getShipTip();

  const bullet = document.createElement("img");
  bullet.src = "bul.png";
  bullet.style.position = "absolute";
  bullet.style.left = tip.x - 15 + "px";
  bullet.style.top = tip.y + "px";
  bullet.style.width = "30px";
  bullet.style.height = "20px";

  game.appendChild(bullet);

  const bulletInterval = setInterval(() => {
    let currentTop = parseInt(bullet.style.top);
    bullet.style.top = (currentTop - 10) + "px";
    if (currentTop < 0) {
      clearInterval(bulletInterval);
      bullet.remove();
      pointer();
    }
  }, 50);
}



let p = 0;
function pointer() {
  if (isColliding(bullet, alien1)) {
    p += 10;
    points.innerText = ("p");
  }
}
pointer();
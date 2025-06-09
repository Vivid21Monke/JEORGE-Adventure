var display = document.getElementById("display");
const canvas = document.getElementById("gameCanvas");
const jeorge = document.getElementById("jeorge");
const exploson = document.getElementById("explosion");
const bullet = document.getElementById("bullet");

const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

(function() {
  var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame ||
    window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
  window.requestAnimationFrame = requestAnimationFrame;
})();

window.addEventListener("keydown", onKeyDown, false);
window.addEventListener("keyup", onKeyUp, false);
window.addEventListener("mousedown", (event) => { });

function onKeyDown(event) {
  var keyCode = event.keyCode;
  switch (keyCode) {
    case 68: //d
      keyD = true;
      break;
    case 83: //s
      keyS = true;
      break;
    case 65: //a
      keyA = true;
      break;
    case 87: //w
      keyW = true;
      break;
  }
}

function onKeyUp(event) {
  var keyCode = event.keyCode;

  switch (keyCode) {
    case 68: //d
      keyD = false;
      break;
    case 83: //s
      keyS = false;
      break;
    case 65: //a
      keyA = false;
      break;
    case 87: //w
      keyW = false;
      break;
  }
}

var rotation = 0;
var droidDistance;
var tickX = 0;
var tickY = 0;
var keyW = false;
var keyA = false;
var keyS = false;
var keyD = false;

var mouseX = 0;
var mouseY = 0;

var lastClickX = -Math.Int32_MAX_VALUE;
var lastClickY = -Math.Int32_MAX_VALUE;

document.addEventListener('mousemove', function(event) {
    mouseX = event.clientX;
    mouseY = event.clientY;
    droidDistance = Math.hypot(tickX+50 - mouseX, tickY+50 - mouseY);
    rotation = Math.atan2(mouseY - (tickY + 50), mouseX - (tickX + 50));
    ctx.beginPath();
    ctx.moveTo(tickX+50, tickY+50);
    ctx.lineTo(mouseX, mouseY);
    ctx.stroke();
});

onmousedown = (event) => { 
    lastClickX = event.clientX;
    lastClickY = event.clientY;
}

function startGame() {
  setInterval(drawJoerge, 10);
  setInterval(drawBullet, 10);
}

function drawBullet() {
  ctx.drawImage(bullet, lastClickX 0, lastClickY- 50, 100, 100);
}

// function drawExplosion() {
//   ctx.drawImage(explosion, tickX+25, tickY+25, 100, 100);
// }

function drawJoerge() {
  
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.save();
    ctx.translate(tickX + 50, tickY + 50);

    ctx.rotate(rotation + Math.PI / 2);

    ctx.drawImage(jeorge, -50, -50, 100, 100);
    ctx.restore();

    if (keyD == true) {
        tickX += 2;
    }
    if (keyS == true) {
        tickY += 2;
    }
    if (keyA == true) {
        tickX -=2;
    }
    if (keyW == true) {
        tickY -=2;
    }
}

startGame();


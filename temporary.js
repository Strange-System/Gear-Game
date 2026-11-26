let selectedCard = -1;
let draggingCard = -1;

function keyPressed() {
if (key === 'n') {
  initGear();
}

if (key === 'h') {
  player.health -= 1;
}

if (key === 't') {
  player.identity = "Tough"
}

if (key === 'w') {
  player.identity = "Wrath"
}

if (key === 'r') {
  player.identity = "Reason"
}

if (key === 's') {
  player.identity = "Sorrow"
}

if (key === 'c') {
  player.identity = "Creative"
}

if (key === 'p') {
  player.identity = "Panic"
}
}









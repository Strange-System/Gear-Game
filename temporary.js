let selectedCard = -1;
let draggingCard = -1;

function keyPressed() {
if (key === 'r') {
  initGear();
}
if (key === 'g') {
 console.log("G CHECK", mouseX, mouseY);
for (let i = 0; i < cards.length; i++) {
if (mouseX > cards[i].x - cards[i].w / 2 && mouseX < cards[i].x + cards[i].w / 2 && mouseY > cards[i].y - cards[i].h / 2 && mouseY < cards[i].y + cards[i].h / 2) {
 selectedCard = i;
 draggingCard = i;
  break;
  }
 }
}
if (key === 'p') {
if (draggingCard !== -1) {
  let closestSlot = null;
  let closestDistance = Infinity;
for (let i = 0; i < gearslist.length; i++) {
for (let j = 0; j < gearslist[i].slots.length; j++) {
  let slot = gearslist[i].slots[j];
  let distance = dist(cards[draggingCard].x, cards[draggingCard].y, slot.x, slot.y);
if (distance < closestDistance) {
  closestDistance = distance;
  closestSlot = slot;
   }
 }
}
if (closestSlot !== null && closestDistance < closestSlot.w * 1.5) {
  cards[draggingCard].x = closestSlot.x;
  cards[draggingCard].y = closestSlot.y;      }
  draggingCard = -1;
  selectedCard = -1;
    }
  }
if (key === 'h') {
  player.health -= 1;
}
}



function mouseMoved() {
if (draggingCard !== -1) {
  cards[draggingCard].x = mouseX;
  cards[draggingCard].y = mouseY;
 }
}

//Kai's Code for card placement and selection
function mousePressed() {

  // card was clicked?
  for (let i = 0; i < cards.length; i++) {

    let card = cards[i];

    if (mouseX > card.x - card.w/2 &&
        mouseX < card.x + card.w/2 &&
        mouseY > card.y - card.h/2 &&
        mouseY < card.y + card.h/2) {

      selectedCard = i;
      selectSound.play();
return;
      return;
    }
  }
 
}





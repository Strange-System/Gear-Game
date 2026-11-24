function mouseMoved() {
if (player.heldcard !== false) {
  player.heldcard.x = mouseX;
  player.heldcard.y = mouseY;
 }
}

//Kai's Code for card placement and selection
function mousePressed() {

  if (player.heldcard === false) {
  // card was clicked?
  for (let i = 0; i < cards.length; i++) {
  let card = cards[i];

  if (mouseX > card.x - card.w/2 &&
      mouseX < card.x + card.w/2 &&
      mouseY > card.y - card.h/2 &&
      mouseY < card.y + card.h/2) {
    player.heldcard = card;
    selectSound.play();
    return;
  }
}
  } else {
    if (player.heldcard !== false) {
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
  player.heldcard = false;
    }
  }
 

  if (player.heldcard === false) {
for (let i = 0; i < cards.length; i++) {
if (mouseX > cards[i].x - cards[i].w / 2 && mouseX < cards[i].x + cards[i].w / 2 && mouseY > cards[i].y - cards[i].h / 2 && mouseY < cards[i].y + cards[i].h / 2) {
 selectedCard = i;
 draggingCard = i;
  break;
  }
 }
} else if (player.heldcard !== false) {
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
}

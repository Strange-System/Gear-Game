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
      mouseY < card.y + card.h/2 &&
      card.zone === "hand") {
    card.handX = card.x;
    card.handY = card.y;
    player.heldcard = card;
    selectSound.play();
    return;
  }
}
  } else {
  let closestSlot = null;
  let closestDistance = Infinity;
for (let i = 0; i < gearslist.length; i++) {
for (let j = 0; j < gearslist[i].slots.length; j++) {
  let slot = gearslist[i].slots[j];
  let distance = dist(player.heldcard.x, player.heldcard.y, slot.x, slot.y);
if (distance < closestDistance) {
  closestDistance = distance;
  closestSlot = slot;
   }
 }
}
if (closestSlot !== null && closestDistance < closestSlot.w * 1.5) {
  player.heldcard.x = closestSlot.x;
  player.heldcard.y = closestSlot.y;
  closestSlot.card = player.heldcard;
  player.heldcard.slot = closestSlot
  player.heldcard.zone = "play";
} else {
  player.heldcard.x = player.heldcard.handX;
  player.heldcard.y = player.heldcard.handY;
}
  player.heldcard = false;
    
  }

}

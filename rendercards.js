// TODO: add a hand of cards. Make it so if you click a card in your hand,
// clicking a slot moves the card into the slot and places it there.
// Make a variable in the slots in makegears.js that measures the card within.

    // How to do this ^^^
    // Priority number 1: Make a class for "card" objects.
    // Give these objects an x variable, a y variable, a w variable, and a h variable.
    // The width/height ratio for the cards is 5:7 (or I've been using 4:5.6 which works too)
    // Make sure the card's h is always the card's w*7/5. If you want, you could even
    // entirely refrain from using an h variable and just always use w*7/5.

    // Priority number 2: Give these card objects a "zone" variable.
    // This will measure where the card is. For now, it'll either be "play" or "hand"
    // but down the line it could also be "deck" or "discard" or more

    // Priority number 3: Give these cards an image variable. This will likely be
    // changed down the line with a system that creates the picture based on the
    // information of the card, but for now, use a placeholder.
    // Give the card a variable for a string of its text as well.
    // Down the line, this will be replaced by six for the six different
    // modes a card can hypothetically be in, but just one is fine for now.

    // Priority number 4: Make it so any card that has a zone value of "hand" appears
    // at the bottom of the screen. You can either make it a maximum of 10, or make it
    // potentially infinite if you wanna get fancy, like I did with the gears.

    // Priority number 5: Add a variable to the slots named something like "card"
    // that can have a card object placed inside it. This can allow a slot to determine
    // what card is within it. This will be crucial down the line.

    // Priority number 6: Make it so when you click a card, something happens visually to suggest
    // that you've selected it. Perhaps have it raise a bit, get slightly bigger,
    // and hover a bit ambiently.
    // Then, make it so if you click a slot, it goes to that slot.
    // Optional, but you could jump the gun and make it animated too, so it moves instead
    // of snapping into place instantly.
    // Make it so when you play the card, the zone switches to "play", and the card fits into the slot.

// TODO: make it so a right click on a card displays the card so you can read what it does.

    // Basically, just make it so if you right click a card, it shows a copy of it big on screen
    // so you can read it. Then make any left or right click get rid of the preview.

// TODO (HARD!!): make a deck, discard, and hand system, to measure cards no matter where they are,
// and to lay the groundwork to allow you to build a deck as you go.

    // The most important key part of this, is to create lists that contain the cards.
    // It may be best to have a list for all your cards in any place of your deck,
    // and then a series of sub-lists for cards wherever else they may be.

class Card {
  constructor(x, y, w) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.zone = "hand";
    this.title = "Card";
    this.Tough = "test";
    this.Wrath = 1;
    this.Panic = 1;
    this.Creative = 1;
    this.Sorrow = 1;
    this.Reason = 1;
    this.slot = null;
    this.handX = x;
    this.handY = y;
    this.playable = [1,1,1,1,1,1,1,1];
    this.energy = 0;
  }

  get h() {
    return this.w * 7/5;
  }
}
//Kai's code for card placement and selection
function rendercards() {
  push();
  imageMode(CENTER);

  for (let i = 0; i < cards.length; i++) {

    if (cards[i].slot !== null) {
      cards[i].x = cards[i].slot.x;
      cards[i].y = cards[i].slot.y;
      cards[i].w = cards[i].slot.w;
    }

    if (cards[i].zone === "play") {

      let cardY = cards[i].y;

    
      if (selectedCard === i) {
        cardY -= 3 * Hper;
      }

      textSize(cards[i].w * 0.15);
      drawcard(i);

      fill(0);
      noStroke();
      textAlign(CENTER, CENTER);
      textSize(cards[i].w * 0.15);
      bettertext(cards[i].title, cards[i].x, cardY-(cards[i].h * 0.4));
    }
  }
  // two separate for loops so that hand is rendered after play
  for (let i = 0; i < cards.length; i++) {

    if (cards[i].slot !== null) {
      cards[i].x = cards[i].slot.x;
      cards[i].y = cards[i].slot.y;
      cards[i].w = cards[i].slot.w;
    }

    if (cards[i].zone === "hand") {

      let cardY = cards[i].y;

    
      if (selectedCard === i) {
        cardY -= 3 * Hper;
      }
      
      textSize(cards[i].w * 0.15);
      drawcard(i);

      fill(0);
      noStroke();
      textAlign(CENTER, CENTER);
      textSize(cards[i].w * 0.15);
      bettertext(cards[i].title, cards[i].x, cardY-(cards[i].h * 0.4));
    }
  }

  for (let i = 0; i < cards.length; i++) {
    if (cards[i].zone === "hand" || cards[i].zone === "play") {

    }
  }

  pop();
}

function drawcard(i) {

  let w = cards[i].w;
  let h = cards[i].h;
  let top = -h*2/5 + h*5/72 + w/24;
  let bottom = h*11/24 - w/24;
  let cellW = w*5/12;
  let cellH = (bottom - top + .1)/3;

  strokeWeight(cards[i].w/12)

  rectMode(CENTER);
  textAlign(CENTER, CENTER);

  if (cards[i].Tough !== null) {
    push();
    strokeWeight(cards[i].w/22)
    stroke('#646668');
    fill('#cccccc');
    rect(cards[i].x - cellW/2, cards[i].y + top + cellH/2, cellW - w/24, cellH - w/24)
    noStroke();
    fill('#000000');
    bettertext(String(cards[i].Tough), cards[i].x - cellW/2.1, cards[i].y + top + cellH/2, (cellW - w/24 - cards[i].w/10), (cellH - w/24 - cards[i].h/10), true)
    pop();
  }
  
  if (cards[i].Wrath !== null) {
    push();
    strokeWeight(cards[i].w/22)
    stroke('#f90200');
    fill('#ea9998');
    rect(cards[i].x + cellW/2, cards[i].y + top + cellH/2, cellW - w/24, cellH - w/24)
    noStroke();
    fill('#000000');
    bettertext(String(cards[i].Wrath), cards[i].x + cellW/1.9, cards[i].y + top + cellH/2, (cellW - w/24 - cards[i].w/10), (cellH - w/24 - cards[i].h/10), true)
    pop();
  }

  if (cards[i].Reason !== null) {
    push();
    strokeWeight(cards[i].w/22)
    stroke('#9641ff');
    fill('#b4a7d8');
    rect(cards[i].x - cellW/2, cards[i].y + top + cellH*3/2, cellW - w/24, cellH - w/24)
    noStroke();
    fill('#000000');
    bettertext(String(cards[i].Reason), cards[i].x - cellW/2.1, cards[i].y + top + cellH*3/2, (cellW - w/24 - cards[i].w/10), (cellH - w/24 - cards[i].h/10), true)
    pop();
  }

  if (cards[i].Creative !== null) {
    push();
    strokeWeight(cards[i].w/22)
    stroke('#6ba751');
    fill('#b5d7a7');
    rect(cards[i].x + cellW/2, cards[i].y + top + cellH*3/2, cellW - w/24, cellH - w/24)
    noStroke();
    fill('#000000');
    bettertext(String(cards[i].Creative), cards[i].x + cellW/1.9, cards[i].y + top + cellH*3/2, (cellW - w/24 - cards[i].w/10), (cellH - w/24 - cards[i].h/10), true)
    pop();
  }

  if (cards[i].Panic !== null) {
    push();
    strokeWeight(cards[i].w/22)
    stroke('#f1c331');
    fill('#ffe699');
    rect(cards[i].x - cellW/2, cards[i].y + top + cellH*5/2, cellW - w/24, cellH - w/24)
    noStroke();
    fill('#000000');
    bettertext(String(cards[i].Panic), cards[i].x - cellW/2.1, cards[i].y + top + cellH*5/2, (cellW - w/24 - cards[i].w/10), (cellH - w/24 - cards[i].h/10), true)
    pop();
  }

  if (cards[i].Sorrow !== null) {
    push();
    strokeWeight(cards[i].w/22)
    stroke('#3d77da');
    fill('#a5c2f5');
    rect(cards[i].x + cellW/2, cards[i].y + top + cellH*5/2, cellW - w/24, cellH - w/24)
    noStroke();
    fill('#000000');
    bettertext(String(cards[i].Sorrow), cards[i].x + cellW/1.9, cards[i].y + top + cellH*5/2, (cellW - w/24 - cards[i].w/10), (cellH - w/24 - cards[i].h/10), true)
    pop();
  }


  push();
  // energy cost display code goes here
  pop();


  push();
  stroke(255); 
  
  noFill(); 
  rect(cards[i].x, cards[i].y, cards[i].w*11/12, cards[i].h*11/12, cards[i].w/12)
  pop();

  push();
  stroke(255);
  fill(255);
  rect(cards[i].x, cards[i].y-(cards[i].h*2/5), cards[i].w*11/12, cards[i].h*5/36, cards[i].w/12)
  pop();

  push();
  strokeWeight(cards[i].w/50)
  stroke('#646668');
  if (cards[i].playable[0] == false) {
    fill('#c4c4c4');
  } else {
    fill('#f6040a');
  }
  translate(cards[i].x, cards[i].y);
  triangle(cards[i].w*10/24, 0, cards[i].w*13/24, cards[i].h*1/15, cards[i].w*13/24, -cards[i].h*1/15)

  if (cards[i].playable[1] == false) {
    fill('#c4c4c4');
  } else {
    fill('#f6040a');
  }
  push();
  translate(cards[i].w*11/23, cards[i].h*7/15);
  const xof = cards[i].w*12/23
  const yof = cards[i].h*7/15
  rotate(45);
  triangle(cards[i].w*10/24-xof, cards[i].h*7/15-yof, cards[i].w*13/24-xof, cards[i].h*8/15-yof, cards[i].w*13/24-xof, cards[i].h*6/15-yof)
  pop();

  if (cards[i].playable[2] == false) {
    fill('#c4c4c4');
  } else {
    fill('#f6040a');
  }
  triangle(0, cards[i].h*10.5/24, cards[i].w*1/12, cards[i].h*13/24, -cards[i].w*1/12, cards[i].h*13/24)

  if (cards[i].playable[3] == false) {
    fill('#c4c4c4');
  } else {
    fill('#f6040a');
  }
  push();
  scale(-1, 1);
  translate(cards[i].w*11/23, cards[i].h*7/15);
  rotate(45);
  triangle(cards[i].w*10/24-xof, cards[i].h*7/15-yof, cards[i].w*13/24-xof, cards[i].h*8/15-yof, cards[i].w*13/24-xof, cards[i].h*6/15-yof)
  pop();


  rotate(180);

  if (cards[i].playable[4] == false) {
    fill('#c4c4c4');
  } else {
    fill('#f6040a');
  }
  triangle(cards[i].w*10/24, 0, cards[i].w*13/24, cards[i].h*1/15, cards[i].w*13/24, -cards[i].h*1/15)

  if (cards[i].playable[5] == false) {
    fill('#c4c4c4');
  } else {
    fill('#f6040a');
  }
  push();
  translate(cards[i].w*11/23, cards[i].h*7/15);
  rotate(45);
  triangle(cards[i].w*10/24-xof, cards[i].h*7/15-yof, cards[i].w*13/24-xof, cards[i].h*8/15-yof, cards[i].w*13/24-xof, cards[i].h*6/15-yof)
  pop();

  if (cards[i].playable[6] == false) {
    fill('#c4c4c4');
  } else {
    fill('#f6040a');
  }
  triangle(0, cards[i].h*10.5/24, cards[i].w*1/12, cards[i].h*13/24, -cards[i].w*1/12, cards[i].h*13/24)

  if (cards[i].playable[7] == false) {
    fill('#c4c4c4');
  } else {
    fill('#f6040a');
  }
  push();
  scale(-1, 1);
  translate(cards[i].w*11/23, cards[i].h*7/15);
  rotate(45);
  triangle(cards[i].w*10/24-xof, cards[i].h*7/15-yof, cards[i].w*13/24-xof, cards[i].h*8/15-yof, cards[i].w*13/24-xof, cards[i].h*6/15-yof)
  pop();

  translate();
  pop();
}
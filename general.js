function draw() {
  drawBG()
  if (!gearslist[0].file) {return}
  // If the gear image hasn't loaded yet everything explodes :( so this line fixes that
  positionGear();
  for (let i = 0; i < gearslist.length; i++) {
  gearslist[i].personalfc++
  // this is something I would hope to put in temporary.js, but 
  // it's built-in so I can't.
  // mouseIsPressed is going to be replaced with the "end of turn" condition
  // that will be added later.
  if (mouseIsPressed && gearslist[i].position % 1 === 0) {
    // This is a messy system to rotate the gear in the mechanical looking way you see. vvv
    gearslist[i].position += (1 / 105)
    gearslist[i].rotanimcount = 0
  }
    // Basically, if it's not snapped into one of the 8 main positions,
    // and is somewhere in between, that means keep rotating.
    // rotanimcount is to make sure it rotates exponentially for the correct number of frames.
    // tbh this system is a mess, but if it works it works
  if (gearslist[i].position % 1 !== 0) {
      gearslist[i].position += gearslist[i].rotanimcount / 105
    if (gearslist[i].rotanimcount === 10) {
      gearsMakeSound();
    }
      if (gearslist[i].rotanimcount === 14) {
        gearslist[i].position += 0.1
        gearslist[i].position = floor(gearslist[i].position);
        gearslist[i].rotanimcount = 0
      }
    gearslist[i].rotanimcount++
    }
    // This stuff here is for passive movement vvv
    push();
    translate(gearslist[i].progx, gearslist[i].progy + (Hper * 0.5 * (sin((frameCount * 1.5)+(i*72)))));
    push ();
    rotate((gearslist[i].position * 45) + sin((frameCount/2.1 + 90)+(i*72)));
    // Then this next line vvv places the image with those pieces.
  image(gearslist[i].file, 0, 0, gearslist[i].progdia, gearslist[i].progdia);
  pop ();
    push();
    noStroke();
    fill(0);
    circle(0, 0, gearslist[i].progdia/3);
    stroke(255);
    noFill();
    strokeWeight(gearslist[i].progdia/100);
    line(0, -gearslist[i].progdia/6, 0, gearslist[i].progdia/6);
    line(0, 0, -gearslist[i].progdia/6, 0);
    pop();
  pop();
    // This makes the gear slots put in the right place while being unrotated vvv
  for (let j = 0; j < gearslist[i].slots.length; j++) {
    gearslist[i].slots[j].position = j + gearslist[i].position
    gearslist[i].slots[j].w = gearslist[i].progdia / 5
    gearslist[i].slots[j].h = gearslist[i].progdia*5.6 / 20
    gearslist[i].slots[j].x = (gearslist[i].progdia / 2) * cos((gearslist[i].slots[j].position * 45) + sin((frameCount/2.1 + 90)+(i*72))) + (gearslist[i].progx)
    gearslist[i].slots[j].y = (gearslist[i].progdia / 2) * sin((gearslist[i].slots[j].position * 45) + sin((frameCount/2.1 + 90)+(i*72))) + (gearslist[i].progy + (Hper * 0.5 * (sin((frameCount * 1.5)+(i*72)))))
    image(gearslist[i].slots[j].file, gearslist[i].slots[j].x, gearslist[i].slots[j].y, gearslist[i].slots[j].w, gearslist[i].slots[j].h);
  }
}
}

function drawBG() {
  // This all makes a changing gradient background. This is likely going to be changed
  // with a far more interesting background down the line.
  push()
  noStroke()
  const BottomGray = color(11, 11, 11)
  const BottomRed = color(31, 0, 0)
  const TopPurple = color(24, 0, 31)
  const TopDark = color(10, 10, 24)
  const darkTweenFactor = sin((((frameCount % 2000) / 1000)-1)*180);
  let c1 = lerpColor(TopDark, TopPurple, darkTweenFactor);
  const lightTweenFactor = sin((((frameCount % 1200) / 600)-1)*180);
  let c2 = lerpColor(BottomGray, BottomRed, lightTweenFactor);
  const stripeHeight = 1;
  for (let y = 0; y < height; y += stripeHeight) {
    let inter = y / height;
    let c = lerpColor(c1, c2, inter);
    fill(c);
    rect(0, y, width, stripeHeight);
  }
  pop();  
}

function gearsMakeSound() {
  // Plays a random sound without repetition.
  if (gsnd123 === 3) {
        GearSounds.turn1[GearSounds.idx1].play();
        GearSounds.idx1 = (GearSounds.idx1 + 1) % GearSounds.turn1.length;
        gsnd123 = floor(random(1,3));
      } else if (gsnd123 === 2) {
        GearSounds.turn2[GearSounds.idx2].play();
        GearSounds.turn2[GearSounds.idx2].jump(0.2);
        GearSounds.idx2 = (GearSounds.idx2 + 1) % GearSounds.turn2.length;
        gsnd123 = (2 * floor(random(1,3))) - 1;
      } else {
        GearSounds.turn3[GearSounds.idx3].play();
        GearSounds.idx3 = (GearSounds.idx3 + 1) % GearSounds.turn3.length;
        gsnd123 = floor(random(2,4));
      }
}

function positionGear() {
  for (let i = 0; i < gearslist.length; i++) {
  gearslist[i].dia = 95 * Wper / (gearslist.length + 2)
  gearslist[i].x = (100/(gearslist.length+1))*(i+1) * Wper
  // this part is the most fundamental. It decides how big a gear SHOULD be,
  // and where it should be, based on how many there are and which of that list
  // this gear is.

  // Everything below in this function is wacky.
  // I did not yet know about the lerp function when I made this.
  // So basically I made a really messy way to create
  // a logarithmic progression of movement.
  // x and y and dia are what those things SHOULD be.
  // progx, progy, and progdia are what those things ARE.

  // This is the dia one.
  if (gearslist[i].progdia < (gearslist[i].dia - (1 * Wper))) {
    gearslist[i].progdia += ((gearslist[i].dia - gearslist[i].progdia) / 10) + Wper / 2
  } else if (gearslist[i].progdia > (gearslist[i].dia + (1 * Wper))) {
    gearslist[i].progdia += ((gearslist[i].dia - gearslist[i].progdia) / 10) - Wper / 2
  } else {
    gearslist[i].progdia = gearslist[i].dia
  }

  // This is the x one.
  if (gearslist[i].progx < (gearslist[i].x - (1 * Wper))) {
    gearslist[i].progx += ((gearslist[i].x - gearslist[i].progx) / 10) + Wper / 2
  } else if (gearslist[i].progx > (gearslist[i].x + (1 * Wper))) {
    gearslist[i].progx += ((gearslist[i].x - gearslist[i].progx) / 10) - Wper / 2
  } else {
    gearslist[i].progx = gearslist[i].x
  }
    
  // this is the y one.
  if (gearslist[i].progy < (gearslist[i].y - (1 * Hper))) {
    gearslist[i].progy += ((gearslist[i].y - gearslist[i].progy) / 10) + Hper / 2
  } else if (gearslist[i].progy > (gearslist[i].y + (1 * Hper))) {
    gearslist[i].progy += ((gearslist[i].y - gearslist[i].progy) / 10) - Hper / 2
  } else {
    gearslist[i].progy = gearslist[i].y
  }
  }
}

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

// TODO: add a turn system, so that instead of rotating all at once on click, the gears
// rotate in order equal to their rotation/turn count at the end of turn before
// increasing their energy capacity. 

    // Start by making an end turn button object. Make it scalable and moveable within the code,
    // So we can move it where it's most convenient, once the visuals are more established.

    // Then, make it so once this button is pressed, it is somehow measured/established that
    // the turn is ending, and we are in an end-of-turn phase.
    
    // When a turn ends, make the gears rotate, left to right (lowest in the list to highest),
    // each equal to their rpt variable, one at a time. Make this work ad infinitum, using a
    // kind of loop function.

    // Make the next turn begin after this is all done.

    // Make it so you can't push the end-turn button while the end-turn phase is active.

    // If the "deck" has been added yet, make it so you draw a card at the start of a new turn.


// OPTIONAL EXTRA TO-DO
  // Add sound effects to things you can do in the game. The rotation has noises,
  // but things like playing cards and stuff hasn't gotten sounds yet.
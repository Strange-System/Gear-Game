function draw() {
  drawBG()
  if (!gearslist[0].file) {return}
  // If the gear image hasn't loaded yet everything explodes :( so this line fixes that
  positionGear();
  for (let i = 0; i < gearslist.length; i++) {
  gearslist[i].personalfc++
<<<<<<< HEAD
  // this is something I would hope to put in temporary.js, but 
  // it's built in so I can't.
  // mouseIsPressed is going to be replaced with the "end of turn" condition
  // that will be added later.
  if (mouseIsPressed && gearslist[i].position % 1 === 0) {
=======
  if (mouseIsPressed && gearslist[i].position % 1 === 0) { // This ideally would have gone in temporary.js, but the only temporary part of it is tied to the rest. The temporary thing is clicking to make the gears turn. There will be another trigger later on.
>>>>>>> 7aec43e2b0e725eb0aa5358205992206daa09961
    gearslist[i].position += (1 / 105)
    gearslist[i].rotanimcount = 0
  }
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
    // This stuff here is for passive movement
    push();
    translate(gearslist[i].progx, gearslist[i].progy + (Hper * 0.5 * (sin((frameCount * 1.5)+(i*72)))));
    rotate((gearslist[i].position * 45) + sin((frameCount/2.1 + 90)+(i*72)));
  image(gearslist[i].file, 0, 0, gearslist[i].progdia, gearslist[i].progdia);
  pop();
    // And this is to make it move logarithmically to its intended location.
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
  // This all makes a changing gradient background. This is likely going to be changed.
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
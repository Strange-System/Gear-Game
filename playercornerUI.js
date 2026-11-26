// kelly TODO: Add a player box / health bar / status box

    // I envision a small-ish box in the bottom left corner of the screen where
    // an image of the player character can be shown. Down the line this will be
    // used to make the image change based on the circumstances, but you just
    // need to make a box that can have an image put in it down the line.
    
    // To the right side of this, create a healthbar object that measures health and max
    // health, and creates a visual based on that. Ideally, stylize it a lil bit, but if
    // all you can figure out is an "empty" rectangle with a "full" rectangle placed on top
    // though, that's just fine.

    // Above this, add a status box. This is a box where status effects (and symbols with them)
    // down the line will be put there to show you. This is a box that should be able to support
    // multiple lines of text. Make it so it stretches upward to support text if >1 status
    // (aka >1 word/line of text) needs to be put in there, and if there's 0, just keep it at its
    // minimum 1-status height.
    // Basically, just make this object have a variable to measure # of statuses, and have it
    // reestablish its height based on that.

    // You can make these three things look fancier if you like! Any drawings or images
    // added after the other stuff will be placed in front of them, you can use that :)

function renderplayerUI(health, maxHealth, statuses, playerImage) {
        const propalscl = 9
        // proportional scale. Was used to fix when the initial measurements weren't made in terms of Wper and Hper

        let margin= 20/propalscl * Wper; 

        let portraitSize= 90/propalscl * Wper; 

        // health bar 
        let healthX= margin +portraitSize + (12/propalscl * Wper); 
        let healthY= height - margin - portraitSize + (115/propalscl * Hper); 
        let healthW= 190/propalscl * Wper; 
        let healthH= 25/propalscl * Wper; 

        //status box
        let statusX= margin +portraitSize + (12/propalscl * Wper);
        let statusY= height - margin - portraitSize + (65/propalscl * Hper); 
        let statusW= 190/propalscl * Wper; 
        let statusH= max(36, statuses.length * 24 + 12)/propalscl * Wper;

        push(); 

    // status box 
        //background 
        fill(20,20,30,230); 
        stroke(150, 150, 170); 
        strokeWeight(2);
        rect(statusX, statusY - statusH, statusW, statusH, 8/propalscl * Wper);

        // status text
        noStroke();
        fill(255);
  textSize(14);
  textAlign(LEFT, TOP);

  if (statuses.length === 0) {
    bettertext("No Status Effects", statusX + 10/propalscl * Wper, statusY - statusH + 10/propalscl * Wper);
  } else {
    for (let i = 0; i < statuses.length; i++) {
      bettertext(statuses[i], statusX + 10/propalscl * Wper, statusY - statusH + 8/propalscl * Wper + (i * 24/propalscl * Wper));
    }} 
 
 // player portrait 
    fill (0);
  stroke(180);
  strokeWeight(2);
  rect(margin, height - margin - portraitSize,
       portraitSize, portraitSize, 8/propalscl * Wper);




  // Draw player image 
  if (playerImage !== null) {
    push();
    imageMode(CORNER);
    image(playerImage, round(margin + 4/propalscl * Wper), round(height - margin - portraitSize + 4/propalscl * Wper),
          round(portraitSize - 8/propalscl * Wper), round(portraitSize - 8/propalscl * Wper));
    pop();
  }
  if (player.imageoverlay !== null) {
    push();
    imageMode(CORNER);
    image(player.imageoverlay, round(margin + 4/propalscl * Wper), round(height - margin - portraitSize + 4/propalscl * Wper),
          round(portraitSize - 8/propalscl * Wper), round(portraitSize - 8/propalscl * Wper));
    pop();
  }
  if (player.imageoverlaytwo !== null) {
    push();
    imageMode(CORNER);
    image(player.imageoverlaytwo, round(margin + 4/propalscl * Wper), round(height - margin - portraitSize + 4/propalscl * Wper),
          round(portraitSize - 8/propalscl * Wper), round(portraitSize - 8/propalscl * Wper));
    pop();
  }
// health bar

//empty 
fill(70, 25, 25);
  stroke(180);
  rect(healthX, healthY, healthW, healthH, 5/propalscl * Wper);

// Calculate remaining health 
  let healthPercent = 0;

  if (maxHealth > 0) {
    healthPercent = constrain(health / maxHealth, 0, 1);
  }

// show remaining amount 
  noStroke();
  fill(40, 190, 80);
  rect(healthX, healthY, healthW * healthPercent, healthH, 5/propalscl * Wper);

  // Health numbers
  fill(255);
  textSize(14);
  textAlign(LEFT, BOTTOM);
  bettertext("Health: " + health + " / " + maxHealth,
       healthX, healthY - 5/propalscl * Wper);

  pop();
}

function chooseprofileimage() {

let p = player.identity;
let gowild = false
let onepercent = floor(random(1,101))

  if (identitychange === true) {
    latestprofanim = millis() - 300/pas
    // this makes it so if you switch identities, the profile image updates immediately!
  }

  if (player.identity === "Wrath" && onepercent === 1 && player.broken === true) {
    gowild = true;
  }

  if (player.statuses.includes("fear") && profiles[p]?.Fear?.length > 1) {
        if (millis() - latestprofanim >= 200/pas) {
          let frames = profiles[p].Fear;
          let current = frames.indexOf(player.image);

          player.image = frames[(current + 1) % frames.length];
        }
  } else if (player.statuses.includes("manic") && profiles[p]?.Manic?.length > 1) {
        if (millis() - latestprofanim >= 200/pas) {
          let frames = profiles[p].Manic;
          let current = frames.indexOf(player.image);

          player.image = frames[(current + 1) % frames.length];
        } 
  } else if (profiles[p]?.Neutral?.length > 1) {
        if (millis() - latestprofanim >= 200/pas) {
          let frames = profiles[p].Neutral;
          let current = frames.indexOf(player.image);

          player.image = frames[(current + 1) % frames.length];
        } 
  } else {
      player.image = profileerrorimg;
  }

  if (player.broken === true) {
    if (player.statuses.includes("fear")) {
      if (profiles[p]?.BrokenFear?.length > 1) {
        if (millis() - latestprofanim >= 200/pas) {
          let frames = profiles[p].BrokenFear;
          let current = frames.indexOf(player.imageoverlaytwo);

          player.imageoverlaytwo = frames[(current + 1) % frames.length];
        }  
      }
    }

    if (profiles[p]?.Broken?.length > 1) {
      if (millis() - latestprofanim >= 200/pas) {
        let frames = profiles[p].Broken;
        let current = frames.indexOf(player.imageoverlay);
        player.imageoverlay = frames[(current + 1) % frames.length];
      }  
    }
    
  } else {
    player.imageoverlay = null;
    player.imageoverlaytwo = null;
  }

  if (millis() - latestprofanim >= 200/pas) {
    latestprofanim = millis();
  }
}
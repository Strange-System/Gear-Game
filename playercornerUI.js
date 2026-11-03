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
        const testratio = 10

        let margin= 20/testratio * Wper; 

        let portraitSize= 90/testratio * Wper; 

        // health bar 
        let healthX= margin +portraitSize + (20/testratio * Wper); 
        let healthY= height - margin - portraitSize + (10/testratio * Hper); 
        let healthW= 190/testratio * Wper; 
        let healthH= 25/testratio * Wper; 

        //status box
        let statusX= margin; 
        let statusY= height - margin - portraitSize - (15/testratio * Hper); 
        let statusW= 295/testratio * Wper; 
        let statusH= max(36, statuses.length * 204 + 12)/testratio * Wper;

        push(); 

    // status box 
        //background 
        fill(20,20,30,230); 
        stroke(150, 150, 170); 
        strokeWeight(2);
        rect(statusX, statusY, statusW, statusH, 8/testratio * Wper);

        // status text
        nostroke();
        fill(255);
  textSize(14);
  textAlign(LEFT, TOP);

  if (statuses.length === 0) {
    text("No Status Effects", statusX + 10/testratio * Wper, statusY - statusH + 10/testratio * Wper);
  } else {
    for (let i = 0; i < statuses.length; i++) {
      text(statuses[i], statusX + 10/testratio * Wper, statusY - statusH + 8/testratio * Wper + (i * 24/testratio * Wper));
    }} 
 
 // player portrait 
    fill (35, 35, 50);
  stroke(180);
  strokeWeight(2);
  rect(margin, height - margin - portraitSize,
       portraitSize, portraitSize, 8/testratio * Wper);

  // Draw player image 
  if (playerImage !== null) {
    image(playerImage, margin + 4/testratio * Wper, height - margin - portraitSize + 4/testratio * Wper,
          portraitSize - 8/testratio * Wper, portraitSize - 8/testratio * Wper);
  }
// health bar

//empty 
fill(70, 25, 25);
  stroke(180);
  rect(healthX, healthY, healthW, healthH, 5/testratio * Wper);

// Calculate remaining health 
  let healthPercent = 0;

  if (maxHealth > 0) {
    healthPercent = constrain(health / maxHealth, 0, 1);
  }

// show remaining amount 
  noStroke();
  fill(40, 190, 80);
  rect(healthX, healthY, healthW * healthPercent, healthH, 5/testratio * Wper);

  // Health numbers
  fill(255);
  textSize(14);
  textAlign(LEFT, BOTTOM);
  text("Health: " + health + " / " + maxHealth,
       healthX, healthY - 5/testratio * Wper);

  pop();
}

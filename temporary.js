// this is where files that are temporary in order to allow the testing of concepts will reside.

function keyPressed() {
  if (key === 'r') {
    // This is to add more gears, which will be added as a function later on. I don't intend on them interlinking, but rather, being separate units. My next task is I'm going to make them automatically spread out in a horizontal line in such a way that works for any gear count, shrinking and accomodating for any gear number, and going into 2 lines once >5 are there. The game will have a maximum of 10, but I will program it to be theoretically limitless, as a test of my optimization abilities.
    initGear();
    // I might make them interlink with other decorative gears down the line but these gears being made are designed to be like, board spaces independently moving, so these ones can't interlink for purposes of the game's planned design.
  }
}
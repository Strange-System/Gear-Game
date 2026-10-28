function initGear() {
  gearslist.push(makeGear());
}

function makeGear() {
  const gear = {
    file: GEARIMAGE,
    // Down the line I intend on making this image able to change. Right now, it doesn't.
    dia: 0,
    // diameter
    x: 0,
    y: 0,
    position: 0,
    // A variable 0-7 to determine what rotation the gear is at
    // and therefore what prong is up top.
    rotanimcount: 0,
    // A janky variable used to make sure the gear rotates the right amount
    personalfc: 0,
    // personal frame count. Calculates the age of the gear.
    // This doesn't have use yet. I thought I would need it but I didn't lol
    progx: 0,
    // prog means progress here, these prog values are used to determine
    // how close it is to moving to the desired location.
    // dia, x, and y are where things SHOULD be, whereas the prog values are where they ARE.
    // I know this is kinda weird and backwards, made it as I was going, sorry
    progy: 0,
    progdia: 0,
    slots: [],
    // A list that will contain 8 slots.
    basepow: 25,
    // The unmodified power capacity of the gear.
    // This will be useful for the back-end systems of determining
    // Whether, at the end of the turn, the gear should increase
    // its power, or if it has 100 basepow and should make a new
    // gear instead.
    pow: 25,
    // The power capacity of the gear, including all modifications
    // that the gameplay itself might be applying.
    // This is for the front end, what the gear will show and the basis
    // of its calculations for if the gear can support the cards.
    rpt: 2,
    // Rotations per turn. The intention is that all sorts of things
    // will be able to modify this, cards, opponents, etc etc.
    // Every gear should rotate once per rpt at the end of its turn.

        // I got all this one covered vvv -Zoy

    // TODO: make these three bottommost parts of the gear actually do their things.
    // Create a visual at the center of the gear for this.
    // Make it so at the end of each turn, the gear rotates X times where X is
    // the number of rotations/turn in the variable.
    // At the end of each turn, increase energy capacity by 25. If base capacity is 100,
    // Add a new gear with 25 capacity instead.

        // I got all this one covered ^^^ -Zoy
};
  gear.y = 50 * Hper
  // This literally says "The gear is 50% down the screen"
  gear.progy = gear.y
  // This snaps the first (and only the first) gear there. The others slide in from the bottom.
  if (gearslist.length === 0) {
    // if it's the first gear and the start of game, snap it in place.
  gear.dia = 35 * Wper
  gear.x = 50 * Wper
  gear.progdia = gear.dia
  gear.progx = gear.x
  } else {
    // otherwise, move progressively.
    gear.progdia = gearslist[gearslist.length - 1].dia
    gear.progx = gearslist[gearslist.length - 1].progx
    gear.progy = (100 * Hper) + (20 * Wper)
  }
  for (let i = 0; i < 8; i++) {
    // makes 8 slots.
    gear.slots.push(makeSlot(i));
  }
  return gear;
}

function makeSlot(i) {
  const slot = {
    file: EMPTYSLOT,
    w: 0,
    h: 0,
    x: 0,
    y: 0,
    pos: i,
    // down the line, more variables will be added
    // including one which may contain a card object
    // that defines the slot's behavior.
};
  return slot;
}
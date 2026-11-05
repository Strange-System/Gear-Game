let Wper;
let Hper;
// These are "Width Percent" and "Height Percent" variables
// used to make the game scale to any screen size
// Just about anything physical should include these variables
// Or else it'll look different from screen to screen
let gsnd123;
//"gearsound123", this allows the gear sounds to be played randomly
// and without repetition. The 123 is because those are the only
// values it could be at first. Though that might change.
let GEARIMAGE;
// This is the gear image
let EMPTYSLOT;
// This is the picture of a bubble of an empty slot
let cardTemplate;

//Kais variable for select sound
let selectSound;

// I added a card template image you can use. :)
let pxlFnt;
// A pixel font
let pxlFntXlight;
const gearslist = [];
// A grand list of gears. Within this list, there are objects.
// Those objects are the gears.
// Within those gear objects, there are lists.
// Within those lists, are objects. These objects are the slots.
// Don't get overwhelmed, it sounds like a lot but I promise you can keep up.
const cards = [];
const TN = [0, 0, 0, 0];
const TF = [0, 0, 0];
const player = {
  health: 100,
  maxHealth: 100,
  statuses: [],
  image: null
};

let profiles = {};

let latestprofanim = 0

let GearSounds = {
  turn1: [],
  turn2: [],
  turn3: [],
  idx1: 0,
  idx2: 0,
  idx3: 0,
}
// an object to hold the gear sounds, and their indexes, so that they can be played without cutting.
// This thing is a mess, you don't really need to understand it
// unless you want to add more sounds, in which case just follow the format.

async function setup() {
  if (windowWidth * 9 / 16 < windowHeight) {
    createCanvas(windowWidth, windowWidth * 9 / 16);
  } else {
    createCanvas(windowHeight * 16 / 9, windowHeight);
  }
  drawingContext.imageSmoothingEnabled = true;
  drawingContext.imageSmoothingQuality = "high";
  noLoop();
  angleMode(DEGREES);
  imageMode(CENTER);
  Wper = width / 100;
  Hper = height / 100;
  GEARIMAGE = await loadImage("./assets/Gear.png");
  pxlFnt = await loadFont("./assets/Fonts/Tiny5Duo/Tiny5Duo-Bold.ttf");
  pxlFntXlight = await loadFont("./assets/Fonts/Tiny5Duo/Tiny5Duo-ExtraLight.ttf");
  EMPTYSLOT = await loadImage("./assets/Cards/emptyslot.png");
  cardTemplate = await loadImage("./assets/Cards/cardTemplate.png");

  gsnd123 = floor(random(1,4));

  
// Tried to do this stuff with a for loop,
// but use of loading things in a for loop makes it return an error
// because it thinks it's an infinite loop. Prob wouldn't do this anymore in local, but why bother changing it now
  let t1_a = await loadSound("/assets/Sounds/Gearturn1.mp3");
  let t1_b = await loadSound("/assets/Sounds/Gearturn1.mp3");
  let t1_c = await loadSound("/assets/Sounds/Gearturn1.mp3");
// Loading three copies to prevent cutting on repeat.
// HIGHLY situational and probably not even worth the effort
// But it will help like 1% of the time... maybe
  let t2_a = await loadSound("/assets/Sounds/Gearturn2.mp3");
  let t2_b = await loadSound("/assets/Sounds/Gearturn2.mp3");
  let t2_c = await loadSound("/assets/Sounds/Gearturn2.mp3");

  let t3_a = await loadSound("./assets/Sounds/Gearturn3.mp3");
  let t3_b = await loadSound("./assets/Sounds/Gearturn3.mp3");
  let t3_c = await loadSound("./assets/Sounds/Gearturn3.mp3");
    
  t1_a.amp(0.4); t1_b.amp(0.4); t1_c.amp(0.4);
  t2_a.amp(0.55); t2_b.amp(0.55); t2_c.amp(0.55);
  t3_a.amp(0.45); t3_b.amp(0.45); t3_c.amp(0.45);
  
  GearSounds.turn1 = [t1_a, t1_b, t1_c];
  GearSounds.turn2 = [t2_a, t2_b, t2_c];
  GearSounds.turn3 = [t3_a, t3_b, t3_c];

  initGear();

  cards.push(new Card(42 * Wper, 90 * Hper, 7 * Wper));
  cards.push(new Card(50 * Wper, 90 * Hper, 7 * Wper));
  cards.push(new Card(58 * Wper, 90 * Hper, 7 * Wper));

  loop();

  selectSound = await loadSound("./assets/Sounds/CardSelect.mp3");

  await loadProfiles();
}



// This stuff down here gets real crazy vvv

  async function loadProfiles() {
    const structure = await loadJSON("./assets/Profile/profiles.json");

    for (const profileName of Object.keys(structure)) {
        profiles[profileName] = {};

        for (const stateName of structure[profileName]) {
            profiles[profileName][stateName] = [];

            let imageNumber = 1;

            while (true) {
                const path = `./assets/Profile/${profileName}/${stateName}/${profileName}${stateName}${imageNumber}.png`;

                try {
                    const img = await loadImage(path);
                    profiles[profileName][stateName].push(img);
                    imageNumber++;
                } catch (error) {
                    break;
                }
            }
        }
    }
}
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

function rendercards( //Add whatever inputs you want/need here
    ) {
        // code goes here! Draw function refers to this.

    };
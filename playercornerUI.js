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

function renderplyaerUI(// put whatever inputs you want/need here
    ) {
        // the function is currently placed within the draw function,
        // you can put all of this here
    }
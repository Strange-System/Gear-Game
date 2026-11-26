function bettertext(str, x, y, maxWidth, maxHeight) {
    push();
    let xoff = 0
    let yoff = 0
    let txts = textSize()
    if (player.identity === "Tough") {
        xoff = Wper*txts*-1/200
    }
    if (textAlign().horizontal === CENTER) {
        text(str, x+xoff, y+yoff, maxWidth, maxHeight);
    } else {
        text(str, x, y, maxWidth, maxHeight);
    }
    pop();
}
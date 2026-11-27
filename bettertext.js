function bettertext(str, x, y, maxWidth, maxHeight) {
    push();
    let xoff = 0
    let yoff = 0
    let txts = textSize()
    let txtm = 1
    if (player.identity === "Tough") {
        xoff = Wper*txts*-1/200
    }
    if (player.identity === "Sorrow") {
        xoff = Wper*txts*-1/200
        yoff = Wper*txts*-1/400
    }
    if (player.identity === "Creative") {
        xoff = Wper*txts*-1/200
        yoff = Wper*txts*+1/60
    }
    if (player.identity === "Wrath") {
        xoff = Wper*txts*-1/80
        yoff = Wper*txts*-1/300
        txtm = 1.3
    }
    if (player.identity === "Panic") {
        xoff = Wper*txts*-1/300
        yoff = Wper*txts*-1/200
        txtm = 1.1
    }
    textSize(txts*txtm)
    if (textAlign().horizontal === CENTER) {
        text(str, x+xoff, y+yoff, maxWidth, maxHeight);
    } else {
        text(str, x, y, maxWidth, maxHeight);
    }
    pop();
}
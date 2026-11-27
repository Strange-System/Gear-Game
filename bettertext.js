function bettertext(str, x, y, maxWidth, maxHeight, dofit) {
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
        yoff = Wper*txts*1/60
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
    
    let finalSize = txts * txtm;

    if (dofit && maxWidth > 0 && maxHeight > 0 && String(str).length > 0) {
        textWrap(WORD);

        function fits(size) {
            textSize(size);
            let bounds = textBounds(String(str), 0, 0, maxWidth);

            return bounds.w <= maxWidth &&
                   bounds.h <= maxHeight;
        }

        let low = 0;
        let high = Math.max(1, finalSize);

        // Find the upper limit of a fitting size
        while (fits(high) && high < 4096) {
            high *= 2;
        }

        // Binary search for the largest fitting size
        for (let i = 0; i < 15; i++) {
            let mid = (low + high) / 2;

            if (fits(mid)) {
                low = mid;
            } else {
                high = mid;
            }
        }

        // Adjust offsets to match the fitted font size
        let scale = low / finalSize;
        xoff *= scale;
        yoff *= scale;

        finalSize = low;
    }

    textSize(finalSize);

    if (textAlign().horizontal === CENTER) {
        text(str, x+xoff, y+yoff, maxWidth);
    } else {
        text(str, x, y, maxWidth);
    }
    pop();
}
class Box {

    width = 40
    height = 40
    curvs = 2;



    BoxStyle(xPosition, yPosition) {

        const background = color(132, 66, 4);
        fill(background);
        strokeWeight(1);
        let x = xPosition;
        let y = yPosition;
        let y2 = y + 4;
        let x2 = x + 4;
        const box1size = 40;
        const box2size = box1size - 8
        const lines = 6;
        rect(x, y, box1size, box1size, this.curvs)
        rect(x2, y2, box2size, box2size)
        for (let index = 0; index < box2size; index += box2size / lines) {

            line(x2, y2 + index, box2size + x2, y2 + index);

        }
    }

}

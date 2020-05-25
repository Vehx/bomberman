class Bombstyle {
    constructor(xPosition, yPosition, size, timer, timerSpeed) {
        this.x = xPosition;
        this.y = yPosition;
        this.size = size;
        this.FuseLength = this.size - this.size / 4.2;
        this.timer = timer;
        this.timerSpeed = timerSpeed;

    }
    fuseBurn() {
        noStroke();
        colorMode(RGB, 255);
        fill(color(248, 146, 0));
        circle(
            this.x,
            this.y - this.FuseLength,
            this.FuseLength - this.FuseLength * 0.92 + 2
        );
    }
    theFuse() {
        stroke(1);
        strokeWeight(2);
        strokeCap(ROUND);
        line(this.x, this.y, this.x, this.y - this.FuseLength);
    }
    bombcolor = (i = 0) => {
        return color(0, 0, 5 + i * 1.2);
    };
    bombShapeTop() {
        colorMode(HSL, 100);
        noStroke();
        const numRect = 10;
        let shapeSize = this.size / PI;

        for (let i = 0; i < numRect; i++) {
            fill(this.bombcolor(i));

            rect(
                this.x -
                shapeSize / 2 +
                (i > shapeSize ? i * 0.1 : -i) / shapeSize,
                this.y - shapeSize + 2,
                shapeSize - i * (shapeSize / 23.86),
                shapeSize * (shapeSize > 3 ? -0.89 : -1.1)
            );
        }
    }

    bombShapeBottom() {
        colorMode(HSL, 100);

        const totalCirkels = 37;
        for (let i = 0; i < totalCirkels; i++) {
            noStroke();

            fill(this.bombcolor(i));
            circle(
                this.x - i * (this.size / 110),
                this.y - i * (this.size / 130),
                this.size - i * (this.size / totalCirkels)
            );
        }
    }
    show() {
        push()
        this.timer += this.timerSpeed;

        if (this.timer < this.FuseLength / 2.2) {
            push();
            translate(0, this.timer);
            this.fuseBurn();
            this.theFuse();
            pop();
            this.bombShapeTop();
            this.bombShapeBottom();

            pop()

        }
    }
}
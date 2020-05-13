class Wall {
    constructor(size, x, y) {
        this.size = size;
        this.x = x;
        this.y = y;
        this.curvs = 2;
        this.background = color(122, 118, 118);
    }

    draw() {
        let x2 = this.x + 3;
        let y2 = this.y + 3;
        const innerSize = this.size - 6;

        fill(this.background);
        stroke(0);
        strokeWeight(1);
        rect(this.x, this.y, this.size, this.size, this.curvs);

        rect(x2, y2, innerSize, innerSize, this.curvs);
    }
}

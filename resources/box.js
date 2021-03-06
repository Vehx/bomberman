class Box {
    constructor(_size, positionX, positionY) {
        this.size = _size;
        this.x = positionX;
        this.y = positionY;
        this.curvs = 2;
        this.background = color(132, 66, 4);
    }

    show() {
        fill(this.background);
        stroke(0);
        strokeWeight(1);

        let x2 = this.x + 4;
        let y2 = this.y + 4;
        const box1size = this.size;
        const box2size = box1size - 8;
        const lines = 6;

        rect(this.x, this.y, box1size, box1size, this.curvs);
        rect(x2, y2, box2size, box2size);
        for (let index = 0; index < box2size; index += box2size / lines) {
            line(x2, y2 + index, box2size + x2, y2 + index);
        }
    }

    hitByBomb(bomb) {
        if (
            // checks if top right corner is larger than bombs cordinate
            this.x + this.size >= bomb.x &&
            // checks if top left corner is smaller than bombs cordinate
            this.x <= bomb.x &&
            // checks if bottom right corner is larger than bombs cordinate
            this.y + this.size >= bomb.y &&
            // checks if bottom left corner is smaller than bombs cordinate
            this.y <= bomb.y
        ) {
            return true;
        }
        return false;
    }
}

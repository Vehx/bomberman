class Player {
    constructor(_x, _y, size, color, keymap) {
        //playerStyle, position
        this.hatColor = color;
        this.size = size;
        this.x = _x;
        this.y = _y;
        this.degres = 0;
        //for colition
        this.prevX = _x;
        this.prevY = _y;
        //bomb
        this.bombs = [];
        this.maxBombCount = 1;
        this.currentBombCount = 0;
        //controlls
        const keyCodes = [
            [37, 39, 38, 40],
            [65, 68, 87, 83],
        ];
        this.left = keyCodes[keymap][0];
        this.right = keyCodes[keymap][1];
        this.up = keyCodes[keymap][2];
        this.down = keyCodes[keymap][3];
    }

    walk() {
        if (keyIsDown(this.left)) {
            if (this.x > 0 + this.size / 2) {
                this.x = this.x - 2;
                //for when the hattip rotates
                this.degres = 180;
            }
        }

        if (keyIsDown(this.right)) {
            if (this.x < width - this.size / 2) {
                this.x = this.x + 2;
                this.degres = 0;
            }
        }

        if (keyIsDown(this.up)) {
            if (this.y > 0 + this.size / 2) {
                this.y = this.y - 2;
                this.degres = 270;
            }
        }

        if (keyIsDown(this.down)) {
            if (this.y < height - this.size / 2) {
                this.y = this.y + 2;
                this.degres = 90;
            }
        }
    }

    //seperation from playershow to easily rotate is sepertly from static parts
    hatTipShape() {
        push();
        angleMode(DEGREES);
        translate(this.x, this.y);
        rotate(this.degres);
        beginShape();
        curveVertex(0, 0 - this.size / 2 + this.size / 20);
        curveVertex(this.size / 1.7, -this.size / 2.2);
        curveVertex(this.size / 1.2, -this.size / 2.5);
        curveVertex(this.size / 1.08, 0);
        curveVertex(this.size / 1.2, this.size / 2.5);
        curveVertex(this.size / 1.7, this.size / 2.1);
        vertex(0, 0 + this.size / 2.4 - this.size / 20);
        endShape(CLOSE);
        pop();
    }

    show() {
        push();
        let xPosition = this.x;
        let yPosition = this.y;
        stroke(0);

        const capColor = color(this.hatColor);
        fill(capColor);
        this.hatTipShape();
        circle(xPosition, yPosition, this.size + 2);
        fill(0);
        circle(xPosition, yPosition, this.size / 6);
        pop();
        this.removeBomb();
        for (let i = 0; i < this.bombs.length; i++) {
            this.bombs[i].show();
        }
    }

    savePos() {
        this.prevX = this.x;
        this.prevY = this.y;
    }

    checkCollision(other) {
        if (
            // checks if right edge hits others left edge
            this.x + this.size / 2 >= other.x &&
            // checks if left edge hits others right edge
            this.x - this.size / 2 <= other.x + other.size &&
            // checks if top edge hits others bottom edge
            this.y + this.size / 2 >= other.y &&
            // checks if bottom edge hits others top edge
            this.y - this.size / 2 <= other.y + other.size
        ) {
            return true;
        }
        return false;
    }

    checkPlayerCollision(other) {
        if (
            // checks if right edge hits other players left edge
            this.x + this.size / 2 >= other.x - other.size / 2 &&
            // checks if left edge hits other players right edge
            this.x - this.size / 2 <= other.x + other.size / 2 &&
            // checks if top edge hits other players bottom edge
            this.y + this.size / 2 >= other.y - other.size / 2 &&
            // checks if bottom edge hits other players top edge
            this.y - this.size / 2 <= other.y + other.size / 2
        ) {
            return true;
        }
        return false;
    }

    placeBomb() {
        if (this.currentBombCount < this.maxBombCount) {
            this.bombs.push(
                new Bomb(this.x, this.y, this.size, this.size * 1.75)
            );
            this.currentBombCount++;
        }
    }

    removeBomb() {
        for (let i = 0; i < this.bombs.length; i++) {
            if (this.bombs[i].bombgone) {
                this.bombs.pop(this.bombs[i]);
                this.currentBombCount--;
            }
        }
    }

    hitByBomb(bomb) {
        if (
            // checks if top edge is larger than bombs cordinate
            this.x + this.size / 2 >= bomb.x &&
            // checks if left edge is smaller than bombs cordinate
            this.x - this.size / 2 <= bomb.x &&
            // checks if bottom edge is larger than bombs cordinate
            this.y + this.size / 2 >= bomb.y &&
            // checks if right edge is smaller than bombs cordinate
            this.y - this.size / 2 <= bomb.y
        ) {
            return true;
        }
        return false;
    }
}

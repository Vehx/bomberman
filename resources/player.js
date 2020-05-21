class Player {
    constructor(_x, _y, size, color, keymap) {
        const keyCodes = [
            [37, 39, 38, 40],
            [65, 68, 87, 83],
        ];
        this.hatColor = color;
        this.x = _x;
        this.y = _y;
        this.prevX = _x;
        this.prevY = _y;
        this.size = size;

        this.degres = 0;
        this.xTip = _x;
        this.yTip = _y;
        this.xTipPosistion = -_x;
        this.yTipPosistion = -_y;
        // console.log(this.xTip, this.yTip);

        this.bombs = [];
        this.maxBombCount = 1;
        this.currentBombCount = 0;
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
                this.xTipPosistion = this.xTip;
                this.yTipPosistion = this.yTip;
            }
        }

        if (keyIsDown(this.right)) {
            if (this.x < width - this.size / 2) {
                this.x = this.x + 2;
                this.degres = 0;
                this.xTipPosistion = -this.xTip;
                this.yTipPosistion = -this.yTip;
            }
        }

        if (keyIsDown(this.up)) {
            if (this.y > 0 + this.size / 2) {
                this.y = this.y - 2;
                this.degres = 270;
                this.xTipPosistion = -this.xTip;
                this.yTipPosistion = this.yTip;
            }
        }

        if (keyIsDown(this.down)) {
            if (this.y < height - this.size / 2) {
                this.y = this.y + 2;
                this.degres = 90;
                this.xTipPosistion = this.xTip;
                this.yTipPosistion = -this.yTip;
                // console.log(this.x + " " + this.y);
                // console.log(this.xTipPosistion + " " + this.yTipPosistion);
            }
        }
    }

    //seperation from playershow to easily rotate is sepertly from static parts
    hatTipShape() {
        push();
        angleMode(DEGREES);
        translate(this.x + this.xTipPosistion, this.y + this.yTipPosistion);

        rotate(this.degres);
        beginShape();
        curveVertex(this.xTip, this.yTip - this.size / 2 + this.size / 20);
        curveVertex(this.xTip + this.size / 1.7, this.yTip - this.size / 2.2);
        curveVertex(this.xTip + this.size / 1.2, this.yTip - this.size / 2.5);
        curveVertex(this.xTip + this.size / 1.08, this.yTip);
        curveVertex(this.xTip + this.size / 1.2, this.yTip + this.size / 2.5);
        curveVertex(this.xTip + this.size / 1.7, this.yTip + this.size / 2.1);
        vertex(this.xTip, this.yTip + this.size / 2.4 - this.size / 20);
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
}

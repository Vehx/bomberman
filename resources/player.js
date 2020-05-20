class Player {
    constructor(_x, _y, size, color) {
        this.x = _x;
        this.y = _y;
        this.prevX = _x;
        this.prevY = _y;
        this.size = size;
        this.hatColor = color;
        this.degres = 0;
        this.xTip = _x;
        this.yTip = _y;
        this.xTipPosistion = -_x;
        this.yTipPosistion = -_y;
    }

    walk() {
        if (keyIsDown(LEFT_ARROW)) {
            if (this.x > 0 + this.size / 2) {
                this.x = this.x - 2;
                //for when the hattip rotates
                this.degres = 180;
                this.xTipPosistion = this.xTip;
                this.yTipPosistion = this.yTip;
            }
        }

        if (keyIsDown(RIGHT_ARROW)) {
            if (this.x < width - this.size / 2) {
                this.x = this.x + 2;
                this.degres = 0;
                this.xTipPosistion = -this.xTip;
                this.yTipPosistion = -this.yTip;
            }
        }

        if (keyIsDown(UP_ARROW)) {
            if (this.y > 0 + this.size / 2) {
                this.y = this.y - 2;
                this.degres = 270;
                this.xTipPosistion = -this.xTip;
                this.yTipPosistion = this.yTip;
            }
        }

        if (keyIsDown(DOWN_ARROW)) {
            if (this.y < height - this.size / 2) {
                this.y = this.y + 2;
                this.degres = 90;
                this.xTipPosistion = this.xTip;
                this.yTipPosistion = -this.yTip;
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
        let xPosition = this.x;
        let yPosition = this.y;
        stroke(0);

        const capColor = color(this.hatColor);
        fill(capColor);
        this.hatTipShape();
        circle(xPosition, yPosition, this.size + 2);
        fill(0);
        circle(xPosition, yPosition, this.size / 6);
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
}

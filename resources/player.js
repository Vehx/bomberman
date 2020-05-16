class Player {
    constructor(_x, _y, size, color) {
        this.x = _x;
        this.y = _y;
        this.size = size;
        this.hatColor = color;
        this.degres = 0;
        this.xTip = _x;
        this.yTip = _y;
        this.xTipPosistion = -_x;
        this.yTipPosistion = -_y;
    }

    playerWalk() {
        if (keyIsDown(LEFT_ARROW)) {
            if (this.x > this.size) {
                this.x = this.x - 2;
                //for when the hattip rotates
                this.degres = 180;
                this.xTipPosistion = this.xTip;
                this.yTipPosistion = this.yTip;
            }
        }

        if (keyIsDown(RIGHT_ARROW)) {
            if (this.x < width - this.size) {
                this.x = this.x + 2;
                this.degres = 0;
                this.xTipPosistion = -this.xTip;
                this.yTipPosistion = -this.yTip;
            }
        }

        if (keyIsDown(UP_ARROW)) {
            if (this.y > this.size) {
                this.y = this.y - 2;
                this.degres = 270;
                this.xTipPosistion = -this.xTip;
                this.yTipPosistion = this.yTip;
            }
        }

        if (keyIsDown(DOWN_ARROW)) {
            if (this.y < height - this.size) {
                this.y = this.y + 2;
                this.degres = 90;
                this.xTipPosistion = this.xTip;
                this.yTipPosistion = -this.yTip;
            }
        }
        //removing the background issue
        // clear()
        // background(153)
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

    playerShow() {
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
    //for getting players cordinat
    posistionX() {
        return this.x;
    }
    posistionY() {
        return this.y;
    }
}

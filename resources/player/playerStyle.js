class playerStyle {

    constructor(xPosition, yPosition, size, degres, hatColor) {
        this.x = xPosition;
        this.y = yPosition;
        this.hatColor = hatColor;
        this.size = size;
        this.degres = degres

    }
    hatTip() {
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
    hatBase() {

        circle(this.x, this.y, this.size + 2);
        fill(0);
        circle(this.x, this.y, this.size / 6);

    }
    show() {
        push();
        stroke(0);
        const capColor = color(this.hatColor);
        fill(capColor);
        this.hatTip()
        this.hatBase()
        pop();
    }

}
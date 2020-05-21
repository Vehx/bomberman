class Bomb {
    constructor(_x, _y, _size, _explostionSize) {
        // use players _x,_y to set the bomb
        this.x = _x;
        this.y = _y;
        //size of the bomb and fuseLength
        this.size = _size;
        this.FuseLength = this.size - this.size / 4.2;
        this.timer = 0;
        this.bombgone = false;
        //change _explotionsSize to something else for sugesting can be an array ?
        this.explostionSizeY1 = _explostionSize;
        this.explostionSizeY2 = _explostionSize;
        this.explostionSizeX1 = _explostionSize;
        this.explostionSizeX2 = _explostionSize;
    }

    //just a color function for bombshape
    Bombcolors = (i = 0) => {
        return color(0, 0, 5 + i * 1.2);
    };

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

    bombShapeTop() {
        colorMode(HSL, 100);
        noStroke();
        const numRect = 10;
        let shapeSize = this.size / PI;
        for (let i = 0; i < numRect; i++) {
            fill(this.Bombcolors(i));

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

            fill(this.Bombcolors(i));
            circle(
                this.x - i * (this.size / 110),
                this.y - i * (this.size / 130),
                this.size - i * (this.size / totalCirkels)
            );
        }
    }

    //explosion shape going along with X-axis
    explosionShowX(_width, direction) {
        const width = this.size;
        const height = _width < this.size ? 3 + this.size / 2 : _width;
        const dir = direction;

        const curve = (this.size * width) / height;
        rect(
            this.x,
            this.y - width / 4,
            height * dir,
            width / 2,
            0,
            curve,
            curve,
            0
        );
    }

    //explosion shape going along with Y-axis
    explosionShowY(_height, direction) {
        const height = _height < this.size ? 3 + this.size / 2 : _height;
        const width = this.size;
        const dir = direction;
        const curve = (this.size * width) / height;

        rect(
            this.x - width / 4, //posistion x
            this.y, //position y
            this.size / 2,
            height * dir,
            0,
            0,
            curve
        );
    }

    //explosion size,color and direction
    explosionShow() {
        colorMode(RGB, 255);
        fill(color(248, 146, 0));
        noStroke(0);
        this.explosionShowY(this.explostionSizeY1, 1);
        this.explosionShowY(this.explostionSizeY2, -1);
        this.explosionShowX(this.explostionSizeX1, 1);
        this.explosionShowX(this.explostionSizeX2, -1);
    }

    //the bigger the bomb is the longer it takes for it to explod)
    show() {
        push();
        this.timer += 0.09;
        if (this.timer < this.FuseLength / 2.2) {
            push();
            translate(0, this.timer);
            this.theFuse();
            this.fuseBurn();
            pop();
            this.bombShapeTop();
            this.bombShapeBottom();
        }
        if (this.timer > this.FuseLength / 2) {
            this.explosionShow(this.explostionSize);
            if (this.timer > this.FuseLength / 1.5) {
                this.bombgone = true;
            }
        }
        pop();
    }

    //to get all the cordinates for the expltion
    explotionArea() {
        //the x-axis
        let xleftEnd = this.x + this.explostionSizeX1 * -1;
        let xrightEnd = this.x + this.explostionSizeX2;
        let xHeightTop = this.y + (this.size / 5) * -1;
        let xHeightBottom = this.y + this.size / 5;
        //the y-axis
        let ytopEnd = this.y + this.explostionSizeY1 * -1;
        let yBottomEnd = this.y + this.explostionSizeY2;
        let yLeftWidth = this.x + (this.size / 5) * -1;
        let yRightWidth = this.x + this.size / 5;

        //for making the cordinateArray smaler then it needs to be
        let iterationNumY = this.size / (this.size / 11);
        let iterationNumX = this.size / (this.size / 11);

        //storing all cordinates
        let cordinatesArray = [];

        //y-axis cordinates
        for (let y1 = ytopEnd; y1 <= yBottomEnd; y1 += iterationNumY) {
            for (let x1 = yLeftWidth; x1 <= yRightWidth; x1 += iterationNumY) {
                cordinatesArray.push({ x: x1, y: y1 });
            }
        }

        //x-axis cordinates
        for (let x2 = xleftEnd; x2 <= xrightEnd; x2 += iterationNumX) {
            for (
                let y2 = xHeightTop;
                y2 <= xHeightBottom;
                y2 += iterationNumX
            ) {
                cordinatesArray.push({ x: x2, y: x2 });
            }
        }

        return cordinatesArray;
    }
}

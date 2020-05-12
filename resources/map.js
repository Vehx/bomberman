class Map {
    constructor(sizeHeight, sizeWidth) {
        this.sizeHeight = sizeHeight;
        this.sizeWidth = sizeWidth;
        this.laneSize = 40;
    }

    draw() {
        // background color
        fill(110, 255, 60);
        // full background
        rect(0, 0, this.sizeWidth, this.sizeHeight);

        // edge color
        fill(50, 50, 50);
        stroke(50, 50, 50);

        // top edge
        rect(0, 0, this.sizeWidth, this.laneSize);

        // bottom edge
        rect(0, this.sizeHeight - this.laneSize, this.sizeWidth, this.laneSize);

        // rigt edge
        rect(
            this.sizeWidth - this.laneSize,
            0 + this.laneSize,
            this.laneSize,
            this.sizeHeight - this.laneSize * 2
        );

        //left edge
        rect(
            0,
            0 + this.laneSize,
            this.laneSize,
            this.sizeHeight - this.laneSize * 2
        );
    }

    generate() {}
}

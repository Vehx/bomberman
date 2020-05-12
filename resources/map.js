class Map {
    constructor(sizeHeight, sizeWidth) {
        this.sizeHeight = sizeHeight;
        this.sizeWidth = sizeWidth;
        this.laneSize = 40;
    }

    draw() {
        // background color
        fill(50, 255, 50);
        // full background
        rect(0, 0, this.sizeWidth, this.sizeHeight);

        // top edge
        rect(0, 0, this.sizeWidth, this.laneSize);

        // bottom edge
        rect(0, this.sizeHeight - this.laneSize, this.sizeWidth, this.laneSize);

        // rigt edge
        rect(this.sizeWidth - this.laneSize, 0, this.laneSize, this.sizeHeight);

        //left edge
        rect(0, 0, this.laneSize, this.sizeHeight);
    }

    generate() {}
}

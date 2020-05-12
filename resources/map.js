class Map {
    constraints;
    constructor(
        sizeHeight,
        sizeWidth,
        walls,
        boxes,
        laneSize = 40,
        edgeColor = 50
    ) {
        this.sizeHeight = sizeHeight;
        this.sizeWidth = sizeWidth;
        this.laneSize = laneSize;
        this.walls = walls;
        this.boxes = boxes;
        this.edgeColor = edgeColor;
    }

    draw() {
        // background color
        fill(110, 255, 60);
        // full background
        rect(0, 0, this.sizeWidth, this.sizeHeight);

        // edge color
        fill(this.edgeColor);
        stroke(this.edgeColor);

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
        this.generate();
    }

    generate() {
        for (
            let i = this.laneSize;
            i < this.sizeHeight - this.laneSize;
            i += this.laneSize
        ) {
            for (
                let j = this.laneSize;
                j < this.sizeWidth - this.laneSize;
                j += this.laneSize
            ) {
                new Box().BoxStyle(j, i);
            }
        }
    }
}

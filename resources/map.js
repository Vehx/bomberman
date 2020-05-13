class Map {
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
        this.constraints = [];
        this.currentMap = [];
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

        for (let i = 0; i < this.currentMap.length; i++) {
            // console.log(this.currentMap[i]);

            for (let j = 0; j < this.currentMap[i].length; j++) {
                switch (this.currentMap[i][j]) {
                    case "b":
                        // console.log("Box");

                        new Box().BoxStyle(
                            i * this.laneSize,
                            j * this.laneSize
                        );
                        break;
                    default:
                        break;
                }
            }
        }
    }

    generate() {
        // test generation map using cordinates
        // let rowHeight = floor(this.sizeHeight / this.laneSize);
        // let rowWidth = floor(this.sizeWidth / this.laneSize);
        // for (let i = 2; i < rowHeight - 1; i += 2) {
        //     for (let j = 2; j < rowWidth - 1; j += 2) {
        //         new Box().BoxStyle(j * this.laneSize, i * this.laneSize);
        //     }
        // }
        // test generation of map template array, can maybe be used for constraints
        // let rowHeight = floor(this.sizeHeight / this.laneSize);
        // let rowWidth = floor(this.sizeWidth / this.laneSize);
        // let currentRow;
        // // var newMap;
        // for (let i = 0; i < rowHeight; i++) {
        //     for (let j = 0; j < rowWidth; j++) {
        //         if (i === 0 || i === rowHeight || j === 0 || j === rowWidth) {
        //             currentRow[i][j] = "x";
        //             // this.newMap[i][j] = "x";
        //         } else {
        //             currentRow[i][j] = ["b"];
        //             // this.newMap[i][j] = "b";
        //         }
        //         console.log(this.newMap[i][j]);
        //     }
        //     this.constraints[i] = currentRow;
        //     currentRow = [];
        // }
        // return this.newMap;
        // return this.constraints;
        // test generation full map of boxes
        // for (
        //     let i = this.laneSize;
        //     i < this.sizeHeight - this.laneSize;
        //     i += this.laneSize
        // ) {
        //     for (
        //         let j = this.laneSize;
        //         j < this.sizeWidth - this.laneSize;
        //         j += this.laneSize
        //     ) {
        //         new Box().BoxStyle(j, i);
        //     }
        // }
        let createdMap = this.createMap();
        createdMap[1][1] = "p";
        createdMap[1][2] = "s";
        createdMap[2][1] = "s";
        createdMap[2][2] = "w";
        createdMap[2][4] = "w";
        createdMap[1][1] = "w";
        return createdMap;
    }

    createMap() {
        // test generation of map template array, can maybe be used for constraints
        let totalRows = floor(this.sizeHeight / this.laneSize);
        let lengthOfRows = floor(this.sizeWidth / this.laneSize);
        let currentRow = [];
        let newMap = [];
        for (let i = 0; i < totalRows; i++) {
            for (let j = 0; j < lengthOfRows; j++) {
                if (
                    i === 0 ||
                    i === totalRows - 1 ||
                    j === 0 ||
                    j === lengthOfRows - 1
                ) {
                    currentRow[j] = "x";
                } else {
                    currentRow[j] = "b";
                }
                // console.log(currentRow[j]);
            }
            // console.log(currentRow);
            this.constraints.push(currentRow);
            this.currentMap.push(currentRow);
            newMap.push(currentRow);
            currentRow = [];
        }
        // console.log(this.constraints);

        // return "test";
        return newMap;
        // return this.constraints;
    }
}

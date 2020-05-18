class Map {
    constructor(sizeHeight, sizeWidth, laneSize = 40, edgeColor = 50) {
        this.sizeHeight = sizeHeight;
        this.sizeWidth = sizeWidth;
        this.laneSize = laneSize;
        this.edgeColor = edgeColor;
        this.constraints = [];
        this.currentMap = [];
        this.spawns = [];
    }

    draw() {
        // background color
        fill(110, 255, 60);
        // full background
        rect(0, 0, this.sizeWidth, this.sizeHeight);

        // draws everything from the map
        for (let i = 0; i < this.currentMap.length; i++) {
            for (let j = 0; j < this.currentMap[i].length; j++) {
                if (typeof this.currentMap[i][j].show === "function") {
                    this.currentMap[i][j].show();
                }
            }
        }
    }

    generate() {
        // gets a new map and changes some squares of the play field to be walls and empty space
        let createdMap = this.createMap();

        // genarates objects from map blueprint
        for (let i = 0; i < this.currentMap.length; i++) {
            for (let j = 0; j < this.currentMap[i].length; j++) {
                switch (this.currentMap[i][j]) {
                    case "b":
                        this.constraints[i][j] = new Box(
                            this.laneSize,
                            j * this.laneSize,
                            i * this.laneSize
                        );
                        break;
                    case "w":
                        this.constraints[i][j] = new Wall(
                            this.laneSize,
                            j * this.laneSize,
                            i * this.laneSize
                        );
                        break;
                    case "p":
                        this.spawns.push([
                            i * this.laneSize,
                            j * this.laneSize,
                        ]);
                        break;

                    default:
                        break;
                }
            }
        }
        return createdMap;
    }

    createMap() {
        // generates a new map, currently static, will fill entire play field with boxes
        let totalRows = floor(this.sizeHeight / this.laneSize);
        let lengthOfRows = floor(this.sizeWidth / this.laneSize);
        let currentRow = [];

        // w = wall, b = box, p = player spawn pos, s = empty space near player spawn, e = empty square
        for (let i = 0; i < totalRows; i++) {
            for (let j = 0; j < lengthOfRows; j++) {
                // fills edges with walls
                if (
                    // top edge
                    i === 0 ||
                    // bottom edge
                    i === totalRows - 1 ||
                    // left edge
                    j === 0 ||
                    // right edge
                    j === lengthOfRows - 1
                ) {
                    currentRow[j] = "w";
                }

                // marks player spawn squares
                else if (
                    // player 1 spawn
                    (i === 1 && j === 1) ||
                    // player 2 spawn
                    (i === totalRows - 2 && j === lengthOfRows - 2) ||
                    // player 3 spawn
                    (i === 1 && j === lengthOfRows - 2) ||
                    // player 4 spawn
                    (i === totalRows - 2 && j === 1)
                ) {
                    currentRow[j] = "p";
                }
                // marks player spawn areas so they stay empty
                else if (
                    // player 1 spawn area
                    (i === 1 && j === 2) ||
                    (i === 2 && j === 1) ||
                    // player 2 spawn area
                    (i === totalRows - 2 && j === lengthOfRows - 3) ||
                    (i === totalRows - 3 && j === lengthOfRows - 2) ||
                    // player 3 spawn area
                    (i === 1 && j === lengthOfRows - 3) ||
                    (i === 2 && j === lengthOfRows - 2) ||
                    // player 4 spawn area
                    (i === totalRows - 2 && j === 2) ||
                    (i === totalRows - 3 && j === 1)
                ) {
                    currentRow[j] = "s";
                }
                // marks grid of walls across the map
                else if (i % 2 == 0 && j % 2 == 0) {
                    currentRow[j] = "w";
                }
                // marks random squares for boxes
                else if (floor(random(2))) {
                    currentRow[j] = "b";
                }
                // marks any unmarked squares empty
                else {
                    currentRow[j] = "e";
                }
            }
            this.constraints.push(currentRow);
            this.currentMap.push(currentRow);
            currentRow = [];
        }
    }
}

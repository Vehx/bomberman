function preload() {
    // if there is assets like images that need to loadead before setup or draw
}

function setup() {
    createCanvas(640, 480);
    gameMap = new Map(height, width);
    const generatedMap = gameMap.generate();
}

function draw() {
    gameMap.draw();
}

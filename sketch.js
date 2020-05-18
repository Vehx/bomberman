function preload() {
    // if there is assets like images that need to loadead before setup or draw
}

function setup() {
    createCanvas(600, 520);
    gameMap = new Map(height, width, 40);
    gameMap.generate();
}

function draw() {
    gameMap.draw();
}

function preload() {
    // if there is assets like images that need to loadead before setup or draw
}

function setup() {
    createCanvas(640, 480);
    player1 = new Player(60, 60, 35, 155);
    // player2 = new Player(220, 220, 35, 75);
    gameMap = new Map(height, width);
    const generatedMap = gameMap.generate();
}

function draw() {
    gameMap.draw();
    player1.playerWalk();
    player1.playerShow();
    // player2.playerWalk();
    // player2.playerShow();
}

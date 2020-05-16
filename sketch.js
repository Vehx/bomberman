function preload() {
    // if there is assets like images that need to loadead before setup or draw
}

function setup() {
    createCanvas(640, 480);
    player1 = new Player(60, 60, 36, 155);
    // player2 = new Player(220, 220, 35, 75);
    gameMap = new Map(height, width);
    box1 = new Box(40, 120, 80);
    wall1 = new Wall(40, 80, 80);
    const generatedMap = gameMap.generate();
    console.log(box1.x, box1.y);
}

function draw() {
    gameMap.draw();
    box1.BoxStyle();
    wall1.draw();
    let p1x = player1.posistionX();
    let p1y = player1.posistionY();
    player1.playerWalk();
    if (player1.checkCollision(box1) || player1.checkCollision(wall1)) {
        // if (player1.checkCollision(box1)) {
        player1.x = p1x;
        player1.y = p1y;
        console.log("collision");
    }
    player1.playerShow();

    // player2.playerWalk();
    // player2.playerShow();
}

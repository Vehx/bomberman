function preload() {
    // if there is assets like images that need to loadead before setup or draw
}

function setup() {
    createCanvas(640, 480);
    players = [new Player(60, 60, 32, 155), new Player(220, 220, 32, 75)];
    // players.push(new Player(60, 60, 32, 155));
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
    // let p1x = player1.posistionX();
    // let p1y = player1.posistionY();
    // player1.playerWalk();
    // if (player1.checkCollision(box1) || player1.checkCollision(wall1)) {
    //     // if (player1.checkCollision(box1)) {
    //     player1.x = p1x;
    //     player1.y = p1y;
    //     console.log("collision");
    // }
    // player1.playerShow();

    for (let i = 0; i < players.length; i++) {
        players[i].savePos();
        players[i].walk();
        for (let j = 0; j < gameMap.contraints.length; j++) {
            if (players[i].checkCollision(gameMap.contraints[j])) {
                players[i].x = players[i].prevX;
                players[i].y = players[i].prevY;
            }
            gameMap.contraints[j];
        }
        for (let k = 0; k < players.length; k++) {
            if (k != i && players[i].checkCollision(players[k])) {
                players[i].x = players[i].prevX;
                players[i].y = players[i].prevY;
            }
        }
        players[i].show();
    }
    // player2.playerWalk();
    // player2.playerShow();
}

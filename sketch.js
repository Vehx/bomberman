function preload() {
    // if there is assets like images that need to loadead before setup or draw
}

function setup() {
    createCanvas(600, 520);
    players = [new Player(60, 60, 32, 155), new Player(220, 220, 32, 75)];
    gameMap = new Map(height, width, 40);
    gameMap.generate();
}

function draw() {
    gameMap.show();
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
}

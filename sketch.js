function preload() {
    // if there is assets like images that need to loadead before setup or draw
}

function setup() {
    createCanvas(600, 520);
    gameMap = new Map(height, width, 40);
    gameMap.generate();
    // players = [new Player(60, 60, 32, 155), new Player(220, 220, 32, 75)];
    players = [new Player(60, 60, 32, 155)];
}

function draw() {
    gameMap.show();
    for (let i = 0; i < players.length; i++) {
        players[i].savePos();
        players[i].walk();
        for (let j = 0; j < gameMap.constraints.length; j++) {
            for (let k = 0; k < gameMap.constraints[j].length; k++) {
                if (players[i].checkCollision(gameMap.constraints[j][k])) {
                    players[i].x = players[i].prevX;
                    players[i].y = players[i].prevY;
                }
            }
        }
        for (let l = 0; l < players.length; l++) {
            if (l != i && players[i].checkCollision(players[l])) {
                players[i].x = players[i].prevX;
                players[i].y = players[i].prevY;
            }
        }
        players[i].show();
    }
}

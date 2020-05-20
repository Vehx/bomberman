function preload() {
    // if there is assets like images that need to loadead before setup or draw
}

function setup() {
    createCanvas(900, 780);
    gameMap = new Map(height, width, 60);

    gameMap.generate();
    // players = [
    //     new Player(gameMap.spawns[0][0], gameMap.spawns[0][1], 32, 155),
    //     new Player(gameMap.spawns[3][0], gameMap.spawns[3][1], 32, 75),
    // ];
    players = [
        new Player(gameMap.spawns[0][0], gameMap.spawns[0][1], 50, 155, 1),
    ];
}

function keyPressed() {
    if (keyCode === CONTROL) {
        players[0].placeBomb();
    }
    if (keyCode === 32) {
        players[1].placeBomb();
    }
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

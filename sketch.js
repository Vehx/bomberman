let interface;
let GameStart;

function preload() {
    // if there is assets like images that need to loadead before setup or draw
    interface = new Interface();
    GameStart = interface.GameStart;
}

function setup() {
    interface.StartEvent();
    createCanvas(900, 780);
    const squareScale = 60;
    gameMap = new Map(height, width, squareScale);

    gameMap.generate();
    players = [
        new Player(
            gameMap.spawns[0][0],
            gameMap.spawns[0][1],
            squareScale - 10,
            "red",
            0
        ),
        new Player(
            gameMap.spawns[3][0],
            gameMap.spawns[3][1],
            squareScale - 10,
            "blue",
            1
        ),
    ];
}

function keyPressed() {
    if (keyCode === 190) {
        players[0].placeBomb();
    }
    if (keyCode === 32) {
        players[1].placeBomb();
    }
}

function draw() {
    if (interface.GameShow) {
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

                players[i].bombs.forEach((bomb) => {
                    const cords = bomb.cords;
                    if (bomb.exploded) {
                        for (let m = 0; m < cords.length; m++) {
                            for (let n = 0; n < players.length; n++) {
                                if (players[n].hitByBomb(cords[m])) {
                                    console.log("Im ded", players[n].hatColor);
                                }
                            }
                        }
                    }
                });
            }
            players[i].show();
        }
    }
}

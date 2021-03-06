
let interface;
let GameStart;
let playerLost;
 
    function preload() {
        // if there is assets like images that need to loadead before setup or draw
        
        interface = new Interface();
     
    }

    function setup() {
        
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
                0,
            ),
            new Player(
                gameMap.spawns[3][0],
                gameMap.spawns[3][1],
                squareScale - 10,
                "blue",
                1,

            ),
        ];
     
    }

    function keyPressed() {
        if (interface.GameShow) {
            // period
            if (keyCode === 190) {
                players[0].placeBomb();
            }
            //spacebar
            if (keyCode === 32) {
                players[1].placeBomb();
                
            }
        }
    }

function draw() {
  
    

   interface.StartEvent(players)
  
    if (interface.GameShow) {
        gameMap.show();
        for (let i = 0; i < players.length; i++) {
            players[i].savePos();
            players[i].walk();
            // check for collision with boxes and walls
            for (let j = 0; j < gameMap.constraints.length; j++) {
                for (let k = 0; k < gameMap.constraints[j].length; k++) {
                    if (players[i].checkCollision(gameMap.constraints[j][k])) {
                        players[i].x = players[i].prevX;
                        players[i].y = players[i].prevY;
                    }
                }
            }
            // check for collision with other players
            for (let l = 0; l < players.length; l++) {
                if (l != i && players[i].checkPlayerCollision(players[l])) {
                    players[i].x = players[i].prevX;
                    players[i].y = players[i].prevY;
                }
                // check if bomb explosions hit players
                players[i].bombs.forEach((bomb) => {
                    const cords = bomb.cords;
                    if (bomb.exploded) {
                        for (let m = 0; m < cords.length; m++) {
                            for (let n = 0; n < players.length; n++) {
                                if (players[n].hitByBomb(cords[m])) {
                                    // game ends futherdown calls on endfunction
                                    interface.GameEnd = true;
                                    playerLost = players[n].name
                                 
                                
                                }
                            }
                            for (let o = 0; o < gameMap.constraints.length; o++) {
                                for (let p = 0; p < gameMap.constraints[o].length; p++) {
                                    if (typeof gameMap.constraints[o][p].hitByBomb === "function" && gameMap.constraints[o][p].hitByBomb(cords[m])) {
                                        gameMap.emptySquare(gameMap.constraints[o][p].x, gameMap.constraints[o][p].y);
                                    }
                                }
                            }
                        }
                    }
                });
            }
            players[i].show();
        }
    }
    if (interface.GameEnd) {
        //end function
        interface.EndEvent(playerLost, players, gameMap);
    }
}


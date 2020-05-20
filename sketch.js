let interface;
let GameStart;

function preload() {
    // if there is assets like images that need to loadead before setup or draw
    interface = new Interface()
    GameStart = interface.GameStart
    
}

function setup() {
      interface.StartEvent()
       createCanvas(600, 520);
       players = [new Player(60, 60, 32, 155), new Player(220, 220, 32, 75)];
       gameMap = new Map(height, width, 40);
       gameMap.generate();
  
    //console.log(gameMap.constraints);
}
function draw() {
if(interface.GameShow){
    gameMap.show();
    for (let i = 0; i < players.length; i++) {
        players[i].savePos();
        players[i].walk();
        for (let j = 0; j < gameMap.constraints.length; j++) {
            if (players[i].checkCollision(gameMap.constraints[j])) {
                players[i].x = players[i].prevX;
                players[i].y = players[i].prevY;
            }
            gameMap.constraints[j];
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

    
}

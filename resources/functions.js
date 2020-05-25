const resetPlayers = (players, gameMap,boolNames) => {
    const squareScale = 60;
    gameMap.generate();
    let i = 0;
    players.forEach((player) => {
        player.bombs = [];
        player.currentBombCount = 0;
        players[i].x = i == 0 ? gameMap.spawns[0][0] : gameMap.spawns[3][0];
        players[i].y = i == 0 ? gameMap.spawns[0][1] : gameMap.spawns[3][1];
        if (boolNames){
            players[i].name = undefined;
        }
        i++;
    });
   
};

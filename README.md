
![bomberman](readme_bomberman.png)

# <div align="center"><img src="readme_game.jpg" width="65%"></div>


[![Netlify Status](https://api.netlify.com/api/v1/badges/02d70db9-08b0-44b1-ada8-6149d26a6a20/deploy-status)](https://app.netlify.com/sites/friendly-montalcini-a82d00/deploys)

![](https://badgen.net/github/prs/vehx/bomberman)
![](https://badgen.net/github/license/vehx/bomberman)

# Bomberman  
# <hr>
## The Game
#### Bomberman a 2player game to challenge your friends in a boxy world and some explosion 
#### [Link to GameSite](https://friendly-montalcini-a82d00.netlify.app/)

## Instalation
- clone/download
- start a development local Server, recommended live server in vscode

## Features
* Play  
    - [x] Walk around map
    - [x] Place bomb
    - [x] Break boxes with Bomb
    - [x] Die by Bomb explsion
    - [x] Frendly fire
* Start
    - [x] Set player1 and player2 name
    - [x] Game starts
* Restart
    - [x] Keep players name
    - [x] New game starts
* New game
    - [x] Set new Player1 and Player2 name 
    - [x] New game starts
* Controls Player 1:
    - [x] Movement: Arrow keys 
    - [x] Place Bomb: Period
* Controls Player 2: 
    - [x] Movement: WASD keys
    - [x] PlaceBomb: Spacebar


## Built with
* [p5.js JavaScript library](https://p5js.org/)
* Vanila JavaScript
* CSS/HTML

## Authors
* [Bernhard](https://github.com/Vehx)
* [Marcus Augustsson](https://github.com/MarcusIsCode)

## Testers  
* Louise
* Simon
* [Julia](https://github.com/Juljulia)
* [Mark](https://github.com/deinnielle)

### Code Review 
* bomb.js:17-20 - _explostionSize is not needed in the constructor if it is used as a constant variable.
* player.js:22-25 - Consider using a forEach loop when defining eachs player's keyCodes.
* sketch.js - Consider placing this file inside the resources directory with all other script files.
* interfaceDoom.js - This file is named differenty to the class that is inside. Consider changing the name and creating its own class directory outside of the interface directory.
* Bomb - This directory is the only one starting with a capital letter. Try to be consistent when naming directories.
* interface.js - It's good that you have validations here for checking that the usernames aren't empty, but you should also validate that usernames are not too long.
* interface.js - It is good practise to ensure that the usernames can't be just empty spaces.
* At the moment bombs can be dropped while entering player names before playing. Consider restricting game functionality until the game begins.
* Overall - Clear and informative comments throughout all project files.
* Overall - Game has clearly defined starting and ending states, and the code overall is well structured with object-oriented programming principles.


#### &nbsp; By:  [Jesper Lundqvist](https://github.com/jesperlndqvst) & [Dominic Kersch](https://github.com/AltDom)
<!--review-->



 class Interface {
  
    constructor(){
       
        this.GameStart;
        this.GameShow = false;
        this.playerNames=[];
        this.printEndonce = true;
        this.GameEnd = false; 
 
    }
 

    StartEvent(playersArray) {
        if(this.GameShow === false){
          

            new popUpStyle(true, 1, ["START"]);
            const popUpContainer = document.querySelector('.popUpContainer')
            const eventButton = document.querySelector(".eventBtn");
            const message = document.querySelector('.message')
                  message.innerHTML = "Write your names and hit START to Start Bombing "
        if (playersArray[0].name == undefined){

           eventButton.addEventListener("click", () => {
            if (this.playerNames !== undefined) {
                this.StartBtnEvent(eventButton, popUpContainer)
                playersArray[0].name = this.playerNames[0]
                playersArray[1].name = this.playerNames[1]
               
            }
            });
        }
            this.GameStart = noLoop()
        }   
    }
    

   

    StartBtnEvent(eventButton,popUpContainer){
            const errorMsg = document.querySelector('.message')
                  errorMsg.classList.add('errorMessage')
                  
            const player1 = select(".ìnputPlayer1").value()
            const player2 = select(".ìnputPlayer2").value()

            if(player1.length < 1 || player2.length< 1){
                eventButton.classList.add('error')
                 errorMsg.innerHTML = "You forgot to write your names"
              
            }else{
                // Todo uppdate: add animation for it to fade away or go away etc
                 //Todo uppdate:  add timer that counts down to from 3 to 0
                eventButton.classList.remove('error')
                popUpContainer.remove()
                this.playerNames=[player1,player2]
                //starts the game
                this.GameShow =true;
                this.GameStart = loop();
        }
        
           
        
    }
    EndEvent(playerLost,players,gameMap) {
        const playerWon = this.playerNames.filter(name => name !== playerLost) 
      
        this.GameStart = noLoop()
        
        if (this.GameEnd && this.printEndonce) {
            this.popUpWindow = new popUpStyle(false, 2, ["Restart","New Game"])
            this.printEndonce = false;
        }


        if(this.printEndonce === false){
            const endContainer = document.querySelector('.popUpContainer')
            const restartButton = document.querySelector(".eventBtn");
            const newGame = document.querySelectorAll(".eventBtn")[1];
           
            const message = document.querySelector(".message")
                  message.classList.add('wonMessage');
                  message.innerHTML = `congratulations You Won <u><b><br>${playerWon[0]}<br><b></u>`;


           
                   restartButton.addEventListener("click", () => {
                        
                      resetPlayers(players,gameMap)
                      endContainer.remove();
                      this.GameEnd = false;
                      this.GameStart = loop()
                      this.printEndonce = true;
                    });

                    newGame.addEventListener('click',()=>{
                        endContainer.remove();
                        resetPlayers(players, gameMap)
                       
                        this.GameEnd = false;
                        this.printEndonce = true;
                        this.playerNames = [];
                        this.GameShow = false;
                        this.GameStart = loop()
                    })
          
        }

    }
    
}

 
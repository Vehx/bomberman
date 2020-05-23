
class Interface {
  
    constructor(){
        this.popUpWindow = new popUpStyle("START", true);
        this.startContainer = document.querySelector('.startContainer')
        this.eventButton = document.querySelectorAll(".eventBtn")[0];
        
        this.GameStart = noLoop();
        this.GameShow = false;
        this.playerNames=[];
        this.printEndonce = true;
        this.GameEnd = false 
    }
    StartEvent(playersArray) {
        if (playersArray[0].name == undefined){
            
            this.eventButton.addEventListener("click", () => {
            if (this.playerNames !== undefined) {
                playersArray[0].name = this.playerNames[0]
                playersArray[1].name = this.playerNames[1]
                this.StartBtnEvent()
            }
            });
        }
       

    }
    

   

    StartBtnEvent(){
            const errorMsg = document.querySelector('.message')
                  errorMsg.classList.add('errorMessage')
            const player1 = select(".ìnputPlayer1").value()
            const player2 = select(".ìnputPlayer2").value()

            if(player1.length < 1 || player2.length< 1){
                this.eventButton.classList.add('error')
                 errorMsg.innerHTML = "You forgot to write your names"
              
            }else{
                // add animation for it to fade away or go away etc
                 // add timer that counts down to from 3 to 0
                this.eventButton.classList.remove('error')
                this.startContainer.classList.add('remove')
                this.playerNames=[player1,player2]
                this.GameShow =true;
                this.GameStart = loop();
                this.popUpWindow = null;

        }
        
           
        
    }
    EndEvent(playerLost,players,gameMap) {
        const playerWon = this.playerNames.filter(name => name !== playerLost) 
      
        this.GameStart = noLoop()
        
        if (this.GameEnd && this.printEndonce) {
            this.popUpWindow = new popUpStyle("Restart", false)
            this.printEndonce = false;
        }


        if(this.printEndonce === false){
            const endContainer = document.querySelectorAll('.startContainer')[1]
            const restartButton = document.querySelectorAll(".eventBtn")[1];
            const message = document.querySelectorAll(".message")[1];
                  message.classList.add('wonMessage');
                  message.innerHTML = `congratulations You Won <br><br><u><b> ${playerWon[0]}<b></u>`;
         
                  restartButton.addEventListener("click", () => {
                     //functionsw
                      resetPlayers(players,gameMap)
                      endContainer.remove();
                      this.GameEnd = false;
                      this.GameStart = loop()
                      this.printEndonce = true;
                    });
          
        }

    }
    
}

//setting up Start html and classes for game start
class popUpStyle {
     // add instuktions for controlls
    constructor(textBtn,Bool){

        this.StartContainer = createDiv().class('startContainer');
        this.headline(this.StartContainer);
        this.message(this.StartContainer);
        if(Bool){
            this.nameContainer = createDiv().class('players').parent(this.StartContainer);
            this.playerForm(1, this.nameContainer);
            this.playerForm(2, this.nameContainer);
        }
      

        this.eventButton(this.StartContainer, textBtn);
    }
    
    headline(parent){
        this.h1 = createElement('h1', "Bomberman")
        this.h1.parent(parent)
    }
    message(parent){
        this.errorMsg = createP('').class("message")
        this.errorMsg.parent(parent)
    }
    playerForm(num,parent){
        this.playerBox = createDiv()
                        

        this.PlayerName = createInput()
                          .attribute('placeholder', `Player${num} name:`)
                          .class(`ìnputPlayer${num}`)
                          .parent(this.playerBox);
    
        this.playerBox.parent(parent)
    }
    eventButton(parent,text){
        this.eventBtn = createButton(text)
                           .class(`eventBtn`)
                         
                           .parent(parent)
        return this.eventtBtn
    }
}
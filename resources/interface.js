
class Interface {
    constructor(){
        this.StartObj = new StartStyle();
        this.startContainer = document.querySelector('.startContainer')
        this.StartButton = document.querySelector(".startBtn");
        this.GameStart = noLoop();
        this.GameShow = false;
        this.playerNames=[];
    }
    StartEvent(){
      
        this.StartButton.addEventListener("click",()=>{
            this.StartBtnEvent()
          
        });

        
    }
    StartBtnEvent(){
            const errorMsg = document.querySelector('.errorStart')
            const player1 = select(".ìnputPlayer1").value()
            const player2 = select(".ìnputPlayer2").value()

            if(player1.length < 1 || player2.length< 1){
                this.StartButton.classList.add('error')
                 errorMsg.innerHTML = "You forgot to write your names"
              
            }else{
                // add animation for it to fade away or go away etc
                 // add timer that counts down to from 3 to 0
                this.StartButton.classList.remove('error')
                this.startContainer.classList.add('remove')
                this.playerNames=[player1,player2]
                this.GameShow =true;
                this.GameStart =loop();
                
           
        }
        
           
        
    }
  
    
}

//setting up Start html and classes for game start
class StartStyle {
     // add instuktions for controlls
    constructor(){
        this.StartContainer = createDiv().class('startContainer');
        this.headline(this.StartContainer);
        this.errorMessage(this.StartContainer);

        this.nameContainer = createDiv().class('players').parent(this.StartContainer);
        this.playerForm(1,this.nameContainer);
        this.playerForm(2,this.nameContainer);

        this.StartButton(this.StartContainer);
    }
    
    headline(parent){
        this.h1 = createElement('h1', "Bomberman")
        this.h1.parent(parent)
    }
    errorMessage(parent){
        this.errorMsg = createP('').class("errorStart")
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
    StartButton(parent){
        this.StartBtn = createButton('START')
                           .class('startBtn') 
                           .parent(parent)
        return this.StartBtn
    }
}
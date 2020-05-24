//setting up Start html and classes for game start
class popUpStyle {
    // add instuktions for controlls
    constructor(inputBool, numOfbtns, textBtnArray) {

        this.popUpContainer = createDiv().class('popUpContainer');
        this.headline(this.popUpContainer);
        this.message(this.popUpContainer);
        if (inputBool) {
            this.nameContainer = createDiv().class('players').parent(this.popUpContainer);
            this.playerForm(1, this.nameContainer);
            this.playerForm(2, this.nameContainer);
        }
        this.btnContainer = createDiv().class("btnContainer").parent(this.popUpContainer)
        for (let i = 0; i < numOfbtns; i++) {
            //Todo name array

            this.eventButton(this.btnContainer, textBtnArray[i]);
        }

    }

    headline(parent) {
        this.h1 = createElement('h1', "Bomberman")
        this.h1.parent(parent)
    }
    message(parent) {
        this.errorMsg = createP('').class("message")
        this.errorMsg.parent(parent)
    }
    playerForm(num, parent) {
        this.playerBox = createDiv()


        this.PlayerName = createInput()
            .attribute('placeholder', `Player${num} name:`)
            .class(`ìnputPlayer${num}`)
            .parent(this.playerBox);

        this.playerBox.parent(parent)
    }

    eventButton(parent, text) {

        this.eventBtn = createButton(text)
            .class(`eventBtn`)
            .parent(parent)
        return this.eventBtn
    }
} 
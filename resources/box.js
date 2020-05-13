class Box {
    constructor(_boxsize,positionX,positionY){
        this.boxsize = _boxsize
        this.x = positionX;
        this.y= positionY;
        this.curvs =2;
        this.background = color(132, 66, 4);
    
    }


    BoxStyle() {

        fill(this.background);
        stroke(0);
        strokeWeight(1);
        
        let x2 = this.x + 4;
        let y2 = this.y + 4;
        const box1size =this.boxsize;
        const box2size = box1size - 8
        const lines = 6;
        
        rect(this.x, this.y, box1size, box1size, this.curvs)
        rect(x2, y2, box2size, box2size)
        for (let index = 0; index < box2size; index += box2size / lines) {
            line(x2, y2 + index, box2size + x2, y2 + index);
        }
    } 

    
}

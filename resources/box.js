class Box {
    curvs = 2;
    boxsize = 40;
    background = color(132, 66, 4);


    BoxStyle(xPosition, yPosition) {

        fill(this.background);
        stroke(0);
        strokeWeight(1);
        let x = xPosition;
        let y = yPosition;
        let y2 = y + 4;
        let x2 = x + 4;
        const box1size =this.boxsize;
        const box2size = box1size - 8
        const lines = 6;
        rect(x, y, box1size, box1size, this.curvs)
        rect(x2, y2, box2size, box2size)
        for (let index = 0; index < box2size; index += box2size / lines) {
 
            line(x2, y2 + index, box2size + x2, y2 + index);

        }
    }
    splinter(start,x, y){
        const size = this.boxsize;
        fill(this.background)
        stroke(this.background)
       
        beginShape();
        //      x     y
        //start position
        vertex(start,start);
        //direccton
        vertex(x-3,y+10);
        //length
        vertex(x+0, y+30);
        //direction
        vertex(x+2, y+10);
        endShape()
      
    }

}

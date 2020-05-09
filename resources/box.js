class Box {
    
    width = 35
    height= 35
    curvs = 2;

  

    Box(xPosition,yPosition){
       rect(xPosition,yPosition,this.width, this.height,this.curvs) 
        let c = color(0, 126, 255, 102);
        fill(c);
    }

}
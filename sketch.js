function preload(){
    // if there is assets like images that need to loadead before setup or draw
}

function setup() {
    createCanvas(640, 480);
  
}

function draw() {
    new Box().BoxStyle(10,10)
    new Box().splinter(100,100,100)
}
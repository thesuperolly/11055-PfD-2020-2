// START

// DRAW PORTAIT

// (A1.0) SET Centre Point.
var cPoint = 200;

// (A1.1) Create Canvas
function setup() {
    createCanvas(400, 400);
    //Set background colour
    background(220);
  }


  function draw() {
//(A.2) Head Outline
beginShape()
fill("#ffddbb");
  bezier(50, 200, 100, 450, 300, 450, 350, 200);
  bezier(50, 200, 0, -50, 400, -50, 350, 200);
endShape()
  }



// END
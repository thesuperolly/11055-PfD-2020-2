document.write ("Hello World2");
/* this is my JS code to draw a face. It will be called by the Main.html file.
*/
let segLength = 10, // This is to try and have eyes follow the mouse
  x,
  y,
  x2,
  y2;

/* this is having a play around with importing pictures.
function preload(){
    mouthPicture = loadImage('11055-PfD-2020-2\project1\s440002\U103850\Project 1\Mouth.png'); //trying to load an image of a mouth
}
*/

function setup() {
createCanvas(400, 400); //This is to create the initial workspace on which the face is drawn. Size can me modified.

x = width / 2.5;      //This is for the eye follow code
y = height / 2.5;
x2 = x;
y2 = y;
}

function draw() {
chooseBackgroundColour();
drawFace();

/* This is the function that calls the individual elements of the face. This is a test */
function drawFace(){
    drawHead();
    drawEyes();
    drawMouth();    
    drawNose();
    drawEar();
    drawShoulders();
    dragSegment(0, mouseX, mouseY);     // this is for the eye follow code
    for (let i = 0; i < x.length - 1; i++) {
      dragSegment(i + 1, x[i], y[i]);
    }
}

}
function dragSegment(i, xin, yin) {
//    background(0);
  
    dx = mouseX - x;
    dy = mouseY - y;
    angle1 = atan2(dy, dx);
  
    tx = mouseX - cos(angle1) * segLength;
    ty = mouseY - sin(angle1) * segLength;
    dx = tx - x2;
    dy = ty - y2;
    angle2 = atan2(dy, dx);
    x = x2 + cos(angle2) * segLength;
    y = y2 + sin(angle2) * segLength;
  
    segment(x, y, angle1);
    segment(x2, y2, angle2);
  }
  
  function segment(x, y, a) {
    push();
    translate(x, y);
    rotate(a);
    line(0, 0, segLength, 0);
    pop();
  }
  


  function chooseBackgroundColour(){  //holder for user input to background colour that is randomised on mouseclick 
r = random(255); // random number between 0 - 255, for Red value
g = random(100, 200); // random numbner between 100 - 200, for Green value
b = random(100); // random number between 0 - 100 for blue value
a = random(200, 255); // random number between 200 -255   

/*function for changing the background colour to a random value when mouse is clicked (mouseIsPressed function) */
if (mouseIsPressed){
    background(r, g, b, a);
}else {
}

}


//This fucntion will draw the head as an elipsis
function drawHead(){
    push();
    fill(255, 255, 0);
    ellipse(width/2, height/2, 200, 250);
    pop();
}

// This function will draw 2 eyes and randomise the colour on mouseclick
function drawEyes(){ 
push();
    ellipseMode(RADIUS); //this draws the outside of left eye
    fill(255); //eye colour
    ellipse(width/2.5, height/2.5, 30, 30); //eye position
    ellipseMode(CENTER); //this draws the inside of the left eye
    fill(100); //inside eye colour
    ellipse(width/2.5, height/2.5, 20, 20); //inside eye position

    ellipseMode(RADIUS);
    fill(255);
    ellipse(width/1.7, height/2.5, 30, 30);
    ellipseMode(CENTER);
    fill(100);
    ellipse(width/1.7, height/2.5, 20, 20);            
pop();    
}


function drawNose(){
    push();
    fill(255, 255, 0);   
    arc(width/2, height/1.9, 20, 50, PI, 0); //simple arc drawing of a nose
    pop();
}

function drawMouth(){
push(); //this function removes style settings from other functions
fill('#e74545'); // this fills the lips a red colour
arc(width/1.8, height/1.6, 50, 20, PI, 0); //top lip half bubble 1
arc(width/2.3, height/1.6, 50, 20, PI, 0); //top lip half bubble 2

arc(width/2, height/1.6, 100, 40, 0 ,PI); // bottom lip radius
pop(); //this function removes style settings that are set in this function

}

function drawEar(){
fill(255, 255, 0);
    arc(width/4, height/2, 40, 60, 0, PI + HALF_PI, PI + HALF_PI, OPEN);
// arc(370, 265 40, 60, 0, PI + PI + HALF_PI, OPEN);
}

function drawShoulders(){
fill(255);
    arc(width/2, height/2, 40, 40, 40);

}
// Declare the variables.

// The scale factor adjusts the size of the plot relative to the original 200 x 200 pixel matrix
var scale_factor = 5;

// These variable are used later to cycle colours but initially I've set them to black.
var r_value = 0;
var g_value = 0;
var b_value = 0;

// Set up an appropriately sized canvas on which to plot the image.
function setup() {
    createCanvas(200 * scale_factor, 200 * scale_factor);
}

function draw() {
    clear();                                            // Clear the canvas.
    stroke(r_value, g_value, b_value);                  // Set the stroke colour.
    fill(r_value, g_value, b_value);                    // Set the fill colour.
    if (mouseIsPressed == true) {                       // Check to see if the mouse button is pressed ...
        r_value = Math.floor(Math.random() * 256);      // ... and choose some random colours if it has.
        g_value = Math.floor(Math.random() * 256);
        b_value = Math.floor(Math.random() * 256);
    }

/* This code interegates the array that was populated in "Coordinates.js". It goes line by line and
   retrieves the x and y values before applying the scale_factor to space them out and finally passes
   them to the circle function. */

    for (let line = 0; line < coordinates.length; line++) {
        x = (coordinates[line] [0]);
        y = (coordinates[line] [1]);
        x = x * scale_factor;
        y = y * scale_factor;
        diameter = Math.floor(Math.random() * 10) + 2;  // The circle diameter is randomised to
        circle(x, y, diameter);                         // produce the interesting movement illusion. 
    }
}
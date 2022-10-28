//setup function runs once at the start
function setup() {
    var canvas = createCanvas(600, 600);
    canvas.parent("p5container");
}

//draaw function is a continuous loop, runs from the start, at 60 fps
function draw() {
    background(220); //light grey background

    fill(255, 255, 255); //setting fill to rgb value for white
    ellipse(300, 300, 200); //circle being drawn on our canvas

    fill(0, 0, 0);
    square(0, 0, 200);
}
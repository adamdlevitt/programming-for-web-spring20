var s;
var scl = 35;
var food;

//setting up script - for added difficulty increase the framerate and/or play around with scl :) //

function setup() {
    createCanvas(1000, 1000)
    s = new Snake();
    frameRate(10);
    pickLocation();
}

//starting location//

function pickLocation() {
    var cols = floor(width/scl);
    var rows = floor(height/scl);
    food = createVector(floor(random(cols)), floor(random(rows)));
    food.mult(scl);
}


// draw function - adding new food and updating snake status //
function draw() {
    background(20);

    if (s.eat(food)) {
        pickLocation();
    }

    s.death();
    s.update();
    s.show();

    fill(255, 0, 150);
    rect(food.x, food.y, scl, scl);
}


// user input //

function keyPressed() {
    if (keyCode === UP_ARROW) {
        s.dir(0, -1);
    } else if (keyCode === DOWN_ARROW) {
        s.dir(0, 1);
    } else if (keyCode === RIGHT_ARROW) {
        s.dir(1, 0);
    } else if (keyCode === LEFT_ARROW) {
        s.dir(-1, 0);
    }
}
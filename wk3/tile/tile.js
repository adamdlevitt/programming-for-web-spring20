function setup() {
    createCanvas(200, 200);
}

function createTile() {
    // x and y
    translate(0, 0);
    // background
    fill('#000000');
    noStroke();
    rect(0, 0, 200, 200);
    // outer circle
    fill('#CA48B6');
    noStroke();
    circle(100, 100, 150);
    // arcs
    fill('FFFFFF');
    noStroke();
    arc(100, 100, 200, 200, 0, HALF_PI);
    arc(100, 100, 200, 200, PI, PI+HALF_PI);
    // triangles
    fill('#D99814');
    noStroke();
    triangle(100, 75, 150, 0, 200, 75);
    triangle(0, 125, 50, 200, 100, 125);
    // inner circle
    fill('#81FF00');
    circle(100, 100, 50);

}

function draw() {
    createTile();
    noLoop();
}
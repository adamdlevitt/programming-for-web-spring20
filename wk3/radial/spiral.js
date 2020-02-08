let rotateBy = 5;
function setup() {
    createCanvas(600, 600);
    background(0);
    angleMode(DEGREES);
}
function makeArm(rotateBy) {
    let alt = Math.round(rotateBy / 360)
    console.log(alt);
    noFill();
    stroke(255, 168, 0);
    rect(75, 75, 50 - alt, 50 + alt);
    stroke(250, 0, 255);
    ellipse(150, 150 / alt, 150 / alt);
    stroke(255, 0, 0);
    strokeWeight(2);
    triangle(0, 50, 25, 100, 50, 50);
    stroke(33, 255, 0);
    bezier(200, 300, 10, 10, 160 - alt, 90 - alt, 50, 80);
    stroke(0, 206, 255);
    circle(100, 100, 200);
}
function draw() {
    translate(300, 300);
    rotate(rotateBy) // rotates canvas
    makeArm(rotateBy);
    rotateBy += 5;
}
function mousePressed() {
    noLoop();
}
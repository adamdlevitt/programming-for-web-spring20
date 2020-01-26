let grid = undefined;
let stroke1 = prompt("enter a basic color name in lowercase", "gray");
let stroke2 = prompt("enter another basic color in lowercase", "purple");
function setup() {
    createCanvas(1000, 800);
    background("#C2E4E4");
    grid = loadImage("images/100px_grid.png");
}
function draw() {
    // background(grid)
    // mouse snow control
    if (mouseIsPressed) {
        fill(255, 255, 255);
        stroke(255, 255, 255);
        ellipse(mouseX, mouseY, 10, 10);}
        else {
            fill(0);
        }
    //large snowman
    // snowman legs
    fill("#f1f1f1");
    strokeWeight(15);
    stroke(stroke1);
    // left leg
    ellipse(150, 650, 200);
    // right leg
    ellipse(450, 650, 200);
    //body
    ellipse(300, 450, 350);
    //head
    ellipse(300, 200, 200);
    // hat brim
    fill("#da6416");
    stroke(stroke2);
    strokeWeight(15);
    line(200, 120, 400, 120);
    // hat body
    quad(250, 50, 350, 50, 350, 120, 250, 120);
    // eyes
    stroke(0);
    strokeWeight(30);
    point(225, 200);
    point(375, 200);
    // nose
    stroke("#da6416");
    strokeWeight(15);
    line(300, 200, 200, 250);
    // mouth
    noFill();
    stroke(0);
    strokeWeight(10);
    arc(300, 200, 80, 80, 0, HALF_PI);

    //small snowman
    // snowman legs
    fill("#f1f1f1");
    strokeWeight(15);
    stroke(stroke1);
    // left leg
    ellipse(700, 700, 100);
    // right leg
    ellipse(800, 700, 100);
    //body
    ellipse(750, 600, 175);
    //head
    ellipse(750, 500, 150);
    // hat brim
    fill("#da6416");
    stroke(stroke2);
    strokeWeight(15);
    line(650, 425, 850, 425);
    // hat body
    quad(700, 250, 800, 250, 800, 425, 700, 425);
    // eyes
    stroke(0);
    strokeWeight(10);
    point(730, 475);
    point(770, 475);
    // nose
    stroke("#D116DA");
    strokeWeight(15);
    line(750, 500, 790, 490);
    // mouth
    noFill();
    stroke(0);
    strokeWeight(10);
    arc(750, 510, 80, 80, 0, PI);


}
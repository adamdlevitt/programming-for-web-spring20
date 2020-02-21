let bubble;

function setup() {
    createCanvas (600, 400);
    bubble = new Bubble();
}

function draw() {
    background(0);
    bubble.move();
    bubble.show();
    for (let bubble = 0; bubble < 5; bubble++) {
        console.log ('number of instances of bubble class on the canvas')
    }
}

class Bubble {
    constructor() {
        this.x = 200;
        this.y = 150;
    }
    move() {
        this.x = this.x + random(-5, 5);
        this.y = this.y + random(-5, 5);
    }
    show() {
        stroke(255);
        strokeWeight(4);
        noFill();
        ellipse(this.x, this.y, 24, 24);
    }
}
let rectX = 0;
const rectHeight = 75;
let rectY;
const rectWidth = 75;
let clickCount = 0;
const speed;

function setup () {
    createCanvas(500, 500);
    rectY = random(height - rectHeight)
    speed = random(1, 3);
}

function draw () {
    background('#FFFFFF');
    drawShape();
    rectX++;
}

function mousePressed() {
    if((mouseX >= rectX && mouseX <= rectX + rectWidth) && (mouseY >= rectY && mouseY <= rectY + rectHeight)) {
        clickCount++;
        console.log('hit', clickCount);
    }
    if(rectX > width) {
        noLoop();
        Text('Your score was ' + clickCount, 100, 300);
    }
}

function drawShape() {
    fill('red');
    rect(rectX, rectY, rectWidth, rectHeight);
}
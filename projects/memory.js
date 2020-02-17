const rectWidth = 100;
const rectHeight = 100;
let startingX = 200;
let startingY = 100;
let myRects = [];let startingId = 0;
function setup () {
    createCanvas(1000, 500);
    background(0);
    // rect(rectX, rectY, rectWidth);
    for (let k = 0; k < 2; k++) {
    for (let i = 0; i < 4; i++) {
        rect(startingX, startingY, rectWidth, rectHeight);
        myRects.push({ x: startingX, y: startingY, id: startingId });
        startingX += 150;
    }
        startingY += 150;
        startingX = 200;
}
    console.log(myRects);
}

function mousePressed () {
    for(let j = 0; j < myRects.length; j++){
        let distance = dist(mouseX, mouseY, myRects[j].x, myRects[j].y);
        if (distance < rectWidth / 2) {
            console.log('rect has been click', myRects[j].id);
        }

}
}
var cwidth = 1000
var cheight = 1000
var row = 20

function setup() {
  createCanvas(cwidth, cheight);
  background('#DAF7A6');
}

function draw () {
  for (let x = 0; x < width; x += row) {
    for (let y = 0; y < height; y += row) {
      if ( y % 3 === 0) {
        rect(x, x + 3, y, y + 5, 10, 80);
        fill('#AECFF7');
      }
      else {
        ellipse(x, y, 5, 20);
        fill('#E600FF');
      }
    }
}
for (let x = 0; x <= width; x += 100) {
  for (let y = 0; y <= height; y += 100) {
    fill(random(255), random(255), random(255));
    ellipse(x, y, 20, 8);
    strokeWeight(3)
  }
}
}
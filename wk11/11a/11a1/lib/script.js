let x = 0;
let y = 0;
let dim = 80.0;

function setup() {
  createCanvas(720, 400);
  noStroke();
}

function draw() {
  background(102);
  x = x + 0.8;
  if (x > width + dim) {
    x = -dim;
  }
  translate(x, height / 3 - dim / 3);
  fill('#4387f5');
  rect(-dim / 3, -dim / 3, dim, dim);
  translate(x, dim);
  fill('#fa1919');
  rect(-dim / 3, -dim / 3, dim, dim);
}
let a = 0.0;
let s = 0.0;

function setup() {
  createCanvas(1720, 1720);
  noStroke();
  rectMode(CENTER);
}

function draw() {
  background('#d9f5f6');

  a = a + 0.02;
  s = cos(a) * 5;

  translate(width / 2, height / 2);
  fill('#68838b');
  scale(s);
  rect(0, 0, 50, 50);

  translate(75, 0);
  fill('#ca0f6f');
  scale(s);
  rect(0, 0, 50, 50);
}

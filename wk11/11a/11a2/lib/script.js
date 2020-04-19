let angle = 0.0;
let jitter = 0.0;

function setup() {
    createCanvas(720, 720);
    noStroke();
    fill(255);
  }
  
  function draw() {
    background('#ff8c00');
    if (second() % 2 === 0) {
      jitter = random(-0.05, 0.05);
    }
    angle = angle + 0.05 + jitter;
    let c = cos(angle);
    translate(width / 2, height / 2);
    rotate(c);
    rect(0, 0, 200, 180);
  }
  
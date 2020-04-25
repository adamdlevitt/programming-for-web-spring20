var mySound;

function preload() {
    mySound = loadSound('lib/doomsday.mp3')
}

function setup() {
    let cnv = createCanvas(1000,600);
    colorMode(HSB);
    cnv.mouseClicked(togglePlay);
    fft = new p5.FFT();
}

function draw() {
    background(0);
    
    let spectrum = fft.analyze();
  
      for (let i = 0; i< spectrum.length; i++){
        let x = map(i, 0, spectrum.length/2, 0, width*2);
        let h = -height + map(spectrum[i], 0, 255, height, 0);
        stroke(i, 255, 255);
        rect(x, height, width / spectrum.length, h)
      }
    }
    
    function togglePlay() {
      if (mySound.isPlaying()) {
        mySound.pause();
      } else {
        mySound.loop();
      }
    }
let ka;
let ks;
let kd;
let kf;
let kj;
let kk;

//sound loading

function preload() {
    ka = loadSound('lib/cubes.mp3');
    ks = loadSound('lib/fart.mp3');
    kd = loadSound('lib/gun.mp3');
    kf = loadSound('lib/phone.mp3');
    kj = loadSound('lib/plane.mp3');
    kk = loadSound('lib/power.mp3');
}

function setup() {
    createCanvas(1000, 1000);
    amplitude = new p5.Amplitude();
}

function draw() {
    background(0);
    let level = amplitude.getLevel();
    let size = map(level, 0, 1, 0, 200);

    if (key === "a") {
        fill("red");
        ellipse(size*2, 300, size*7, size/2);
    }
    if (key === "s") {
        fill("blue");
        ellipse(size*3, 500, size*6, size*3);
    }
    if (key === "d") {
        fill("green");
        ellipse(size*4, 600, size*5, size/4);
    }
    if (key === "f") {
        fill("yellow");
        ellipse(size*5, 200, size*4, size*5);
    }
    if (key === "j") {
        fill("orange");
        ellipse(size*6, 100, size*3, size/6);
    }
    if (key === "k") {
        fill("purple");
        ellipse(size*7, 400, size*2, size*7);
    }
}


//sounds into function
function keyPressed() {
    if (key === 'a') {
        ka.play();
    } else if (key === 's') {
        ks.play();
    } else if (key === 'd') {
        kd.play();
    } else if (key === 'f') {
        kf.play();
    } else if (key === 'j') {
        kj.play();
    } else if (key === 'k') {
        kk.play();
    }
}
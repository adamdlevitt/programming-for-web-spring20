function setup() {
    createCanvas(600, 600);
}
function createTile(originX, originY, background, outerCircle, arcs, triangles, innerCircle) {
    // x and y
    translate(originX, originY);
    // background
    fill(background);
    noStroke();
    rect(0, 0, 200, 200);
    // outer circle
    fill(outerCircle);
    noStroke();
    circle(100, 100, 150);
    // arcs
    fill(arcs);
    noStroke();
    arc(100, 100, 200, 200, 0, HALF_PI);
    arc(100, 100, 200, 200, PI, PI+HALF_PI);
    // triangles
    fill(triangles);
    noStroke();
    triangle(100, 75, 150, 0, 200, 75);
    triangle(0, 125, 50, 200, 100, 125);
    // inner circle
    fill(innerCircle);
    circle(100, 100, 50);
}
    function draw() {
    createTile(0, 0, '#b9ec6b', '#431e1f', '#1244bc', '#e42e3e', '#f54435');
    createTile(0, 200, '#4e4f39', '#d93bc5', '#c92c3e', '#741361', '#151216');
    createTile(0, 200, '#f78003', '#10cc3b', '#a6bfd0', '#263931', '#4125f3');
    createTile(200, -400, '#b80545', '#af6a47', '#31b1f4', '#fbc4fb', '#7ee6d4');
    createTile(0, 200, '#50af16', '#b6386d', '#653b81', '#0e3ad4', '#d5a043');
    createTile(0, 200, '#0b0132', '#c4cff7', '#e173f7', '#e1fa55', '#9174df');
    createTile(200, -400, '#8e6c36', '#153de6', '#9ad260', '#db642a', '#e071e1');
    createTile(0, 200, '#fa11f5', '#42bdc8', '#7e6959', '#48ce67', '#be633c');
    createTile(0, 200, '#21676c', '#68c6a6', '#fe982a', '#68686b', '#f69ff4');
}
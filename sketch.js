var hr, mn, sc;
var hrAngle, mnAngle, scAngle;

function setup() {

  createCanvas(500,500);

  angleMode(DEGREES);

}


function draw() {

  background(0);  
  translate(200, 200);
  rotate(-90);

  hr = hour();
  mn = minute();
  sc = second();

  strokeWeight(10);
  noFill();

  stroke("purple");
  scAngle = map(sc, 0, 60, 0, 360);
  arc(-50, 50, 400, 400, 0, scAngle);

  stroke("violet");
  mnAngle = map(mn, 0, 60, 0, 360);
  arc(-50, 50, 380, 380, 0, mnAngle);

  stroke("magenta");
  hrAngle = map(hr%12, 0, 12, 0, 360);
  arc(-50, 50, 360, 360, 0, hrAngle);

  push();
  rotate(scAngle);
  stroke("purple");
  line(0, 0, 125, 0);
  pop();

  push();
  rotate(mnAngle);
  stroke("violet");
  line(0, 0, 100, 0);
  pop();

  push();
  rotate(hrAngle);
  stroke("magenta");
  line(0, 0, 75, 0);
  pop();

  stroke(255);
  strokeWeight(12);
  point(-50, 50);

  drawSprites();

}

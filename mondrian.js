function setup() {
  createCanvas(400, 400);
  strokeCap(SQUARE);
}

function draw() {
  background(230);
  noStroke();

  // red
  fill(255, 0, 0);
  rect(0, 0, 230, 300);

  // yell
  fill(255, 255, 0);
  rect(300, 0, 100, 100);

  // blu
  fill(0, 0, 255);
  rect(230, 360, 65, 50);

  stroke(0);
  strokeWeight(16);
  line(230, 0, 230, 400); // left line  
  line(0, 300, 400, 300); // middle line
  strokeWeight(10);
  line(300, 0, 300, 400); // right line

  strokeWeight(14);
  line(0, 360, 400, 360); // bottom

  strokeWeight(25);
  line(230,100,400 ,100 ); // top

}

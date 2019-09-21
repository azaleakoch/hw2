function setup() {
  createCanvas(400, 400);
}

var ballX = 300;
var ballY = 300;
var ballSpeed = 3;

var ballX2 = 100;
var ballY2 = 100;
var ballSpeed2 = 25;

var r = 50
var g = 200
var b = 220

function draw() {
  background(220);

  fill(r+200, g-20, b-60);
  ellipse(ballX, ballY, 60);
  
  fill(r-160, g+45, b+90);
  ellipse(ballX2, ballY2, 40);

  ballY = ballY + ballSpeed;
  ballY2 = ballY2 + ballSpeed2;

  if (ballY >= 400) {
    ballSpeed = -3
    r = r + 20
    g = g -30
    b = b +90
    ;
  }

  if (ballY2 >= 400) {
    ballSpeed2 = -5;
    r = r - 20
    g = g - 50
    b = b + 100
  }

  if (ballY <= 0) {
    ballSpeed = 3;

  }

  if (ballY2 <= 0) {
    ballSpeed2 = 5;
  }

}

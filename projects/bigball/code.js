
var ball;

var up = window.innerHeight
var right = window.innerWidth

function setup() {
  createCanvas(right, up);
  ball = new Ball();
}

function draw(){
  background(0);
  ball.show();
  ball.update();
}

let snake;
let scl = 30;
let food;

function setup() {
  createCanvas(600,600)
  snake = new Snake();
  frameRate(10);
  //foods = new Food(random(width), random(height));
  pickLocation();

}
 
function pickLocation(){
  let cols = floor(width/scl);
  let rows = floor(height/scl);
  food = createVector(floor(random(cols)),floor(random(rows)));
  food.mult(scl);
}


function draw() {
background(51)
snake.update();
snake.show();
fill(255,0,100);
rect(food.x,food.y,scl,scl);
if(snake.eat(food)){
  pickLocation();
}

}

function keyPressed(){
  if(keyCode === UP_ARROW){
    snake.dir(0, -1);
  }else if (keyCode === DOWN_ARROW){
    snake.dir(0, 1);
  }else if (keyCode === RIGHT_ARROW){
    snake.dir(1, 0);
  }else if (keyCode === LEFT_ARROW){
    snake.dir(-1, 0);
  }
}

function update(){
  console.log(snake.eat(foods.getX(),foods.getY()));
}



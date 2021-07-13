//Please help. I can't tell what is wrong
var bg, bgImage, sleep, brush, drink, move,gym, eat, astronaut;
var edges;
function preload(){
  bgImage=loadImage("images/iss.png");
  sleep=loadAnimation("images/sleep.png");
  brush=loadImage("images/brush.png");
  gym=loadAnimation("images/gym11.png","images/gym12.png");
  eat=loadAnimation("images/eat1.png", "images/eat2.png");
  drink=loadAnimation("images/drink1.png", "images/drink2.png");
  move=loadAnimation("images/move.png", "images/move1.png");
  bath=loadAnimation("images/bath1.png", "images/bath2.png");
}
function setup() {
  createCanvas(800,400);
  
  astronaut = createSprite(300, 200);
  astronaut.addAnimation("sleeping", sleep);
  astronaut.scale=0.2;
  bg = createSprite(800, 400, 50, 50);
  bg.addAnimation("background", bgImage);
  edges = createEdgeSprites();
}

function draw() {
  background(255,255,255);  
  if(keyDown("UP_ARROW")){
    astronaut.addAnimation("brushing", brush);
    astronaut.changeAnimation("brushing");
    astronaut.y = 350;
    astronaut.velocityY = 0;
    astronaut.velocityX = 0;
  }
  if(keyDown("DOWN_ARROW")){
    astronaut.addAnimation("gymming", gym);
    astronaut.changeAnimation("gymming");
    astronaut.y = 350;
    astronaut.velocityY = 0;
    astronaut.velocityX = 0;
  }
  if(keyDown("RIGHT_ARROW")){
    astronaut.addAnimation("bathing", bath);
    astronaut.changeAnimation("bathing");
    astronaut.y = 350;
    astronaut.velocityY = 0;
    astronaut.velocityX = 0;
  }
  if(keyDown("LEFT_ARROW")){
    astronaut.addAnimation("moving", move);
    astronaut.changeAnimation("moving");
    astronaut.y = 350;
    astronaut.velocityY = 0;
    astronaut.velocityX = 0;
  }
  if(keyDown("m")){
    astronaut.addAnimation("moving", move);
    astronaut.changeAnimation("moving");
    astronaut.y = 350;
    astronaut.velocityY = 0;
    astronaut.velocityX = 0;
  }
  astronaut.bounceOff(edges);
  drawSprites();
}
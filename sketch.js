

function setup() {
  createCanvas(1200,800);
  fixedRect=createSprite(400, 100, 50, 80);
  fixedRect.shapeColor="green";
  fixedRect.debug=true;
  movingRect=createSprite(400,800,80,30);
  movingRect.shapeColor="green";
  movingRect.debug=true;
  movingRect.velocityY=-5;
  fixedRect.velocityY=5;
  object1=createSprite(340,125,50,50);
  object2=createSprite(340,125,50,50);
}

function draw() {
  background(0,0,0); 
  object1.y=World.mouseY;
  object1.x=World.mouseX; 
  bounceOff(movingRect,fixedRect);
  if(isTouching(object1,object2)){
    object1.shapeColor="red";
    object2.shapeColor="red";
  } else {
    object1.shapeColor="green";
    object2.shapeColor="green";
  }
  drawSprites();
}

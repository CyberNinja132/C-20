var fixedRect,movingRect;


function setup() {
  createCanvas(800,400);
  movingRect = createSprite(400, 225, 80, 30);
  fixedRect = createSprite(200,200,50,80);

  movingRect.shapeColor = "red";
  movingRect.debug = true;
  fixedRect.shapeColor = "red";
  fixedRect.debug = true;
  //movingRect.velocityX = -5;
}

function draw() {
  background(255,255,255);  

  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  console.log(movingRect.x-fixedRect.x);

  if(movingRect.x-fixedRect.x< movingRect.width/2+fixedRect.width/2 && 
    fixedRect.x - movingRect.x < movingRect.width/2+fixedRect.width/2 &&
    fixedRect.y - movingRect.y < movingRect.height/2+fixedRect.height/2 &&
    movingRect.y - fixedRect.y < movingRect.height/2+fixedRect.height/2 ){
    fixedRect.shapeColor = "blue";
    movingRect.shapeColor = "blue";
    //movingRect.velocityX = 0;
  }
  else {
    fixedRect.shapeColor = "red";
    movingRect.shapeColor = "red";
  }



  drawSprites();
}
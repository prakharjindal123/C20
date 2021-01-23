var fixedRect,movingRect,c,d;
function setup() {
  createCanvas(800,400);
  fixedRect= createSprite(200, 200, 50, 80);
  movingRect= createSprite(400, 200, 80, 30);
  c= createSprite(700, 200, 80, 30);
  c.velocityX=-1;
  d= createSprite(500, 200, 80, 30);
  d.velocityX=1;
}

function draw() {
  background(255,255,255);  
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;
if(movingRect.x-fixedRect.x<fixedRect.width/2+movingRect.width/2 &&
  fixedRect.x-movingRect.x<fixedRect.width/2+movingRect.width/2 && 
  movingRect.y-fixedRect.y<fixedRect.height/2+movingRect.height/2 &&
  fixedRect.y-movingRect.y<fixedRect.height/2+movingRect.height/2)
  {movingRect.shapeColor="red";
  fixedRect.shapeColor="red";

}
else{movingRect.shapeColor="green";
fixedRect.shapeColor="green";

}

if(c.x-d.x<c.width/2+d.width/2 && d.x-c.x<c.width/2+d.width/2 )
{
c.velocityX = c.velocityX*(-1);
d.velocityX = d.velocityX*(-1);

}
  drawSprites();
}

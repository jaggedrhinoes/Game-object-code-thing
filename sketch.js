var mrect,frect,fixedRect, movingRect;

function setup() {
  createCanvas(1000,800);
  mrect = createSprite(300, 200, 50, 70);
  mrect.shapeColor = "blue";
  mrect.debug = true;
  gobj1 = createSprite(500,400,20,20)
  gobj2 = createSprite(500,200,20,20)
  gobj3 = createSprite(500,600,20,20)

  frect = createSprite(500, 500, 40, 80);
  frect.shapeColor = "blue";
  frect.debug = true;
}

function draw() {
  background(255,255,255);  
  drawSprites();

  if (istouching(mrect,gobj1)){
    mrect.shapeColor ="purple"
    gobj1.shapeColor="purple"
  }
  else{
    mrect.shapeColor ="blue"
    gobj1.shapeColor="blue"
  }
  
  mrect.x = mouseX;
  mrect.y = mouseY;

  


}
function istouching (a,b) {
  if(a.x - b.x < a.width/2 + b.width/2 &&
    b.x - a.x < a.width/2 + b.width/2  &&
    a.y - b.y < a.height/2 + b.height/2  &&
    b.y - a.y  < a.height/2 + b.height/2 ){
  return true
}
else{
return false
} 

}


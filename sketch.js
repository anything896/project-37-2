var ground = createSprite(0, 0, 400, 400);
ground.scale=2
ground.velocityX=-3
var monkey = createSprite(50, 320, 15, 15);
monkey.scale=0.2
var bananaGroup = createGroup()
var ObstaclesGroup = createGroup();
ObstaclesGroup.scale=0.1
function draw() {
background(255);
createEdgeSprites() 
monkey.collide(bottomEdge)  
if (ground.x<0) {
 ground.x=ground.width/2 
}
monkey.velocityY=monkey.velocityY+0.5

if (keyDown("space")) {
  monkey.velocityY=-3
}

if (ObstaclesGroup.isTouching(monkey)) {
  ground.velocityX=0
  monkey.velocityY=0
  ObstaclesGroup.velocityX=0
  bananaGroup.velocityX=0
}


spawnBanana();

if (bananaGroup.isTouching(monkey)) {
  bananaGroup.destroyEach()
}

spawnObstacles();

drawSprites();  
}

function spawnBanana() {
  //write code here to spawn the clouds
  if (World.frameCount % 60 === 0) {
    var banana = createSprite(400,320,40,10);
    banana.y = randomNumber(120,200)
    banana.scale = 0.5;
    banana.velocityX = -3;
    banana.scale=0.1
     //assign lifetime to the variable
    banana.lifetime = 134;
    
    //adjust the depth
    
    
    //add each cloud to the group
    bananaGroup.add(banana);
  }
  
}

function spawnObstacles() {
  if(World.frameCount % 60 === 0) {
    var obstacle = createSprite(400,365,10,40);
    obstacle.velocityX = -3
    obstacle.y=350
    obstacle.x=randomNumber(150, 400)
    //generate random obstacles
obstacle.setAnimation("Stone");
    
    //assign scale and lifetime to the obstacle           
    obstacle.scale = 0.2;
    obstacle.lifetime = 340;
    //add each obstacle to the group
    ObstaclesGroup.add(obstacle);
}
}
  

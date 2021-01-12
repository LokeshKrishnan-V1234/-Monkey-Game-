var monkey , monkey_running, monkey_image;
var banana ,bananaImage, obstacle, obstacleImage
var bird, bird_flying
var FoodGroup, obstacleGroup
var score
var o,rock
var survival_time

function preload(){
  
monkey_running=loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
monkey_image=loadAnimation("monkey sliding.png");
  
bird_flying=loadAnimation("1.png","2.png","3.png","4.png","5.png","6.png","7.png","8.png","9.png","10.png","11.png","12.png","13.png","14.png");
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadAnimation("obstacle.png");
 
}



function setup() {
  createCanvas(400,250);
  
  bananaGroup = new Group();
  obstaclesGroup = new Group();
  
  monkey = createSprite(40,195,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.addAnimation("image",monkey_image);
  monkey.scale = 0.1;
  
  ground = createSprite(400,230,900,10);
  ground.velocityX = -4;
  console.log(ground.x)
  
  survival_time = 0;
  
}


function draw() {
  background("lightgreen");
  survival_time = survival_time + Math.round(frameCount/400);
  
  if(keyDown("up") && monkey.y >= 150){
    monkey.velocityY = -5; 
    monkey.changeAnimation("moving",monkey_running);
  }
  
  if(keyDown("down")){
    monkey.changeAnimation("image",monkey_image);
    monkey.scale = 0.1;
  }
 
    monkey.velocityY = monkey.velocityY + 0.8; 
  
  ground.x = ground.width/2;
 
      fill("orange");
      textSize(20);
      stroke("green");
      strokeWeight("5")
      text("Survival Time : " + survival_time, 10,20) 
  
  monkey.collide(ground);
  
  banana();
  birds();
  rocks();
  
  drawSprites();

}

function banana(){
  if(frameCount % 80 === 0){
    var banana = createSprite(400,Math.round(random(100,200)),10,10)
    banana.addImage(bananaImage)
    banana.scale = 0.1;
    banana.velocityX = -5;
    bananaGroup.add(banana);
  }
}

function birds(){
  
  if (frameCount % 218 === 0){
   var bird = createSprite(390,150,20,20)
   bird.addAnimation("flapping",bird_flying);
   bird.velocityX = -5
   bird.scale = 0.3;
   obstaclesGroup.add(bird)
  }
}

function rocks(){
  
  if (frameCount % 300 === 0){
   var rock = createSprite(390,210,20,20)
   rock.addAnimation("obstacleImage",obstacleImage);
   rock.velocityX = -5
   rock.scale = 0.08;
   obstaclesGroup.add(rock);
  }
}



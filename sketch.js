let bg, bgimg;
let shooter, shooterimg;
let shooter_1, shooter_2, shooter_3;
let heart1, heart2, heart3;
let heart_1, heart_2, heart_3;
let zombie;
let player;
let bullet, bulletimg;
let bulletGroup;
let zombieGroup;
let score = 0






function preload(){

   
   shooterimg = loadImage("assets/shooter_2.png");
   shooterimg_1 = loadImage("assets/shooter_3.png");

   heart_1 = loadImage("assets/heart_1.png");
   heart_2 = loadImage("assets/heart_2.png");
   heart_3 = loadImage("assets/heart_3.png");

   bgimg  = loadImage("assets/bg.jpeg");

   zombieimg= loadImage("assets/zombie.png");

   bulletimg = loadImage("bullet.png");

  
}

function setup() {
 
  
  createCanvas(windowWidth,windowHeight);

  //adding the background image
  bg = createSprite(displayWidth/2-20,displayHeight/2-40,20,20)
bg.addImage(bgimg)
bg.scale = 1.1

bulletGroup = new Group()

zombieGroup = new Group()
  

//creating the player sprite
player = createSprite(displayWidth-1150, displayHeight-300, 50, 50);
 player.addImage(shooterimg)
   player.scale = 0.3
   player.debug = true
   player.setCollider("rectangle",0,0,300,300)
   
    
   

}

function draw(){

if(keyIsDown(UP_ARROW)){

  player.y = player.y  -4
}

if(keyIsDown(DOWN_ARROW)){

  player.y = player.y +4
}

if(keyWentDown(32)){

  player.addImage(shooterimg_1);
  bullet = createSprite(player.x +65, player.y - 22 ,10, 10 );
  bullet.velocityX = 4
  bullet.addImage(bulletimg);
  bullet.scale = 0.1
  bulletGroup.add(bullet);
  
}
  
if(keyWentUp(32)){
  player.addImage(shooterimg)
}

   

   spawnzombie()
  
   for(j = 0; j<bulletGroup.length; j++){
    for(i =0; i<zombieGroup.length; i++){
      
      
      
      if(zombieGroup[i].collide(bulletGroup[j])){
        zombieGroup[i].destroy();
        bulletGroup[j].destroy()
       score = score +2
    }}}
    
   
      
  drawSprites()
  fill('white')
  textSize(25)
  text('score ' + score, 50, 50);

}

function spawnzombie(){
  if(frameCount % 250 === 0){
    zombie = createSprite(windowWidth- 169,random(0, windowHeight))
    zombie.velocityX = -1
    zombie.addImage(zombieimg);
    zombie.scale = 0.15
    zombieGroup.add(zombie)
  }
}
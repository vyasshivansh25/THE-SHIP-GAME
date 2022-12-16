var sea,ship,shipImg1,shipImg2;
var seaImg,shipImg,movingShip;

function preload(){
  seaImg = loadImage("sea.png");
  shipImg=loadAnimation("ship-1.png","ship-2.png");
 
  
  }
   

//Choose the correct option by uncommenting the right line to load the animation for ship.
  //shipImg1 = loadAnimation("ship-1.png","ship-1.png","ship-2.png","ship-1.png");
  //shipImg1 = loadAnimation("ship-1","ship-1","ship-2","ship-1");
  //shipImg1 = loadAnimation("1.png","2.png","3.png","4.png");



function setup(){
  createCanvas(400,400);
  background("blue");
 
  // Moving background
  sea=createSprite(400,200);
  sea.addImage(seaImg);
  sea.X=sea.width/2;
  sea.velocityX=-4;
  sea.scale=0.3;

  
  // ship got proper Animation
  ship = createSprit(130,50,30,30);
  ship.addAnimation("movingShip",shipImg);
  ship.scale =0.5;
 
}

function draw() {
  background(0);
  
//Uncomment the correct line to make the background move to create a forward moving effect for the boat.
  //sea.velocityY = -3;
  //sea.x = -3;
  //sea.velocityX = -3;
  //sea.velocityX = 3;
 //left  
  
  
    
  drawSprites();
}

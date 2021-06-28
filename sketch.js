var sea, seaImage;
var ship, ship_moving;

function preload(){
seaImage = loadImage("sea.png");
ship_moving = loadAnimation("ship-1.png, ship-2.png, ship-3.png, ship-4.png");

}

function setup(){
  createCanvas(400,400);
  sea = createSprite(200,180,400,20);
  sea.addImage("sea", seaImage);
  
  ship = createSprite(50,180,20,50);
  ship.addAnimation("moving", ship_moving);

}

function draw() {
  background("skyblue");
 
}
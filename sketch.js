
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var backImg, back2Img, back2;



function setup() {
  createCanvas(1366,621);

  engine = Engine.create();
  world = engine.world;

  backImg = loadImage("back1.png");
  back2Img = loadImage("back2.jpeg");
}


function draw() 
{
  background(backImg);
  Engine.update(engine);
  
  back2 = createSprite(683,310,800,500);
  back2.addImage("image", back2Img);
}


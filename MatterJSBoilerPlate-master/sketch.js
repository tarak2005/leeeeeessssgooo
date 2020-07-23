var base,side1,side2;
var ground;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	base=createSprite(600,500,200,20);

	ball1=new paper(100,200,10,10,23);


	engine = Engine.create();
	world = engine.world;

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 ball1.display();
}




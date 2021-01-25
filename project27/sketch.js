
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	bob1=new Bob();
	bob2=new Bob();
	bob3=new Bob();
	bob4=new Bob();
	bob5=new Bob();

rope1=new chain(bob1.body,roof.body,-BobDiameter*2,0)
rope2=new chain(bob2.body,roof.body,-BobDiameter*2,0)
rope3=new chain(bob3.body,roof.body,-BobDiameter*2,0)
rope4=new chain(bob4.body,roof.body,-BobDiameter*2,0)
rope5=new chain(bob5.body,roof.body,-BobDiameter*2,0)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}




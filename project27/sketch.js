
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

bobDiameter=60;

	bob1=new Bob(500,500,30);
	bob2=new Bob(600,500,30);       
	bob3=new Bob(700,500,30);
	bob4=new Bob(800,500,30);
	bob5=new Bob(900,500,30);
roof1=new Roof(300,0,300,40)
rope1=new chain(bob1.body,roof1.body,bobDiameter)
rope2=new chain(bob2.body,roof1.body,bobDiameter)
rope3=new chain(bob3.body,roof1.body,bobDiameter)
rope4=new chain(bob4.body,roof1.body,bobDiameter)
rope5=new chain(bob5.body,roof1.body,bobDiameter)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  roof1.display();


  
  drawSprites();
 
}

//function up_arrowPressed(){
//bob5
//}


const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var mango1;

function preload()
{
	this.boyimage = loadImage("images/boy.png");	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	mango1 = new mango(400,300,20);
	mango2 = new mango(200,100,20);
	mango3 = new mango(300,200,20);
	mango4 = new mango(100,400,20);
	mango5 = new mango(500,500,20);
	mango6 = new mango(700,300,20);
	mango7 = new mango(200,200,20);
	mango8 = new mango(100,100,20);
	mango9 = new mango(300,300,20);
	tree1 = new tree(500,300,20);
	stone1 = new stone (300,200,20);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  mango1.display();
  mango2.display();
 mango3.display();
 mango4.display();
  mango5.display();
 mango6.display();
  mango7.display();  
  mango8.display();
  mango9.display();
  tree1.display();
 stone1.display();
  boy.display();
  
  drawSprites();
 
}




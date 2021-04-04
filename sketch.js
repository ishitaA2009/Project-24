
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var hammer,stone,plane,rubber;

function setup() {
	createCanvas(700, 500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	plane = new Plane(450,700,700,40)
 // hammer = new Hammer(200,100,50,50);
	rubber = new Rubber(450,660,30,30);
	stone = new Stone(500,660,30,30);

	Engine.run(engine);
  
}


function draw() {
  
  background("pink");
  rectMode(CENTER);

  plane.display();
  //hammer.display();
  rubber.display();
  stone.display();
  
  drawSprites();
 
}




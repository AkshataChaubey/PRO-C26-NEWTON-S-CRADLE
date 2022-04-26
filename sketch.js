const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;



var world;

var chain1,bob1,bob2,bob3,bob4,bob5,rope1,rope2,rope3,rope4,rope5




function setup() {
	createCanvas(800, 600);
	
	
	
	 engine = Engine.create();
	 world = engine.world;

	 var bob_options = {
		restitution: 0.95,
		frictionAir:0.01,
	  }

	roofObject=new roof(400,250,230,20);
	World.add(world,roofObject);

	bob1 = new bob (320,575,40);
	bob2 = new bob(360,575,40);
	bob3 = new bob(400,575,40);
	bob4 = new bob(440,575,40);
	bob5 = new bob(480,575,40);
	
   rope1 = new rope(bob1.body,roofObject.body,-100,0);
   World.add(world,rope1);

	rope2 = new rope(bob2.body,roofObject.body,-50,0);
	World.add(world,rope2);

	rope3 = new rope(bob3.body,roofObject.body,0,0);
	World.add(world,rope3);

	rope4 = new rope(bob4.body,roofObject.body,40,0);
	World.add(world,rope4);

	rope5 = new rope(bob5.body,roofObject.body,80,0);
	World.add(world,rope5);

	
	Engine.run(engine);
	
	rectMode(CENTER);

	
}

function draw() {

  background(230);
  Engine.update(engine);
 
 


 roofObject.display();
 
 bob1.display()
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  

}


function keyPressed() {
	if (keyCode === UP_ARROW) {
//WRITE A CORRECT CODE TO APPLY A KEYPRESSED TO CHANGE THE POSITION OF BALL OBJECT TO THE LEFT WHEN UP ARROW KEY IS PRESSED
   Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-80,y:-30})
	}
}



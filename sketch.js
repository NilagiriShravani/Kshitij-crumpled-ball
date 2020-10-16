
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var left,left1,paper1;


function setup() {
	createCanvas(1600, 700);
	engine = Engine.create();
	world = engine.world;

	var paper_options={
		isStatic:false,
		restitution:0.3,	
		friction:0.5,
		density:1.2
	}

	//Create the Bodies Here.

	paper1 = new Paper(100,200,50);	

	ground = new Ground(600,height,1600,20,{isStatic:true});
	dustbinObj=new dustbin(1200,650);

	//left = new Dustbin(560,340,160,150);
	// left1 = Bodies.rectangle(560,340,160,150,{isStatic:true});
	// World.add(world,left);

	// bottom = new Dustbin(630,490,150,20);
	// bottom1 = Bodies.rectangle(630,490,150,20,{isStatic:true});
	// World.add(world,bottom1);

	// right = new Dustbin(700,490,20,150,);
	// right1 = Bodies.rectangle(700,490,20,150,{isStatic:true});
	// World.add(world,right1);


	Engine.run(engine);
  
}


function draw() {

  rectMode(CENTER);
  background(105,105,105);
  keyPressed();

  paper1.display();
  ground.display();
  dustbinObj.display();
  //left.display();


//   bottom.display();
//   right.display();

	fill("blue");
	textSize(16);
	text("USE UP AND DOWN ARROW KEYS TO MOVE THE PAPER", 200,100);
	text("GOAL: PUT PAPER IN THE DUSTBIN", 200,120);

  drawSprites();
}


 
function keyPressed(){
	if(keyCode === UP_ARROW)
	{
		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:1,y:-5});
	}
}
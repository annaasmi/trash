
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground,dustbin1,dustbin2,dustbin3,paper;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	  ground = new Ground(400,690,800,20);
    dustbin1 = new Trash(300,610,20,100);
    dustbin2 = new Trash(400,650,200,20);
    dustbin3 = new Trash(490,610,20,100);
    paper = new Paper(150,680,10);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);

  ground.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  paper.display();
  keyPressed();

  drawSprites();
 
}

function keyPressed(){
if(keyCode === UP_ARROW){
  Matter.body.applyForce(paper.body,paper.body.position,{x:85,y:-85});
}
}


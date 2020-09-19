
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground,dustbin,dustbinn,dustbinnn,bin,binn,binnn,wall,walll,wallll;
var paper,paperimg;

function preload()
{
    
}

function setup() {
	createCanvas(1000,600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  ground = new Ground(500,590,1000,20);
  wall = new Ground(10,300,20,600);
  walll = new Ground(500,10,1000,20);
  wallll = new Ground(990,300,20,600);

  dustbin = new Dustbin(400,height-27,200,15);
  dustbinn = new Dustbin(300,530,20,100);
  dustbinnn = new Dustbin(500,530,20,100);

  bin = new Dustbin(820,height-27,250,15);
  binn = new Dustbin(700,515,15,130);
  binnn = new Dustbin(950,515,15,130);

  
  papers = new Paper(100,300,55);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  Engine.update(engine);

  ground.display();
  wall.display();
  walll.display();
  wallll.display();

  dustbin.display();
  dustbinn.display();
  dustbinnn.display();

  bin.display();
  binn.display();
  binnn.display();

  papers.display();
  
  drawSprites();
 
}

function keyPressed () {

if (keyCode === UP_ARROW) {
  Matter.Body.applyForce(papers.body,papers.body.position,{x:275,y:-570});
}


}


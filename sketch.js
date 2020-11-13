
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground,paper,db1,db2,db3,engine,world
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

paper= new Paper(100,500,20);
ground=Bodies.rectangle(400,600,800,20,{isStatic:true})
World.add(world,ground)
db1=new Dustbin(400,550,20,100)
db2=new Dustbin(500,580,200,20)
db3=new Dustbin(600,550,20,100)
	Engine.run(engine);
  
}





function draw() {
  rectMode(CENTER);
  background(0);
  rect(ground.position.x,ground.position.y,800,20)
 paper.display()
 db1.display() 
 db2.display() 
 db3.display() 

  drawSprites(); 
 
}
function keyPressed(){

  if(keyCode === UP_ARROW){                                                          
  
  
  
  Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85})
  
  
  }
  }



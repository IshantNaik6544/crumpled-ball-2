
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
db1=new Dustbin(902,505,10,120)
db2=new Dustbin(962,565,130,10)
db3=new Dustbin(1024,505,10,120)
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
function KeyPressed(){
if(KeyCode === UP_ARROW){

  Matter.Body.applyForce(crumpledpaper.body,crumpledpaper.body.position)
}



}



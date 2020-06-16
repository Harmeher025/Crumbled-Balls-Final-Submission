const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj, paperObject,groundObject
var world;
var box1,box2,box3;


function setup() {
createCanvas(800, 700);
rectMode(CENTER);


engine = Engine.create();
world = engine.world;

paperObject=new paper(200,550,70);
groundObject=new Ground(width/2,670,width,20);
//dustbinObj=new Box(1200,500);

//box1=new Box(520,620,20,100);
// box2=new Box(630,660,200,20);
//box3=new Box(740,620,20,100);


box1=new Box(485,495,20,348);
box2=new Box(630,660,270,20);
box3=new Box(767,495,20,348);



Engine.run(engine);

 
}


function draw() {
  rectMode(CENTER);
  background(230);
 
 
  paperObject.display();
  groundObject.display();
 // dustbinObj.display();
  box1.display();
  box2.display();
  box3.display();

 
 
 
 
 
 
}

function keyPressed() {
  if (keyCode === UP_ARROW) {

    Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:60,y:-150});

   
  }
}


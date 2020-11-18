const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine,world;
var bgImage;
var ground,platform;
var character,impostor1,impostor2,impostor3;
var block1,block2,block3,block4,block5,block6;
var log1,log2,log3;
var chain;

function preload()
{
bgImage = loadImage("space.jpg")
}

function setup() {
	createCanvas(1200,600);


	engine = Engine.create();
	world = engine.world;
  
	ground = new Ground(600,395,1200,10);
	character = new Character(135,340,10,10);
  impostor1 = new Impostor(830,530,10,10);
  impostor2 = new Impostor(830,410,10,10);
  impostor3 = new Impostor(830,290,10,10);
  platform = new Ground(150, 515, 300, 170);
  block1 = new Block(765,550,10,10);
  block2 = new Block(960,550,10,10);
  block3 = new Block(765,430,10,10);
  block4 = new Block(960,430,10,10);
  block5 = new Block(765,310,10,10);
  block6 = new Block(960,310,10,10);
  log1 = new Log(865,490,10,10);
  log2 = new Log(865,370,10,10);
  log3 = new Log(865,250,10,10);
  chain = new Slingshot(character.body,{x:135,y:340})
  

	Engine.run(engine);

}


function draw() {
  rectMode(CENTER);
  background(bgImage);

  fill("black")
  ground.display();
  character.display();
  fill(100)
  platform.display();
  impostor1.display();
  impostor2.display();
  impostor3.display();
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  log1.display();
  log2.display();
  log3.display();
  chain.display();

  fill("white")
  text(mouseX+" , "+mouseY,mouseX,mouseY);

Engine.update(engine);
}

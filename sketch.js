const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine, box1, world, box2, ground1, pig1, log1, bird1, box3, box4, pig3, log2, box5, log4, log5, bird;

function setup() {
  createCanvas(1200, 400);
  engine = Engine.create();
  world = engine.world;
  ground1 = new Ground(600, 290, 1200, 20);
  box1 = new Box(700, 320, 70, 70);
  box2 = new Box(920, 320, 70, 70);
  pig1 = new Pig(810, 350);
  log1 = new Log(810, 260, 300, PI / 2);
  box3 = new Box(700, 240, 70, 70);
  box4 = new Box(920, 240, 70, 70);
  pig3 = new Pig(810, 220);
  log2 = new Log(810, 180, 300, PI / 2);
  box5 = new Box(810, 160, 70, 70);
  log4 = new Log(760, 120, 150, PI / 7);
  log5 = new Log(870, 120, 150, -PI / 7);
  bird = new Bird(100, 100);
}

function draw() {
  background(0);
  Engine.update(engine);
  box1.display();
  box2.display();
  ground1.display();
  pig1.display();
  log1.display();
  bird.display();
  box3.display();
  box4.display();
  box5.display();
  log4.display();
  log5.display();
  pig3.display();
}

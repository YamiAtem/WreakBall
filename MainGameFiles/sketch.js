const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var randColor, randColor2, randColor3;

// ground
var ground;

// building
var building, building2, building3;

// sling and ball
var sling, mainBall;

function setup() {
  createCanvas(3000, 800);

  engine = Engine.create();
  world = engine.world;

  // random color
  randColor = random(0, 255);
  randColor2 = random(0, 255);
  randColor3 = random(0, 255);

  // ground
  ground = new Ground(1500, 800, 3000, 40);

  // buildings
  building = new Box(900, 780, 100, 200, "red");
  building3 = new Box(900, 980, 100, 200, "blue");

  // sling shot
  mainBall = new Wreak(550, 650, 100, random(0, 255));
  sling = new SlingShot(mainBall.body, {x: 550, y: 50});
}

function draw() {
  background(randColor, randColor2, randColor3);
  Engine.update(engine);
  
  // ground
  ground.display();

  // buildings
  building.display();
  building3.display();

  mainBall.display();

  sling.display();
}

function keyPressed() {
  if (keyCode === 32) {
    Matter.Body.applyForce(mainBall.body, {x: 600, y: 600});
  }
}
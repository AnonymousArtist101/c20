
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
var ball;
var ball2;
var ball3;
var ball4;
var ground;
var wall;

function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  
   var ball_options = {
    restitution: 0.95,
    frictionAir:0.01
  }

  var ball2_options = {
    restitution: 0.5,
    frictionAir: 0.01
  }

  var ball3_options = {
    restitution: 1,
    friction: 0.01
  }

  var ball4_options = {
    restitution: 0.7,
    friction: 0.01
  }
   
   var ground_options ={
     isStatic: true
   };

   var wall_options = {
     isStatic: true
   }
  

  ground = Bodies.rectangle(200,390,400,20,ground_options);
  World.add(world,ground);

  ball = Bodies.circle(100,10,20,ball_options);
  World.add(world,ball);

  ball2 = Bodies.circle(300, 10, 30, ball2_options);
  World.add(world,ball2);

  ball3 = Bodies.circle(200, 10, 15, ball3_options);
  World.add(world, ball3);

  ball4 = Bodies.circle(50, 10, 17, ball4_options);
  World.add(world, ball4);

  wall = Bodies.rectangle(350, 360, 200, 20, wall_options);
  World.add(world, wall);
  
  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(51);
  Engine.update(engine);
  
  ellipse(ball.position.x,ball.position.y,20);
  ellipse(ball2.position.x, ball2.position.y, 30);
  ellipse(ball3.position.x, ball3.position.y, 15);
  ellipse(ball4.position.x, ball4.position.y, 17);
  rect(ground.position.x,ground.position.y,400,20);
  rect(wall.position.x, wall.position.y, 200, 20);
 
}


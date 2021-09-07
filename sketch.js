const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var ground;
var left;
var right;
var top_wall;
var ball
var button1, button2


function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  
  ground =new Ground(200,480,400,200);
  right = new Ground(390,200,20,400);
  left = new Ground(10,200,20,400);
  top_wall = new Ground(200,-80,400,200);
  var ball_options = {
    restitution: 0.5
  }
  ball = Bodies.circle(200,200,10,ball_options)
  World.add(world,ball)
  
  button1 = createImg("right.png")
  button1.position(200,300)
  button1.size(120,100)
  button1.mouseClicked(hForce)
  button2 = createImg("up.png")
  button2.position(10,10)
  button2.size(120,100)
  button2.mouseClicked(vForce)

  rectMode(CENTER);
  ellipseMode(RADIUS);
}

function draw() 
{
  background(51);
  ground.show();
  top_wall.show();
  left.show();
  right.show();
  ellipse(ball.position.x,ball.position.y,10)
  Engine.update(engine);
}

function hForce(){
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0})

}

function vForce(){
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.05})

}
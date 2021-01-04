const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var engine,world,ground;
var block8,block9,block10,block11,block12,block13,block14,block15,block16;
var polygon,polygon_img,backgroundImg;
var slingShot,block1,block2,block3,block4,block5,block6,block7;
var ground3;
var score = 0;
function preload()
{
    polygon_img = loadImage('polygon.png');
    getTime();
}
function setup()
{
  var canvas = createCanvas(1200,400);
  engine = Engine.create();
  world = engine.world;
  ground1 = new Ground(435,265,200,20);
  ground2 = new Ground(830,200,180,20);
  ground3 = new Ground(600,380,2000,20);
  block9 = new Box(360,235,30,40);
  block10 = new Box(390,235,30,40);
  block11 = new Box(420,235,30,40);
  block12 = new Box(450,235,30,40);
  block17 = new Box(480,235,30,40);
  block18 = new Box(510,235,30,40);
  block1 = new Box(890,160,30,40);
  block2 = new Box(860,160,30,40);
  block3 = new Box(830,160,30,40);
  block4 = new Box(800,160,30,40);
  block5 = new Box(770,160,30,40);
  block14 = new Box(390,195,30,40);
  block15 = new Box(420,195,30,40);
  block20 = new Box(450,195,30,40);
  block21 = new Box(480,195,30,40);
  block6 = new Box(860,120,30,40);
  block7 = new Box(830,120,30,40);
  block22 = new Box(800,120,30,40);
  block16 = new Box(420,155,30,40);
  block19 = new Box(450,155,30,40);
  block23 = new Box(830,80,30,40);
  polygon = Bodies.circle(50,200,20);
  World.add(world,polygon);
  slingShot = new SlingShot(this.polygon,{x:150,y:250});
  Engine.run(engine);
}
function draw(){
  background("black");
  if(backgroundImg)
    {
    background(backgroundImg);
    }
  strokeWeight(4);
  noStroke();
  fill("green");
  textSize(30);
  text("Score: "+score,30,40);
  Engine.update(engine);
  imageMode(CENTER);
  image(polygon_img,polygon.position.x,polygon.position.y,40,40);
  textSize(25);
  stroke('green');
  fill('white');
  text("Drag the Hexagonal Stone and Release it, to Launch towards the blocks...",200,30);
  ground1.display();
  ground2.display();
  block9.display();
  block9.score();
  block10.display();
  block10.score();
  block11.display();
  block11.score();
  ground3.display();
  block12.display();
  block12.score();
  block22.display();
  block22.score();
  block23.display();
  block23.score();
  block14.display();
  block14.score();
  block15.display();
  block15.score();
  block16.display();
  block16.score();
  block4.display();
  block4.score();
  block5.display();
  block5.score();
  block7.display();
  block7.score();
  block6.display();
  block6.score();
  block17.display(); 
  block17.score();
  block18.display();
  block18.score() ;
  block20.display();
  block20.score();
  block19.display();
  block19.score();
  block2.display();
  block2.score();
  block3.display();
  block3.score();
  block21.display();
  block21.score();
  block1.display();
  block1.score();
  slingShot.display();
}
function mouseDragged()
{
    Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY});
}
function mouseReleased()
{
    slingShot.fly();
}

function keyPressed()
{
    if(keyCode===32)
    {
        slingShot.attach(this.polygon);
    }
}
async function getTime()
{
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseType = await response.json();
    var dt = responseType.datetime;
    var hour = dt.slice(11,13);
    if(hour>=19 && hour<=06)
    {
        bg = "bg.png";
    }
    else
    {
        bg = "bg2.jpg";
    }
    backgroundImg=loadImage(bg);
    console.log(backgroundImg);
}
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,ball,ground;
var stand1,stand2;
var ball;
var slingShot;
var polygon_img;
function preload(){
  polygon_img=loadImage("polygon.png");
}
function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = new Ground();
  stand1 = new Stand(390,300,250,10);
  //stand2 = new Stand(700,200,200,10);
  stand3 = new Stand(673,290,250,10);
  //level one
  block1 = new Block(300,275,30,40);
  console.log(block1);
  block2 = new Block(330,275,30,40);
  block3 = new Block(360,275,30,40);
  block4 = new Block(390,275,30,40);
  block5 = new Block(420,275,30,40);
  block6 = new Block(450,275,30,40);
  block7 = new Block(480,275,30,40);
  //level two
  block8 = new Block(330,235,30,40);
  block9 = new Block(360,235,30,40);
  block10 = new Block(390,235,30,40);
  block11 = new Block(420,235,30,40);
  block12 = new Block(450,235,30,40);
  //level three
  block13 = new Block(360,195,30,40);
  block14 = new Block(390,195,30,40);
  block15 = new Block(420,195,30,40);
  //top
  block16 = new Block(390,155,30,40);

  //level one
  blocke1 = new Block(580,265,30,40);
  blocke2 = new Block(610,265,30,40);
  blocke3 = new Block(640,265,30,40);
  blocke4 = new Block(670,265,30,40);
  blocke5 = new Block(700,265,30,40);
  blocke6 = new Block(730,265,30,40);
  blocke7 = new Block(760,265,30,40);
   
  //level two
  blocke8 = new Block(610,232,30,40);
  blocke9 = new Block(640,232,30,40);
  blocke10 = new Block(670,232,30,40);
  blocke11 = new Block(700,232,30,40);
  blocke12 = new Block(730,232,30,40);
  //level three
  blocke13 = new Block(640,180,30,40);
  blocke14 = new Block(670,180,30,40);
  blocke15 = new Block(700,180,30,40);
  //top
  blocke16 = new Block(670,150,30,40);
  //polygon

polygon1=new polygon(100,300,30);
chain = new Slingshot(polygon1.body,{x:100,y:300})
  

}
function draw() {
  background(56,44,44); 
 
  textSize(20);
  fill("lightyellow");
  

  ground.display();
  stand1.display();
  stand3.display();
  
  strokeWeight(2);
  stroke(15);
  fill("skyblue");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  fill("pink");
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  fill("turquoise");
  block13.display();
  block14.display();
  block15.display();
  fill("grey");
 block16.display();
 
//blocke display
fill("skyblue")
  blocke1.display();
  blocke2.display();
  blocke3.display();
  blocke4.display();
  blocke5.display();
  blocke6.display();
  blocke7.display();
   fill("pink");
  blocke8.display();
  blocke9.display();
  blocke10.display();
  blocke11.display();
  blocke12.display();
   fill("turquoise");
    blocke13.display();
    blocke14.display();
    blocke15.display();

  fill("grey");
  blocke16.display();

  //polygon
polygon1.display();

//chain
chain.display();


}
function mouseDragged(){
Matter.Body.setPosition(polygon1.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
    chain.fly();
}
 


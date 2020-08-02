const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var  slingShot;

function preload() {
  polygonimage = loadImage("sprites/polygon.png")
}

function setup(){
    var canvas = createCanvas(800,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(385,260,160,10);
    ground1 = new Ground(700,150,150,10)
  

    box1 = new Box(330,235,30,40);
    box2 = new Box(360,235,30,40);
    box3 = new Box(390,235,30,40);
    box4 = new Box(420,235,30,40);
    box5 = new Box(450,235,30,40);

    box6 = new Box(360,195,30,40);
    box7 = new Box(390,195,30,40);
    box8 = new Box(420,195,30,40);

    box9 = new Box(390,155,30,40);
    //object that will fly
    //box10 = new Box(100,200,30,40)
//
 
box11 = new Box(680,125,30,40)
    box12 = new Box(710,125,30,40)
    box13 = new Box(740,125,30,40)
    box14 = new Box(650,125,30,40)

    box15 = new Box(680,90,30,40)
    box16 = new Box(710,90,30,40)
    box17 = new Box(740,90,30,40)

    box18 = new Box(740,55,30,40)


    polygon = Bodies.circle(50,200,20);
    World.add(world,polygon);
  





  

  slingshot = new SlingShot(this.polygon,{x:100 , y:170})
}

function draw(){
    background(251,122,39);
    Engine.update(engine);
    //strokeWeight(4);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    //box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();
    box17.display();
    box18.display();
    
  imageMode(CENTER)
  image(polygonimage,polygon.position.x,polygon.position.y,50,50)




    ground.display();
    ground1.display();


   
  slingshot.display();   
}
function mouseDragged(){
Matter.Body.setPosition(this.polygon, {x:mouseX , y:mouseY})



}
function mouseReleased(){
slingshot.fly()

}


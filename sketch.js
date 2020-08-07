
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var box1, box2, box3
var ground
var paperObject

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

    //Create the Bodies Here.

    paperObject = createSprite(50,640,50,50);
    paperObject.shapeColor = "purple"

    box1 = createSprite(600,660,200,30)
	box2 = createSprite(500,610,30,100)
    box3 = createSprite(700,610,30,100)

	//Create a Ground
	ground = createSprite(0,670,2000,10)
    ground.shapeColor = "yellow"

    packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0, isStatic:true});
	World.add(world, packageBody);
	



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  keyPressed()
 
  drawSprites();

  stroke("white")
  textSize(20)
  fill("white")
  text("For the Paper to go in the Trash Can Press the Up Arrow and Down Arrow key" ,10,100 )

}

function keyPressed(){

    if (keyCode === UP_ARROW){
        //Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85})
        paperObject.velocityX = 10
        paperObject.velocityY = -3
	}
    if (keyCode === DOWN_ARROW){
        paperObject.x = 600
        paperObject.y = 650
    }
}



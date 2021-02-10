var starImg, fairyImg, bgImg;
var fairy , fairyVoice;
var star, starBody;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("star.png");
	fairyImg = loadAnimation("fairyImage1.png","fairyImage2.png");
	bgImg = loadImage("starNight.png");
	fairyVoice = loadSound("JoyMusic.mp3");

}

function setup() {
	createCanvas(800, 750);

	

	fairy = createSprite(130, 520);
	fairy.addAnimation("fairyflying",fairyImg);  
	fairy.scale =0.25;

	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;

	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:false});
	World.add(world, starBody);
	
	Engine.run(engine);

	star.x = starBody.position.x
	star.y = starBody.position.y

	console.log(World.mouseX);

}


function draw() {
  background(bgImg);
  Engine.update(engine);

if(star.y>470)
{
	star.velocityY=0;
	fairy.velocityX=0;
	fairy.velocityY=0;
	star.x=fairy.x+120;
	
	fairyVoice.stop();
}



  drawSprites();

}

function keyPressed() {
	//write code here
  if(keyCode === RIGHT_ARROW)
  {
	fairy.velocityX= 3;
	fairyVoice.play();

  }

  if (keyCode === LEFT_ARROW)
  {
    fairy.velocityX= -3;
fairyVoice.play();
  }
 if (keyCode === DOWN_ARROW)
  {
    star.velocityY= 3;
	


  }

}

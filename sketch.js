var starImg,bgImg;
var fairyImg;
var fairy,fairyVoice;
var star, starBody;
//create variable for fairy sprite and fairyImg

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("star.png");
	bgImg = loadImage("starNight.png");
	//load animation for fairy here
	fairyImg = loadAnimation("fairyImage1.png","fairyImage2.png");
	fairyVoice = loadSound("JoyMusic.mp3");
}

function setup() {
	createCanvas(800, 600);

	//write code to play fairyVoice sound
    fairyVoice.play();
	//create fairy sprite and add animation for fairy
    fairy = createSprite(300,490);
	fairy.addAnimation("flying",fairyImg);
	fairy.scale=0.2;
	fairy.debug=false;
	fairy.setCollider("circle",500,10,100)

	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;


	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}


function draw() {

	Engine.update(engine);
  background(bgImg);
  
  star.x= starBody.position.x 
  star.y= starBody.position.y 
  
  fairy.velocityX=0
  fairy.velocityY=0
  
  if(keyDown(LEFT_ARROW)){
	fairy.velocityX=-6
}
 else if(keyDown(RIGHT_ARROW)){
	fairy.velocityX=6
}
 else if(keyDown(DOWN_ARROW)){
	star.velocityY=3
}
 
 
  //write code to stop star in the hand of fairy
  if(fairy.isTouching(star)){
	Matter.Body.setStatic(starBody,true);
  }
  drawSprites();

}

function keyPressed() {

	if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(starBody,false); 
	}
	//writw code to move fairy left and right
	
}

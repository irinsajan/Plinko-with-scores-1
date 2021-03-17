var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particle = [];
var plinkos = [];
var divisions = [];

var divisionHeight=300;

var score = 0;

var gameState = "end";

var leftHundredScore = 0;
var leftTwoHundredScore = 0;
var leftThreeHundredScore = 0;
var leftFourHundredScore = 0;
var leftFiveHundredScore = 0;

var rightHundredScore = 0;
var rightTwoHundredScore = 0;
var rightThreeHundredScore = 0;
var rightFourHundredScore = 0;
var rightFiveHundredScore = 0;

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

  for (var j = 75; j <=width; j=j+50) 
   {
   
      plinkos.push(new Plinko(j,75));
   }

   for (var j = 50; j <=width-10; j=j+50) 
   {
   
      plinkos.push(new Plinko(j,175));
   }

    for (var j = 75; j <=width; j=j+50) 
   {
   
      plinkos.push(new Plinko(j,275));
   }

    for (var j = 50; j <=width-10; j=j+50) 
   {
   
      plinkos.push(new Plinko(j,375));
   }

   
  for (var k = 0; k <=width; k = k + 80) {
    
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }
 
 

    
}
 
function mousePressed() {
  if(gameState !== "end") {
    count++;
    particle = new Particle(mouseX, 10, 10, 10);
  }
}

function draw() {
  background("black");

  textSize(20)
  text("Score : "+score,20,30);

  textSize(20)
  text("10"+leftHundredScore,23,530);
  textSize(20)
  text("20"+leftTwoHundredScore,105,530);
  textSize(20)
  text("30"+leftThreeHundredScore,185,530);
  textSize(20)
  text("40"+leftFourHundredScore,265,530);
  textSize(20)
  text("50"+leftFiveHundredScore,345,530);

  textSize(20)
  text("50"+rightFiveHundredScore,425,530);
  textSize(20)
  text("40"+rightFourHundredScore,505,530);
  textSize(20)
  text("30"+rightThreeHundredScore,585,530);
  textSize(20)
  text("20"+rightTwoHundredScore,665,530);
  textSize(20)
  text("10"+rightHundredScore,745,530);

// if(particle.y = 530) {
  
//   if(particle.x = 23) {
//     score = score+1;
//   }
//   if(particle.x = 105) {
//     score = score+2;
//   }
//   if(particle.x = 185) {
//     score = score+3;
//   }
//   if(particle.x = 265) {
//     score = score+4;
//   }
//   if(particle.x = 345) {
//     score = score+5;
//   }


//   if(particle.x = 425) {
//     score = score+5;
//   }
//   if(particle.x = 505) {
//     score = score+4;
//   }
//   if(particle.x = 585) {
//     score = score+3;
//   }
//   if(particle.x = 665) {
//     score = score+2;
//   }
//   if(particle.x = 745) {
//     score = score+1;
//   }
// }

  Engine.update(engine);



   
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
  //  if(frameCount%120===0){
     
  //    particle.push(new Particle(random(width/2-30, width/2+30), 10,10));
  //   //  score++;
  //  }
 
  for (var j = 0; j < particle.length; j++) {
   
     particle[j].display();
   }
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }

   if(particle!=null) {
    // particle.display();
  
    if(particle.body.position.y>760) {
      if(particle.body.position.x<300) {
        score = score+50
        particle = null;
        if(count>= 5) gameState = "end";
      }
    }
  }
}

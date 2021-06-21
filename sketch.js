const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint=Matter.Constraint;

var engine, world;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16,box17,box18;
var ground1,ground2,polygon,rope,polygon_img;
var gameState = "onSling";
var score=0


function preload(){

    polygon_img=loadImage("polygon.png")
}

function setup(){
createCanvas(1200,400);
engine = Engine.create();
world = engine.world;

ground1=new Ground(600,300,200,10)
ground2=new Ground(1000,200,200,10)
polygon=Bodies.circle(100,200,20)
World.add(world,polygon)
rope=new Slingshot(this.polygon,{x:100,y:200})

//ground1
//level1
box1=new Box(520,250,40,40)
box2=new Box(560,250,40,40)
box3=new Box(600,250,40,40)
box4=new Box(640,250,40,40)
box5=new Box(680,250,40,40)
//level2
box6=new Box(560,210,40,40)
box7=new Box(600,210,40,40)
box8=new Box(640,210,40,40)
//level3
box9=new Box(600,170,40,40)

//ground2
//level1
box10=new Box(920,150,40,40)
box11=new Box(960,150,40,40)
box12=new Box(1000,150,40,40)
box13=new Box(1040,150,40,40)
box14=new Box(1080,150,40,40)
//level2
box15=new Box(960,110,40,40)
box16=new Box(1000,110,40,40)
box17=new Box(1040,110,40,40)
//level3
box18=new Box(1000,70,40,40)


}

function draw(){
    
    background(0)
   Engine.update(engine)
    image(polygon_img,polygon.position.x,polygon.position.y,40,40)
    text("SCORE : "+score,100,250)
    ground1.display();
    ground2.display();
   // polygon.display();
    rope.display();
    //ground1
    fill("green")
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    fill("yellow")
    box6.display();
    box7.display();
    box8.display();
    fill("blue")
    box9.display();
    //ground2
    fill("green")
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    fill("yellow")
    box15.display();
    box16.display();
    box17.display();
    fill("blue")
    box18.display();
    //ground1
    //fill("green")
    box1.score();
    box2.score();
    box3.score();
    box4.score();
    box5.score();
    //fill("yellow")
    box6.score();
    box7.score();
    box8.score();
    //fill("blue")
    box9.score();
    //ground2
    //fill("green")
    box10.score();
    box11.score();
    box12.score();
    box13.score();
    box14.score();
    //fill("yellow")
    box15.score();
    box16.score();
    box17.score();
    //fill("blue")
    box18.score();

    
}


function mouseDragged(){
    if (gameState!=="launched"){
        Matter.Body.setPosition(this.polygon, {x: mouseX , y: mouseY});
    }
}


function mouseReleased(){
    rope.fly();
    gameState = "launched";
}

function keyPressed(){
    gameState="onSling"
    rope.attach(this.polygon);
    Matter.Body.setPosition(this.polygon,{x:200,y:400})
    
       
    }

    async  function getBackgroundImage(){
        var response=await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")
        var responseJSON=await response.json()
        var dateTime=responseJSON.datetime
        var hour=dateTime.slice(11,13)
        console.log(hour)
        if(hour>=06 && hour<=19){
            var BG="sprites/bg.png"
            
        }
        else{
            BG="sprites/bg2.jpg"
        }
        backgroundImg=loadImage(BG)
      
      }



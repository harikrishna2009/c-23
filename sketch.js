const Engine= Matter.Engine
 const World= Matter.World
const Bodies= Matter.Bodies
 
 var engine,world,ground 
 var ball
 var box1
 var box2
 
 function setup() 
 { createCanvas(600,600);
   engine= Engine.create();
    world=engine.world
    ground = new Ground(300,590,600,20)
    box1 = new Box(200,300,50,50)
    box2 = new Box(240,100,50,100)
    
  }
  
  function draw()
    { background(0);
      Engine.update(engine)
      box1.display()
      box2.display()
      ground.display()
   }
  var path;
  var runner;
  var pathImage
  var runnerImage;
  var invisibleBoundary;
  var invisibleBoundary_2;

  function preload(){
    //pre-load images

    pathImage = loadImage("path.png");

    runnerImage = loadAnimation("Runner-1.png","Runner-2.png");

  }

  function setup(){

    createCanvas(400,400);
    //create sprites here

    path= createSprite(200,200);
    path.addImage(pathImage);
    path.velocityY = 4;
    path.scale = 1.2;


    runner = createSprite(370,320);
    runner.addAnimation("running",runnerImage);
    runner.scale = 0.1;

    invisibleBoundary = createSprite(370,200,20,400);
    invisibleBoundary.visible = false;

    invisibleBoundary_2 = createSprite(50,200,20,400);
    invisibleBoundary_2.visible = false;

  }

  function draw() {
    background(0);

        if(path.y > 400){
        path.y = height/4
        }

    runner.collide(invisibleBoundary);
    runner.collide(invisibleBoundary_2);

    runner.x=World.mouseX

    if(runner.x<60){
      runner.x=60;
    }

    if(runner.x>340){
      runner.x=340;
    }

    drawSprites();
  }

  function mousePressed() {
  
    runner.velocityX = 4;
    runner.velocityY = -3;
    
  }
  





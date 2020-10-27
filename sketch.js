var bullet, wall;
var speed, weight;
var thickness;

function setup() {
createCanvas(1600,400);

  speed = random(200, 250);
  weight= random(30, 52);
  thickness= random(22, 83)


  bullet = createSprite(50, 200, 60, 10);
  bullet.velocityX=speed;
  bullet.shapeColor="white";
  //bullet.collide(wall);

  wall = createSprite(1200, 200, thickness, height/2);
  wall.shapeColor=rgb(80,80,80);

}

function draw() {
  background(0,0,0);  


  if(hasCollided(bullet, wall)) {
    bullet.velocityX=0;

      var damage = 0.5*weight*speed*speed/(thickness*thickness*thickness);

      if(damage<10) {
        bullet.shapeColor = rgb(0,255,0);
      }

      if(damage>10) {
        bullet.shapeColor = rgb(255,0,0);
      }

    }

  drawSprites();
}

function hasCollided(lbullet, lwall) {

  bulletRightEdge = lbullet.x + lbullet.width;
  wallLeftEdge = lwall.x;
   if(bulletRightEdge>=wallLeftEdge) {

      return true
   }
    else {
      return false
    }
}



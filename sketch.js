var dog,bottle,food, database;
var position;

function preload ()
{
  dogImage = loadImage("Dog.png");
  dogImage2 = loadImage("happydog.png");
  bottleImage = loadImage("bottle.png");
}
function setup(){
  
  createCanvas(500,500);

  database=firebase.database();

 dog = createSprite(250,250,20,20);
 bottle = createSprite(250,200,15,25);
 bottle.addImage(bottleImage);
 bottle.scale = 0.08
 dog.addImage(dogImage);
 dog.scale = 0.09

 var foodstock = database.ref('Food');
 foodstock.on("value", readStock);
}

function draw () {
  background("lightblue")
  strokeWeight(20)
  stroke("yellow")
  textFont("technical")
  fill("red")
  text("NOTE: PRESS UP_ARROW TO FEED BRAVO MILK!",200,35)

  if (keyWentUp(UP_ARROW)){

   writeStoke(foodS);
   dog.addImage(dogImage2);
   bottle.visible = false;
   dog.y = 215

  }


  drawSprites();

}

function readStock(data) {

  foodS = data.val()
  
}
function writeStoke(x) {

  if (x<=0) {
    x = 5;
    
  }else{
    x = x-1;
  }

  database.ref('/').update({

Food:x

  })
  
}
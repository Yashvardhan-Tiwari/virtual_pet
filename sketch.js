var dog,food, database;
var position;

function preload ()
{
  dogImage = loadImage("Dog.png");
  dogImage2 = loadImage("happydog.png")
}
function setup(){
  
  createCanvas(500,500);

 dog = createSprite(250,250,20,20);
 dog.addImage(dogImage)
 dog.scale = 0.09

 var foodstock = database.ref('Food');
 foodstock.on("value", readStock);
}

function draw () {
  strokeWeight(20)
  stroke("yellow")
  textFont("technical")
  fill("red")
  text("NOTE: PRESS UP_ARROW TO FEED BRAVO MILK!",200,35)

  if (keyWentUp(UP_ARROW)){

   writeStock(foodS);
   dog.addImage(dogImage2);

  }


  drawSprites();

}

function readStock(data) {

  foodS = data.val()
  
}
function writeStoke(x) {

  if (x<=0) {
    x = 0;
    
  }else{
    x = x-1;
  }

  database.ref('/').update({

Food:x

  })
  
}
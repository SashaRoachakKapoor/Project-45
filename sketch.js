var horseTrack , horseTrackImg
var horse , horseImg

function preload(){
  horseTrackImg = loadImage("track.jpg");
  horseImg = loadImage("horse.png");;
}

function setup() {
  createCanvas(windowWidth , windowHeight);
  //horseTrack = createSprite(width,height)
  //horseTrack.addImage("track" , horseTrackImg)
  horse = createSprite(150 , height/2)
  horse.addImage("horse" , horseImg);
  horse.scale = 1

}

function draw() {
  background(255,255,255);  
  image(horseTrackImg,0,0,width*6,height)
  drawSprites();
}
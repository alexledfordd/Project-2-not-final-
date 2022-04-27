

let lockScreenImage;
let homeScreenImage;
let swipeUp;

//booleans
let swipeScreenBool = true;
let swipeBool = false;
let homeScreenBool = false;

function preload(){
  //change to your images
  lockScreenImage = loadImage("images/lockscreen.PNG");
  homeScreenImage = loadImage("images/homescreen.png");

}

function setup(){
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER)
  textAlign(CENTER)
  swipeUp = windowHeight/2;
}

function draw(){

  //using our booleans to trigger events
  //the functions are below

  //this will run right away because swipeScreenBool is set to true right away
  if(swipeScreenBool == true){
    swipeScreen()
  }

  //this checks to see if we're swiping. swipeBool is activated in the swipeScreen function
  //if we release the mouse, the lock screen image snaps back down
  //if we swipe up enough and mouseY is less than zero, swipeBool is false
  //and we trigger the homeScreenBool to true
  if(swipeBool == true){
    swipeUp = mouseY - lockScreenImage.height/2;
    if(mouseIsPressed === false){
      swipeBool = false;
      swipeUp = windowHeight/2;
    }
    if(mouseY < 0 ){
      swipeBool = false;
      swipeScreenBool = false;
      homeScreenBool = true;
    }
  }


  //if homeScreenBool is true, run the homeScreen function
  if(homeScreenBool == true){
    homeScreen()
  }

}


function swipeScreen(){
  background(255);

  //here I manually added the sizes, you may have to adjust
  image(homeScreenImage, windowWidth/2, windowHeight/2, 324, 700);
  image(lockScreenImage, windowWidth/2, swipeUp, 324, 700);

  //checking to see if we've  clicked at the bottom of the lock screen image
  //if we did, activate the swipeBool
  if(mouseIsPressed === true && mouseY> lockScreenImage.height/2+200 && mouseY< lockScreenImage.height/2+300){
    swipeBool = true;
  }
}



//this is where your game will be
function homeScreen(){
  background(255);
  image(homeScreenImage, windowWidth/2, windowHeight/2, 324, 700);
  fill(255, 0, 0)
  ellipse(windowWidth/2, 300, 30, 30)
  textSize(20);
  fill(0)
  text("24",windowWidth/2, 310 )
}

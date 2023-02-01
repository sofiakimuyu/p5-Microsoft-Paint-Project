//making my variables!
var canvaswidth = 600;
var canvasheight = 400;
var paintbrushsize = 10;
var backgroundcolor = 220;
var xleftpaintpot = 20;
var xrightpaintpot = 50;
var ypaintpot = 100;
var paintpotsize = 20;
//variables for paint color
var r;
var g;
var b;
//creating my canvas
function setup() {
  createCanvas(canvaswidth, canvasheight);
  background(backgroundcolor);
  //creating my mini canvas
  fill(255)
  rect(87, 23, 500, 365)
}

function draw() {
  //writing my header
  fill(1)
  text("Microsoft Paint!", 280, 20);
  //creating a paintpot function
  function paintpot(xlocation, ylocation, color){
     fill(color)
    rect(xlocation, ylocation, paintpotsize)
  }
  //creating all my paint pots
  //black paint pot
  paintpot(xleftpaintpot, ypaintpot, 1)
  // white paint pot
  paintpot(xrightpaintpot, ypaintpot, 255)
  //green paint pot
  fill(0, 255, 0);
 rect(xleftpaintpot, ypaintpot + 30, paintpotsize);
  //red paint pot
  fill(255, 0, 0);
 rect(xrightpaintpot, ypaintpot +30, paintpotsize);
  //blue paint pot
  fill(0, 0, 255);
 rect(xleftpaintpot, ypaintpot + 60, paintpotsize);
  //orange paint pot
  fill(255,165,0);
 rect(xrightpaintpot, ypaintpot +60, paintpotsize);
  //yellow paint pot
   fill(255,255,0);
 rect(xleftpaintpot, ypaintpot + 90, paintpotsize);
  //pink paint pot
  fill(255, 0, 255);
 rect(xrightpaintpot, ypaintpot +90, paintpotsize);
  //turquiose paint pot
   fill(0, 255, 255);
 rect(xleftpaintpot, ypaintpot + 120, paintpotsize);
  //grey paint pot
  fill(180);
 rect(xrightpaintpot, ypaintpot +120, paintpotsize); 
   //if trash can is pressed delete everything by putting up a new blank canvas
  if (mouseIsPressed){
    if (mouseX > 32 && mouseX < 57 && mouseY >360 && mouseY<390 || mouseX > 28 && mouseX < 61 && mouseY >360 && mouseY<365 || mouseX > 41 && mouseX < 48 && mouseY >355 && mouseY<365){
      fill(255);
      rect(87, 23, 500, 365);
      console.log("delete all")
  }}

  //if the user presses the black paint pot make the paint color black
  if (mouseIsPressed) {
    if (mouseX > xleftpaintpot && mouseX < xleftpaintpot + paintpotsize && mouseY > ypaintpot && mouseY < ypaintpot + paintpotsize) {
            r = 0
      g = 0
      b = 0
          }}
  //if the user presses the white paint pot make the paint color white
 if (mouseIsPressed) {
    if (mouseX > xrightpaintpot && mouseX < xrightpaintpot + paintpotsize && mouseY > ypaintpot && mouseY < ypaintpot + paintpotsize) {
        r = 255
      g = 255
      b = 255
          }}
  //if the user presses the green paint pot make the paint color green
  if (mouseIsPressed) {
    if (mouseX > xleftpaintpot && mouseX < xleftpaintpot + paintpotsize && mouseY > ypaintpot + 30 && mouseY < ypaintpot + 30 + paintpotsize) {
            r = 0
      g = 255
      b = 0
          }}
  //if the user presses the red paint pot make the paint color red
 if (mouseIsPressed) {
    if (mouseX > xrightpaintpot && mouseX < xrightpaintpot + paintpotsize && mouseY > ypaintpot + 30 && mouseY < ypaintpot + 30 + paintpotsize) {
        r = 255
      g = 0
      b = 0
          }}
    //if the user presses the blue paint pot make the paint color blue
  if (mouseIsPressed) {
    if (mouseX > xleftpaintpot && mouseX < xleftpaintpot + paintpotsize && mouseY > ypaintpot + 60 && mouseY < ypaintpot + 60 + paintpotsize) {
            r = 0
      g = 0
      b = 255
          }}
  //if the user presses the orange paint pot make the paint color orange
 if (mouseIsPressed) {
    if (mouseX > xrightpaintpot && mouseX < xrightpaintpot + paintpotsize && mouseY > ypaintpot + 60 && mouseY < ypaintpot + 60 + paintpotsize) {
      r = 255
      g = 166
      b = 0
          }
 }
  //if the user presses the yellow paint pot make the paint color yellow
  if (mouseIsPressed) {
    if (mouseX > xleftpaintpot && mouseX < xleftpaintpot + paintpotsize && mouseY > ypaintpot + 90 && mouseY < ypaintpot + 90 + paintpotsize) {
            r = 255
      g = 255
      b = 0
          }}
  
  //if the user presses the pink paint pot make the paint color pink
 if (mouseIsPressed) {
    if (mouseX > xrightpaintpot && mouseX < xrightpaintpot + paintpotsize && mouseY > ypaintpot + 90 && mouseY < ypaintpot + 90 + paintpotsize) {
        r = 255
      g = 0
      b = 255
          }}
   //if the user presses the turquiose paint pot make the paint color turquiose
  if (mouseIsPressed) {
    if (mouseX > xleftpaintpot && mouseX < xleftpaintpot + paintpotsize && mouseY > ypaintpot + 120 && mouseY < ypaintpot + 120 + paintpotsize) {
            r = 0
      g = 255
      b = 255
          }}
  //if the user presses the grey paint pot make the paint color grey
 if (mouseIsPressed) {
    if (mouseX > xrightpaintpot && mouseX < xrightpaintpot + paintpotsize && mouseY > ypaintpot + 120 && mouseY < ypaintpot + 120 + paintpotsize) {
        r = 180
      g = 180
      b = 180
          }}
  
  //create the rectangle paint brush
  fill(1)
  rect(xrightpaintpot, ypaintpot +150, paintpotsize)
  //create the circular paint prush
  ellipse(30, 260, paintpotsize+1)
  //create the triangle paint brush
  triangle(20, 294, 44, 294, 32, 273)
  fill(255)
  text("E", 26, 264)
  text("R", 56, 264)
  text("T", 28, 292)

  //create the plus sign
    fill(1)
  rect(28, 320, 10, 25)
  rect(20, 328, 25, 10)
  //create the minus sign
  rect(50, 328, 25, 10)
  //create the trash can
  rect(32, 360, 25, 30)
  rect(28, 360, 33, 5)
  rect(41, 355, 7, 10)
  //if - button is pressed decrease the paintbrush size
if (mouseIsPressed){
    if (mouseX > 50 && mouseX < 75 && mouseY >328 && mouseY<338){
      if (paintbrushsize > 2){
        paintbrushsize = (paintbrushsize - 1);
        console.log("decrease paint brush"); 
        }
      //to ensure that we never go into negatives, I have it set that size can only go down while it is positive
      else if (paintbrushsize < 2)
        paintbrushsize = paintbrushsize
  }}
  //if + is pressed increase the paintbrush size
  if (mouseIsPressed){
    if (mouseX > 28 && mouseX < 38 && mouseY >320 && mouseY<345 || mouseX > 20 && mouseX < 45 && mouseY >328 && mouseY<338){
        paintbrushsize = paintbrushsize + 1; 
        console.log("increase paint brush"); 
        }
  }
  //create the background button
  fill(255)
  rect(20, 60, 50, 20)
  fill(1);
  push();
  textSize(9);
  text("Background", 21, 73)
  pop();
  //change the background, if user presses a color and then background it changes to the background of that color
  if (mouseIsPressed){
    if (mouseX > 20 && mouseX < 70 && mouseY >60 && mouseY<80){
       fill(r, g, b);
      rect(87, 23, 500, 365);
        }
  }
 //create the instruction button
  fill(255)
  rect(20, 25, 50, 20)
  fill(1);
  push();
  textSize(9);
  text("Instructions", 21, 40)
  pop();
  //allow someone to view the instructions
  if (mouseIsPressed){
    if (mouseX > 20 && mouseX < 70 && mouseY >25 && mouseY<45){
   //instructions
  fill(220);
  rect(115, 50, 450, 300);
  fill(255);
  rect(135, 70, 410, 260);
  fill(1)
  textSize("45")
  text("Welcome to Microsoft Paint!!!", 250, 85)
  text("Hello User! Welcome and thank you for using Microsoft Paint! Here are some helpful instructions:", 140, 90, 340);
  text("- Click any color you want and then click background to change your background.", 160, 130, 400)
  text("- Click the paint color you want to use. Then click the letter written on the paintbrush shape you want to use (eg. 'T' for triangle). Clicking the letter will draw that shape where your mouse is or will follow you rmouse if you move it around.", 160, 160, 400)
  text(" - To increase your paintbrush size click the + button, to decrease your size, press the - button.", 160, 205, 400)
  text("- If you want to start over, click the trash can and it will give you a whole new blank canvas.", 160, 235, 400)
  text("- When you are ready to start press, the trash can.", 160, 265, 400)
    }}
    fill(r,g, b);
  noStroke();
  //create the draw a rect function
  function drawrect(xlocation, ylocation, size){
    rect(xlocation, ylocation, size)
  }
  //create the draw a circle function
  function drawcircle(xlocation, ylocation, size){
   ellipse(xlocation, ylocation, size)
  }
     //Paint!
  //to use a square paintbrush
if(keyIsPressed === true){
    if(key === 'r'){
    drawrect(mouseX,mouseY, paintbrushsize)
    }
}
  //to use the circular paintbrush
 if(keyIsPressed === true){
    if(key === 'e'){
     drawcircle(mouseX, mouseY, paintbrushsize); 
    }
  }
//to use the triangular paintbrush
 if(keyIsPressed === true){
    if(key === 't'){
    triangle(mouseX - paintbrushsize/2, mouseY + sqrt(3)*paintbrushsize/2, mouseX, mouseY, mouseX + paintbrushsize/2, mouseY + sqrt(3)*paintbrushsize/2);
      console.log("key t")
    }
  }
}
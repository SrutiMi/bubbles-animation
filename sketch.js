let bubbles=[];
//creating the class ... the properties will be x,y and radius
let r,g,b,xSpeed,ySpeed;
class Bubbles{
  constructor(){
    this.x=random(width);
    this.y=random(height);
    this.radius=random(10,50);
    this.xSpeed=random(-2,2);
    this.ySpeed=random(-2,2);
    }
 move() {
   this.x+=this.xSpeed;
   this.y+=this.ySpeed;
   if(this.x >= width-this.radius || this.x<=this.radius){
      this.xSpeed *=-1;//reverse the direction
   }
   if(this.y>height-this.radius || this.y>this.radius){
     this.ySpeed*=-1;//reverse the direction
   }
      
 }
  display(){
    r=random(255);
    g=0;
    b=random(255);
    noStroke();
    fill(r, g, b, 60);
    ellipse(this.x,this.y,this.radius*2);
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(220);
  // frameRate();

}

function draw() {
  background(0);
    for(let i=0;i<50;i++){
    bubbles.push(new Bubbles());
  }
  for(let i=0;i<50;i++){
    bubbles[i].move();
    bubbles[i].display();
    
    
  }
  
  
  
}
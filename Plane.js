class Plane{
    constructor(x,y){
        
    }

    display(){

   // var pos =this.body.position;
   // var angle = this.body.angle;
    push();
   // translate(pos.x, pos.y);
   // rotate(angle);
    rectMode(CENTER);
    strokeWeight(4);
    stroke("black");
    fill("green");
    rect(0, 0, this.width, this.height);
    pop();

  }

}
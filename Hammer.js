class Hammer{
      constructor(x,y){

    var options={
        density:2,
        friction:1.0,
        restitution:0.5
    }

  }

  display(){

    //var pos =this.body.position;
    //var angle = this.body.angle;
    push();
   // translate(pos.x, pos.y);
   // rotate(angle);
    rectMode(CENTER);
    strokeWeight(4);
    stroke("yellow");
    fill("brown");
    rect(0, 0, this.width, this.height);
    pop();

  }

}
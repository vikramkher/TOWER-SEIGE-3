class Box{
    constructor(x, y, width, height) {
        var options = {
            'restitution':0.4,
            'friction':0.0,
        }
        this.visiblity=225

        this.width = width;
        this.height = height;
        this.body = Bodies.rectangle(x, y, width, height, options);
        //this.image = loadImage("sprites/base.png");
        World.add(world, this.body);
      }
      score(){
        if(this.visiblity<0 && this.visiblity>-105)
          score++
        }
      display(){
        if(this.body.speed < 3){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        //imageMode(CENTER);
       //image(this.image, 0, 0, this.width, this.height);
       rectMode(CENTER)
       rect(0,0,this.width,this.height)
        pop();
        }
        else{
          push();
          this.visiblity = this.visiblity - 5;
          pop();
        }

        
      }
}
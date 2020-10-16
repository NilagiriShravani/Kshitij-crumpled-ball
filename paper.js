class Paper {
  constructor(x,y,r) {
    var options = {
        'restitution':0.5,
        'friction':0.3,
        'density':1.0
    }
    this.image = loadImage("paper.png");
    this.r=r;
    this.x=x;
    this.y=y;
    //this.body = Bodies.circle(x, y, 20, options);
    this.body=Bodies.circle(x,y,(r-10)/2,options);
    // this.width = 50;
    // this.height = 50;
   
    

    World.add(world,this.body);

  }
  display(){
  //   var pos =this.body.position;
  //   var angle=this.body.angle;
  //   push();
  //   translate(pos.x,pos.y);
  //   rotate(angle);
  //   image(this.image,0,0,this.width,this.height);
  //   imageMode(CENTER);
  //   // ellipseMode(CENTER);
  //   // strokeWeight(4);
  //   // stroke("black");
  //  // fill("blue");
  //  // ellipse(0,0, this.width, this.height);
  //   pop();
  
  var paperpos=this.body.position;		

  push()
  translate(paperpos.x, paperpos.y);
  rectMode(CENTER)
  //strokeWeight(4);
  fill(255,0,255)
  imageMode(CENTER);
  image(this.image, 0,0,this.r, this.r)
  //ellipse(0,0,this.r, this.r);
  pop()
  
  }
}
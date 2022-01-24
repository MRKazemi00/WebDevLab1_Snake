class Snake {
    constructor(){
    this.x = 0;
    this.y = 0;
    this.xspeed= 1;
    this.yspeed = 0;
    }


    update(){
      this.x= this.x + this.xspeed*scl;
      this.y= this.y + this.yspeed*scl;
    }
  
    show(){
      fill(255);
      rect(this.x, this.y, 10, 10);
    }

    dir(x,y){
        this.xspeed = x;
        this.yspeed = y;
    }

    
  
  }
  
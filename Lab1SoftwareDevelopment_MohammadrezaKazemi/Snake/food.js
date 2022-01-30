class Food{
    constructor(x, y){
        this.x = x;
        this.y = y;
    }

    show(){
        fill(123);
        rect(this.x, this.y, scl, scl);
    }

    getX(){
        return this.x;
    }

    getY(){
        return this.y;
    }


}
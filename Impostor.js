class Impostor{
    constructor(x,y,w,h){
        var prop={
            isStatic: true
        }

        this.body = Bodies.rectangle(x,y,w,h,prop);
        this.w=w;
        this.h=h;
        this.image = loadImage("Orange.png");
        World.add(world,this.body);
    }

    display(){
        //rectMode(CENTER)
        //rect(this.body.position.x,this.body.position.y,this.w,this.h);

        image(this.image,this.body.position.x,this.body.position.y,75,75);
    }
}
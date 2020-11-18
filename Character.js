class Character{
    constructor(x,y,w,h){
        var prop={
            isStatic: true
        }

        this.body = Bodies.rectangle(x,y,w,h,prop);
        this.w=w;
        this.h=h;
        this.image = loadImage("Red.png")
        World.add(world,this.body);
    }
    display(){
        //rectMode(CENTER)
        //rect(this.body.position.x,this.body.position.y);
          
        image(this.image,this.body.position.x,this.body.position.y,100,100);

    }
}
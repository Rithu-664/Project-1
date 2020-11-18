class Log{
    constructor(x,y,w,h,angle){
        var prop={
            isStatic: true
        }

        this.body = Bodies.rectangle(x,y,w,h,prop);
        this.w=w;
        this.h=h;
        this.image = loadImage("wood2.png")
        Matter.Body.setAngle(this.body,angle);
        World.add(world,this.body);
    }

    display(){
         var angle = this.body.angle;
         push();
         translate(this.body.position.x,this.body.position.y);
         rotate(angle);
         imageMode(CENTER)

        image(this.image,0,0,300,20);
        pop();
    }
}
class Slingshot{
    constructor(body1,point2){
        var prop={
            bodyA: body1,
            pointB: point2,
            stiffness: 0.04,
            length: 10
        }
        this.chain = Constraint.create(prop);
        this.sling1 = loadImage("sling1.png");
        this.sling2 = loadImage("sling2.png");
        this.sling3 = loadImage("sling3.png");
        World.add(world,this.chain);
    }
    attatch(body){
        this.chain.bodyA = body;
    }

    fly(){
        this.chain.bodyA = null;    
    }

    display(){
        image(this.sling1,200,230);
        image(this.sling2,170,230);

            
        
        }
    }

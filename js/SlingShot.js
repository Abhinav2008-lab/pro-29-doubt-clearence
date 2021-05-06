class Slingshot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 1
        }
        this.sling = Constraint.create(options);
        this.pointB=pointB;
        World.add(world, this.sling);

    }
    fly(){
        this.sling.bodyA =null;
    }
    display(){
        if(this.sling.bodyA){
        var pointA = this.sling.bodyA.position;
        var pointB = this.pointB;
        }
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            push();
        }
            stroke(48,22,8);
            if(pointA < 220){
                strokeWeight(7);
                line(bodyA.x + 20, bodyA.y, pointB.x -10, pointB.y);
                line(bodyA.x + 20, bodyA.y, pointB.x - 30, pointB.y );
                image(this.sling,pointA.x + 20, bodyA.y -10,15,30);
            }
            else{
                strokeWeight(3);
                line(bodyA.x + 25, bodyA.y, pointB.x -10, pointB.y);
                line(bodyA.x + 25, bodyA.y, pointB.x + 30, pointB.y -3);
                image(this.sling,bodyA.x + 25, bodyA.y -10,15,30);
        }
            strokeWeight(4);
            stroke("turquoise");
            line(bodyA.x, bodyA.y, pointB.x, pointB.y);
    
    }
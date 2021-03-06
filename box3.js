class Box3{
    constructor(x, y, width, height) {
        var options = {
            'restitution':1.0,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.x=x;
        this.y=y;
        this.width = width;
        this.height = height;
        World.add(world, this.body);
      }
      display() {
        if (this.body.position.y < 320) {
            var angle = this.body.angle;
            var pos = this.body.position;
            push();
            translate(pos.x, pos.y);
            rotate(angle);
            rectMode(CENTER);
            rect(0, 0, this.width, this.height);
            pop();
        }
        else{
            World.remove(world, this.body);
            push();
                this.Visiblity = this.Visiblity - 5;
                tint(255, this.Visiblity)
                rect(999, 999, this.width, this.height);
            pop();
    }
    }

}
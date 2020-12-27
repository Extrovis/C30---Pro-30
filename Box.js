class Box{

    constructor(x, y, width, height) {
        var properties = {
            isStatic: false
        }

        this.body = Bodies.rectangle(x, y, width, height, properties);

        this.width = width;
        this.height = height;

        this.visibility = 255;

        World.add(world, this.body);
    }

    display() {

        if(this.body.speed < 3){

            var pos = this.body.position;

            push();
    
            rectMode(CENTER);
    
            translate(pos.x, pos.y);
    
            fill("white");
    
            rect(0, 0, this.width, this.height);
    
            noFill();
    
            pop();

        }else {

            push();

            if(frameRate % 2 == 0){

                this.visibility -= 1;

            }

            tint(255, this.visibility);

            pop();

            World.remove(world, this.body);

        }

    }

}
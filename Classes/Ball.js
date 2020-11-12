class Wreak {
    constructor(x, y, r, color) {

        var options = {
            density: 1,
            frictionAir: 0.005
        }

        this.body = Bodies.circle(x, y, r, options);

        this.r = r;
        this.color = color;

        World.add(world, this.body);
    }

    display() {
        var pos = this.body.position;
        var angle = this.body.angle;

        push();

        rotate(angle);
        translate(pos.x, pos.y)

        strokeWeight(10);

        fill(this.color);

        ellipseMode(RADIUS);
        ellipse(0, 0, this.r, this.r);

        pop();
    }
}
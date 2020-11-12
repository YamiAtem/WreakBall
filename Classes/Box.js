class Box {
  constructor(x, y, w, h, color) {
     var options = {
        restitution: 0.5,
        density: 1,
        friction: 1
     }

     this.body = Bodies.rectangle(x, y, w, h, options);

     this.w = w;
     this.h = h;

     this.color = color;

     World.add(world, this.body);
  }

  display() {
    var pos = this.body.position;
    var angle = this.body.angle;

    push();

    rotate(angle);
    translate(pos.x, pos.y);

    strokeWeight(10);

    fill(this.color);

    rectMode(CENTER);

    rect(0, 0, this.w, this.h);

    pop();
  }
}


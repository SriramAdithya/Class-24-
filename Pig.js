class Pig {
  constructor(x, y) {
    const options = {
      restitution: 0.8,
      friction: 0.3,
      density: 1,
    };
    this.width = 50;
    this.height = 50;
    this.body = Bodies.rectangle(x, y, 50, 50, options);
    World.add(world, this.body);
  }

  display() {
    console.log(-PI / 7);
    let pos = this.body.position;
    let angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    rectMode(CENTER);
    fill("green");
    rect(0, 0, this.width, this.height);
    pop();
  }
}

class Log {
  constructor(x, y, height, angle) {
    const options = {
      restitution: 0.8,
      friction: 1,
      density: 1,
    };
    this.width = 20;
    this.height = height;
    this.body = Bodies.rectangle(x, y, 20, height, options);
    World.add(world, this.body);
  }

  display() {
    let pos = this.body.position;
    let angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    rectMode(CENTER);
    fill("brown");
    rect(0, 0, this.width, this.height);
    pop();
  }
}

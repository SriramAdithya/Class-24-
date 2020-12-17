class Bird {
  constructor(x, y) {
    const options = {
      restitution: 0.5,
      friction: 1,
      density: 1.5,
    };
    this.width = 50;
    this.height = 50;
    this.body = Bodies.rectangle(x, y, 50, 50, options);
    World.add(world, this.body);
  }

  display() {
    let pos = this.body.position;
    pos.x = mouseX;
    pos.y = mouseY;
    let angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    rectMode(CENTER);
    fill("blue");
    rect(0, 0, this.width, this.height);
    pop();
  }
}

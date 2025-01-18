class Track {
  constructor(center, radius) {
    this.center = center;
    this.radius = radius;
  }

  getPosition(offset) {
    return {
      x: this.center.x + this.radius * Math.cos(offset),
      y: this.center.y - this.radius * Math.sin(offset)
    };
  }

  draw(ctx) {
    ctx.beginPath();
    ctx.arc(this.center.x, this.center.y, this.radius, 0, 2 * Math.PI);
    ctx.strokeStyle = 'white';
    ctx.stroke();
  }
}
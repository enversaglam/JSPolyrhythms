class Track {
  constructor(center, radius) {
    this.center = center;
    this.radius = radius;
  }

  getPosition(offset) {
    return {
      x: this.center.x + this.radius * Math.cos(offset * 3),
      y: this.center.y - this.radius * Math.sin(offset)
    };
  }

  draw(ctx) {
    ctx.beginPath();
    //before version
    /* ctx.arc(this.center.x, this.center.y, this.radius, 0, 2 * Math.PI); */
    for (let a=0; a < 2 * Math.PI; a += 0.1) {
      ctx.lineTo(
        this.center.x + this.radius * Math.cos(a * 3),
        this.center.y - this.radius * Math.sin(a)
      );
    }
    ctx.closePath();
    
    ctx.strokeStyle = 'white';
    ctx.stroke();
  }
}
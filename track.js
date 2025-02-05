class Track {
  constructor(center, radius) {
    this.center = center;
    this.radius = radius;
    this.period = Math.PI;
  }

  getPosition(offset) {
    return {
      x: this.center.x + this.radius * Math.cos(offset),
      y: this.center.y - this.radius * Math.sin(offset),
      round: Math.floor(offset / this.period)
    };
  }

  draw(ctx) {
    ctx.beginPath();
    //before version
    /* ctx.arc(this.center.x, this.center.y, this.radius, 0, 2 * Math.PI); */
    for (let a=0; a < 2 * Math.PI; a += 0.01) {
      const pos = this.getPosition(a);
      ctx.lineTo(pos.x, pos.y);
    }
    ctx.closePath();
    
    ctx.strokeStyle = 'white';
    ctx.stroke();
  }
}
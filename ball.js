class Ball {
    constructor(track, radius, speed, soundFrequency) {
        this.track = track;
        this.radius = radius;
        this.speed = speed;
        this.soundFrequency = soundFrequency;
        this.offset = 0;
        this.direction = 1;
        this.center = this.track.getPosition(this.offset);
    }

    draw(ctx) {
        ctx.beginPath();
        ctx.arc(this.center.x, this.center.y, this.radius, 0, 2 * Math.PI);
        ctx.strokeStyle = 'white';
        ctx.stroke();
    }

    move() {
        this.offset += this.speed * this.direction;
        this.center = this.track.getPosition(this.offset);
        if (this.center.y > this.track.center.y) {
            this.direction *= -1;
            playSound(this.soundFrequency);
        }
    }
}
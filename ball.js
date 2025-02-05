class Ball {
    constructor(track, radius, speed, soundFrequency) {
        this.track = track;
        this.radius = radius;
        this.speed = speed;
        this.soundFrequency = soundFrequency;
        this.offset = 0;
        this.round = 0;
        this.center = this.track.getPosition(this.offset);
    }
    
    move() {
        this.offset += this.speed;
        const res = this.track.getPosition(this.offset);
        this.center = { x: res.x, y: res.y };
        if (res.round != this.round) {
            playSound(this.soundFrequency);
            this.round = res.round;
        }
    }

    draw(ctx) {
        const fakeY = 2 * this.track.center.y - this.center.y;
        if (fakeY > this.center.y) {
            ctx.beginPath();
            ctx.arc(this.center.x, this.center.y, this.radius, 0, 2 * Math.PI);
            ctx.strokeStyle = 'white';
            ctx.stroke();
        } else {
            ctx.beginPath();
            ctx.arc(this.center.x, fakeY, this.radius, 0, 2 * Math.PI);
            ctx.strokeStyle = 'white';
            ctx.stroke();
        }
    }

}
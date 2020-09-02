export default class Attack {
    constructor(playerX, playerY, vector) {
        this.frameIndex = 0;

        const fireball = {
            image: [new Image(), new Image()],
            width: 11,
            height: 11
        };
        fireball.image[0].src = './assets/fireball_0.png';
        fireball.image[1].src = './assets/fireball_1.png';

        this.projectile = { sprite: fireball };
        this.projectile.position = { x: playerX, y: playerY };
        this.projectile.hitbox = {
            topLeft: this.projectile.position,
            bottomRight: { x: this.projectile.position.x + 11, y: this.projectile.position.y + 11 }
        };

        this.projectile.vector = vector;
    }

    update() {
        this.projectile.position.x += this.projectile.vector.x * 11;
        this.projectile.position.y += this.projectile.vector.y * 11;
        this.projectile.hitbox = {
            topLeft: this.projectile.position,
            bottomRight: { x: this.projectile.position.x + 11, y: this.projectile.position.y + 11 }
        }

        if (this.frameIndex = 0) {
            this.frameIndex++;
        } else {
            this.frameIndex = 0;
        }
    }

    draw(ctx) {
        ctx.drawImage(
            this.projectile.sprite.image[this.frameIndex],
            0,
            0,
            this.projectile.sprite.width,
            this.projectile.sprite.height,
            this.projectile.position.x,
            this.projectile.position.y,
            this.projectile.sprite.width,
            this.projectile.sprite.height
        )
    }
}
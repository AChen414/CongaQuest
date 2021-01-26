export default class Enemy {
    constructor(playerX, playerY, first=null) {
        this.characterFrameIndex = 0;

        const skeletonEnemy = {
            image: [new Image(), new Image(), new Image(), new Image()],
            width: 16,
            height: 16
        };
        skeletonEnemy.image[0].src = './assets/dungeon_tileset/frames/skelet_idle_anim_f0.png';
        skeletonEnemy.image[1].src = './assets/dungeon_tileset/frames/skelet_idle_anim_f1.png';
        skeletonEnemy.image[2].src = './assets/dungeon_tileset/frames/skelet_idle_anim_f2.png';
        skeletonEnemy.image[3].src = './assets/dungeon_tileset/frames/skelet_idle_anim_f3.png';

        this.enemy = { sprite: skeletonEnemy };
        this.enemy.position = this.enemySpawnPoint(playerX, playerY);
        this.enemy.hitbox = {
            topLeft: this.enemy.position,
            bottomRight: { x: this.enemy.position.x + 16, y: this.enemy.position.y + 16}
        }
        if (first) this.enemy.position = { x: 10000, y: 10000}
    }

    enemySpawnPoint(playerX, playerY) {
        let randomX = Math.floor(Math.random() * 634);
        let randomY = Math.floor(Math.random() * 594);

        while (Math.abs(playerX - randomX) < 64 && Math.abs(playerY - randomY)) {
            randomX = Math.floor(Math.random() * 634);
            randomY = Math.floor(Math.random() * 594);
        }

        return { x: randomX, y: randomY };
    }

    update() {
        if (this.characterFrameIndex === 3) {
            this.characterFrameIndex = 0;
        } else {
            this.characterFrameIndex++;
        }
    }

    draw(ctx) {
        ctx.drawImage(
            this.enemy.sprite.image[this.characterFrameIndex],
            0,
            0,
            this.enemy.sprite.width,
            this.enemy.sprite.height,
            this.enemy.position.x,
            this.enemy.position.y,
            this.enemy.sprite.width * 2,
            this.enemy.sprite.height * 2
        )
    }
}
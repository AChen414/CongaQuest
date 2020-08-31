export default class Enemy {
    constructor() {
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

        this.enemy = { sprite: skeletonEnemy, position: { x: 200, y: 200 } };
    };

    enemySpawnPoint() {

    }

    update() {
        if (this.characterFrameIndex === 3) {
            this.characterFrameIndex = 0;
        } else {
            this.characterFrameIndex += 1;
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
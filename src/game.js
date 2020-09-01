import Player from './player';
import Enemy from './enemy';

export default class Game {
    constructor(ctx) {
        this.ctx = ctx;
        this.player = new Player();
        this.dungeon = new Image();
        this.enemies = [];

        this.dungeon.src = "./assets/dungeon.png";
    }

    draw() {
        // clears screen
        this.ctx.clearRect(0, 0, 650, 650);

        // draws dungeon
        this.ctx.drawImage(
            this.dungeon,
            0,
            0,
            650,
            650,
        )

        this.player.draw(this.ctx);
        this.drawEnemies();
    }

    update() {
        this.player.update();
        this.updateEnemies(2);
        this.gameOver();
    }

    gameOver() {
        if (this.playerCollision() || this.outsideMap()) {
            this.player.alive = false;
            this.player.conga.forEach((character) => {
                character.sprite = this.player.deathCharacter
            })
            this.player.revertMove();
        }
    }
    
    outsideMap() {
        if (this.player.conga[0].position.x < 0) { // When dying off the left
            return true;
        } else if (this.player.conga[0].position.x > 613) { // When dying off the right
            return true;
        } else if (this.player.conga[0].position.y < 0) { // When dying off the top
            return true;
        } else if (this.player.conga[0].position.y > 549) { // When dying off the bottom
            return true;
        } else {
            return false;
        }
    }

    playerCollision() {
        this.player.conga.forEach((character) => {
            this.enemies.forEach((enemy) => {
                if (this.collision(character.hurtbox.topLeft, character.hurtbox.bottomRight, enemy.enemy.hitbox.topLeft, enemy.enemy.hitbox.bottomRight)) {
                    return true;   
                }
            })
        })
        return false;
    }

    collision(topLeft1, bottomRight1, topLeft2, bottomRight2) {
        // checks if object 1 is to the left or right of object 2
        if (topLeft1.x > bottomRight2.x || bottomRight1.x < topLeft2.x) {
            return false;
        }

        // checks if object 1 is above or below object 2
        if (topLeft1.y > bottomRight2.y || bottomRight1.y < topLeft2.y) {
            return false;
        }
        return true;
    }

    updateEnemies(difficulty) {
        while (this.enemies.length < difficulty) {
            this.enemies.push(new Enemy(this.player.conga[0].position.x, this.player.conga[0].position.y));
        }
        this.enemies.forEach((enemy) => {
            enemy.update(this.ctx);
        })
    }

    drawEnemies() {
        this.enemies.forEach((enemy) => {
            enemy.draw(this.ctx);
        })
    }
}
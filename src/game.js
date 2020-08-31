import Player from './player';
import Enemy from './enemy';

export default class Game {
    constructor(ctx) {
        this.ctx = ctx;
        this.player = new Player();
        this.dungeon = new Image();
        this.enemy = new Enemy();

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
        this.enemy.draw(this.ctx);
    }

    update() {
        this.player.update();
        this.enemy.update();
        this.gameOver();
    }

    gameOver() {
        if (this.outsideMap() || this.enemyCollision()) {
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
    };

    enemyCollision() {

    }
}
import Player from './player';
import Enemy from './enemy';

export default class Game {
    constructor(ctx) {
        this.ctx = ctx;
        this.player = new Player();
        this.dungeon = new Image();
        this.enemies = [];
        this.attacks = [];
        this.score = 0;
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
        this.drawAttacks();
        this.drawEnemies();
    }

    update() {
        this.player.update();
        this.updateEnemies(2); // change this when difficulty is implemented
        if (this.attacks.length === 0) {
            this.attackNearestEnemy(this.player.conga[0].position.x, this.player.conga[0].position.y);
        }
        this.updateAttacks();
        this.gameOver();
    }

    gameOver() {
        if (this.outsideMap() || this.playerCollision()) {
            this.player.alive = false;
            this.player.conga.forEach((character) => {
                character.sprite = this.player.deathCharacter
            })
            if (!this.playerCollision()) this.player.revertMove();
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
        let hurtbox = this.player.conga[0].hurtbox;
        for (let i = 0; i < this.enemies.length; i++) {
            let hitbox = this.enemies[i].enemy.hitbox
            if (this.collision(hurtbox.topLeft, hurtbox.bottomRight, hitbox.topLeft, hitbox.bottomRight)) {
                return true;
            }
        }
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

    attackNearestEnemy(playerX, playerY) {
        this.enemies.forEach((enemy) => {
            if (Math.abs(enemy.enemy.position.x - playerX) < 100 && Math.abs(enemy.enemy.position.y - playerY) < 100) {
                let attack = this.player.attack(enemy.enemy.position.x, enemy.enemy.position.y, playerX, playerY);
                this.attacks.push(attack);
            }
        })
    }

    drawAttacks() {
        this.attacks.forEach((attack) => {
            attack.draw(this.ctx);
        })
    }

    updateAttacks() {
        this.attacks.forEach((attack) => {
            attack.update();

            // if projectile goes off screen, remove it
            if (attack.projectile.position.x > 650 || attack.projectile.position.x < 0 || attack.projectile.position.y > 610 || attack.projectile.position.y < 0) {
                this.attacks.pop();     // change this once more than one person attacks
            }

            // checks if attack collides with enemy and removes if it does
            let idxToRemove = null;
            this.enemies.forEach((enemy) => {
                if (this.collision(enemy.enemy.hitbox.topLeft, enemy.enemy.hitbox.bottomRight, attack.projectile.hitbox.topLeft, attack.projectile.hitbox.bottomRight)) {
                    this.attacks.pop(); // change this once more than one person attacks
                    idxToRemove = this.enemies.indexOf(enemy);
                }
            })
            if (idxToRemove) { // This is supposed to remove the enemy that is hit but still doesn't work, I believe the error of the enemy that doesn't die is here
                this.updateScore();

                console.log(this.enemies, 'index', idxToRemove)
                const newEnemies = [];
                for (let i = 0; i < this.enemies.length; i++) {
                    if (i !== idxToRemove) newEnemies.push(this.enemies[i]);
                }
                this.enemies = newEnemies;
            }
        })
    }

    updateScore() {
        this.score++;
        document.getElementById('score').innerHTML = this.score;
    }
}
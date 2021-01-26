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
        this.updateEnemies(this.determineDifficulty()); // change this when difficulty is implemented
        if (this.attacks.length === 0) {
            this.attackNearestEnemy(this.player.conga[0].position.x, this.player.conga[0].position.y);
        }
        this.updateAttacks();
        this.gameOver();
    }

    gameOver() {
        if (this.outsideMap() || this.playerCollision()) {
            this.player.alive = false;
            this.attacks = [];
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
        for (let i = 1; i < this.enemies.length; i++) {
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
        if (this.enemies.length === 0) this.enemies.push(new Enemy(this.player.conga[0].position.x, this.player.conga[0].position.y, true)) // when game starts add an enemy off screen 
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
        for (let i = 0; i < this.enemies.length; i++) {
            if (Math.abs(this.enemies[i].enemy.position.x - playerX) < 100 && Math.abs(this.enemies[i].enemy.position.y - playerY) < 100) {
                console.log(this.enemies[i], this.player.conga[0].position)
                let attack = this.player.attack(this.enemies[i].enemy.position.x, this.enemies[i].enemy.position.y, playerX, playerY);
                this.attacks.push(attack);
                return;
            }
        }
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
            if (idxToRemove) { // removes enemy when hit
                this.updateScore();
                this.enemies.splice(idxToRemove, 1);
            }
        })
    }

    updateScore() {
        this.score++;
        document.getElementById('score').innerHTML = this.score;
    }

    determineDifficulty() {
        return Math.floor((this.score / 2) + 2);
    }
}
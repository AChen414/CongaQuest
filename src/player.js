import Input from './input';

export default class Player {
    constructor() {
        // this.x = 325;
        // this.y = 325;
        this.direction;
        this.input = new Input();
        this.characterFrameIndex = 0;
        this.alive = true;
        this.previousPosition;

        const wizardCharacter = {
            image: [new Image(), new Image(), new Image(), new Image()],
            width: 32,
            height: 48
        };
        wizardCharacter.image[0].src = './assets/wizard_f_0.png';
        wizardCharacter.image[1].src = './assets/wizard_f_1.png';
        wizardCharacter.image[2].src = './assets/wizard_f_2.png';
        wizardCharacter.image[3].src = './assets/wizard_f_3.png';

        const knightCharacter = {
            image: [new Image(), new Image(), new Image(), new Image()],
            width: 32,
            height: 48
        };
        knightCharacter.image[0].src = './assets/knight_f_0.png';
        knightCharacter.image[1].src = './assets/knight_f_1.png';
        knightCharacter.image[2].src = './assets/knight_f_2.png';
        knightCharacter.image[3].src = './assets/knight_f_3.png';

        this.deathCharacter = {
            image: [new Image(), new Image(), new Image(), new Image()],
            width: 18,
            height: 24
        }
        this.deathCharacter.image[0].src = './assets/follower-gravestone.png';
        this.deathCharacter.image[1].src = './assets/follower-gravestone.png';
        this.deathCharacter.image[2].src = './assets/follower-gravestone.png';
        this.deathCharacter.image[3].src = './assets/follower-gravestone.png';

        this.conga = [
            { sprite: wizardCharacter, position: { x: 325, y: 325 } },
            { sprite: knightCharacter, position: { x: 325, y: 360 } },
            { sprite: wizardCharacter, position: { x: 325, y: 395 } }
        ]

        this.updateHurtBox();
    }

    update() {
        if (this.alive) {

            // previous position of last character in line
            this.previousPosition = { x: this.conga[2].position.x, y: this.conga[2].position.y };

            // gets input and updates direction
            this.direction = this.input.getInputDirection();

            // replaces characters in the line with the next person in line
            for (let i = this.conga.length - 2; i >= 0; i--) {
                this.conga[i + 1].position = { ...this.conga[i].position };
            }
            
            // moves the head of the conga line
            this.conga[0].position.x += (this.direction.x * 32);
            this.conga[0].position.y += (this.direction.y * 32);
            
            this.updateHurtBox();

            // changes the character sprite frame
            if (this.characterFrameIndex === 3) {
                this.characterFrameIndex = 0;
            } else {
                this.characterFrameIndex++;
            }

        }
    }
        
    draw(ctx) {
        this.conga.forEach((character) => {
            ctx.drawImage(
                character.sprite.image[this.characterFrameIndex],
                0,
                0,
                character.sprite.width,
                character.sprite.height,
                character.position.x,
                character.position.y,
                character.sprite.width,
                character.sprite.height
            )
        })
    }

    // used for death so graves appear at correct spot 
    revertMove() {
        this.conga[0].position = this.conga[1].position;
        this.conga[1].position = this.conga[2].position;
        this.conga[2].position = this.previousPosition;
    }

    updateHurtBox() {
        this.conga.forEach((character) => {
            character.hurtbox = { 
                topLeft: { x: character.position.x, y: character.position.y },
                bottomRight: { x: character.position.x + 32, y: character.position.y + 48 }
            } 
        })
    }
}
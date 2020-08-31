export default class Input {
    constructor() {
        // Sets initial direction to be moving up
        this.inputDirection = { x: 0, y: -1 };
    }

    getInputDirection() {
        document.addEventListener('keydown', (e) => {
            switch (e.keyCode) {
                case 37:
                    if (this.inputDirection.x !== 0) break;  // Makes it so you can't move left when moving left or right
                    this.inputDirection = { x: -1, y: 0 };
                    break;
                case 38:
                    if (this.inputDirection.y !== 0) break; // Makes it so you can't move up when moving up or down
                    this.inputDirection = { x: 0, y: -1 };
                    break;
                case 39:
                    if (this.inputDirection.x !== 0) break; // Makes it so you can't move right when moving right or left
                    this.inputDirection = { x: 1, y: 0 };
                    break;
                case 40:
                    if (this.inputDirection.y !== 0) break; // Makes it so you can't move down when moving down or up
                    this.inputDirection = { x: 0, y: 1 };
                    break;
            }
        })

        return this.inputDirection
    }

};
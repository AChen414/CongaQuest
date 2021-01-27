import Game from './game';

export default class GameView {
    constructor(ctx) {
        this.lastRenderTime = 0;
        this.updatesPerSecond = 8;
        this.score = 0;
        this.game = new Game(ctx);
    }

    start() {
        this.animate();
    }

    animate(currentTime) {
        window.requestAnimationFrame((currentTime) => {
            this.animate(currentTime);
        })
        const secondsSinceLastRender = (currentTime - this.lastRenderTime) / 1000;
        if (secondsSinceLastRender < 1 / this.updatesPerSecond) return;
        this.lastRenderTime = currentTime;
        console.log('Render');

        this.update();
        this.draw();
    }

    update() {
        this.game.update();
    }

    draw() {
        this.game.draw();
    }
}
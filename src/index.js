import GameView from './game_view';

document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById("gameScreen");
    const ctx = canvas.getContext("2d");

    const newGame = new GameView(ctx);

    newGame.start();
})

function mainScreen() {
    const startScreen = document.getElementById("startScreen");
    startScreen.style.visibility = 'visible'
}
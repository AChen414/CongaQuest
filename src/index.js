import GameView from './game_view';

document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById("game-screen");
    const ctx = canvas.getContext("2d");

    const newGame = new GameView(ctx);

    newGame.start();
})

// function mainScreen() 
//     const startScreen = document.getElementById("start-screen");
//     startScreen.style.visibility = 'visible';
// }
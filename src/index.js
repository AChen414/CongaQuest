import GameView from './game_view';

document.addEventListener("DOMContentLoaded", () => {
    if (!localStorage.getItem('highScore')) localStorage.setItem('highScore', 0);
    mainScreen();
})

function mainScreen() {
    const startScreen = document.getElementById("start-screen");
    startScreen.style.visibility = 'visible';
    setTimeout(() => {
        document.addEventListener("keydown", run)
    }, 500);
}

function run() {
    document.getElementById("game-over-modal").style.zIndex = 0;
    const canvas = document.getElementById("game-screen");
    const ctx = canvas.getContext("2d");
    const newGame = new GameView(ctx, lose);
    
    document.getElementById("start-screen").style.visibility = "hidden";
    document.removeEventListener("keydown", run);
    
    newGame.start();
}

// function animation(e) {
//     this.innerHTML = e.fall
// }

function lose(score) {
    let gameOver = document.getElementById("game-over-modal");
    let endScore = document.getElementById("end-score");
    let highScore = document.getElementById("high-score");
    endScore.innerHTML = `Score: ${score}`;
    if (parseInt(localStorage.getItem('highScore')) < score) {
        localStorage.setItem('highScore', score);
        highScore.innerHTML = `High Score: ${localStorage.getItem('highScore')}`;
    } else {
        highScore.innerHTML = `High Score: ${localStorage.getItem('highScore')}`;
    }
    gameOver.style.zIndex = 11;
    setTimeout(() => {
        document.addEventListener("keydown", run)
    }, 500);
}
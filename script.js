"use strict";

let p1Button = document.querySelector("#btn-joueur1");
let p2Button = document.getElementById("btn-joueur2");
let scoreJoueur1 = document.querySelector("#scoreJoueur1");
let scoreJoueur2 = document.querySelector("#scoreJoueur2");
let playingTo = document.getElementById("playingTo");
let scoreMax = document.querySelector("#score-max");

let p1Score = 0;
let p2Score = 0;
let gameOver = false;
let winningScore = Number(scoreMax.value);

function updatePlayingTo() {
    playingTo.textContent = `Playing to ${winningScore}`;
}

function resetGame() {
    gameOver = false;
    p1Score = 0;
    p2Score = 0;
    scoreJoueur1.textContent = 0;
    scoreJoueur2.textContent = 0;
    updatePlayingTo();
}

p1Button.addEventListener("click", function () {
    if (!gameOver){
    p1Score++;
    if (p1Score === winningScore){
        gameOver = true;
        alert("Le joueur 1 a gagné !");
    }
    scoreJoueur1.textContent = p1Score; 
    }
});

p2Button.addEventListener("click", function () {
    if (!gameOver){
    p2Score++;
    if (p2Score === winningScore){
        gameOver = true;
        alert("Le joueur 2 a gagné !");
    }
    scoreJoueur2.textContent = p2Score;
 }
});

let resetButton = document.getElementById("btn-reset");
resetButton.addEventListener("click", resetGame);

let scoreMaxInput = document.querySelector("#score-max");
scoreMaxInput.addEventListener("change", function () {
    winningScore = Number(this.value);
    resetGame();
});

updatePlayingTo();
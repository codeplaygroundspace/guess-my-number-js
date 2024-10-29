'use strict';
/*
First scenario: When there is no value in the input field
Second scenario: When guess is equal to secret number
Third scenario: When guess is not equal to secret number
*/

//Select all elements
const displayNumber = document.querySelector('.number');
const btnReset = document.querySelector('.again');
const guessInput = document.querySelector('.guess');
const btnCheck = document.querySelector('.check');
const messageDisplay = document.querySelector('.message');
const scoreDisplay = document.querySelector('.score');
const highscoreDisplay = document.querySelector('.highscore');
const bodyDisplay = document.querySelector('body');

//Initial values
let secretNumber = Math.trunc(Math.random() * 2 + 1);

let score = 20;
scoreDisplay.textContent = score;

let highScore = 0;
highscoreDisplay.textContent = highScore;

// Game logic
btnCheck.addEventListener('click', function () {
  const guess = Number(guessInput.value);

  console.log(guess);
  if (!guess) {
    messageDisplay.textContent = '⛔️ No number!';
  } else if (guess === secretNumber) {
    messageDisplay.textContent = '🎉 Corect number!';
    bodyDisplay.style.backgroundColor = '#60b347';
    displayNumber.style.width = '30rem';
    displayNumber.textContent = secretNumber;
    if (score > highScore) {
      highScore = score;
      highscoreDisplay.textContent = highScore;
    }
  } else if (guess > secretNumber) {
    if (score > 1) {
      messageDisplay.textContent = 'Too high!';
      score--;
      scoreDisplay.textContent = score;
    } else {
      messageDisplay.textContent = 'Lost the game!';
      scoreDisplay.textContent = 0;
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      messageDisplay.textContent = 'Too low!';
      score--;
      scoreDisplay.textContent = score;
    } else {
      messageDisplay.textContent = 'Lost the game!';
      scoreDisplay.textContent = 0;
    }
  }
});
btnReset.addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 2 + 1);
  score = 20;
  scoreDisplay.textContent = score;
  displayNumber.textContent = '?';
  guessInput.value = '';
  bodyDisplay.style.backgroundColor = '#222';
  displayNumber.style.width = '15rem';
  messageDisplay.textContent = 'Start guessing...';
});

'use strict';

let secret = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

function displayMessage(message) {
  document.querySelector('.message').textContent = message;
}

function displayScore(message) {
  document.querySelector('.score').textContent = message;
}

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    displayMessage('⛔ No Number !');
  } else if (guess === secret) {
    displayMessage('🥳 Correct Number !');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secret;

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (score > 1) {
    displayMessage(guess > secret ? '📈 Too High!' : '📉 Too Low!');
    score--;
    displayScore(score);
  } else {
    displayMessage('💥 You lost the game!');
    displayScore(0);
  }
});

document.querySelector('.again').addEventListener('click', function () {
  secret = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector('.guess').value = '';
  displayMessage('Start guessing...');
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').textContent = '?';
  displayScore(20);
});

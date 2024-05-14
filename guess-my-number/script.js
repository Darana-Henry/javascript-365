'use strict';

const secret = Math.trunc(Math.random() * 20) + 1;
let score = 20;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    document.querySelector('.message').textContent = '⛔ No Number !';
  } else if (guess === secret) {
    document.querySelector('.message').textContent = '🥳 Correct Number !';
  } else if (score > 1) {
    if (guess > secret) {
      document.querySelector('.message').textContent = '📈 Too High!';
      score--;
      document.querySelector('.score').textContent = score;
    } else if (guess < secret) {
      document.querySelector('.message').textContent = '📉 Too Low!';
      score--;
      document.querySelector('.score').textContent = score;
    }
  } else {
    document.querySelector('.message').textContent = '💥 You lost the game!';
    document.querySelector('.score').textContent = 0;
  }
});

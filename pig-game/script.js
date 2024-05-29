'use strict';

const playerOneScore = document.getElementById('score--0');
const playerTwoScore = document.getElementById('score--1');
const picDice = document.querySelector('.dice');
const btnNewGame = document.querySelector('.btn--new');
const btnRollDice = document.querySelector('.btn--roll');
const btnHoldDice = document.querySelector('.btn--hold');
const playerOneCurrentScore = document.getElementById('current--0');
const playerTwoCurrentScore = document.getElementById('current--1');
const playerOne = document.querySelector('.player--0');
const playerTwo = document.querySelector('.player--1');

let stillPlaying, currentscore, activePlayer, scores;

init();

function switchPlayer() {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  currentscore = 0;
  playerOne.classList.toggle('player--active');
  playerTwo.classList.toggle('player--active');
}

function init() {
  playerOneScore.textContent = 0;
  playerTwoScore.textContent = 0;
  picDice.classList.add('hidden');
  stillPlaying = true;
  currentscore = 0;
  activePlayer = 0;
  scores = [0, 0];
  playerOneScore.textContent = 0;
  playerTwoScore.textContent = 0;
  playerOneCurrentScore.textContent = 0;
  playerOneCurrentScore.textContent = 0;
  picDice.classList.add('hidden');
  activePlayer = 0;
  playerOne.classList.remove('player--winner');
  playerOne.classList.add('player--active');
  playerTwo.classList.remove('player--winner');
  playerTwo.classList.remove('player--active');
}

btnRollDice.addEventListener('click', function () {
  if (stillPlaying) {
    const dice = Math.trunc(Math.random() * 6) + 1;
    picDice.classList.remove('hidden');
    picDice.src = `images/dice-${dice}.png`;

    if (dice !== 1) {
      currentscore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentscore;
    } else {
      switchPlayer();
    }
  }
});

btnHoldDice.addEventListener('click', function () {
  if (stillPlaying) {
    scores[activePlayer] += currentscore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    if (scores[activePlayer] >= 100) {
      stillPlaying = false;
      picDice.classList.add('hidden');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner')
        .toggle('player--active');
    } else {
      switchPlayer();
    }
  }
});

btnNewGame.addEventListener('click', init);

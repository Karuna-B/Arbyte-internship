'use strict';
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct Number!🎉';

document.querySelector('.number').textContent=15;
document.querySelector('.score').textContent=10;

document.querySelector('.guess').value=23;
console.log(document.querySelector('.guess').value) ;
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = Number(localStorage.getItem('highscore'));


if(!highscore)
  highscore=0;

document.querySelector('.highscore').textContent = highscore;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  //console.log(guess);

  //no guesses
  if (!guess) {
    displayMessage('No Number!😒 ');
  } else if (guess === secretNumber) {
    displayMessage('Correct Number!🎉');

    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#6079';

    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
      localStorage.setItem('highscore', highscore);

    }
  } else if (guess != secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? 'Too High!!:(' : 'Too Low!!:(');
      score--;
    } else {
      displayMessage('💥You lost the game:(');
      score = 0;
    }
    document.querySelector('.score').textContent = score;
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  displayMessage('Start Guessing..');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});


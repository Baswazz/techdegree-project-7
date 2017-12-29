const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
let missed   = 0;

const startButton = document.querySelector('.btn__reset');

// Hide the start screen overlay
startButton.addEventListener('click', function() {
  const overlay = document.getElementById('overlay');
  overlay.style.display = 'none';
});

const phrases = ['Hallo ', 'wie ', 'ben ', 'jij ', 'dan.'];

function getRandomPhraseArray(arr) {

};

getRandomPhraseArray(phrases);

const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
let missed   = 0;

const startButton = document.querySelector('.btn__reset');

// Hide the start screen overlay
startButton.addEventListener('click', function() {
  const overlay = document.getElementById('overlay');
  overlay.style.display = 'none';
});

// Create array that contains at least 5 different phrases as strings.
const phrases = [
  'Give a Man a Fish',
  'Lovey Dovey',
  'On the Same Page',
  'Yada Yada',
  'Under Your Nose'
];

// Generate random randomNumber
function getRandomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

// Randomly choose a phrase from the phrases array and split that phrase into a new array of characters.
function getRandomPhraseArray(arr) {
  const randomNumber = getRandomNumber(0, arr.length);
  return arr[randomNumber].split('');
};

function addPhraseToDisplay(arr) {
  // Loops through an array of characters and store them in a list item.
  for (let i = 0; i < arr.length; i += 1) {
    const ul = phrase.getElementsByTagName('ul')[0];
    const li = document.createElement('li');
    li.textContent = arr[i];
    if (arr[i] != ' ') {
      li.classList.add('letter');
    }
    ul.appendChild(li);
  }
}

const phraseArray = getRandomPhraseArray(phrases);
addPhraseToDisplay(phraseArray);

function checkLetter(button) {
  const letters = phrase.querySelectorAll('.letter');
  // console.log('button ', button.toUpperCase());

  for (let i = 0; i < letters.length; i += 1) {
    // console.log('Const letter: ', letter);
    // console.log(letters[i].innerText.toUpperCase());
    const letter = letters[i].innerText.toUpperCase();
    console.log(letter);

    if (button.toUpperCase() === letter) {
      letters[i].classList.add('show');
      console.log('true');
    } else {
      return null;
      console.log('false');
    }
  }
}

qwerty.addEventListener('click', function(e) {
  if (e.target.tagName === 'BUTTON') {
    const letter = e.target;
    letter.classList.add('chosen');
    letter.disabled = true; // disable button state
    const letterFound = checkLetter(e.target.textContent);
  }
});

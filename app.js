const diceElements = document.querySelectorAll('.dice');
const rollButton = document.getElementById('rollButton');

const images = [
  './dice/dice1.png',
  './dice/dice2.png',
  './dice/dice3.png',
  './dice/dice4.png',
  './dice/dice5.png',
  './dice/dice6.png'
];

function rollDice() {
  diceElements.forEach(dice => {
    const randomIndex = Math.floor(Math.random() * images.length);
    const randomImageSrc = images[randomIndex];
    const diceImage = dice.querySelector('img');
    diceImage.src = randomImageSrc;
  });
}

rollButton.addEventListener('click', rollDice);


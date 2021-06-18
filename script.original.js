
const cardsArray = [{
    'name': 'tree',
    'img': 'img/tree.jpg',
  },
  {
    'name': 'cowUFO',
    'img': 'img/cowUFO.jpg',
  },
  {
    'name': 'lagoon',
    'img': 'img/lagoon.jpg',
  },
  {
    'name': 'giraffe',
    'img': 'img/giraffe.jpg',
  },
  {
    'name': 'hello',
    'img': 'img/hello.jpg',
  },
  {
    'name': 'moon',
    'img': 'img/moon.jpg',
  },
  {
    'name': 'panda',
    'img': 'img/panda.jpg',
  },
  {
    'name': 'pinkFlower',
    'img': 'img/pinkFlower.jpg',
  },
  {
    'name': 'match',
    'img': 'img/match.jpg',
  },
  {
    'name': 'signs',
    'img': 'img/signs.jpg',
  },
  {
    'name': 'sunflower',
    'img': 'img/sunflower.jpg',
  },
  {
    'name': 'surfer',
    'img': 'img/surfer.jpg',
  },
];

const gameGrid = cardsArray
  .concat(cardsArray)
  .sort(() => 0.5 - Math.random());


let firstGuess = '';
let secondGuess = '';
let count = 0;
let previousTarget = null;
let delay = 1200;

const game = document.getElementById('game');
const grid = document.createElement('section');
grid.setAttribute('class', 'grid');
game.appendChild(grid);

gameGrid.forEach(item => {
  const { name, img } = item;

  const card = document.createElement('div');
  card.classList.add('card');
  card.dataset.name = name;

  const front = document.createElement('div');
  front.classList.add('front');

  const back = document.createElement('div');
  back.classList.add('back');
  back.style.backgroundImage = `url(${img})`;

  grid.appendChild(card);
  card.appendChild(front);
  card.appendChild(back);
});

const match = () => {
  const selected = document.querySelectorAll('.selected');
  selected.forEach(card => {
    card.classList.add('match');
  });
};

const resetGuesses = () => {
  firstGuess = '';
  secondGuess = '';
  count = 0;
  previousTarget = null;

  var selected = document.querySelectorAll('.selected');
  selected.forEach(card => {
    card.classList.remove('selected');
  });
};

grid.addEventListener('click', event => {

  const clicked = event.target;

  if (
    clicked.nodeName === 'SECTION' ||
    clicked === previousTarget ||
    clicked.parentNode.classList.contains('selected') ||
    clicked.parentNode.classList.contains('match')
  ) {
    return;
  }

  if (count < 2) {
    count++;
    if (count === 1) {
      firstGuess = clicked.parentNode.dataset.name;
      console.log(firstGuess);
      clicked.parentNode.classList.add('selected');
    } else {
      secondGuess = clicked.parentNode.dataset.name;
      console.log(secondGuess);
      clicked.parentNode.classList.add('selected');
    }

    if (firstGuess && secondGuess) {
      if (firstGuess === secondGuess) {
        setTimeout(match, delay);
      }
      setTimeout(resetGuesses, delay);
    }
    previousTarget = clicked;
  }
 
});


var sec = 0;
function pad ( val ) { return val > 9 ? val : "0" + val; }
setInterval( function(){
    document.getElementById("seconds").innerHTML=pad(++sec%60);
    document.getElementById("minutes").innerHTML=pad(parseInt(sec/60,10));
   
}, 1000);


function reloadPage(){
    window.location.reload();
 }
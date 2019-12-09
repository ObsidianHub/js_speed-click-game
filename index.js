let $start = document.querySelector('#start'),
    $game = document.querySelector('#game'),
    $time = document.querySelector('#time'),
    $result = document.querySelector('#result'),
    $timeHeader = document.querySelector('#time-header'),
    $resultHeader = document.querySelector('#result-header'),
    $gameTime = document.querySelector('#game-time');

let colors = ['red', 'blue', 'green', 'yellow', 'pink', 'purple', 'grey'];

let score = 0;
let isGameStarted = false;

function show($el) {
    $el.classList.remove('hide');
}

function hide($el) {
    $el.classList.add('hide');
}
let $start = document.querySelector("#start"),
  $game = document.querySelector("#game"),
  $time = document.querySelector("#time"),
  $result = document.querySelector("#result"),
  $timeHeader = document.querySelector("#time-header"),
  $resultHeader = document.querySelector("#result-header"),
  $gameTime = document.querySelector("#game-time"),
  score = 0,
  isGameStarted = false;

let colors = ["red", "blue", "green", "yellow", "pink", "purple", "grey"];

$start.addEventListener("click", startGame);
$game.addEventListener("click", handleBoxClick);
$gameTime.addEventListener("input", setGameTime);

function setGameTime() {
  var time = +$gameTime.value;
  $time.textContent = time.toFixed(1);
  show($timeHeader);
  hide($resultHeader);
}

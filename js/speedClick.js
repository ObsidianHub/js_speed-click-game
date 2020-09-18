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

function show($el) {
  $el.classList.remove("hide");
}

function hide($el) {
  $el.classList.add("hide");
}

function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function renderBox() {
  $game.innerHTML = "";
  var box = document.createElement("div");
  var boxSize = getRandom(30, 100);
  var gameSize = $game.getBoundingClientRect();
  var maxTop = gameSize.height - boxSize;
  var maxLeft = gameSize.width - boxSize;
  var randomColorIndex = getRandom(0, colors.length);

  box.style.height = box.style.width = boxSize + "px";
  box.style.position = "absolute";
  box.style.backgroundColor = colors[randomColorIndex];
  box.style.top = getRandom(0, maxTop) + "px";
  box.style.left = getRandom(0, maxLeft) + "px";
  box.style.cursor = "pointer";
  box.setAttribute("data-box", "true");

  $game.insertAdjacentElement("afterbegin", box);
}

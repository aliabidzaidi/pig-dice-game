var scores, roundScore, activePlayer, gameFinished;
const dice = 6;
const finalScore = 100;
init();
document.querySelector(".start-btn").addEventListener("click", init);

function getRandomValue() {
  return Math.floor(Math.random() * dice) + 1;
}

function changeActivePlayer() {
  document.querySelector("#points-" + activePlayer).textContent = 0;
  scores[activePlayer] += roundScore;
  
  document.getElementById("score-" + activePlayer).innerText =
  scores[activePlayer];
  
  if (scores[activePlayer] >= finalScore) {
    document.querySelector("#btn-hold").removeEventListener("click", changeActivePlayer);
    document.querySelector("#btn-roll").removeEventListener ("click", rollDice);
    var domElement = document.querySelector(".p"+(activePlayer+1)+" h1");
    domElement.innerText = "Winner!"; 
    domElement.classList.toggle("winner");
    console.log("Winner!");
  }
  else{
    if (activePlayer === 0) activePlayer = 1;
    else activePlayer = 0;
  
    document.querySelector(".p1 h1 .dot").classList.toggle("active");
    document.querySelector(".p2 h1 .dot").classList.toggle("active");

  }
  
  roundScore = 0;
}

function rollDice() {
  diceValue = getRandomValue();
  document.querySelector("#dice-value").src =
    "assets/dice-" + diceValue + ".svg";

  if (diceValue === 1) {
    changeActivePlayer();
  } else {
    roundScore += diceValue;
    document.querySelector("#points-" + activePlayer).textContent = roundScore;
  }
}

function init() {
  console.log("Game Initialized");
  scores = [0, 0];
  roundScore = 0;
  activePlayer = 0;
  gameFinished = false;

  document.querySelector(".p1 h1").classList.remove("winner");
  document.querySelector(".p2 h1").classList.remove("winner");
  document.querySelector(".p1 h1").innerHTML = "Player 1 <i class=\"dot active-dot active\"></i>";
  document.querySelector(".p2 h1").innerHTML = "Player 2 <i class=\"dot \"></i>";
// Player 1 <i class="dot active-dot"></i>
  document.getElementById("score-0").innerText = 0;
  document.getElementById("score-1").innerText = 0;

  document.getElementById("points-1").textContent = 0;
  document.getElementById("points-0").textContent = 0;

  document.querySelector("#btn-hold").addEventListener("click", changeActivePlayer);
  document.querySelector("#btn-roll").addEventListener("click", rollDice);
}

// document.querySelector("#score-" + activePlayer).textContent = getRandomValue();
// document.querySelector("#score-1").textContent = getRandomValue();
//querySelector
//textContent
//classList
//style.cssprop = value
//attributeName like src = 'url.png'
//getElementById

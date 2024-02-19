// hide
function hideClass(elementId) {
  const hide = document.getElementById(elementId);
  hide.classList.add("hidden");
}

// show
function showClass(elementId) {
  const show = document.getElementById(elementId);
  show.classList.remove("hidden");
}

//random alphabet generate
function getRandomAlphabet() {
  let alphabetsStr = "abcdefghijklmnopqrstuvwxyz";
  let alphabetsArr = alphabetsStr.split("");
  let randomNum = Math.round(Math.random() * 25);
  let alphabet = alphabetsArr[randomNum];
  return alphabet;
}

// set bg color for selected alphabet
function setBg(elementId) {
  let element = document.getElementById(elementId);
  let setBg = element.classList.add("bg-orange-400");
  return setBg;
}

//removeBg
function removeBg(elementId) {
  let element = document.getElementById(elementId);
  let removeBg = element.classList.remove("bg-orange-400");
  return removeBg;
}

// play function
function gameOver() {
  isGamePlayMode = false;
  hideClass("home");
  hideClass("playground");
  showClass("final-score");
  let lastScore = document.getElementById("score").innerText;
  document.getElementById("last-score").innerText = lastScore;
}

// play again
function playAgain() {
  isGamePlayMode = true;
  hideClass("home");
  hideClass("final-score");
  showClass("playground");
  //get current score
  let currentScoreElement = document.getElementById("score");
  let currentScoreText = currentScoreElement.innerText;
  //make it a number
  let currentScore = parseInt(currentScoreText);
  currentScore = 0;
  //set new score
  let newScore = currentScore;
  //update new score
  currentScoreElement.innerText = newScore;

  //get current life
  let currentLifeElement = document.getElementById("life");
  let currentLifeText = currentLifeElement.innerText;
  // make it a number
  let currentLife = parseInt(currentLifeText);
  currentLife = 5;
  // reduce life
  let newLife = currentLife;
  // update new life
  currentLifeElement.innerText = newLife;

  // remove highlight after the game end
  let currentHighlighted = document
    .getElementById("alphabetShow")
    .innerText.toLowerCase();
  removeBg(currentHighlighted);
  continueGame();
}

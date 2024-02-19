document.getElementById("playBtn").addEventListener("click", function () {
  isGamePlayMode = true;
  hideClass("home");
  showClass("playground");
  continueGame();
});

// audio effects
let audio = new Audio();

//default game mode on any screen
let isGamePlayMode = false;

// continue game
function continueGame() {
  let alphabet = getRandomAlphabet();
  let alphabetField = document.getElementById("alphabetShow");
  alphabetField.innerText = alphabet;
  setBg(alphabet);
}
document.addEventListener("keyup", function (event) {
  if (isGamePlayMode === false) return;
  let pressedKey = event.key;
  let expectedKey = document
    .getElementById("alphabetShow")
    .innerText.toLowerCase();

  // condition for stop the game
  if (pressedKey === "Escape") {
    gameOver();
    document
      .getElementById("play-again")
      .addEventListener("click", function () {
        playAgain();
      });
  }
  //main condition
  if (pressedKey === expectedKey) {
    audio.src = "./sounds/success.mp3";
    audio.play();

    removeBg(expectedKey);
    //get current score
    let currentScoreElement = document.getElementById("score");
    let currentScoreText = currentScoreElement.innerText;
    //make it a number
    let currentScore = parseInt(currentScoreText);
    //set new score
    let newScore = currentScore + 1;
    //update new score
    currentScoreElement.innerText = newScore;
    continueGame();
  } else {
    audio.src = "./sounds/wrong.mp3";
    audio.play();

    //get current life
    let currentLifeElement = document.getElementById("life");
    let currentLifeText = currentLifeElement.innerText;
    // make it a number
    let currentLife = parseInt(currentLifeText);
    // reduce life
    let newLife = currentLife - 1;
    // update new life
    currentLifeElement.innerText = newLife;

    if (newLife === 0) {
      gameOver();
      document
        .getElementById("play-again")
        .addEventListener("click", function () {
          playAgain();
        });
    }
  }
});

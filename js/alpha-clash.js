document.getElementById("playBtn").addEventListener("click", function () {
  hideClass("home");
  showClass("playground");
  let alphabet = getRandomAlphabet();
  let alphabetField = document.getElementById("alphabetShow");
  alphabetField.innerText = alphabet;
  setBg(alphabet);
});

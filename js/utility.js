// hide
function hideClass(elementId){
    const hide = document.getElementById(elementId);
    hide.classList.add('hidden');
}

// show
function showClass(elementId){
    const show = document.getElementById(elementId);
    show.classList.remove('hidden');
};

//random alphabet generate
function getRandomAlphabet(){
    let alphabetsStr = 'abcdefghijklmnopqrstuvwxyz';
    let alphabetsArr = alphabetsStr.split("");
    let randomNum = Math.round(Math.random() * 25);
    let alphabet = alphabetsArr[randomNum];
    return alphabet;
};

// set bg color for selected alphabet
function setBg(elementId){
    let element= document.getElementById(elementId);
    let setBg = element.classList.add('bg-orange-400');
}
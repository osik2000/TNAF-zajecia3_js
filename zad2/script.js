const counterElement = document.querySelector('#counter');
const plusOneButtonElement = document.querySelector('#plus-one');
const changeColorButtonElement = document.querySelector('#change-color');
const resetValueButtonElement = document.querySelector('#reset-value');

var actualColor = 'black';
function changeCounterValue(){
    let value = +counterElement.innerText;
    counterElement.innerText = value + 1;
}

function changeColor(){
    if(actualColor === 'black') {
        counterElement.style.color = "red";
        actualColor = 'red';
    }
    else if(actualColor === 'red') {
        counterElement.style.color = "black";
        actualColor = 'black';
    }
}

function resetCounter(){
    counterElement.innerText = 0;
    counterElement.style.color = "black";
    actualColor = 'black';
}

plusOneButtonElement.addEventListener('click', changeCounterValue);
changeColorButtonElement.addEventListener('click', changeColor);
resetValueButtonElement.addEventListener('click', resetCounter);
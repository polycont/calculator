
// TODO: Add click sound fx & beeps for button presses
// TODO: Add animation for button presses

// Basic computation functions.
const add = (numOne, numTwo) => numOne + numTwo;
const subtract = (numOne, numTwo) => numOne - numTwo;
const multiply = (numOne, numTwo) => numOne * numTwo;
const divide = (numOne, numTwo) => numOne / numTwo;
const operate = (operator, numOne, numTwo) => {
    if (operator == '+') return add(numOne, numTwo);
    if (operator == '-') return subtract(numOne, numTwo);
    if (operator == 'x') return multiply(numOne, numTwo);
    if (operator == '%') return divide(numOne, numTwo);
}

let numSetOne = [];
let numSetTwo = [];
let setTotal = [];
let currentOp = [];
let setTotalError = false;
let clearCheck = true;

const display = document.querySelector('.display');
const numButtons = document.querySelectorAll('.numButtons');
const operators = document.querySelectorAll('.operators');
const equal = document.getElementById('=');
const clear = document.getElementById('clear');

const equals = () => {
    if (numSetOne.length === 0 || numSetTwo.length === 0) return alert("Please enter your numbers first.");
    numSetOneJoined = Number(numSetOneJoined);
    numSetTwoJoined = Number(numSetTwoJoined);
    numSetOneJoined = operate(currentOp, numSetOneJoined, numSetTwoJoined);
    display.textContent = `${numSetOneJoined}`;
    numSetTwoJoined = ''
    numSetTwo = [];
    setTotal = [];
    currentOp = [];
    numSetOne = [numSetOneJoined];
}

const clearCalc = () => {
    numSetOne = [];
    numSetTwo = [];
    setTotal = [];
    currentOp = [];
    numSetOneJoined = '';
    numSetTwoJoined = '';
    setTotalError = false;
    clearCheck = true;
    display.textContent = ''
}

equal.addEventListener('click', () => {
    equals();
});

clear.addEventListener('click', () => {
    clearCalc();
})

numButtons.forEach((num) => {
    if(clearCheck === false) {
        clearCalc();
    }

    num.addEventListener('click', () => {
        setTotalError = setTotal.some(value => value === 'x' || value === '+' || value === '-' || value === '%');
        if (setTotalError === true) {
            numSetTwo.push(num.textContent);
            numSetTwoJoined = numSetTwo.join('');
            display.textContent = `${numSetOneJoined} ${currentOp} ${numSetTwoJoined}`;
            return;
        } 
        numSetOne.push(num.textContent);
        numSetOneJoined = numSetOne.join('');
        display.textContent = numSetOneJoined;
    })
});

operators.forEach((op) => {
    op.addEventListener('click', () => {
        opCheck = setTotal.some(value => value === 'x' || value === '+' || value === '-' || value === '%');
        if (opCheck === true) return alert("You must calculate your values or add more numbers!");
        currentOp = [`${op.textContent}`];
        display.textContent = numSetOneJoined + ` ${currentOp}`;
        setTotal = Array.from(display.textContent);
        setTotalJoined = setTotal.join('');
        display.textContent = setTotalJoined;
        
    })
});
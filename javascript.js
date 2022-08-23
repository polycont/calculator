
// TODO: Add click sound fx & beeps for button presses
// TODO: Add animation for button presses
// TODO: Add decimal button
// TODO: Add keyboard support
// TODO: Add divide by zero catch.

// Basic computation functions.
const add = (numOne, numTwo) => numOne + numTwo;
const subtract = (numOne, numTwo) => numOne - numTwo;
const multiply = (numOne, numTwo) => numOne * numTwo;
const divide = (numOne, numTwo) => numOne / numTwo;
const operate = (operator, numOne, numTwo) => {
  numOne = Number(numOne);
  numTwo = Number(numTwo);
  if (operator == '+') return add(numOne, numTwo);
  if (operator == '-') return subtract(numOne, numTwo);
  if (operator == 'x') return multiply(numOne, numTwo);
  if (operator == '%') return divide(numOne, numTwo);
}

let numSetOne = [];
let numSetTwo = [];
let numSetOneJoined = '';
let numSetTwoJoined = '';
let currentTotal = [];
let currentOp = '';
let newTotal = 0;

const display = document.querySelector('.display');
const numButtons = document.querySelectorAll('.numButtons');
const operators = document.querySelectorAll('.operators');
const equal = document.getElementById('equal');
const clear = document.getElementById('clear');

const equals = () => {
  currentTotal = operate(currentOp, numSetOneJoined, numSetTwoJoined);
  display.textContent = currentTotal.toString();
  clearCalc();
  newTotal = 0;
}

const clearCalc = () => {
  numSetOne = [];
  numSetTwo = [];
  numSetOneJoined = '';
  numSetTwoJoined = '';
  currentTotal = [];
  currentOp = '';
}

equal.addEventListener('click', () => {
    equals();
});

clear.addEventListener('click', () => {
    clearCalc();
    display.textContent = '';
})

numButtons.forEach((num) => {
    num.addEventListener('click', () => {
      if (currentOp.length != 0 && numSetOne.length != 0) {
        display.textContent = '';
        numSetTwo.push(num.textContent);
        numSetTwoJoined = numSetTwo.join('');
        display.textContent = numSetTwoJoined;
        
        return;
      }
      numSetOne.push(num.textContent);
      numSetOneJoined = numSetOne.join('');
      display.textContent = numSetOneJoined;
    })
});

operators.forEach((op) => {
    op.addEventListener('click', () => {
      if (numSetOne.length == 0 && numSetTwo.length == 0) return;
      if (numSetOne.length != 0 && numSetTwo.length != 0) {
        currentTotal = operate(currentOp, numSetOneJoined, numSetTwoJoined);
        newTotal = currentTotal;
        clearCalc();
        numSetOne.push(newTotal);
        numSetOneJoined = numSetOne.join('');
        display.textContent = newTotal.toString();
      }

      currentOp = op.textContent;

    })
});
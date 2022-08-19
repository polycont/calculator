// Basic computation functions.
const add = (numOne, numTwo) => numOne + numTwo;
const subtract = (numOne, numTwo) => numOne - numTwo;
const multiply = (numOne, numTwo) => numOne * numTwo;
const divide = (numOne, numTwo) => numOne / numTwo;
const operate = (operator, numOne, numTwo) => {
    if (operator === '+') add(numOne, numTwo);
    if (operator === '-') subtract(numOne, numTwo);
    if (operator === '*') multiply(numOne, numTwo);
    if (operator === '/') divide(numOne, numTwo);
}

let numSetOne = [];
let numSetTwo = [];
let setTotal = [];
let currentOp = [];

let setTotalError = false;

const display = document.querySelector('.display');
const numButtons = document.querySelectorAll('.numButtons');
const operators = document.querySelectorAll('.operators');

// TODO: Add click sound fx & beeps for button presses
// TODO: Add animation for button presses

numButtons.forEach((num) => { 
    num.addEventListener('click', () => {
        setTotalError = setTotal.some(value => value === 'x' || value === '+' || value === '-' || value === '%');
        if (setTotalError === true) {
            setTotalError = true;
           
        }
        if (setTotalError === true) {
            numSetTwo.push(num.textContent);
            numSetTwoJoined = numSetTwo.join('');
            display.textContent = `${numSetOneJoined} ${currentOp} ${numSetTwoJoined}`;
            return;
        } 
        numSetOne.push(num.textContent);
        numSetOneJoined = numSetOne.join('');
        display.textContent = numSetOneJoined;
})});

operators.forEach((op) => {
    op.addEventListener('click', () => {
        currentOp = [`${op.textContent}`];
        display.textContent = numSetOneJoined + ` ${currentOp}`;
        setTotal = Array.from(display.textContent);
        setTotalJoined = setTotal.join('');
        display.textContent = setTotalJoined;
        
    })
});

// When user clicks on a number...
// Add to buffer (array?)
// Display on screen.
// Repeat 1 & 2 to allow user to select multiple numbers
// Display numbers like a calculator, pushing to left
// If a user clicks on an operator button...
// Display right of numbers, but as a separate element?
// Convert number array to string & number, store in temp variable

// If a user clicks on another operator button...
// operate on the first two sets and add them to a 'total' variable.
// If the user tries to hit more operators, do nothing and...
// prompt the user to select a new digit. 
// If the user enters a new digit...
// Add to a 2nd array.
// Repeat as long as they enter numbers, refer to first block.
// If a user hits 'equals'...
// convert the two arrays together and perform the appropriate --
// -- operation on them. Display the result.
// If a user hits another number...
// Clear the display and all numerical data stored in variables. --
// -- start fresh.
// If a user hits an operator...
// Display inline, keep previous total stored in a variable.
// User must now hit a number, or more numbers.
// When the user eventually hits another operator, compile the --
// -- two previous totals into the running total and operate as normal.

// Repeat like this.

// If a user hits 'clear'...
// wipe the display and clear numerical data stored in variables.







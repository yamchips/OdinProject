function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(operator, num1, num2) {
    switch (operator) {
        case '+':
            return add(num1, num2);
        case subSym:
            return subtract(num1, num2);
        case mulSym:
            return multiply(num1, num2);
        case divSym:
            return divide(num1, num2);
    }
}

// function updateNum(num) {
//     if (num === 0) {
//         num = +this.textContent;
//     } else {
//         let curr = +this.textContent;
//         num = +(num + '' + curr);
//     }
//     updateDisplay(num);
// }

function clickNum() {
    // this function get num1's and num2's value
    if (operator) {
        // we have an operator        
        if (!num2) {
            // clear num1 in display 
            display.textContent = '';
            num2 = +this.textContent;
        } else {
            let curr = +this.textContent;
            num2 = +(num2 + '' + curr);
        }
        updateDisplay(num2);
    } else {
        // no operator
        if (num1 === 0) {
            num1 = +this.textContent;
        } else {
            let curr = +this.textContent;
            num1 = +(num1 + '' + curr);
        }
        updateDisplay(num1);
    }

}

function updateDisplay(num) {
    // this function updates result in display
    display.textContent = num;
}

function recordOpe() {
    // this function record current operator
    operator = this.textContent;
}

function calculate() {
    const result = operate(operator, num1, num2);
    display.textContent = result;
}

// constant and variable definition
let num1 = 0, operator, num2;
const mulSym = '\u00D7';
const divSym = '\u00F7';
const subSym = '\u2212';
const display = document.querySelector('.display');

// add event listener to all digits
const digits = Array.from(document.querySelectorAll('.num'));
for (let digit of digits) {
    digit.addEventListener('click', clickNum);
}

// add event listener to all operators except '='
const operators = Array.from(document.querySelectorAll('.operator'));
for (let ope of operators) {
    ope.addEventListener('click', recordOpe);
}

// add event listener to symbol '='
const eql = document.querySelector('.eql');
eql.addEventListener('click', calculate);
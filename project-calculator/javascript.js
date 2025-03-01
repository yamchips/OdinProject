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

function clickNum() {
    // this function get num1's and num2's value
    if (operator) {
        // we have an operator     
        display.textContent = '';
        if (!num2) {
            num2 = +this.textContent;
        } else {
            let curr = +this.textContent;
            num2 = +(num2 + '' + curr);
        }
        updateDisplay(num2);
    } else {
        // no operator
        if (num1 === 0 || num1 === result) {
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

function calculate() {
    if (operator) {
        result = operate(operator, num1, num2);
        display.textContent = result;
        num1 = result;
        num2 = undefined;
    } 
    if (this.textContent !== '=') {
        operator = this.textContent;
    } else {
        operator = undefined;
    }
}

function reset() {
    num1 = 0;
    num2 = undefined;
    operator = undefined;
    display.textContent = '0';
}

function deleteLast() {
    if (num1 === result) return;
    if (num2) {
        num2 = +(num2.toString().slice(0, -1));
        updateDisplay(num2);
    } else {
        num1 = +(num1.toString().slice(0, -1));
        updateDisplay(num1);
    }
}

function addDot() {
    if (num1 === result) return;
    if (num2 && !num2.toString().includes('.')) {
        num2 += '.';
        updateDisplay(num2);
    } else {
        num1 += '.';
        updateDisplay(num1);
    }
}

// constant and variable definition
let num1 = 0, operator, num2, result;
const mulSym = '\u00D7';
const divSym = '\u00F7';
const subSym = '\u2212';
const display = document.querySelector('.display');

// add event listener to all digits
const digits = Array.from(document.querySelectorAll('.num'));
for (let digit of digits) {
    digit.addEventListener('click', clickNum);
}

// add event listener to all operators(+, -, *, /, =)
const operators = Array.from(document.querySelectorAll('.operator'));
for (let ope of operators) {
    ope.addEventListener('click', calculate);
}

// add event listener to AC
const ac = document.querySelector('.ac');
ac.addEventListener('click', reset);

// add event listener to Del
const del = document.querySelector('.del');
del.addEventListener('click', deleteLast);

// add event listener to dot 
const dot = document.querySelector('.dot');
dot.addEventListener('click', addDot);
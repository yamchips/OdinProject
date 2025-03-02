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
        case '-':
            return subtract(num1, num2);
        case mulSym:
        case '*':
            return multiply(num1, num2);
        case divSym:
        case '/':
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
            num2 = +(num2.toString() + curr);
        }
        updateDisplay(num2);
    } else {
        // no operator
        if (num1 === 0 || num1 === result) {
            num1 = +this.textContent;
        } else {
            let curr = +this.textContent;
            num1 = +(num1.toString() + curr);
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
    } else if (!num1.toString().includes('.')) {
        num1 += '.';
        updateDisplay(num1);
    }
}

function kbInput(event) {
    if (nums.has(event.key)) {
        if (operator) {
            // we have an operator     
            display.textContent = '';
            if (!num2) {
                num2 = +event.key;
            } else {
                let curr = +event.key;
                num2 = +(num2.toString() + curr);
            }
            updateDisplay(num2);
        } else {
            // no operator
            if (num1 === 0 || num1 === result) {
                num1 = +event.key;
            } else {
                let curr = +event.key;
                num1 = +(num1.toString() + curr);
            }
            updateDisplay(num1);
        }
    }
    if (opeSymbols.has(event.key)) {
        if (operator) {
            result = operate(operator, num1, num2);
            display.textContent = result;
            num1 = result;
            num2 = undefined;
        }
        if (event.key !== '=' && event.key !== 'Enter') {
            operator = event.key;
        } else {
            operator = undefined;
        }
    }
    if (event.key === '.') {
        addDot();
    }
    
}

function kbDelInput(event) {
    if (event.key === 'Delete' || event.key === 'Backspace') {
        deleteLast();
    }
}

// constant and variable definition
let num1 = 0, operator, num2, result;
const mulSym = '\u00D7';
const divSym = '\u00F7';
const subSym = '\u2212';
const display = document.querySelector('.display');
const nums = new Set(['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']);
const opeSymbols = new Set(['/', '*', '-', '+', '=', 'Enter']);

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

// add keyboard support to document
document.addEventListener('keypress', kbInput);
document.addEventListener('keydown', kbDelInput);
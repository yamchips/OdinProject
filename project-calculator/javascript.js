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

function clickNum(event) {
    // this function get num1's and num2's value
    if (operator) {
        // we have an operator, clear display
        display.textContent = '';
        if (!num2) {
            num2 = event.target.textContent;
        } else {
            num2 = num2 + event.target.textContent;
        }
        updateDisplay(num2);
    } else {
        // no operator
        // second condition: press digit after we have a result 
        if (num1 === '0' || num1 === result) {
            num1 = event.target.textContent;
        } else {
            num1 = num1 + event.target.textContent;
        }
        updateDisplay(num1);
    }
}

function updateDisplay(num) {
    display.textContent = num;
}

function calculate(event) {
    // This function calculates result and updates operator
    // second condition: press operator consecutively
    if (operator && num2) {
        result = operate(operator, +num1, +num2).toString();
        display.textContent = result;
        num1 = result;
        num2 = undefined;
    }
    if (event.target.textContent !== '=') {
        operator = event.target.textContent;
    } else {
        operator = undefined;
    }
}

function reset() {
    num1 = '0';
    num2 = undefined;
    operator = undefined;
    display.textContent = '0';
    result = '';
}

function deleteLast() {
    let target = num2 || num1;
    if (target) {
        target = target.slice(0, -1);
        num2 ? num2 = target : num1 = target;
        updateDisplay(target);
    }
}

function addDot() {
    let target = num2 || num1;
    if (!target.includes('.')) {
        target += '.';
        num2 ? num2 = target : num1 = target;
        updateDisplay(target);
    }
}

function kbInput(event) {
    if (nums.has(event.key)) {
        digits.forEach(div => {
            if (div.textContent === event.key) {
                div.click();
            }
        });
    }
    if (opeSymbols.has(event.key)) {
        operators.forEach(div => {
            if (div.textContent === symTable[event.key]) {
                div.click();
            }
        });
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
let num1 = '0', operator, num2, result;
const mulSym = '\u00D7';
const divSym = '\u00F7';
const subSym = '\u2212';
const display = document.querySelector('.display');
const nums = new Set(['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']);
const opeSymbols = new Set(['/', '*', '-', '+', '=', 'Enter']);
const symTable = {'*': mulSym, '/': divSym, '-': subSym, '+': '+', '=': '=', 'Enter': '='};

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
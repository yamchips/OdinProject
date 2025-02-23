const container = document.querySelector('.container');
const btn = document.querySelector('button');
let opaqueVal = 0.1;

function createGrid(n) {
    // create a n * n grid of square divs
    container.setAttribute('style', 'display:flex; flex-direction: column; justify-content: center;');
    for (let i = 0; i < n; i++) {
        const div = document.createElement('div');
        div.setAttribute('class', 'row');
        div.setAttribute('style', 'display: flex; flex: 1;');
        for (let j = 0; j < n; j++) {
            const subDiv = document.createElement('div');
            subDiv.setAttribute('class', 'grid');
            subDiv.setAttribute('style', 'flex: 1; border: 1px solid black; justify-content: flex-end;');
            div.appendChild(subDiv);
        }
        container.appendChild(div);
    }
}

function enterGrid() {
    this.style.backgroundColor = 'green';

    // random color
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    this.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;


    this.style.opacity = opaqueVal;

    if (opaqueVal <= 1) {
        opaqueVal += 0.1;
    } else {
        opaqueVal = 1;
    }

}

function resetGrid() {
    let num = +prompt('Enter grid number of each side:');
    // check validity
    if (num > 100) {
        alert('Input number is larger than 100. Reduced to 100.');
        num = 100;
    }
    // clear previous grids
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    // set new grids
    createGrid(num);
    addGridEvent();
    // reset opaque value
    opaqueVal = 0.1;
}

function addGridEvent() {
    const grids = Array.from(document.querySelectorAll('.grid'));
    for (let grid of grids) {
        grid.addEventListener('mouseenter', enterGrid);
    }
}

createGrid(16);
addGridEvent();
btn.addEventListener('click', resetGrid);
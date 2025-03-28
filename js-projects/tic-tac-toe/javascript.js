function GameBoard() {
    const rows = 3;
    const cols = 3;
    const board = [];
    for (let i = 0; i < rows; i++) {
        board[i] = [];
        for (let j = 0; j < cols; j++) {
            board[i].push(Cell());
        }
    }

    const getBoard = () => board;

    const resetBoard = function () {
        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < cols; j++) {
                board[i][j].clear();
            }
        }
    };

    const play = (row, col, player) => {
        if (row < 0 || col < 0 || row > 2 || col > 2) return false;
        if (board[row][col].getValue() !== " ") return false;
        board[row][col].addSymbol(player);
        return true;
    };

    const printBoard = () => {
        const boardStatus = board.map((row) => row.map((cell) => cell.getValue()));
        boardStatus.forEach((row, index) => console.log(index + ': ' + row.join(' ')));
    };

    const isGameOver = () => {
        const checkLines = (cell1, cell2, cell3) => {
            return cell1.getValue() !== ' ' && cell1.getValue() == cell2.getValue() && cell1.getValue() === cell3.getValue()
        }
        // check rows and columns
        for (let i = 0; i < rows; i++) {
            if (checkLines(board[i][0], board[i][1], board[i][2]) || checkLines(board[0][i], board[1][i], board[2][i])) {
                return true;
            }
        }
        // check two diagonals
        if (checkLines(board[0][0], board[1][1], board[2][2]) || checkLines(board[1][1], board[0][2], board[2][0])) {
            return true;
        }
        return false;
    };

    return { getBoard, play, isGameOver, resetBoard };
}

function Cell() {
    let value = " ";
    const addSymbol = (player) => {
        value = player;
    };
    const getValue = () => value;
    const clear = () => { value = ' ' }
    return {
        addSymbol,
        getValue,
        clear
    };
}

function GameController(playerOne = "player one", playerTwo = "player two") {
    const board = GameBoard();
    let players = [
        { name: playerOne, token: "X" },
        { name: playerTwo, token: "O" },
    ];
    let activePlayer = players[0];
    let moves = 0;

    const switchPlayerTurn = () => {
        activePlayer = activePlayer === players[0] ? players[1] : players[0];
    };

    const getActivePlayer = () => activePlayer;

    const resetGame = (playerOne, playerTwo) => {
        players = [
            { name: playerOne, token: "X" },
            { name: playerTwo, token: "O" },
        ];
        board.resetBoard();
        activePlayer = players[0];
        moves = 0;
    };

    const playRound = (row, col) => {
        resultDiv.appendChild(Object.assign(document.createElement('p'), { textContent: `${getActivePlayer().name} makes a move to (${row}, ${col})` }))
        if (board.play(row, col, getActivePlayer().token)) {
            moves += 1;
            if (isGameOver()) {
                resultDiv.appendChild(Object.assign(document.createElement('p'), { textContent: board.isGameOver() ? `${getActivePlayer().name} wins!` : 'Tie game!' }))
                return false;
            } else {
                switchPlayerTurn();
                return true;
            }
        } else {
            resultDiv.appendChild(Object.assign(document.createElement('p'), { textContent: 'Invalid move!' }))
            return true;
        }
    };

    const isGameOver = () => {
        return board.isGameOver() || moves === 9;
    }

    return { playRound, getBoard: board.getBoard, getActivePlayer, resetGame, isGameOver };
}

function ScreenController() {
    const inputOne = document.querySelector('#playerOne').value;
    const playerOne = (inputOne === '') ? 'player one' : inputOne;
    const inputTwo = document.querySelector('#playerTwo').value;
    const playerTwo = (inputTwo === '') ? 'player two' : inputTwo;

    const game = GameController(playerOne, playerTwo);
    const board = game.getBoard();
    const turnDiv = document.querySelector('.turn');
    const boardDiv = document.querySelector('.board');


    const initializeScreen = () => {
        boardDiv.textContent = '';

        const activePlayer = game.getActivePlayer();

        turnDiv.textContent = `${activePlayer.name}'s turn`
        resultDiv.textContent = '';

        for (let i = 0; i < 3; i++) {
            const row = document.createElement('div');
            row.dataset.row = i;
            for (let j = 0; j < 3; j++) {
                const cellBtn = document.createElement('button');
                cellBtn.classList.add('cell');
                cellBtn.dataset.row = i;
                cellBtn.dataset.col = j;
                cellBtn.textContent = board[i][j].getValue();
                row.appendChild(cellBtn);
            }
            boardDiv.appendChild(row);
        }
    }

    function handleClick(e) {
        const row = e.target.dataset.row;
        const col = e.target.dataset.col;
        if (game.isGameOver()) {
            return alert('game over, please start a new game');
        }
        game.playRound(row, col);
        updateScreen(row, col);

    }

    function updateScreen(row, col) {
        const cell = document.querySelector(`.cell[data-row="${row}"][data-col="${col}"]`);
        if (cell) {
            cell.textContent = board[row][col].getValue();
        }
    }

    function start() {
        const inputOne = document.querySelector('#playerOne').value;
        const playerOne = (inputOne === '') ? 'player one' : inputOne;
        const inputTwo = document.querySelector('#playerTwo').value;
        const playerTwo = (inputTwo === '') ? 'player two' : inputTwo;
        game.resetGame(playerOne, playerTwo);
        initializeScreen();
        turnDiv.textContent = `${game.getActivePlayer().name}'s turn`;
        resultDiv.textContent = '';
    }

    boardDiv.addEventListener('click', handleClick);
    const startBtn = document.querySelector('.start')
    startBtn.addEventListener('click', () => start());
    initializeScreen();
}

const resultDiv = document.querySelector('.result');
ScreenController();

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

    const isTieGame = () => {

    }

    return { getBoard, play, printBoard, isGameOver, resetBoard };
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
    const players = [
        { name: playerOne, token: "X" },
        { name: playerTwo, token: "O" },
    ];
    let activePlayer = players[0];
    let moves = 0;

    const switchPlayerTurn = () => {
        activePlayer = activePlayer === players[0] ? players[1] : players[0];
    };

    const getActivePlayer = () => activePlayer;

    const resetGame = () => {
        board.resetBoard();
        let activePlayer = players[0];
        moves = 0;
    };

    const printNewRound = () => {
        board.printBoard();
        console.log(`${getActivePlayer().name}'s turn`);
    };

    const playRound = (row, col) => {
        console.log(`${getActivePlayer().name} makes a move to (${row}, ${col})`);
        if (board.play(row, col, getActivePlayer().token)) {
            moves += 1;
            if (board.isGameOver() || moves === 9) {
                console.log(board.isGameOver() ? `${getActivePlayer().name} wins!` : 'Tie game!');
                board.printBoard();
                console.log('Game will reset.');
                resetGame();
            } else {
                switchPlayerTurn();
            }
        } else {
            console.log("invalid move!");
        }

        printNewRound();
    };

    printNewRound();

    return { playRound, getActivePlayer };
}

const game = GameController();

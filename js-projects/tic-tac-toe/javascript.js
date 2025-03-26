function createBoard() {
    const board = [[], [], []]
    let isGameOver = false;

    const getBoard = () => board;


    return { getBoard, isGameOver };
}

function createUser(name, symbol) {
    return { name, symbol };
}



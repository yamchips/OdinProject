# Overview

This project is based on reference article. A console game was developed first then a UI game.

## Console Game

### GameBoard

It returns public methods of a board instance.

1. getBoard: returns current board status

2. play: adds player's token to board, checks the validity of given row and column

3. printBoard: displays board in console, deleted in return clause when UI game was finished

4. isGameOver: checks rows, columns and diagnoals

5. resetBoard: resets each cell's value to a space instead of creating a new board

### Cell

It represents a slot on board.

1. addSymbol: adds player's symbol to current cell

2. getValue: returns current cell's token

3. clear: sets current cell's value to a space

### GameController

It returns a game instance's public methods.

1. playRound: given row and column, tries to place current player's token into that slot

## UI Game

Add a ScreenController function to display board and accept user input.

### ScreenController

It represents a screen controller which doesn't return anything. It contains view logic.

1. initializeScreen: clears all contents and create a new board

2. handleClick: responds to user's click

3. updateScreen: only updates board display

4. start: records any valid user input, resets game

### GameController

Several additional return functions were added.

1. getBoard: returns current board

2. getActivePlayer: returns current active player

3. resetGame: resets game status, including player names, board status, active player and total moves

4. isGameOver: if one player wins or a tie game appears, return true, otherwise false

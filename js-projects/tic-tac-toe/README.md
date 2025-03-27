# Overview

Similar to the reference article, the console version game creates following functions:

## GameBoard

It returns public methods of a board instance.

getBoard: returns current board status

play: add player's token to board, check the validity of given row and column

printBoard: display board in console

isGameOver: check rows, columns and diagnoals

resetBoard: reset each cell's value to a space instead of creating a new board

## Cell

It represents a slot on board.

addSymbol: add player's symbol to current cell

getValue: return current cell's token

clear: set current cell's value to a space

## GameController

It returns a game instance's public methods.

playRound: given row and column, try to place current player's token into that slot

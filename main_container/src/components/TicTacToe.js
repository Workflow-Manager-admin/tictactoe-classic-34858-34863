import React, { useState } from 'react';
import Square from './Square';
import './TicTacToe.css';

// PUBLIC_INTERFACE
/**
 * TicTacToe component - Main container for the TicTacToe Classic game
 * Manages game state, turn-based marking, win/draw detection, and reset functionality
 * 
 * @returns {JSX.Element} - The TicTacToe game interface
 */
function TicTacToe() {
  // State for the 3x3 board (null means empty square)
  const [squares, setSquares] = useState(Array(9).fill(null));
  
  // State to track whose turn it is (true for 'X', false for 'O')
  const [xIsNext, setXIsNext] = useState(true);
  
  // Calculate the winner based on current squares
  const winner = calculateWinner(squares);
  
  // Check if the game is a draw (all squares filled and no winner)
  const isDraw = !winner && squares.every(square => square !== null);
  
  // Get the status message based on game state
  let status;
  if (winner) {
    status = `Winner: ${winner}`;
  } else if (isDraw) {
    status = 'Game ended in a draw!';
  } else {
    status = `Next player: ${xIsNext ? 'X' : 'O'}`;
  }
  
  /**
   * Handle click on a square
   * @param {number} i - Index of the clicked square
   */
  function handleClick(i) {
    // If square is already filled or game is won, do nothing
    if (squares[i] || calculateWinner(squares)) {
      return;
    }
    
    // Create a copy of the squares array
    const newSquares = squares.slice();
    
    // Mark the square with current player's symbol
    newSquares[i] = xIsNext ? 'X' : 'O';
    
    // Update state
    setSquares(newSquares);
    setXIsNext(!xIsNext);
  }
  
  /**
   * Reset the game to initial state
   */
  function resetGame() {
    setSquares(Array(9).fill(null));
    setXIsNext(true);
  }
  
  // Render the game board and controls
  return (
    <div className="game-container">
      <h1 className="game-title">Tic Tac Toe Classic</h1>
      
      <div className="status">{status}</div>
      
      <div className="board">
        {/* Render 3 rows with 3 squares each */}
        <div className="board-row">
          <Square value={squares[0]} onClick={() => handleClick(0)} />
          <Square value={squares[1]} onClick={() => handleClick(1)} />
          <Square value={squares[2]} onClick={() => handleClick(2)} />
        </div>
        <div className="board-row">
          <Square value={squares[3]} onClick={() => handleClick(3)} />
          <Square value={squares[4]} onClick={() => handleClick(4)} />
          <Square value={squares[5]} onClick={() => handleClick(5)} />
        </div>
        <div className="board-row">
          <Square value={squares[6]} onClick={() => handleClick(6)} />
          <Square value={squares[7]} onClick={() => handleClick(7)} />
          <Square value={squares[8]} onClick={() => handleClick(8)} />
        </div>
      </div>
      
      <button 
        className="reset-button btn" 
        onClick={resetGame}
      >
        Reset Game
      </button>
    </div>
  );
}

/**
 * Calculate the winner of the TicTacToe game
 * @param {Array} squares - Current state of the board
 * @returns {string|null} - 'X', 'O', or null if no winner
 */
function calculateWinner(squares) {
  // All possible winning combinations (indices)
  const lines = [
    [0, 1, 2], // top row
    [3, 4, 5], // middle row
    [6, 7, 8], // bottom row
    [0, 3, 6], // left column
    [1, 4, 7], // middle column
    [2, 5, 8], // right column
    [0, 4, 8], // diagonal top-left to bottom-right
    [2, 4, 6], // diagonal top-right to bottom-left
  ];
  
  // Check each winning combination
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    // If all three squares have the same non-null value, we have a winner
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  
  // No winner
  return null;
}

export default TicTacToe;

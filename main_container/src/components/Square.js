import React from 'react';

// PUBLIC_INTERFACE
/**
 * Square component - Represents a single cell in the TicTacToe grid
 * 
 * @param {Object} props - Component props
 * @param {string|null} props.value - The value to display in the square ('X', 'O', or null)
 * @param {Function} props.onClick - Function to call when square is clicked
 * @returns {JSX.Element} - A button representing a square in the TicTacToe grid
 */
function Square({ value, onClick }) {
  return (
    <button 
      className="square" 
      onClick={onClick}
      style={{
        color: value === 'X' ? '#FF8B4D' : '#FFFFFF',
        fontWeight: 'bold',
      }}
    >
      {value}
    </button>
  );
}

export default Square;

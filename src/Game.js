import React from 'react';
import { useState } from 'react';
import Board from './Board.js';
import calculateWinner from './calculateWinner.js';

export default function Game(props) {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const winner = calculateWinner(squares);
  const fullBoard = !(squares.indexOf(null) + 1);
  const currentPlayer = xIsNext ? 'X' : 'O';
  let status;
  status = xIsNext ? 'Next player: X' : 'Next player: O';
  if (fullBoard) {status = 'Tie'}
  if (winner) {status = ('Winner: ' + winner)}
  const current = squares.slice();
  const handleClick = (i) => {
    if (current[i] === null && !winner) {
      current[i] = currentPlayer;
      setSquares(current);
      setXIsNext(!xIsNext);
    }
  }
  const resetGame = () => {
    setSquares(Array(9).fill(null));
    setXIsNext(true);
  }

  return (
    <div>
      <div className = "status">{status}</div>
      <Board squares={squares} onClick={handleClick}/>
      <button className = "reset" onClick={resetGame}>RESET</button>
    </div>
  )
}

import React, { useState } from 'react';
import Board from './Board';
import calculateWinner from './util';

export default function Game() {
  const [history, setHistory] = useState([{ squares: Array(9).fill(null) }]);
  const [xIsNext, setXIsNext] = useState(true);
  const current = history[history.length - 1];;
  const result = calculateWinner(current.squares);
  const status = result ? `Winner: ${result.winner}` : `Next player: ${xIsNext ? 'X' : 'O'}`;
  const moves = history.map((step, move) => {
    const desc = move ?
      'Go to move #' + move :
      'Go to game start';
    const isCurrent = current === step;  
    const rowColDes = step.location ? `(${step.location.row}, ${step.location.col})` : '';  
    return (
      <li className="list-group-item" key={move}>
        <button  className={`${isCurrent ? 'btn-primary': 'btn-deafult'} btn`} onClick={() => jumpTo(move)}>{desc}  {rowColDes}</button>
      </li>
    );
  });


  function handleClick(i) {
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    console.log(squares[i]);
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = xIsNext ? 'X' : 'O';
    setHistory(history.concat([{
      squares: squares,
      location: {
        row: Math.floor(i/3) + 1,
        col: i%3
      }
    }]));
    setXIsNext(!xIsNext);
  }

  function jumpTo(i) {
    const hs = history.slice(0, i + 1);
    const fs = history.slice(i, history.length - 1);
    setXIsNext((i % 2) === 0)
    setHistory(hs);
  }
  console.log('rendering');
  return (
    <div className="game row">
      <div className="game-board col-md-8">
        <Board squares={current.squares}
          onClick={(i) => handleClick(i)}
          winningIndices={result && result.indices}
        />
      </div>
      <div className="game-info col-md-4">
        <div>{status}</div>
        <ol className="list-group">{moves}</ol>
      </div>    
    </div>
  );
}


import React, { useState } from 'react';
import Square from './Square';
import calculateWinner from './util';


export default function Board(props) {
  const indices= props.winningIndices;
  function renderSquare(i) {
    const className = indices && indices.includes(i) ? 'btn btn-success' : 'btn btn-default';
    return <Square className={className} value={props.squares[i]} onClick={()=>props.onClick(i)} />;
  }
  

  return (
    <div>
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
}


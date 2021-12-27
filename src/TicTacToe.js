import { useState } from "react";
import Button from "@mui/material/Button";
import * as React from "react";
import useWindowSize from "react-use/lib/useWindowSize";
import Confetti from "react-confetti";
import { GameBox } from "./GameBox";

export function TicTacToe() {

  // const handleClick=(mode)=>
  // {
  //   mode === true ? (<Game value={true} />) : (<Game value={false}/>)
  // }

  return(
    <div>
      {/* <h2>Choose the player</h2>
  <GameBox val="X" onPlayerClick={() => handleClick(true)}/>
  <GameBox val="O" onPlayerClick={() => handleClick(false)}/> */}
  <Game />

  </div>
  );
}

function Game(){
  const { width, height } = useWindowSize();
  const init = Array(9).fill(null);
  const [board, setBoard] = useState(init);
  //X starts the turn so true
  const [isXturn, setIsXTurn] = useState(true);

  const handleClick = (index) => {
    //update only untouched box
    //falsy logic
    //no winner and no null
    if (!winner && !board[index]) {
      const boardCopy = [...board];
      boardCopy[index] = isXturn ? "X" : "O";
      setBoard(boardCopy);
      setIsXTurn(!isXturn);
    }
  };

  function decideWinner(board) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      console.log(board[a], board[b], board[c]);
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        console.log("winner is", board[a]);
        return board[a];
      }
    }
    //when no winner
    return null;
  }

  const winner = decideWinner(board);
  console.log(winner);

  let status;
  if (winner) {
    status = "Winner is : " + winner;
  } else {
    status = "Next player: " + (isXturn ? "X" : "O");
  }

  return (
    <div className="container">
      {winner ? <Confetti width={width} height={height} gravity={0.03} /> : ""}
      <div>
        {status}
        <Button
          type="button"
          className="btn"
          onClick={() => {
            setBoard(init);
          }}
        >
          Reset
        </Button>
      </div>
      <div className="grid">
        {board.map((val, index) => (
          <GameBox
            key={index}
            val={val}
            onPlayerClick={() => handleClick(index)} />
        ))}
      </div>
      {winner ? <h2>The winner is {winner}</h2> : ""}
    </div>
  );
}
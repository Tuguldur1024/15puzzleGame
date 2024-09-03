import React, { useState, useContext, useEffect } from "react";
import Cube from "../components/Cube";

import ChildrenClock from "../components/ChildrenClock";
import GameClock from "../components/GameClock";

let first = [
  [6, 5, 1, 15],
  [7, 8, 12, 14],
  [11, 4, "", 9],
  [13, 2, 3, 10],
];
let correct = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15],
];

const Puzzle = () => {
  const [moves, setMoves] = useState(0);
  // const [timer, setTimer] = useState(0);
  const [data, setData] = useState(first);

  const [haveWon, sethaveWon] = useState(false);

  // useEffect(() => {
  //   let interval = setInterval(() => {
  //     setTimer((n) => n + 1);
  //   }, 1000);

  //   return () => clearInterval(interval);
  // }, data);

  const handleClick = (number) => {
    let current = [...first];
    let hoosonMur = 0;
    let hoosonBagana = 0;
    let myMur = 0;
    let myBagana = 0;
    for (let i = 0; i < first.length; i++) {
      for (let j = 0; j < first.length; j++) {
        if (current[i][j] == "") {
          hoosonMur = i;
          hoosonBagana = j;
        }
        if (current[i][j] == number) {
          myMur = i;
          myBagana = j;
        }
      }
    }
    if (
      (Math.abs(myMur - hoosonMur) == 1 && myBagana == hoosonBagana) ||
      (myMur == hoosonMur && Math.abs(myBagana - hoosonBagana) == 1)
    ) {
      current[hoosonMur][hoosonBagana] = number;
      current[myMur][myBagana] = "";

      setData(current);
      setMoves((n) => n + 1);
    }
    if (correct == data) {
      sethaveWon(true);
    }
  };

  const playAgain = () => {
    sethaveWon(!haveWon);
    setData(first);
  };
  return (
    <>
      {haveWon && (
        <div className="flex flex-col mx-auto mt-[60px] p-14 justify-between bg-[#030512] text-center items-center w-[600px]">
          <p className="text-white mb-[494px]"> You have Won </p>
          <button
            className="text-white w-fit bg-[#00B4BE] p-4"
            onClick={playAgain}
          >
            Play Again?
          </button>
        </div>
      )}
      {!haveWon && (
        <div className="flex flex-col mx-auto p-14 bg-[#030512] justify-center items-center w-fit mt-[60px]">
          <p className="text-[#00B4BE] font-semibold text-lg mb-4">
            15 Puzzle Game
          </p>
          <div className="flex justify-between text-white mb-6 w-full">
            <p> Moves: {moves}</p>
            <GameClock>
              <ChildrenClock />
              {console.log("hello")}
            </GameClock>
          </div>
          <div className="grid grid-cols-4 grid-rows-4 gap-8 mb-5">
            {data.map((number, indexRow) =>
              number.map((one, indexColumn) => {
                let isRight = one == 4 * indexRow + indexColumn + 1;
                let background = isRight
                  ? "bg-gradient-to-r from-[#F5AE0E] to-[#FF0094]"
                  : "bg-[#111527]";
                return (
                  <div
                    onClick={() => handleClick(one)}
                    className={`flex p-7 text-white text-center justify-center ${background}`}
                  >
                    {one}
                  </div>
                );
              })
            )}
          </div>
          <div className="bg-gradient-to-r from-[#7519F0] via-[#00AECE]  to-[#00CA84] w-full text-center py-3 font-semibold">
            New Game
          </div>
          <button class="btn btn-primary">One</button>
        </div>
      )}
    </>
  );
};

export default Puzzle;

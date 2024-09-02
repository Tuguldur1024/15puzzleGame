import React, { useState, useContext, useEffect } from "react";
import Cube from "../components/Cube";

let first = [
  [6, 5, 1, 14],
  [7, 8, 12, 15],
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

  const [timer, setTimer] = useState(0);

  const [data, setData] = useState(first);

  return (
    <div className="flex flex-col mx-auto p-14 bg-[#030512] justify-center items-center w-fit mt-[120px]">
      <p className="text-[#00B4BE] font-semibold text-lg mb-4">
        15 Puzzle Game
      </p>
      <div className="flex justify-between text-white mb-6 w-full">
        <p> Moves: {moves}</p>
        <p> Time: {timer}s</p>
      </div>
      <div className="grid grid-cols-4 grid-rows-4 gap-8 mb-5">
        {data.map((number) =>
          number.map((one) => {
            return (
              <div className="flex p-7 bg-[#111527] text-white text-center justify-center">
                {one}
              </div>
            );
          })
        )}
      </div>
      <div className="bg-gradient-to-r from-[#7519F0] via-[#00AECE]  to-[#00CA84] w-full text-center py-3 font-semibold">
        New Game
      </div>
    </div>
  );
};

export default Puzzle;

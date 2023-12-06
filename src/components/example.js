import React, { useState } from "react";

function FormMain() {
  const [grid, setGrid] = useState(Array(9).fill(null));
  const [play, setPlay] = useState(true);

  const handleClick = (index) => {
    if (!grid[index]) {
      const newGrid = [...grid];
      newGrid[index] = play ? "X" : "O";
      setGrid(newGrid);
      setPlay(!play);
    } else {
      alert("Please choose an empty cell!");
    }
  };

  const renderCell = (index) => {
    return (
      <p
        className="rounded-md text-3xl bg-gray-200 h-16 flex items-center justify-center cursor-pointer"
        onClick={() => handleClick(index)}
      >
        {grid[index]}
      </p>
    );
  };

  return (
    <div className="flex flex-col justify-center items-center p-5 bg-cyan-700 rounded-md ">
      <div className=" border-b-2 border-dotted w-8/12 text-center">
        <h1 className="font-bold text-2xl text-white">Tic Tac Toe</h1>
      </div>
      <section className="w-7/12 mx-auto text-center">
        <div className="grid grid-cols-3 justify-between mt-10 gap-3 ">
          {renderCell(0)}
          {renderCell(1)}
          {/* Render other cells similarly */}
        </div>
      </section>
      <div>
        <button className="bg-red-500 px-4 py-2 text-white mt-10 rounded-md">
          Reset
        </button>
      </div>
    </div>
  );
}

export default FormMain;


{cells.map((cell, index) => (
    <p
      key={index}
      className="rounded-md text-3xl bg-gray-200 h-16"
      onClick={(e) => handleClick(e, index, cell)}
    >
      {cell === 0 ? "" : cell === 1 ? "X" : "O"}
    </p>
  ))}


  const handleClick = (e, index, cell) => {
    if (cell === 0) {
      const newCells = cells;
      if (turn === 1) {
        newCells[index] = 1;
      } else if (turn === 2) {
        newCells[index] = 2;
      }
    //   newCells[index] = turn;
      setCells(newCells);
    } else {
      alert("Please choose an empty cell!");
    }
    if (turn === 1) {
      setTurn(2);
    } else {
      setTurn(1);
    }
  };
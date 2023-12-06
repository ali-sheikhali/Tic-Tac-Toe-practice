import React from "react";
import { useState } from "react";
function FormMain() {
    
  const [turn, setTurn] = useState(1);
  const [cells, setCells] = useState(Array(9).fill(0));

  const handleClick = ( index, cell) => {
    if (cell === 0) {
      const newCells = cells;
      if (turn === 1) {
        newCells[index] = 1;
      } else if (turn === 2) {
        newCells[index] = 2;
      }
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
  const handleSubmit = ()=>{
    setCells(Array(9).fill(0))
  }

  return (
    <div className="flex flex-col justify-center items-center p-5 bg-cyan-700 rounded-md ">
      <div className=" border-b-2 border-dotted w-8/12 text-center">
        <h1 className="font-bold text-2xl text-white">Tic Tac Toe</h1>
      </div>
      <section className="w-7/12 mx-auto text-center">
        <div className="grid grid-cols-3 justify-between mt-10 gap-3">
          {cells.map((cell, index) => (
            <p
              className="rounded-md text-3xl bg-gray-200 h-16 py-3"
              key={index}
              onClick={() => handleClick( index, cell)}
            >
              {cell === 0 ? "" : cell === 1 ? "X" : "O"}
            </p>
          ))}
        </div>
      </section>
      <div>
        <button onClick={handleSubmit} className="bg-red-500 px-4 py-2 text-white mt-10 rounded-md">
          Reset
        </button>
      </div>
    </div>
  );
}

export default FormMain;

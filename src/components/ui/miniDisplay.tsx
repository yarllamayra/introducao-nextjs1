"use client";

import { useState } from "react";

export default function MiniDisplay() {
  const [display, setDisplay] = useState("");

  const calculate = () => {
    let result = 0;

    if (display.includes("+")) {
      const values = display.split("+").map(Number);
      result = values.reduce((a, b) => a + b, 0);
    } else if (display.includes("-")) {
      const values = display.split("-").map(Number);
      result = values.slice(1).reduce((a, b) => a - b, values[0]);
    } else if (display.includes("*")) {
      const values = display.split("*").map(Number);
      result = values.reduce((a, b) => a * b, 1);
    } else if (display.includes("/")) {
      const values = display.split("/").map(Number);
      result = values.slice(1).reduce((a, b) => a / b, values[0]);
    }

    setDisplay(String(result));
  };

  return (
    <div>
      <div className="flex flex-col items-center mt-10">
        <div className="flex justify-center items-center border border-gray-400 rounded px w-40 h-12 text-center text-xl overflow-x-auto">
          {display}
        </div>

        <div className="grid grid-cols-3 gap-2 w-40 h-40 mt-5">
          {["0","1","2","3","4","5","6","7","8","9"].map((num) => (
            <button
              key={num}
              className="bg-blue-300 p-2 rounded"
              onClick={() => setDisplay(display + num)}
            >
              {num}
            </button>
          ))}

          <button
            onClick={() => setDisplay(display + "+")}
            className="bg-green-500 p-2 rounded"
          >
            +
          </button>

          <button
            onClick={() => setDisplay(display + "-")}
            className="bg-gray-400 p-2 rounded"
          >
            -
          </button>

          <button
            onClick={() => setDisplay(display + "*")}
            className="bg-yellow-500 p-2 rounded"
          >
            *
          </button>

          <button
            onClick={() => setDisplay(display + "/")}
            className="bg-red-500 p-2 rounded"
          >
            /
          </button>

          <button onClick={calculate} className="bg-amber-600 p-2 rounded">
            =
          </button>

          <button
            onClick={() => setDisplay("")}
            className="bg-purple-500 p-2 rounded"
          >
            C
          </button>

          <button
            onClick={() => setDisplay(display.slice(0, -1))}
            className="bg-violet-300 p-2 rounded col-span-2"
          >
            Backspace
          </button>
        </div>
      </div>
    </div>
  );
}

"use client";

import { useState } from "react";

export default function Lampada() {
  const [ligada, setLigada] = useState(false);

  return (
    <div className="flex flex-col items-center gap-6 p-6">
      {/* Imagem da lâmpada */}
      <div className="w-40 h-40">
        <img
          src={ligada ? "/lampadaligada.png" : "/lampadadesligada.png"}
          alt={ligada ? "Lâmpada ligada" : "Lâmpada desligada"}
          className="w-full h-full object-contain transition duration-500"
        />
      </div>

      {/* Botão deslizante */}
      <div
        onClick={() => setLigada(!ligada)}
        className={`w-20 h-10 flex items-center rounded-full p-1 cursor-pointer transition-colors duration-300 ${
          ligada ? "bg-green-500" : "bg-red-500"
        }`}
      >
        <div
          className={`bg-white w-8 h-8 rounded-full shadow-md transform transition-transform duration-300 ${
            ligada ? "translate-x-10" : "translate-x-0"
          }`}
        ></div>
      </div>

      {/* Texto do estado */}
      <p className="text-lg font-semibold">
        {ligada ? "A lâmpada está ligada!" : "A lâmpada está desligada!"}
      </p>
    </div>
  );
}

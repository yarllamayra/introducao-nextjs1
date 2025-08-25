

"use client"

import { useState } from "react";
import { FaPlay, FaPause } from "react-icons/fa";

export default function BotaoReproducao() {

    const [isPlaying, setIsPlaying] = useState(false)

    return (
        <button
            onClick={() => { setIsPlaying(!isPlaying) }}
            className={`flex items-center
                space-x-2 p-2 rounded-md

                bg-gray-50 hover:bg-gray-100
                ${isPlaying ? 
                    "text-green-600 bg-green-100 hover:bg-green-200" :
                    "text-gray-400 hover:text-gray-500 bg-gray-50 hover:bg-gray-100"}
            `}
        >
            <span>{isPlaying ? <FaPause /> : <FaPlay />}</span>
            <span>{isPlaying ? "Pause" : "Play"}</span>
        </button>
    );
}

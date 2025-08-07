'use client'

import { useState } from "react";
import { Heart } from "lucide-react";

interface LikeProps {
  initial: number;
}

export default function Likes({ initial }: LikeProps) {
  const [count, setCount] = useState(initial);
  const [liked, setLiked] = useState(false);

  const handleClick = () => {
    setCount(count + 1);
    setLiked(true);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-pink-50 to-yellow-50">
      <div className="bg-white rounded-2xl shadow-xl p-8 w-80 text-center">
        <h1 className="text-2xl font-bold text-pink-600 mb-6">Dê um Like</h1>

        <button
          onClick={handleClick}
          className={`flex items-center justify-center gap-2 w-full py-3 rounded-full transition-all duration-300
            ${liked ? "bg-red-100 hover:bg-red-200" : "bg-pink-100 hover:bg-pink-200"}
            shadow hover:shadow-lg hover:scale-105`}
        >
          <Heart
            className={`w-6 h-6 transition-all duration-300
              ${liked ? "fill-red-500 text-red-500 scale-110" : "text-gray-500"}
              hover:text-red-400`}
          />
          <span className="text-lg font-medium text-gray-800">{count}</span>
        </button>
      </div>
    </div>
  );
}

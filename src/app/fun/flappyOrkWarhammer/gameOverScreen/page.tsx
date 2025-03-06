"use client";

import React, { useState } from "react";

const App: React.FC = () => {
  const [finalScore, setFinalScore] = useState(0);

  return (
    <div className="flex justify-center items-center h-screen bg-blue-200">
      <>
        <div className="flex justify-center items-center h-screen bg-blue-200">
          <div className="text-center">
            <h1 className="text-6xl font-bold text-white mb-8">Game Over</h1>
            <p className="text-3xl font-bold text-white mb-4">
              Your Score: {finalScore}
            </p>
            <button
              onClick={() => setFinalScore(0)}
              className="bg-green-500 text-white px-8 py-4 rounded-lg text-2xl hover:bg-green-600 transition-colors"
            >
              Restart Game
            </button>
          </div>
        </div>
      </>
    </div>
  );
};

export default App;

"use client";

import React, { useState } from "react";
import StartScreen from "./startScreen/page";
import GameScreen from "./gameScreen/page";
import GameOverScreen from "./gameOverScreen/page";

export interface GameProps {
  score: number;
  playerName: string;
  restartGame: () => void;
  endGame: (score: number) => void;
}
const flappyOrkWarhammer: React.FC<GameProps> = (gameProps: GameProps) => {
  const [gameState, setGameState] = useState<"start" | "playing" | "gameOver">(
    "start",
  );
  const [score, setScore] = useState(0);
  //const [gameProps, setGameProps] = useState(0);
  console.log(gameProps);

  const startGame = () => {
    setGameState("playing");
    setScore(0);
  };

  const endGame = (finalScore: number) => {
    setGameState("gameOver");
    setScore(finalScore);
  };

  const restartGame = () => {
    setGameState("start");
  };

  return (
    <>
      <div className="flex justify-center items-center h-screen bg-blue-200">
        {gameState === "start" && <StartScreen onStart={startGame} />}
        {gameState === "playing" && (
          <GameScreen {...gameProps} endGame={endGame} />
        )}
        {gameState === "gameOver" && (
          <>
            <GameOverScreen />
            <div className="flex justify-center items-center h-screen bg-blue-200">
              <div className="text-center">
                <h1 className="text-6xl font-bold text-white mb-8">
                  Game Over
                </h1>
                <p className="text-3xl font-bold text-white mb-4">
                  Your Score: {score}
                </p>
                <button
                  onClick={restartGame}
                  className="bg-green-500 text-white px-8 py-4 rounded-lg text-2xl hover:bg-green-600 transition-colors"
                >
                  Restart Game
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default flappyOrkWarhammer;

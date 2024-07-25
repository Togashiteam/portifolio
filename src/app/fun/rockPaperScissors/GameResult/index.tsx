"use client";

import { Result } from "postcss";
import { useState, useRef, useEffect } from "react";
import { DiVim } from "react-icons/di";

interface IGameResultProps {
  result: string;
  playerPoints: number;
  computerPoints: number;
  setShowGame: () => void;
}

const GameResult = ({
  result,
  setShowGame,
  playerPoints,
  computerPoints,
}: IGameResultProps) => {
  const winAudio = useRef<HTMLAudioElement>(null);
  const loseAudio = useRef<HTMLAudioElement>(null);
  const tieAudio = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (result === "You win!") {
      winAudio.current?.play();
    }
    if (result === "You lose!") {
      loseAudio.current?.play();
    }
    if (result === "It's a tie!") {
      tieAudio.current?.play();
    }
    if (result === "GAME OVER!") {
    }
  }, [result]);

  return (
    <>
      <div className="wrapper w-screen h-screen place-content-evenly items-center">
        <div className="victory flex text-6xl text-green-600 font-bold justify-center text-success-300">
          {result}
        </div>
        <div className="flex justify-center items-center">
          <button
            className="restart flex w-96 h-14 p-1 m-3 rounded-lg border border-dark-700
        transition ease-in-out delay-150 bg-success-700 hover:bg-success-400
        duration-300 justify-center items-center"
            onClick={setShowGame}
          >
            {result === "It's a tie!" && <div> Try again! </div>}
            {result === "You win!" && <div> Congratulations! </div>}
            {result === "You lose!" && <div> Sorry, try again! </div>}
            {result === "GAME OVER!" && <div> Restart game</div>}
          </button>
        </div>
      </div>
      <audio
        ref={winAudio}
        src="https://cdn.freesound.org/previews/580/580310_11785387-lq.mp3"
      ></audio>

      <audio
        ref={loseAudio}
        src="https://cdn.freesound.org/previews/249/249561_3858718-lq.mp3"
      ></audio>
      <audio
        ref={tieAudio}
        src="https://cdn.freesound.org/previews/275/275159_4745081-lq.mp3"
      ></audio>
    </>
  );
};

export default GameResult;

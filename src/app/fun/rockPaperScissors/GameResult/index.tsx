"use client";

import { useState, useRef, useEffect } from "react";

//animate__zoomIn Talvez esse pra victory animate.css site
//animate__tada ou esse. src/app/rockPaperScissors/victoryScreen/page.tsx
interface IGameResultProps {
  result: string;
  setShowGame: () => void;
}

/*

usar a const handleShowGame = () => setShowGame(!showGame);

Como manipular um valor de um component filho através do component pai.

*/

const GameResult = ({ result, setShowGame }: IGameResultProps) => {
  const winAudio = useRef<HTMLAudioElement>(null);
  const loseAudio = useRef<HTMLAudioElement>(null);
  const tieAudio = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (result === "You win!") {
      winAudio.current?.play();
    }
  }, [result]);
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
            Play again!
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

"use client";
import React, { useState } from "react";
import { FaHandPaper, FaHandRock, FaHandScissors } from "react-icons/fa";
import { Rings } from "react-loading-icons";
import GameResult from "./GameResult";
const calculateRockPaperScissors: React.FC = () => {
  const [playerChoice, setPlayerChoice] = useState<string>("");
  const [gameResult, setGameResult] = useState<string>("");
  const [playerPoints, setplayerPoints] = useState<number>(0);
  const [computerPoints, setComputerPoints] = useState<number>(0);
  const [isSelected1, setIsSelected1] = useState<boolean>(false);
  const [isSelected2, setIsSelected2] = useState<boolean>(false);
  const [isSelected3, setIsSelected3] = useState<boolean>(false);
  const [showGame, setShowGame] = useState<boolean>(true);
  const changeColor = (button: any) => {
    if (button == "button1") {
      setIsSelected1(true);
      setIsSelected2(false);
      setIsSelected3(false);
    } else if (button == "button2") {
      setIsSelected1(false);
      setIsSelected2(true);
      setIsSelected3(false);
    } else if (button == "button3") {
      setIsSelected1(false);
      setIsSelected2(false);
      setIsSelected3(true);
    }
  };

  const rpsOptions = ["rock", "scissors", "paper"];
  const computerChoice =
    Object.values(rpsOptions)[Math.floor(Math.random() * 3)];

  const handlePlayerChoice = (e: any) => {
    /* if (playerPoints == 1) {
      return VictoryScreen();
    }
    if (computerPoints == 1) {
      return DefeatScreen();
    }*/
    if (playerChoice === "") {
      setGameResult("Select an option!");
    }
    if (playerChoice) {
      setTimeout(() => {
        setGameResult("Opponent is choosing...");
        setTimeout(() => {
          if (playerChoice === computerChoice) {
            setGameResult("It's a tie!");
          } else if (
            (playerChoice === "paper" && computerChoice === "rock") ||
            (playerChoice === "rock" && computerChoice === "scissors") ||
            (playerChoice === "scissors" && computerChoice === "paper")
          ) {
            const count = (e: any) => {
              setplayerPoints(playerPoints + 1);
              setGameResult("You win!");
            };

            count(e);
          } else {
            const count = (e: any) => {
              setComputerPoints(computerPoints + 1);
              setGameResult("You lose!");
            };

            count(e);
          }
          setShowGame(!showGame);
        }, 3000);
      }, 1000);
    }
  };

  const handleShowGame = () => setShowGame(!showGame);

  return (
    <>
      {showGame ? (
        <div className="wrapper w-screen h-screen">
          <header>
            <div className="rps">
              <a href="./">
                <h2 className="text-secondary items-end flex right-96 box-border rounded-lg w-36 h-16 bg-danger-700 shadow-sm hover:shadow-danger-400">
                  Home
                </h2>
              </a>
              <div className="text-secondary rock"> Rock, </div>
              <div className="text-secondary paper"> Paper </div>
              <div className="text-spacey and"> and </div>
              <div className="text-secondary scissors"> Scissors </div>
            </div>
          </header>

          <div className="content-rps flex flex-col-reverse flex-wrap items-center bg-primary-400">
            <div className="content">
              {/*  {computerPoints == 1 && <div> {gameOverScreen()} </div>}
            {playerPoints == 1 && <div> {gameOverScreen()}</div>}*/}

              <div className="flex place-content-center font-semibold text-success-300">
                Select and play!
              </div>
              <div className="grid justify-items-center">
                <div
                  className="action-button danger w-52 h-40 flex-colol grid sm:w-36 sm:h-36 space-x-4 m-4 flex-wrap place-content-around sm:flex"
                  onClick={() => {
                    setPlayerChoice("paper");
                    changeColor("button1");
                  }}
                  style={{ backgroundColor: isSelected1 ? "#f3b85b" : "" }}
                >
                  <div className="icon">
                    <button className="action-button paper pulse flex justify-center items-center">
                      <FaHandPaper size={80} />
                    </button>
                  </div>
                  <div className="item-box hidden sm:flex place-content-end">
                    Beates rock
                  </div>
                  <p className="mobile sm:hidden mt-1 mb-4">Paper</p>
                </div>
                <div className="item-wrapper">
                  <a>
                    <div
                      className="action-button success flex flex-col w-44 h-40 sm:w-36 sm:h-36 space-x-4 m-4 place-content-around sm:flex-col"
                      onClick={() => {
                        setPlayerChoice("rock");
                        changeColor("button2");
                      }}
                      style={{
                        backgroundColor: isSelected2 ? "#f3b85b" : "",
                      }}
                    >
                      <button className="action-button rock pulse flex justify-center items-center">
                        <FaHandRock size={80} />
                      </button>
                      <div
                        className={`item-box hidden sm:flex`}
                        style={{ inlineSize: "max-content" }}
                      >
                        Beats scissors
                      </div>
                      <p className="mobile flex self-center sm:hidden mt-1 mb-4">
                        Rock
                      </p>
                    </div>
                  </a>
                  <div className="item-wrapper">
                    <div
                      className="action-button alert flex w-44 h-40 sm:w-36 sm:h-36 space-x-4 m-4 flex-wrap place-content-around sm:flex-col"
                      onClick={() => {
                        setPlayerChoice("scissors");
                        changeColor("button3");
                      }}
                      style={{
                        backgroundColor: isSelected3 ? "#f3b85b" : "",
                      }}
                    >
                      <button className="action-button scissors pulse flex justify-center items-center">
                        <FaHandScissors size={80} />
                      </button>
                      <div className="item-box hidden visible sm:flex place-content-end">
                        Beats paper
                      </div>
                      <p className="mobile sm:hidden mt-1 mb-4">Scissors</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="points flex justify-evenly font-semibold text-success-300">
                <p>You: {playerPoints}</p>
                <p>Computer: {computerPoints}</p>
              </div>
              <div>
                <div className="winner flex justify-center sm:justify-center text-success-300 text-4xl">
                  <button
                    className="w-96 h-14 p-1 m-3 rounded-lg border border-dark-700 transition ease-in-out delay-150 bg-success-700 hover:bg-success-400 duration-300"
                    onClick={() => {
                      handlePlayerChoice("");
                    }}
                  >
                    Play
                  </button>
                </div>
                {gameResult && !playerChoice && (
                  <div className="winner flex items-start gap-2 justify-center sm:justify-center text-success-300 text-4xl">
                    <p>{gameResult}</p>
                  </div>
                )}
                {gameResult === "Opponent is choosing..." && computerChoice && (
                  <div className="winner flex items-start gap-2 justify-center sm:justify-center text-success-300 text-4xl">
                    <p>{gameResult}</p>
                    <p>
                      <Rings />
                    </p>
                  </div>
                )}
                {gameResult &&
                  playerChoice &&
                  !(gameResult === "Opponent is choosing...") && (
                    <div className="winner flex items-start gap-2 justify-center sm:justify-center text-success-300 text-4xl">
                      <div>Result : </div>
                      <p>{gameResult}</p>
                    </div>
                  )}
              </div>
              <div className="footer">
                <div className="footer home flex pl-32 visible sm:hidden">
                  @PORTFUN
                </div>
              </div>
            </div>
          </div>
          <footer className="footer">
            <div className="footer">
              <div className="footer home hidden sm:flex">
                @portfunio - All rights reserved - since 2024
              </div>
            </div>
          </footer>
        </div>
      ) : (
        <GameResult setShowGame={handleShowGame} result={gameResult} />
      )}
    </>
  );
};
export default calculateRockPaperScissors;

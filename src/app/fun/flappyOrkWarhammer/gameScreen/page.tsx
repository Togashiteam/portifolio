"use client";

import React, { useState, useEffect, useRef } from "react";
import { GameProps } from "../page";
import obstacleImg from "../img/w-pipe.png";
import backgroundImage from "../img/war-game-background.png";
import player from "../img/shoota.gif";
import ground from "../img/ground-bg.png";

const GameScreen: React.FC<GameProps> = (gameObject: GameProps) => {
  const [birdPosition, setBirdPosition] = useState(150);
  const [obstacles, setObstacles] = useState<
    { top: number; bottom: number; left: number }[]
  >([]);
  const [score, setScore] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);
  const gameAreaRef = useRef<HTMLDivElement>(null);
  const gravity = 3;
  const jumpHeight = 50;
  const obstacleSpeed = 600;
  const gap = 200;
  const obstacleRespawnTime = 200000;

  useEffect(() => {
    const gameLoop = setInterval(() => {
      setBirdPosition((prev) => Math.max(0, prev - gravity));

      for (let i = obstacles.length - 1; i >= 0; i--) {
        const obstacle = obstacles[i];
        obstacle.left -= obstacleSpeed;
        if (obstacle.left + 50 < 0) {
          obstacles.splice(i, 1);
        }
      }
    }, 20);

    const bottomStart = Math.floor(Math.random() * 0 - 200 + 200 + 200);
    setObstacles(() => [
      {
        top: 300 + gap,
        bottom: bottomStart,
        left: 500,
      },
    ]);

    const obstacleInterval = setInterval(() => {
      setObstacles((prev) => [
        ...prev,
        {
          top: Math.random() * 200,
          bottom: Math.random() * 200,
          left: 500,
        },
      ]);
    }, obstacleRespawnTime);

    return () => {
      clearInterval(gameLoop);
      clearInterval(obstacleInterval);
    };
  }, []);

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.code === "Space") {
        setBirdPosition((prev) => prev + jumpHeight);
        setScore((prev) => prev + 10);
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, []);

  useEffect(() => {
    const checkCollision = () => {
      const birdRect = {
        top: birdPosition,
        bottom: birdPosition + 50,
        left: 50,
        right: 100,
      };

      for (const obstacle of obstacles) {
        const obstacleRect = {
          top: obstacle.top,
          bottom: obstacle.bottom,
          left: obstacle.left,
          right: obstacle.left + 50,
        };

        if (
          birdRect.bottom > obstacleRect.top &&
          birdRect.top < obstacleRect.bottom &&
          birdRect.right > obstacleRect.left &&
          birdRect.left < obstacleRect.right
        ) {
          setIsGameOver(true);
          gameObject.endGame(score);
        }
      }
    };

    if (!isGameOver) {
      checkCollision();
    }
  }, [
    birdPosition,
    obstacles,
    isGameOver,
    gameObject.score,
    gameObject.endGame,
  ]);

  return (
    <div
      ref={gameAreaRef}
      style={{
        backgroundImage: `url(${backgroundImage.src})`,
        position: "absolute",
        top: "0",
        bottom: "0",
        left: "0",
        right: "0",
      }}
      className="background bg-blue-200 overflow-hidden"
    >
      <div
        className="player absolute w-10 h-10 bg-yellow-400 rounded-full"
        style={{
          bottom: birdPosition,
          left: 50,
          backgroundImage: `url(${player.src})`,
          width: "183px",
          height: "172px",
        }}
      ></div>
      {obstacles.map((obstacle, index) => (
        <React.Fragment key={index}>
          <div
            className="obstacle-top "
            style={{
              bottom: 300 + gap + "px",
              left: obstacle.left + "px",
              backgroundImage: `url(${obstacleImg.src})`,
              width: "120px",
              height: "300px",
              position: "absolute",
            }}
          ></div>
          <div
            className="obstable-bottom "
            style={{
              bottom: "0px",
              left: obstacle.left,
              backgroundImage: `url(${obstacleImg.src})`,
              width: "120px",
              height: "300px",
              position: "absolute",
              transform: "rotate(180deg)",
            }}
          ></div>
        </React.Fragment>
      ))}
      <div className="absolute top-4 right-4 text-2xl font-bold text-white">
        Pontos: {score}
      </div>
      <div
        className="ground absolute bottom-0 w-full h-20 bg-green-500"
        style={{
          backgroundImage: `url(${ground.src})`,
          position: "absolute",
          bottom: "0px",
          animation: "slideright 100s infinite linear",
          width: "2800px",
        }}
      ></div>
    </div>
  );
};

export default GameScreen;

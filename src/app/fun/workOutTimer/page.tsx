"use client";
import React, { useEffect, useRef, useState } from "react";
import Header from "./Header";
import Modal from "./Modal";
import Controls from "./Controls";
import TimerDisplay from "./TimeDisplay";
import AudioPlayer from "./audioControl";
import { FaRunning } from "react-icons/fa";
import { IoPlay } from "react-icons/io5";

const CalculateWorkOutTimer: React.FC = () => {
  const [seconds, setSeconds] = useState<number>(0);
  const [minutes, setMinutes] = useState<number>(0);
  const [isActive, setIsActive] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(
    "Count up",
  );
  const countUpSoundEffect = useRef<HTMLAudioElement>(null);
  const countDownSoundEffect = useRef<HTMLAudioElement>(null);
  const [paused, setPaused] = useState(true);
  const [closeOpen, setCloseOpen] = useState(true);
  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);
  const handleClose = () => setCloseOpen(!closeOpen);
  const handleOptionSelect = (option: string) => {
    setSelectedOption(option);
    handleCloseModal();
    handleClose();
  };

  const handleTimer = () => {
    setIsActive(!isActive);
    handleCloseModal();
    if (seconds >= 59 && selectedOption == "Countdown") {
      let secToMin = Math.floor(seconds / 60);
      let extraSeconds = seconds % 60;
      const totalMin = minutes + secToMin;
      setMinutes(totalMin);
      setSeconds(extraSeconds);
    }
  };

  const handleReset = () => {
    setIsActive(false);
    setMinutes(0);
    setSeconds(selectedOption === "Countdown" ? 0 : -3);
  };

  const handlePause = () => {
    setIsActive(false);
    setPaused(false);
  };

  useEffect(() => {
    const setInitialTimeBasedOnOption = () => {
      setMinutes(0);
      setSeconds(selectedOption === "Count up" ? -3 : 0);
    };
    setInitialTimeBasedOnOption();
  }, [selectedOption]);

  useEffect(() => {
    if (isActive) {
      const interval = setInterval(() => {
        setSeconds((prevSeconds: number) => {
          if (selectedOption === "Countdown") {
            if (prevSeconds === 0) {
              if (minutes === 0) {
                clearInterval(interval);
                setIsActive(false);
                return 0;
              } else {
                setMinutes((prevMinutes) => prevMinutes - 0.5);
                return 59;
              }
            } else {
              return prevSeconds - 1;
            }
          } else {
            if (prevSeconds == 59) {
              setMinutes((prevMinutes) => prevMinutes + 0.5);
              return 0;
            } else {
              return prevSeconds + 1;
            }
          }
        });
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [isActive, selectedOption, minutes, seconds]);

  useEffect(() => {
    if (seconds === -3 && isActive && selectedOption === "Count up") {
      countUpSoundEffect.current?.play();
    } else if (!isActive) {
      countUpSoundEffect.current?.pause();
    }
    if (
      selectedOption === "Countdown" &&
      (seconds === 3 || seconds === 2 || seconds === 1) &&
      isActive
    ) {
      countDownSoundEffect.current?.play();
    }
  }, [seconds, isActive, selectedOption]);

  return (
    <>
      <div className="wrapper max-w-screen h-screen flex flex-col">
        <Header />
        <div className="content-counter sm:flex flex-col-reverse flex-wrap items-center bg-primary-400 content-counter grow justify-center">
          <div className="content">
            {!isActive &&
              seconds === 0 &&
              minutes === 0 &&
              selectedOption === "Countdown" && (
                <div className="flex place-content-center font-semibold text-success-300 text-2xl">
                  Please, add time for the countdown.
                </div>
              )}
            {!isActive && (
              <div className="flex place-content-center font-semibold text-success-300 text-5xl">
                Let's work out!
                <FaRunning />
              </div>
            )}
            <br />
            <div>
              <div className="item-wrapper justify-center">
                <Modal
                  isModalOpen={isModalOpen}
                  handleOptionSelect={handleOptionSelect}
                  handleCloseModal={handleCloseModal}
                  closeOpen={closeOpen}
                  handleClose={handleClose}
                  selectedOption={selectedOption}
                  setMinutes={setMinutes}
                  setSeconds={setSeconds}
                />
              </div>
              <div>
                <Controls
                  handlePause={handlePause}
                  handleReset={handleReset}
                  handleOpenModal={handleOpenModal}
                  isActive={isActive}
                  isModalOpen={isModalOpen}
                  handleCloseModal={handleCloseModal}
                />
              </div>
              <div>
                <TimerDisplay
                  minutes={minutes}
                  seconds={seconds}
                  isActive={isActive}
                  selectedOption={selectedOption}
                />
              </div>
            </div>

            <div className="winner flex justify-center sm:justify-center text-success-300 text-4xl">
              {!isActive && (
                <button
                  className="w-84 h-14 p-1 m-3 flex-auto rounded-lg border border-dark-700 transition ease-in-out delay-150 bg-success-700 hover:bg-success-400 duration-300 text-light-300"
                  onClick={handleTimer}
                  disabled={isActive}
                >
                  <div className="flex justify-center">
                    PLAY! <IoPlay />
                  </div>
                </button>
              )}
            </div>
            <div className="footer">
              <div className="footer home flex pl-32 visible sm:hidden">
                @PORTFUN
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="footer">
        <div className="footer home hidden sm:flex">
          @portfunio - All rights reserved - since 2024
        </div>
      </footer>
      <AudioPlayer
        countUpSoundEffect={countUpSoundEffect}
        countDownSoundEffect={countDownSoundEffect}
      />
    </>
  );
};

export default CalculateWorkOutTimer;

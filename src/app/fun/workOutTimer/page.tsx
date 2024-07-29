"use client";
import React, { useEffect, useRef, useState } from "react";
import Header from "./Header";
import Modal from "./Modal";
import Controls from "./Controls";
import TimerDisplay from "./TimeDisplay";
import AudioPlayer from "./audioControl";
import { FaRunning } from "react-icons/fa";
import { IoPlay } from "react-icons/io5";
import { TbHandStop } from "react-icons/tb";

const CalculateWorkOutTimer: React.FC = () => {
  const [seconds, setSeconds] = useState<number>(-3);
  const [minutes, setMinutes] = useState<number>(0);
  const [isActive, setIsActive] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(
    "Count up",
  );
  const countUpSoundEffect = useRef<HTMLAudioElement>(null);
  const countDownSoundEffect = useRef<HTMLAudioElement>(null);
  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);
  const [closeOpen, setCloseOpen] = useState(true);

  const handleClose = () => {
    setCloseOpen(false);
  };
  const handleOptionSelect = (option: string) => {
    setSelectedOption(option);
    handleCloseModal();
    setIsModalOpen(true);
    handleClose();
  };

  const handleTimer = () => {
    setIsActive(!isActive);
    handleCloseModal();
    if (seconds >= 59 && selectedOption == "Countdown") {
      let secToMin = Math.floor(seconds / 60);
      let extraSeconds = seconds % 60;
      secToMin = secToMin < 10 ? 0 + secToMin : secToMin;
      extraSeconds = extraSeconds < 10 ? extraSeconds : extraSeconds;
      const totalMin = minutes + secToMin;
      setMinutes(totalMin);
      return setSeconds(extraSeconds), setMinutes(totalMin);
    }
  };

  const handleReset = () => {
    if (selectedOption == "Countdown") {
      console.log("countdown active");
      setIsActive(false);
      setMinutes(0);
      setSeconds(0);
    } else if (selectedOption == "Count up") {
      console.log("Count up active");
      setIsActive(false);
      setMinutes(0);
      setSeconds(-3);
    }
  };
  const handlePause = () => {
    setIsActive(false);
  };

  useEffect(() => {
    //selection
    const setInitialTimeBasedOnOption = () => {
      if (selectedOption == "Countdown") {
        setMinutes(0);
        setSeconds(0);
        handleClose();
        return { seconds, minutes };
      }
      if (selectedOption == "Count up") {
        setMinutes(0);
        setSeconds(-3);
        handleReset();

        return { seconds, minutes };
      }
    };
    setInitialTimeBasedOnOption();
  }, [selectedOption]);

  React.useEffect(() => {
    //countdown
    if (isActive && selectedOption === "Countdown") {
      const interval = setInterval(() => {
        setSeconds((prevSeconds: number) => {
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
        });
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [isActive, selectedOption, minutes, seconds]);

  React.useEffect(() => {
    //count up
    if (isActive && selectedOption == "Count up") {
      const interval = setInterval(() => {
        setSeconds((prevSeconds: number) => {
          if (prevSeconds == 59) {
            prevSeconds = 0;
            setMinutes((prevMinutes: number) => {
              return (prevMinutes += 0.5);
            });
            return 0;
          }
          {
            return (prevSeconds += 1);
          }
        });
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [isActive]);

  useEffect(() => {
    //sound effects
    if (seconds == -3 && isActive && selectedOption == "Count up") {
      countUpSoundEffect.current?.play();
    }
    if (!isActive) {
      countUpSoundEffect.current?.pause();
    }
    if (
      selectedOption == "Countdown" &&
      (seconds == 3 || seconds == 2 || seconds == 1) &&
      isActive
    ) {
      countDownSoundEffect.current?.play();
    }
  }, [seconds, isActive]);

  return (
    <>
      <div className="wrapper max-w-screen h-screen flex flex-col">
        <Header />

        <div className="item-wrapper bg-primary-400">
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
        <div className="content-counter flex  items-center bg-primary-400 content-counter grow justify-center w-full">
          <div className="content ">
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

            <div className="Modal-Controler ">
              <div className="winner flex justify-center text-success-300 text-4xl">
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
                {isActive && (
                  <button
                    className="w-84 h-14 p-1 m-3 flex-auto rounded-lg border border-dark-700 transition ease-in-out delay-150 bg-success-700 hover:bg-success-400 duration-300 text-light-300"
                    onClick={handlePause}
                    disabled={!isActive}
                  >
                    <div className="flex justify-center">
                      Pause <TbHandStop />
                    </div>
                  </button>
                )}
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
          </div>
        </div>
      </div>

      <footer>
        <div className="footer">
          <div className="footer home flex pl-32 visible sm:hidden">
            @PORTFUN
          </div>
        </div>

        <div className="footer home hidden sm:flex">
          @portfunio - All rights reserved - since 2024
        </div>
        <AudioPlayer
          countUpSoundEffect={countUpSoundEffect}
          countDownSoundEffect={countDownSoundEffect}
        />
      </footer>
    </>
  );
};

export default CalculateWorkOutTimer;

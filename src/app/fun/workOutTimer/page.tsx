"use client";
import React, { useState, useEffect, useRef } from "react";
import { SlOptions } from "react-icons/sl";
import { MdOutlineHourglassTop } from "react-icons/md";
import { TbHandStop } from "react-icons/tb";
import { FaRunning } from "react-icons/fa";
import { IoPlay } from "react-icons/io5";
import TimerHandler from "../workOutTimer/TimeHandler";

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
  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);
  const [paused, setPaused] = useState(true);
  const [closeOpen, setCloseOpen] = useState(true);

  const handleClose = () => {
    setCloseOpen(!closeOpen);
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
    console.log("isActive", seconds);
    if (seconds >= 59 && selectedOption == "Countdown") {
      let secToMin = Math.floor(seconds / 60);
      let extraSeconds = seconds % 60;
      secToMin = secToMin < 10 ? 0 + secToMin : secToMin;
      extraSeconds = extraSeconds < 10 ? extraSeconds : extraSeconds;
      let totalMin = minutes + secToMin;
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
    setPaused(false);
  };

  const formatTime = (time: number) =>
    time < 10 && time >= 0 ? `0${time}` : time;

  useEffect(() => {
    if (seconds < 0 || minutes < 0) {
    }
  });

  useEffect(() => {
    const setInitialTimeBasedOnOption = () => {
      if (selectedOption == "Countdown") {
        console.log("countdown");
        setMinutes(0);
        setSeconds(0);
        console.log(seconds, minutes);
        return { seconds, minutes };
      }
      if (selectedOption == "Count up") {
        console.log("Count up");
        setMinutes(0);
        setSeconds(-3);
        console.log(seconds, minutes);
        return { seconds, minutes };
      }
    };
    setInitialTimeBasedOnOption();
  }, [selectedOption]);

  React.useEffect(() => {
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
    <div className="wrapper max-w-screen h-screen flex flex-col">
      <header>
        <div className="rps">
          <a href="./">
            <h2 className="text-secondary items-end flex right-96 box-border rounded-lg w-36 h-16 bg-danger-700 shadow-sm hover:shadow-danger-400">
              Home
            </h2>
          </a>
          <div className="text-secondary paper"> Work </div>
          <div className="text-spacey and"> Out </div>
          <div className="text-secondary scissors"> Timer </div>
        </div>
      </header>

      <div className="content-counter sm:flex flex-col-reverse flex-wrap items-center bg-primary-400 content-counter grow justify-center">
        <div className="content">
          {!isActive &&
            seconds == 0 &&
            minutes == 0 &&
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
          <div className="item-wrapper justify-center ">
            <div>
              <div className="grid justify-items-center">
                {isModalOpen && !isActive && (
                  <div className="modal text-danger-300 text-2xl">
                    <div className="modal-content">
                      <button onClick={() => handleOptionSelect("Count up")}>
                        Count up
                      </button>
                      <span> </span>
                      <button onClick={() => handleOptionSelect("Countdown")}>
                        Countdown
                      </button>
                      {selectedOption == "Countdown" &&
                        !isActive &&
                        closeOpen && (
                          <div>
                            <div className="input box-border">
                              <input
                                type="number"
                                placeholder="Minute"
                                min={0}
                                onChange={(e) =>
                                  setMinutes(Number(e.target.value))
                                }
                              />
                            </div>
                            <br />
                            <div className="input box-border">
                              <input
                                type="number"
                                placeholder="Seconds"
                                min={0}
                                onChange={(e) =>
                                  setSeconds(Number(e.target.value))
                                }
                              />
                            </div>
                            <br />
                          </div>
                        )}{" "}
                      <button
                        className="text-secondary flex justify-center items-center right-96 box-border rounded-full w-4 h-4 bg-danger-700 shadow-sm hover:shadow-danger-400 text-light-300 text-xl"
                        onClick={handleCloseModal}
                      >
                        x
                      </button>
                    </div>
                  </div>
                )}
              </div>

              <div className="grid justify-items-center">
                <div className="item-wrapper justify-center">
                  {!isActive && (
                    <button
                      className="action-button success flex flex-col w-24 h-24 sm:w-24 sm:h-24 space-x-4 m-4 place-content-around sm:flex-col"
                      onClick={handleOpenModal || handleCloseModal}
                    >
                      <SlOptions size={80} />
                      <div className="item-box hidden sm:flex">Option </div>
                    </button>
                  )}
                  <button
                    className="action-button success flex flex-col w-24 h-24 sm:w-24 sm:h-24 space-x-4 m-4 place-content-around sm:flex-col"
                    onClick={handlePause}
                    disabled={!isActive}
                  >
                    <TbHandStop size={80} />
                    <div className="item-box hidden sm:flex">Pause</div>
                  </button>
                  <button
                    className="action-button success flex flex-col w-24 h-24 sm:w-24 sm:h-24 space-x-4 m-4 place-content-around sm:flex-col"
                    onClick={handleReset}
                  >
                    <MdOutlineHourglassTop size={80} />
                    <div className="item-box hidden visible sm:flex place-content-end">
                      Reset
                    </div>
                  </button>
                </div>
              </div>

              <div className="points flex justify-evenly font-semibold text-success-300"></div>
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
            </div>
          </div>
          {seconds === -3 &&
            isActive &&
            selectedOption == "Count up" &&
            minutes == 0 && (
              <div className="grid justify-items-center">
                <div className="item-wrapper">
                  <div className="flex place-content-center font-semibold sm:w-72 h-80 text-9xl">
                    READY!
                  </div>
                </div>
              </div>
            )}
          {seconds === -2 &&
            isActive &&
            selectedOption == "Count up" &&
            minutes == 0 && (
              <div className="grid justify-items-center">
                <div className="item-wrapper">
                  <div className="flex place-content-center font-semibold sm:w-72 h-80 text-9xl">
                    SET!
                  </div>
                </div>
              </div>
            )}
          {seconds === -1 &&
            isActive &&
            selectedOption == "Count up" &&
            minutes == 0 && (
              <div className="grid justify-items-center">
                <div className="item-wrapper">
                  <div className="flex place-content-center font-semibold sm:w-72 h-80 text-9xl">
                    GO!
                  </div>
                </div>
              </div>
            )}
          {seconds >= 0 && isActive && selectedOption == "Count up" && (
            <div className="grid justify-items-center">
              <div className="item-wrapper">
                <div className="flex place-content-center font-semibold sm:w-72 h-80 text-9xl">
                  {formatTime(minutes)}:{formatTime(seconds)}
                </div>
              </div>
            </div>
          )}
          {isActive && selectedOption == "Countdown" && (
            <div className="grid justify-items-center">
              <div className="item-wrapper">
                <div className="flex place-content-center font-semibold sm:w-72 h-80 text-9xl">
                  {formatTime(minutes)}:{formatTime(seconds)}
                </div>
              </div>
            </div>
          )}

          {seconds > 0 && !isActive && minutes >= 0 && paused === false && (
            <div className="grid justify-items-center">
              <div className="item-wrapper">
                <div className="flex place-content-center font-semibold sm:w-72 h-80 text-9xl">
                  PAUSE!
                </div>
              </div>
            </div>
          )}
          {!isActive &&
            minutes === 0 &&
            seconds <= 0 &&
            selectedOption == "Count up" && (
              <div className="grid justify-items-center">
                <div className="item-wrapper">
                  <div className="flex sm:flex md:hidden lg:hidden place-content-center font-semibold w-72 h-80 text-9xl ">
                    00:00
                  </div>
                  <div
                    className="hidden sm:hidden md:flex lg:flex place-content-center font-semibold w-72 h-80 text-9xl"
                    style={{ fontSize: "18rem" }}
                  >
                    00:00
                  </div>
                </div>
              </div>
            )}
          {selectedOption == "Countdown" &&
            !isActive &&
            seconds >= 0 &&
            minutes >= 0 && (
              <div className="grid justify-items-center">
                <div className="item-wrapper">
                  <div className="flex place-content-center font-semibold sm:w-72 h-80 text-9xl">
                    {formatTime(minutes)}:{formatTime(seconds)}
                  </div>
                </div>
              </div>
            )}

          <div className="footer">
            <div className="footer home flex pl-32 visible sm:hidden">
              @PORTFUN
            </div>
          </div>
        </div>
      </div>
      <footer className="footer">
        <div className="footer home hidden sm:flex">
          @portfunio - All rights reserved - since 2024
        </div>
      </footer>
      <audio
        ref={countUpSoundEffect}
        src="https://cdn.freesound.org/previews/451/451271_4347097-lq.mp3"
      />
      <audio
        ref={countDownSoundEffect}
        src="https://cdn.freesound.org/previews/523/523456_1646610-lq.mp3"
      ></audio>
    </div>
  );
};

export default CalculateWorkOutTimer;

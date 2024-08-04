"use client";
import { useEffect, useState } from "react";

import { Backspace } from "react-bootstrap-icons";
import Header from "../workOutTimer/Header";
import { evaluateExpressionSafely, formatInput } from "./utils";

export default function BasicCalc() {
  const MATHS = ["/", "*", "+", "-"];

  const [inputValue, setInputValue] = useState("0");
  const [buttonValue, setButtonValue] = useState("");
  const [equacao, setEquacao] = useState("");

  const createButton = (
    value: string,
    className: string,
    handleButton?: () => void,
  ) => {
    return (
      <button
        onClick={
          handleButton
            ? handleButton
            : (e) => {
                if (e.currentTarget.textContent) {
                  buttonValue === "="
                    ? updateValues(e.currentTarget.textContent)
                    : setButtonValue(e.currentTarget.textContent);
                }
              }
        }
        key={value}
        className={className}
      >
        {value === "backspace" ? <Backspace /> : value}
      </button>
    );
  };

  const renderGridItems = () => {
    const gridValues = [
      "%",
      "/",
      "*",
      "backspace",
      "7",
      "8",
      "9",
      "-",
      "4",
      "5",
      "6",
      "+",
      "1",
      "2",
      "3",
      "=",
      "C",
      "0",
      ".",
    ];
    return gridValues.map((value) => {
      let className =
        "rounded-md py-1 border-2 border-success-700/50 flex justify-center items-center";

      switch (value) {
        case "/":
        case "*":
        case "+":
          return createButton(value, className, () => handleMaths(value));
        case "-":
          return createButton(value, className, () => handleSub(value));
        case "C":
          return createButton(value, className, () => updateValues(""));
        case "backspace":
          return createButton(value, className, () => handleBackspace());
        case "%":
          return createButton(value, className, () => handlePerc(equacao));
        case "=":
          className += " row-span-2";
          return createButton(value, className, () => handleResult(equacao));
        default:
          return createButton(value, className);
      }
    });
  };

  const handleResult = (value: string) => {
    if (buttonValue === "=") return;

    const result = evaluateExpressionSafely(value)?.toString() || "";

    updateValues(result);
    setButtonValue("=");
    return;
  };

  const handleMaths = (value: string) => {
    const lastChar = equacao[equacao.length - 1];

    if (lastChar === value) return;
    if (MATHS.includes(lastChar)) {
      return updateValues(equacao.slice(0, -1) + value);
    }
    return setButtonValue(value);
  };

  const handleSub = (value: string) => {
    const lastChar = equacao[equacao.length - 1];
    const penultChar = equacao[equacao.length - 2];

    if (lastChar === value && penultChar === "-") return;
    if (MATHS.includes(lastChar)) {
      if (penultChar !== value) return setButtonValue(value);
      return updateValues(equacao.slice(0, -1) + value);
    }
    return setButtonValue(value);
  };

  const handlePerc = (value: string) => {
    const lastChar = equacao[equacao.length - 1];
    let lastIndex = -1;

    if (buttonValue === "%" || MATHS.includes(lastChar)) return;

    for (let i = 0; i < value.length; i++) {
      if (MATHS.includes(value[i])) {
        lastIndex = i;
      }
    }

    const percent = parseInt(value.slice(lastIndex + 1)) / 100;
    setButtonValue("%");
    updateValues(equacao.slice(0, lastIndex + 1) + percent);
    return;
  };

  const handleBackspace = () => {
    updateValues(equacao.slice(0, -1));
  };

  const updateValues = (value: string) => {
    const newValue =
      value.length > 0 && value[0] === "0" ? value.slice(1) : value;
    setEquacao(newValue);
    setInputValue(newValue !== "" ? formatInput(newValue) : "0");
  };

  useEffect(() => {
    let newValue = equacao;
    console.log("🚀 ~ newValue:", newValue);
    if (buttonValue !== "" && buttonValue !== "%" && buttonValue !== "=") {
      newValue = equacao + buttonValue;
      setButtonValue("");
      updateValues(newValue);
    }
  }, [buttonValue]);

  return (
    <>
      <div className="wrapper max-w-screen h-screen flex flex-col">
        <Header />
        <div className="flex min-h-screen flex-col items-center justify-between p-24">
          <div className="bg-success-300 rounded-lg px-2 pt-2 pb-4 space-y-6">
            <div className="flex align-middle h-16 text-xl bg-success-300">
              <input
                autoFocus={true}
                readOnly={true}
                className=" px-2 text-dark-700  rounded-t-lg rounded-b-md text-right focus-visible:outline focus-visible:outline-2 focus-visible:outline-success-700"
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.currentTarget.value)}
              />
            </div>
            <div>
              <div className="text-base grid grid-cols-4 grid-rows-5 gap-4">
                {renderGridItems()}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

"use client"

import { useState } from "react";

export default function Imc() {
  const [weightImcState, setWeightImcState] = useState("");
  const [heightImcState, setHeightImcState] = useState("");
  const [resultImcState, setResultImcState] = useState("");

  const calculateIMC = (weight: string, height: string) => {
    const weightNum = parseFloat(weight.replace(",", "."));
    const heightNum = parseFloat(height.replace(",", "."));

    if (weightNum > 0 && heightNum > 0) {
      const result = weightNum / (heightNum * heightNum);
      setResultImcState(result.toFixed(2)); //Definindo o valor.
    }
  };



  return (
    <>
      <div className="wrapper w-screen h-screen flex flex-col justify-between bg-primary-400">
        <header>
          <div className="logo">
            <div className="text-secondary port"> PORT </div>
            <div className="text-secondary io"> io </div>
            <div className="text-funny fun"> Fun </div>
          </div>
        </header>
        <div className="grid justify-center ">
          <div className="flex justify-center">
            <a href="./">
              <h2 className="flex box-border justify-center items-center rounded-lg w-36 h-16 bg-danger-700 shadow-sm hover:shadow-danger-400">
                Home
              </h2>
            </a>
          </div>
          <div className="flex ">
            <div className="hidden columns-1 box-border max-w-4xl h-96 rounded-lg bg-success-300 text-primary-700 p-3 m-4 flex-col items-start gap-1 shadow-sm hover:shadow-danger-400 md:flex md:gap-5">
              <p>RESULTADO SITUAÇÃO:</p>
              <p
                className={
                  parseFloat(resultImcState) <= 17 ? "text-danger-300" : ""
                }
              >
                Abaixo de 17 Muito abaixo do peso
              </p>
              <p
                className={
                  parseFloat(resultImcState) > 17 &&
                    parseFloat(resultImcState) < 18.49
                    ? "text-danger-300"
                    : ""
                }
              >
                Entre 17 e 18,49 Abaixo do peso
              </p>
              <p
                className={
                  parseFloat(resultImcState) > 18.5 &&
                    parseFloat(resultImcState) < 24.99
                    ? "text-danger-300"
                    : ""
                }
              >
                Entre 18,5 e 24,99 Peso normal
              </p>
              <p
                className={
                  parseFloat(resultImcState) > 25 &&
                    parseFloat(resultImcState) < 29.99
                    ? "text-danger-300"
                    : ""
                }
              >
                Entre 25 e 29,99 Acima do peso
              </p>
              <p
                className={
                  parseFloat(resultImcState) > 30 &&
                    parseFloat(resultImcState) < 34.99
                    ? "text-danger-300"
                    : ""
                }
              >
                Entre 30 e 34,99 Obesidade I
              </p>
              <p
                className={
                  parseFloat(resultImcState) > 35 &&
                    parseFloat(resultImcState) < 39.99
                    ? "text-danger-300"
                    : ""
                }
              >
                Entre 35 e 39,99 Obesidade II (severa)
              </p>
              <p
                className={
                  parseFloat(resultImcState) >= 40 ? "text-danger-300" : ""
                }
              >
                Acima de 40 Obesidade III (mórbida)
              </p>
            </div>
            <div className="flex columns-1 box-border max-w-4xl h-96 rounded-lg bg-success-300 text-primary-700 p-3 m-4 flex-col items-end gap-8 shadow-sm hover:shadow-danger-400">
              <div className="grid">
                <label className="box-border" htmlFor="weight">
                  Peso (kg):{" "}
                </label>
                <input
                  autoFocus
                  className="
                  [appearance:textfield]
                  [&::-webkit-outer-spin-button]:appearance-none
                  [&::-webkit-inner-spin-button]:appearance-none
                  w-96
                  h-11
                  border
                  border-dark-700"
                  type="number"
                  id="weight"
                  value={weightImcState}
                  onChange={e => setWeightImcState(e.currentTarget.value)}
                  placeholder=" 80,500 "
                />
              </div>
              <div className="grid">
                <label htmlFor="height">Altura (cm): </label>
                <input
                  className="imc-input
                  [appearance:textfield]
                  [&::-webkit-outer-spin-button]:appearance-none
                  [&::-webkit-inner-spin-button]:appearance-none                
                  w-96 
                  h-11
                  border border-dark-400"
                  type="number"
                  id="height"
                  value={heightImcState}
                  onChange={e => setHeightImcState(e.currentTarget.value)}
                  placeholder=" 1,75"
                />
              </div>
              <button
                className="w-96 h-11 p-1 m-3 rounded-lg border border-dark-700 transition ease-in-out delay-150 bg-success-700 hover:bg-success-400 duration-300"
                onClick={() => calculateIMC(weightImcState, heightImcState)}
              >
                Calcular
              </button>
              {resultImcState && (
                <div className="flex items-start gap-2">
                  <h3>Resultado</h3>
                  <p>Seu IMC {resultImcState}</p>
                </div>
              )}
              {!resultImcState && (
                <div className="flex items-start gap-2">
                  <p>Preencha os campos acima, por favor.</p>
                </div>
              )}
            </div>
          </div>
        </div>
        <footer className="footer">
          <div className="footer">
            <div className="footer home">
              @portfunio - All rights reserved - since 2024
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}
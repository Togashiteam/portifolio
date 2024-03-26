"use client";
import React, { useState } from "react";
import { FaHandRock, FaHandPaper, FaHandScissors, FaHandLizard, FaHandSpock } from "react-icons/fa";

const calculateRockPaperScissors: React.FC = () => {
  const [playerChoice, setPlayerChoice] = useState<string>("")
  const [gameResult, setGameResult] = useState<string>("")
  const [counter, setCounter] = useState<number>(0)
  const [isSelected, setIsSelected] = useState<boolean>(false)  
  const buttonId = (e:number) =>{
  
  }

  const changeColor = () => {
    setIsSelected(!isSelected)
  
  } 

  const rpsOptions = [
    "rock",
    "scissors",
    "paper"
]
const computerChoice = Object.values(rpsOptions)[(Math.floor(Math.random()* 3))];

const handlePlayerChoice = (e:any)=>{
  if (playerChoice == computerChoice){

    return setGameResult("It's a tie!")

  } else if(playerChoice==""){

    return setGameResult("Escolha uma opção!")
  }
  else if (playerChoice == "rock" && computerChoice == "paper")
  {
    return  setGameResult("You lose!")
  }
  else if (playerChoice == "paper" && computerChoice == "rock")
  {
    return  setGameResult("You win!")
    
  }else if (playerChoice == "rock" && computerChoice == "scissors")
  {
    return  setGameResult("You win!")
    
  }else if (playerChoice == "paper" && computerChoice == "rock")
  {
    return  setGameResult("You win!")
    
  }else if (playerChoice == "rock" && computerChoice == "paper")
  {
    return setGameResult("Empate!")
  } else 
  {
  return setGameResult("Empate!")
  }
}

  return (
    <>
      <div className="wrapper w-screen h-screen"> 
        <header>
          <div className="rps">
            <a href="./">
              <h2 className="text-secondary home items-end flex right-96 box-border rounded-lg w-36 h-16 bg-danger-700 shadow-sm hover:shadow-danger-400">
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
            <div className="item-wrapper flex">
                <div className="action-button danger flex w-80 sm:w-36 h-36 space-x-4 m-4 flex-wrap place-content-around sm:flex"  onClick={() => {setPlayerChoice("paper"); changeColor();}} style={{backgroundColor:isSelected ?'#f3b85b': ''}}>
                  <div className="icon">
                      <button className="action-button paper pulse flex justify-center items-center ">
                        <FaHandPaper size={80} />
                      </button>
                  </div>
                  <div className="item-box hidden sm:flex place-content-end">
                    beates rock
                  </div>
                  <p className="mobile sm:hidden mt-1 mb-4">
                    Beats rock
                  </p>
                </div>
              <div className="item-wrapper">
              <a>
                <div className="action-button success flex w-80 sm:w-36 h-36 space-x-4 m-4 place-content-around sm:flex-col"  onClick={() => {setPlayerChoice("rock"); changeColor();}} style={{backgroundColor:isSelected ?'#f3b85b': ''}}>
                    <button className="action-button rock pulse flex justify-center items-center">
                      <FaHandRock size={80}/>
                    </button>
                  <div className="item-box hidden sm:flex place-content-end">
                    beats scissors
                  </div>
                  <p className="mobile sm:hidden mt-1 mb-4">
                    Beats scissors
                  </p>
                </div>
              </a>
              <div className="item-wrapper">
                <div className="action-button alert flex w-80 sm:w-36 h-36 space-x-4 m-4 flex-wrap place-content-around sm:flex-col" onClick={() => {setPlayerChoice("scissors"); changeColor();}} style={{backgroundColor:isSelected ?'#f3b85b': ''}}>
                    <button className="action-button scissors pulse flex justify-center items-center">
                      <FaHandScissors size={80} />
                    </button>
                  <div className="item-box hidden visible sm:flex place-content-end">
                    beats paper
                  </div>
                  <p className="mobile sm:hidden mt-1 mb-4">
                    beats paper 
                  </p>
                </div>
            </div>
            </div>
            </div>
            <div>
            <div className="winner flex justify-center sm:justify-center text-success-300 text-4xl">
              <button
                className="w-96 h-11 p-1 m-3 rounded-lg border border-dark-700 transition ease-in-out delay-150 bg-success-700 hover:bg-success-400 duration-300" onClick={()=> handlePlayerChoice("")} >
                Play
              </button> 
            </div>
            { (
                <div className="winner flex items-start gap-2 justify-center sm:justify-center text-success-300 text-4xl">
                  <p>Resultado : {gameResult}</p>
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
    </>
  );
};

export default calculateRockPaperScissors;
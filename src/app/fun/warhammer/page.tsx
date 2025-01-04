"use client";
import React, { useState } from "react";
import characters from "./characterList";

const Warhammer: React.FC = () => {
  const [selectedCharacter, setSelectedCharacter] = useState<any | null>(null);

  const handleCharacterClick = (character: any) => {
    setSelectedCharacter(character);
  };
  return (
    <>
      <div className="wrapper w-screen h-screen">
        <header>
          <div className="rps">
            <a href="./">
              <h2 className="text-secondary items-end flex right-96 box-border rounded-lg w-36 h-16 bg-danger-700 shadow-sm hover:shadow-danger-400">
                Home
              </h2>
            </a>
            <div className="text-secondary paper"> Learn</div>
            <div className="text-spacey and"> about </div>
            <div className="text-secondary scissors"> Warhammer </div>
          </div>
        </header>
        <div className="charType flex mb-2 flex-col justify-center items-start bg-danger-700">
          <h2>Factions</h2>
        </div>

        <div className="item-wrapper justify-center ">
          <div className="flex justify-items-center"></div>
        </div>
        <div className="flex flex-row-reverse justify-end">
          {/* Display selected character info */}
          {selectedCharacter && (
            <div className="character-info flex size-96 m-auto flex-col flex-wrap justify-center text-success-300">
              <h3 className="flex flex-col">
                {selectedCharacter.value} - Faction: {selectedCharacter.faction}{" "}
                <img
                  className="size-96 backdrop-brightness-50"
                  src={selectedCharacter.image}
                  alt={selectedCharacter.faction}
                />
                <p className="size-auto m-8">{selectedCharacter.description}</p>
              </h3>
            </div>
          )}
          <div className="sidebar flex">
            <ul className="cursor-pointer">
              {characters.map((character: any, index: number) => (
                <li
                  key={character.value}
                  className={`pr-2 ${index % 2 === 0 ? "bg-success-400" : "bg-success-300"}`}
                  onClick={() => handleCharacterClick(character)}
                >
                  {character.value}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Warhammer;

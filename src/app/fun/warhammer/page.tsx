"use client";
import React, { useState } from "react";
import { characters, onlyFactions } from "./characterList";
import GenerateImage from "./GenerateImage";

interface WarhammerProps {
  imageCreated: string;
}
const Warhammer: React.FC<WarhammerProps> = ({ imageCreated }) => {
  const [selectedCharacter, setSelectedCharacter] = useState<any | null>(null);
  const [charCreated, setcharCreated] = useState<boolean>(false);
  const [getCharName, SetGetCharName] = useState<string>("");
  const [getCharFaction, SetGetCharFaction] = useState<string>("");
  const [getCharDescription, SetGetCharDescription] = useState<string>("");

  const handleCharacterClick = (character: any) => {
    setSelectedCharacter(character);
    setcharCreated(false);
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    SetGetCharName(e.target.value);
  };

  const handleFactionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    SetGetCharFaction(e.target.value);
  };

  const newFaction = () => {
    const lastInfo = characters[characters.length - 1];

    return lastInfo.faction;
  };
  const newNameCreated = () => {
    const lastInfo = characters[characters.length - 1];
    return lastInfo.value;
  };

  const newDescription = () => {
    const lastInfo = characters[characters.length - 1];
    return lastInfo.description;
  };

  const newImageUrl = (image?: string) => {
    const lastInfo = characters[characters.length - 1];
    return lastInfo.image;
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setcharCreated(true);
    newFaction();
    newNameCreated();
    newDescription();

    characters.push({
      value: getCharName,
      faction: getCharFaction,
      image: newImageUrl(imageCreated),
      description: getCharDescription,
    });

    // Clear form fields after submission
    SetGetCharName("");
    SetGetCharFaction("");
    SetGetCharDescription("");
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
          <h2>Crie seu personagem</h2>
        </div>

        <div className="flex">
          <div className="option faction flex">
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

          {selectedCharacter && (
            <div className="character-info size-96 m-auto flex-wrap justify-center text-success-300">
              <h3 className="flex flex-col">
                {charCreated
                  ? `${newNameCreated()} - Faction: ${newFaction()}`
                  : `${selectedCharacter.value} - Faction: ${selectedCharacter.faction}`}
                <img
                  className="size-96 backdrop-brightness-50"
                  src={
                    charCreated
                      ? newImageUrl(imageCreated)
                      : selectedCharacter.image
                  }
                  alt={selectedCharacter.faction}
                />
                <p className="size-auto m-8">
                  {charCreated
                    ? newDescription()
                    : selectedCharacter.description}
                </p>
              </h3>
            </div>
          )}

          {!charCreated && (
            <div className="form flex m-auto flex-row-reverse flex-wrap rounded-md justify-center p-6 bg-danger-700">
              <form
                className="criarChar flex flex-col space-y-4 w-full max-w-lg p-8 rounded-md shadow-md bg-success-300"
                onSubmit={handleSubmit}
              >
                <div className="flex flex-col size-auto m-auto flex-wrap justify-center">
                  <label
                    htmlFor="name"
                    className="text-sm font-medium text-gray-700"
                  >
                    Nome do personagem
                  </label>
                  <input
                    required
                    id="name"
                    type="text"
                    placeholder="Nome do personagem"
                    value={getCharName} // Associando o valor do campo ao estado
                    onChange={handleNameChange} // Atualizando o estado conforme o usuário digita
                    className="mt-1 p-3 border rounded-md "
                  />
                </div>

                <div className="flex flex-col">
                  <label
                    htmlFor="faction"
                    className="text-sm font-medium text-gray-700"
                  >
                    Nome da facção
                  </label>
                  <select value={getCharFaction} onChange={handleFactionChange}>
                    {onlyFactions.map((faction: string) => (
                      <option key={faction} value={faction}>
                        {faction}
                      </option>
                    ))}
                  </select>
                </div>
                <GenerateImage
                  factionProps={getCharFaction}
                  promptProps={getCharDescription}
                  nameProps={getCharName}
                />
              </form>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Warhammer;

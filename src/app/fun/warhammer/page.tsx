"use client";
import React, { useState } from "react";
import characters from "./characterList";

const Warhammer: React.FC = () => {
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

  const handleFactionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    SetGetCharFaction(e.target.value);
  };

  const handleDescriptionChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    SetGetCharDescription(e.target.value);
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

  const newImageUrl = () => {
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
      image: "",
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

          {/* Display selected character info */}
          {selectedCharacter && (
            <div className="character-info size-96 m-auto flex-wrap justify-center text-success-300">
              <h3 className="flex flex-col">
                {charCreated
                  ? `${newNameCreated()} - Faction: ${newFaction()}`
                  : `${selectedCharacter.value} - Faction: ${selectedCharacter.faction}`}
                <img
                  className="size-96 backdrop-brightness-50"
                  src={charCreated ? newImageUrl() : selectedCharacter.image}
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

          {/* Character form */}
          {!charCreated && (
            <div className="form flex m-auto flex-row-reverse flex-wrap justify-center p-6">
              <form
                className="criarChar flex flex-col space-y-4 w-full max-w-lg bg-white p-8 rounded-lg shadow-md"
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
                    id="name"
                    type="text"
                    placeholder="Nome do personagem"
                    value={getCharName} // Associando o valor do campo ao estado
                    onChange={handleNameChange} // Atualizando o estado conforme o usuário digita
                    className="mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div className="flex flex-col">
                  <label
                    htmlFor="faction"
                    className="text-sm font-medium text-gray-700"
                  >
                    Nome da facção
                  </label>
                  <input
                    id="faction"
                    type="text"
                    placeholder="Nome da facção"
                    value={getCharFaction} // Associando o valor do campo ao estado
                    onChange={handleFactionChange} // Atualizando o estado conforme o usuário digita
                    className="mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div className="flex flex-col">
                  <label
                    htmlFor="description"
                    className="text-sm font-medium text-gray-700"
                  >
                    Descreva o personagem
                  </label>
                  <textarea
                    id="description"
                    placeholder="Descreva o personagem"
                    value={getCharDescription} // Associando o valor do campo ao estado
                    onChange={handleDescriptionChange} // Atualizando o estado conforme o usuário digita
                    className="mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 h-32 resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 mt-4 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                >
                  Criar Personagem
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Warhammer;

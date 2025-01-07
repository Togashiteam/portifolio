"use client";
import React, { useState } from "react";
import characters from "../warhammer/characterList";

export const CharacterForm: React.FC = () => {
  const [getCharName, SetGetCharName] = useState<string>("");
  const [getCharFaction, SetGetCharFaction] = useState<string>("");
  const [getCharDescription, SetGetCharDescription] = useState<string>("");
  const [createImgWithIA, setCreateImgWithIA] = useState<boolean>(false);

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

  var handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Evita o comportamento padrão de recarregar a página ao enviar o formulário

    characters.push({
      value: getCharName,
      faction: getCharFaction,
      image: "",
      description: getCharDescription,
    });
    /*
    SetGetCharName("");
    SetGetCharFaction("");
    SetGetCharDescription("");
    setCreateImgWithIA(false);*/
  };

  return (
    <div className="form flex m-auto flex-row-reverse flex-wrap justify-center p-6">
      <form
        className="criarChar flex flex-col space-y-4 w-full max-w-lg bg-white p-8 rounded-lg shadow-md"
        onSubmit={handleSubmit} // Vinculando a função handleSubmit ao envio do formulário
      >
        <div className="flex flex-col size-auto m-auto flex-wrap justify-center">
          <label htmlFor="name" className="text-sm font-medium text-gray-700">
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
  );
};

export default CharacterForm;

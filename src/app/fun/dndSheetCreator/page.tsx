"use client";

import { useState } from "react";
import Head from "next/head";
import Recursos from "./Components/Recursos";
import CharClasses from "./Components/Classes";

export default function dndCharSheet() {

  const [character, setCharacter] = useState<IDnDSheet>({
    name: "",
    class: "",
    race: "",
    level: 0,
    stats: {
      strength: 10,
      dexterity: 10,
      constitution: 10,
      intelligence: 10,
      wisdom: 10,
      charisma: 10,
    },
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCharacter((prev) => ({ ...prev, [name]: value }));
  };

  const handleStatChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCharacter((prev) => ({
      ...prev,
      stats: { ...prev.stats, [name]: parseInt(value) || 0 },
    }));
  };

  return (
    <>
      <div className=" h-screen">
        <div className="formulario bg-white p-5 overflow-x-clip">
          <div className="min-h-screen bg-gray-900 text-gray-200 flex flex-col items-center py-8">
            <Head>
              <title>DnD 5e Character Sheet</title>
              <meta
                name="description"
                content="Generate and view your DnD 5e character sheet"
              />
              <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="w-full max-w-4xl flex flex-col items-center space-y-8">
              <h1 className="text-4xl font-bold text-yellow-500">
                DnD 5e Character Sheet
              </h1>

              <Recursos />
              <CharClasses />

              <div className="bg-gray-800 p-6 rounded-lg shadow-md w-full space-y-4">
                <h2 className="text-2xl font-semibold">
                  Character Information
                </h2>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={character.name}
                  onChange={handleInputChange}
                  className="w-full p-2 rounded bg-gray-700 text-gray-200 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
                <input
                  type="text"
                  name="class"
                  placeholder="Class"
                  value={character.class}
                  onChange={handleInputChange}
                  className="w-full p-2 rounded bg-gray-700 text-gray-200 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
                <input
                  type="text"
                  name="race"
                  placeholder="Race"
                  value={character.race}
                  onChange={handleInputChange}
                  className="w-full p-2 rounded bg-gray-700 text-gray-200 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
                <input
                  type="number"
                  name="level"
                  placeholder="Level"
                  value={character.level}
                  onChange={handleInputChange}
                  className="w-full p-2 rounded bg-gray-700 text-gray-200 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
              </div>

              <div className="bg-gray-800 p-6 rounded-lg shadow-md w-full space-y-4">
                <h2 className="text-2xl font-semibold">Stats</h2>
                {Object.entries(character.stats).map(([stat, value]) => (
                  <div key={stat} className="flex items-center justify-between">
                    <label htmlFor={stat} className="capitalize font-medium">
                      {stat}
                    </label>
                    <input
                      type="number"
                      id={stat}
                      name={stat}
                      value={value}
                      onChange={handleStatChange}
                      className="w-24 p-2 rounded bg-gray-700 text-gray-200 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    />
                  </div>
                ))}
              </div>

              <div className="bg-gray-800 p-6 rounded-lg shadow-md w-full space-y-4">
                <h2 className="text-2xl font-semibold">Character Summary</h2>
                <p>
                  <strong>Name:</strong> {character.name}
                </p>
                <p>
                  <strong>Class:</strong> {character.class}
                </p>
                <p>
                  <strong>Race:</strong> {character.race}
                </p>
                <p>
                  <strong>Level:</strong> {character.level}
                </p>
                <h3 className="text-xl font-semibold">Stats</h3>
                <ul className="list-disc list-inside">
                  {Object.entries(character.stats).map(([stat, value]) => (
                    <li key={stat}>
                      {stat.charAt(0).toUpperCase() + stat.slice(1)}: {value}
                    </li>
                  ))}
                </ul>
              </div>
            </main>

            <footer className="mt-8 text-sm text-gray-500">
              <h1> EM CONSTRUÇÃO </h1>
            </footer>
          </div>
        </div>
      </div>
    </>
  );
}

interface IDnDSheet {
  name: string;
  class: string;
  race: string;
  level: number;
  stats: IStatus;
}

interface IStatus {
  strength: number;
  dexterity: number;
  constitution: number;
  intelligence: number;
  wisdom: number;
  charisma: number;
}

"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import { CaretDownFill } from "react-bootstrap-icons";
import { AbilityScores, Class, Race } from "../models/Character";

const CharacterBuilder = () => {
  const [races, setRaces] = useState<Race[]>([]);
  const [classes, setClasses] = useState<Class[]>([]);
  const [selectedRace, setSelectedRace] = useState<string>("");
  const [selectedClass, setSelectedClass] = useState<string>("");
  const [character, setCharacter] = useState<{
    race?: Race;
    class?: Class;
    abilities?: AbilityScores;
  }>({});
  const [isLoading, setIsLoading] = useState(false);

  // Buscar raças
  useEffect(() => {
    axios
      .get<{ results: Race[] }>("https://www.dnd5eapi.co/api/races")
      .then((response) => setRaces(response.data.results))
      .catch((error) => console.error(error));
  }, []);

  // Buscar classes
  useEffect(() => {
    axios
      .get<{ results: Class[] }>("https://www.dnd5eapi.co/api/classes")
      .then((response) => setClasses(response.data.results))
      .catch((error) => console.error(error));
  }, []);

  // Buscar detalhes quando selecionar raça/classe
  useEffect(() => {
    const fetchDetails = async () => {
      if (selectedRace && selectedClass) {
        setIsLoading(true);
        try {
          const [raceRes, classRes] = await Promise.all([
            axios.get<Race>(`https://www.dnd5eapi.co${selectedRace}`),
            axios.get<Class>(`https://www.dnd5eapi.co${selectedClass}`),
          ]);

          setCharacter({
            race: raceRes.data,
            class: classRes.data,
            abilities: calculateAbilities(raceRes.data),
          });
        } catch (error) {
          console.error(error);
        } finally {
          setIsLoading(false);
        }
      }
    };

    fetchDetails();
  }, [selectedRace, selectedClass]);

  function getRandomNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const calculateAbilities = (raceData: Race): AbilityScores => {
    const baseScores: AbilityScores = {
      strength: getRandomNumber(6, 18),
      dexterity: getRandomNumber(6, 18),
      constitution: getRandomNumber(6, 18),
      intelligence: getRandomNumber(6, 18),
      wisdom: getRandomNumber(6, 18),
      charisma: getRandomNumber(6, 18),
    };

    raceData.ability_bonuses?.forEach((bonus) => {
      const ability = bonus.ability_score.index.split(
        "-",
      )[0] as keyof AbilityScores;
      baseScores[ability] += bonus.bonus;
    });

    return baseScores;
  };

  const calculateModifier = (score: number): number => {
    return Math.floor((score - 10) / 2);
  };

  return (
    <div className="container mx-auto p-6 animate__animated animate__fadeIn dnd-sheet">
      <h1 className="text-4xl font-bold mb-8 text-center text-purple-600">
        🧙♂️ Construtor de Personagem D&D 5e
      </h1>

      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="relative flex-1">
          <select
            value={selectedRace}
            onChange={(e) => setSelectedRace(e.target.value)}
            className="w-full p-3 rounded-lg border-2 border-purple-300 bg-white appearance-none dnd-select"
          >
            <option value="">Selecione uma Raça</option>
            {races.map((race) => (
              <option key={race.index} value={race.url}>
                {race.name}
              </option>
            ))}
          </select>
          <CaretDownFill className="absolute right-3 top-4 text-purple-500 pointer-events-none" />
        </div>

        <div className="relative flex-1">
          <select
            value={selectedClass}
            onChange={(e) => setSelectedClass(e.target.value)}
            className="w-full p-3 rounded-lg border-2 border-purple-300 bg-white appearance-none dnd-select"
          >
            <option value="">Selecione uma Classe</option>
            {classes.map((cls) => (
              <option key={cls.index} value={cls.url}>
                {cls.name}
              </option>
            ))}
          </select>
          <CaretDownFill className="absolute right-3 top-4 text-purple-500 pointer-events-none" />
        </div>
      </div>

      {isLoading && (
        <div className="text-center py-8">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-500 mx-auto"></div>
        </div>
      )}

      {character.race && character.class && !isLoading && (
        <div className="bg-white rounded-xl shadow-lg p-6 animate__animated animate__slideInUp dnd-card">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Seção Raça */}
            <div className="border-l-4 border-purple-500 pl-4 dnd-section">
              <h2 className="text-2xl font-bold text-purple-600 mb-3">
                {character.race.name}
              </h2>
              <div className="space-y-2">
                <p className="flex justify-between">
                  <span className="font-semibold">Alinhamento:</span>
                  <span>{character.race.alignment || "N/A"}</span>
                </p>
                <p className="flex justify-between">
                  <span className="font-semibold">Idade:</span>
                  <span>{character.race.age || "N/A"}</span>
                </p>
              </div>
            </div>

            {/* Seção Classe */}
            <div className="border-l-4 border-blue-500 pl-4 dnd-section">
              <h2 className="text-2xl font-bold text-blue-600 mb-3">
                {character.class.name}
              </h2>
              <div className="space-y-2">
                <p className="flex justify-between">
                  <span className="font-semibold">Dado de Vida:</span>
                  <span>d{character.class.hit_die}</span>
                </p>
              </div>
            </div>
          </div>

          {/* Atributos */}
          <div className="mt-8">
            <h3 className="text-xl font-bold mb-4 text-gray-700">Atributos</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {character.abilities &&
                Object.entries(character.abilities).map(([key, value]) => (
                  <div
                    key={key}
                    className="bg-gray-50 p-4 rounded-lg text-center dnd-attribute"
                  >
                    <div className="text-sm font-semibold text-gray-500 uppercase mb-1">
                      {key}
                    </div>
                    <div className="text-3xl font-bold text-purple-600">
                      {value}
                      <span className="ml-2 text-sm text-blue-500">
                        ({calculateModifier(value)})
                      </span>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CharacterBuilder;

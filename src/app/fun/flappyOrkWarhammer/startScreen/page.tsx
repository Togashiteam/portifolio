import React from "react";

interface StartScreenProps {
  onStart: () => void;
}

const StartScreen: React.FC<StartScreenProps> = ({ onStart }) => {
  return (
    <div className="text-center">
      <h1 className="text-6xl font-bold text-white mb-8">Jogo do Pássaro</h1>
      <button
        onClick={onStart}
        className="bg-green-500 text-white px-8 py-4 rounded-lg text-2xl hover:bg-green-600 transition-colors"
      >
        Começar Jogo
      </button>
    </div>
  );
};

export default StartScreen;

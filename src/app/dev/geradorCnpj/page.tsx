"use client";

import CNPJHandler from "@/shared/model/cnpj.model";
import React, { useState } from "react";

type Filial = {
  id: number;
  cnpj: string;
  isValid: boolean | null;
};

const GeradorCNPJ: React.FC = () => {
  const [cnpj, setCnpj] = useState<string>("");
  const [isCnpjValid, setIsCnpjValid] = useState<boolean | null>(null);
  const [filiais, setFiliais] = useState<Filial[]>([]);
  const [numFiliais, setNumFiliais] = useState<number>(1);

  const handler: CNPJHandler = new CNPJHandler();

  const gerarCNPJ = () => {
    const novoCnpj = handler.generateCNPJ();
    setCnpj(novoCnpj);
    setIsCnpjValid(null);
    setFiliais([]);
  };

  const validarCNPJ = (cnpjParaValidar: string): boolean => {
    if (!cnpjParaValidar)
      return false;
    else
      return handler.validateCNPJ(cnpjParaValidar);
  };

  const gerarFiliais = (quantidade: number) => {
    if (isCnpjValid) {
      const filiaisCnpjs = handler.generateFiliais(cnpj, quantidade);
      const novasFiliais = filiaisCnpjs.map((cnpjFilial, index) => ({
        id: index + 1,
        cnpj: cnpjFilial,
        isValid: null,
      }));
      setFiliais(novasFiliais); // Sobrescrever as filiais
    }
  };

  const atualizarFilialCNPJ = (id: number, novoCnpj: string) => {
    setFiliais((prev) =>
      prev.map((filial) =>
        filial.id === id
          ? { ...filial, cnpj: novoCnpj, isValid: null }
          : filial,
      ),
    );
  };

  const validarFilial = (id: number, cnpjFilial: string) => {
    const isValid = validarCNPJ(cnpjFilial);
    setFiliais((prev) =>
      prev.map((filial) =>
        filial.id === id ? { ...filial, isValid } : filial,
      ),
    );
  };

  return (
    <div className="p-6 font-sans">
      <h1 className="text-2xl font-bold mb-4 color-light">Gerador de CNPJ</h1>

      <div class="formulario bg-white p-5 overflow-x-clip">
        {/* Gerar CNPJ Principal */}
        <div className="mb-4">
          <input
            type="text"
            value={cnpj}
            onChange={(e) => {
              setCnpj(e.target.value);
              setIsCnpjValid(null);
            }}
            placeholder="Digite ou gere um CNPJ"
            className="p-2 border border-gray-300 rounded w-full max-w-md text-center mb-2"
          />
          <div className="flex gap-2">
            <button
              onClick={gerarCNPJ}
              className="px-4 py-2 btn-primary rounded"
            >
              Gerar CNPJ
            </button>
            <button
              onClick={() => setIsCnpjValid(validarCNPJ(cnpj))}
              className="px-4 py-2 btn-primary rounded"
            >
              Validar CNPJ
            </button>
            {isCnpjValid !== null && (
              <span
                className={`font-bold ${
                  isCnpjValid ? "text-green-500" : "text-red-500"
                }`}
              >
                {isCnpjValid ? "Válido" : "Inválido"}
              </span>
            )}
          </div>
        </div>

        {/* Gerar Filiais */}
        <div className="mb-4">
          <input
            type="number"
            min={1}
            value={numFiliais}
            onChange={(e) => setNumFiliais(parseInt(e.target.value, 10))}
            placeholder="Quantidade de Filiais"
            className="p-2 border border-gray-300 rounded w-20 text-center mb-2"
          />
          <button
            onClick={() => gerarFiliais(numFiliais)}
            disabled={!isCnpjValid}
            className={`ml-2 px-4 py-2 rounded ${
              isCnpjValid
                ? "btn-primary"
                : "btn-disabled cursor-not-allowed"
            }`}
          >
            Gerar Filiais
          </button>
        </div>

        {/* Lista de Filiais */}
        {filiais.length > 0 && (
          <div>
            <h2 className="text-xl font-bold mb-4">Filiais</h2>
            {filiais.map((filial) => (
              <div key={filial.id} className="mb-2 flex items-center gap-2">
                <input
                  type="text"
                  value={filial.cnpj}
                  onChange={(e) =>
                    atualizarFilialCNPJ(filial.id, e.target.value)
                  }
                  className="p-2 border border-gray-300 rounded w-full max-w-md text-center"
                />
                <button
                  onClick={() => validarFilial(filial.id, filial.cnpj)}
                  className="px-4 py-2 btn-primary hover:btn-primary-light rounded"

                >
                  Validar Filial
                </button>
                {filial.isValid !== null && (
                  <span
                    className={`font-bold ${
                      filial.isValid ? "text-green-500" : "text-red-500"
                    }`}
                  >
                    {filial.isValid ? "Válido" : "Inválido"}
                  </span>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default GeradorCNPJ;

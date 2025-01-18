"use client";

import CNPJHandlerAlphaNum from "@/shared/model/cnpj-alpha-num.model";
import CNPJHandler from "@/shared/model/cnpj.model";
import React, { useState } from "react";

type Filial = {
  id: number;
  cnpj: string;
  isValid: boolean | null;
};

const GeradorCNPJ: React.FC = () => {
  const [onlyNumbers, setOnlyNumbers] = useState<boolean>(false);
  const [cnpj, setCnpj] = useState<string>("");
  const [isCnpjValid, setIsCnpjValid] = useState<boolean | null>(null);
  const [filiais, setFiliais] = useState<Filial[]>([]);
  const [numFiliais, setNumFiliais] = useState<number>(1);

  const handler: CNPJHandlerAlphaNum = new CNPJHandlerAlphaNum();
  const handlerOnlyNumbers: CNPJHandler = new CNPJHandler();

  const changeCNPJHandlers = () => {
    setIsCnpjValid(null);
    setFiliais([]);
  }

  const handleCnpjChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const novoValor = e.target.value;
    setCnpj(aplicarMascaraCNPJ(novoValor)); // Atualiza o valor com a máscara
    setIsCnpjValid(null); // Reseta o estado de validação
  };

  const aplicarMascaraCNPJ = (valor: string): string => {
    const apenasNumeros = valor.replace(/\D/g, "").slice(0, 14);
    return apenasNumeros.replace(
      /^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})$/,
      "$1.$2.$3/$4-$5",
    );
  };

  const gerarCNPJ = () => {
    const novoCnpj = onlyNumbers ? handlerOnlyNumbers.generateCNPJ() : handler.generateCNPJ();
    setCnpj(novoCnpj);
    setIsCnpjValid(null);
    setFiliais([]);
  };

  const validarCNPJ = (cnpjParaValidar: string): boolean => {
    if (!cnpjParaValidar)
      return false;
    else
      return onlyNumbers
        ? handlerOnlyNumbers.validateCNPJ(cnpjParaValidar)
        : handler.validateCNPJ(cnpjParaValidar);
  };

  const gerarFiliais = (quantidade: number) => {
    if (isCnpjValid) {
      const filiaisCnpjs = onlyNumbers ? handlerOnlyNumbers.generateFiliais(cnpj, quantidade) : handler.generateFiliais(cnpj, quantidade);
      const novasFiliais = filiaisCnpjs.map((cnpjFilial: string, index: number) => ({
        id: index + 1,
        cnpj: cnpjFilial,
        isValid: null,
      }));
      setFiliais(novasFiliais);
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
      <div className="formulario bg-white p-5 overflow-x-clip">
        {/* Gerar CNPJ Principal */}
        <div className="mb-4">
          <label htmlFor="onlyNumbers">
            <input
              id="onlyNumbers"
              type="checkbox"
              checked={onlyNumbers}
              onChange={(e) => {
                setOnlyNumbers(e.target.checked);
                setIsCnpjValid(null);
              }}
              onClick={() => changeCNPJHandlers()}
              placeholder="Digite ou gere um CNPJ"
              className="p-2 border border-gray-300 rounded mb-2 mr-2"
            />
            somente CNPJs numéricos?
          </label>
        </div>

        {/* Gerar CNPJ Principal */}
        <div className="mb-4">
          <input
            type="text"
            value={cnpj}
            onChange={handleCnpjChange}
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
            max={999}
            value={numFiliais}
            onChange={(e) => setNumFiliais(parseInt(e.target.value, 10))}
            placeholder="Quantidade de Filiais"
            className="p-2 border border-gray-300 rounded w-20 text-center mb-2"
          />
          <button
            onClick={() => gerarFiliais(numFiliais)}
            disabled={!isCnpjValid}
            className={`ml-2 px-4 py-2 rounded ${
              isCnpjValid ? "btn-primary" : "btn-disabled cursor-not-allowed"
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
                    atualizarFilialCNPJ(
                      filial.id,
                      aplicarMascaraCNPJ(e.target.value),
                    )
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

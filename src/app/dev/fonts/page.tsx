"use client";

import AlertComponent from "@/components/atoms/Alert";
import { useEffect, useState } from "react";
import json from "./fontList.json";

export default function Fontes() {
  interface IReturnFontItem {
    family: string;
    variants: string[];
  }

  const [fonteAtual, setFontAtual] = useState<string | undefined>();
  const [href, setHref] = useState("");
  const [fontVariants, setFontVariants] = useState<string>();
  const [showCopyAlert, setShowCopyAlert] = useState(false);

  const fontList = (fonts: IReturnFontItem[]) => {
    const test: React.ReactNode[] = [];
    fonts.forEach((fontName) => {
      test.push(
        <option key={fontName.family} value={fontName.family}>
          {fontName.family}
        </option>,
      );
    });
    return test;
  };

  const getFormatedVariants = (font: string): string => {
    const fonteEncontrada = json.find((fonte) => fonte.family === font);

    const variantes = fonteEncontrada?.variants;

    if (variantes?.length === 0) {
      return "";
    }

    const partesURL: string[] = [""];
    const pesos: string[] = [];
    let italico = false;

    variantes?.forEach((variante) => {
      if (variante === "regular") {
        pesos.push("0");
      } else if (variante === "italico") {
        italico = true;
      } else {
        pesos.push(variante);
      }
    });

    if (italico) {
      partesURL.push("ital");
    }

    if (pesos.length > 0) {
      partesURL.push(`wght@${pesos.join(";")}`);
    }

    return partesURL.join(":");
  };

  const getFontShare = () => {
    return (
      `<link rel="preconnect" href="https://fonts.googleapis.com">\n` +
      `<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>\n` +
      `<link href="https://fonts.googleapis.com/css2?family=${fonteAtual}${fontVariants}&display=swap" rel="stylesheet">`
    );
  };

  useEffect(() => {
    fonteAtual && setFontVariants(getFormatedVariants(fonteAtual));
    fonteAtual &&
      setHref(
        `https://fonts.googleapis.com/css2?family=${fonteAtual
          .split(" ")
          .join("+")}&display=swap`,
      );
  }, [fonteAtual]);

  const copyGeneratedCode = () => {
    fontVariants && navigator.clipboard.writeText(fontVariants);
    setShowCopyAlert(true);
    setTimeout(() => {
      setShowCopyAlert(false);
    }, 2000);
  };

  return (
    <>
      {showCopyAlert && (
        <AlertComponent text="Código copiado para a área de transferência!" />
      )}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link href={href} rel="stylesheet" />
      <div className="font-page min-h-80 m-10 grid grid-cols-2">
        <div className="font-selector-container rounded-l-lg  bg-primary-400 flex flex-col gap-14">
          <select
            name="fonts-list"
            id="fonts-list"
            className="fonst-list mr-4 pl-4 py-1 rounded-tl-lg font-semibold text-xl bg-primary-300 text-success-700"
            defaultValue={0}
            onChange={(e) => setFontAtual(e.currentTarget.value)}
          >
            <option value={0} disabled={true}>
              Escolha
            </option>
            {fontList(json)}
          </select>
          <p
            style={{ fontFamily: `${fonteAtual ?? ""}` }}
            className="selected-font p-5 font-khand text-7xl text-success-300"
          >
            {fonteAtual ?? "Selecione uma fonte"}
          </p>
        </div>

        {fonteAtual && (
          <>
            <div className="output-code flex flex-col justify-between p-4 w-full h-full break-words bg-primary-300">
              <div className="w-full h-full">
                <textarea
                  value={getFontShare()}
                  readOnly
                  className="text-success-300 bg-primary-400 rounded-lg p-4 w-full h-full break-words resize-none"
                />
              </div>
              <button
                className="bg-primary-700 text-success-300 rounded-full w-40 p-2 mt-4"
                onClick={copyGeneratedCode}
              >
                Copiar Código
              </button>
            </div>
          </>
        )}

        {!fonteAtual && (
          <>
            <p className="output-code bg-primary-300 text-success-700 p-4 max-w-full  break-words">
              Teste
            </p>
          </>
        )}
      </div>
    </>
  );
}

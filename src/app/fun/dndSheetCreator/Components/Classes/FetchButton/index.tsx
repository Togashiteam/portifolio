import { useEffect, useState } from "react";
import { IClassDndApi, IClassListItem, StoreData } from "../../../models/StoredData.model";


export default function ClassFetchButton() {
  const schemma = "classes";
  const [loading, setLoading] = useState<boolean>(false);
  const [enabled, setEnabled] = useState<boolean>(true);

  useEffect(() => {
      fetch(`/api/checkUpdate?schemma=${schemma}`, { method: "GET" })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Falha ao carregar os dados");
          }
          return response.json();
        })
        .then((data) => {
          console.log("DATA: ", data);
          if (!data.updatedToday) {
            setEnabled(true);
            return;
          }
          setEnabled(false);
        })
        .catch((error) => {
          console.error("Falha ao carregar os dados: ", error);
          setEnabled(false);
        });
    });

  const fetchData = async () => {
    setLoading(true);

    try {
      const apiResponse = await fetch("https://www.dnd5eapi.co/api/classes");

      if (!apiResponse.ok) {
        throw new Error("Falha ao buscar dados na API do D&D");
      }

      const response: IClassDndApi = await apiResponse.json();
      await storeData(response); // Armazena os dados no servidor

    } catch (error) {
      console.error("Falha ao buscar dados na API do D&D");
    } finally {
      setLoading(false);
    }
  };

  const storeData = async (apiData: IClassDndApi) => {
    try {
      console.log("apiData: ", apiData);
      const data: StoreData<IClassListItem> = new StoreData<IClassListItem>(
        schemma,
        apiData.results,
      );
      console.log("data: ", data);

      const response = await fetch("/api/updateData", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      console.log("result.message", result.message);
    } catch (error) {
      console.error("Erro ao buscar ou salvar dados:", error);
    }
  };

  return (
    <button
      className="bg-white hover:bg-danger text-dark font-semibold hover:text-white py-2 px-4 border hover:border-transparent rounded"
      onClick={fetchData}
      disabled={loading || !enabled}
    >
      {loading
        ? "Carregando..."
        : enabled
          ? "Atualizar Classes"
          : "Classes Atualizadas"}
    </button>
  );
}

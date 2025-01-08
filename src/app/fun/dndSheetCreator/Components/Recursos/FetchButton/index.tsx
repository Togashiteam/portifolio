import { useState } from "react";

interface IResourcesResponse {
  [key: string]: string; // A API retorna um objeto com chaves dinâmicas
}


export default function FetchButton() {
  const [loading, setLoading] = useState<boolean>(false);

  const fetchData = async () => {
    setLoading(true);

    try {
      const apiResponse = await fetch("https://www.dnd5eapi.co/api");

      if (!apiResponse.ok) {
        throw new Error("Falha ao buscar dados na API do D&D");
      }

      const data: IResourcesResponse = await apiResponse.json();
      await storeData(data); // Armazena os dados no servidor

    } catch (error) {
      console.error("Falha ao buscar dados na API do D&D");
    } finally {
      setLoading(false);
    }
  };

  const storeData = async (data: any) => {
    try {
      const response = await fetch('/api/updateData', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ schemma: "resources", data }),
      });

      const result = await response.json();

      console.log(result.message);
    } catch (error) {
      console.error("Erro ao buscar ou salvar dados:", error);
    }
  }

  return (
    <button
      className="bg-white hover:bg-danger text-dark font-semibold hover:text-white py-2 px-4 border hover:border-transparent rounded"
      onClick={fetchData}
      disabled={loading}
    >
      {loading ? "Carregando..." : "Atualizar Recursos"}
    </button>

  );
}

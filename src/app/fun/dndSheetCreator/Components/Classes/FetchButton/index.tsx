import { useState } from "react";

export default function ClassFetchButton() {
  const [loading, setLoading] = useState<boolean>(false);

  const fetchAndStoreData = async () => {
    setLoading(true);
    try {


      console.log("Dados salvos no PouchDB!");
    } catch (error) {
      console.error("Erro ao buscar ou salvar dados:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      className="bg-white hover:bg-danger text-dark font-semibold hover:text-white py-2 px-4 border hover:border-transparent rounded"
      onClick={fetchAndStoreData}
      disabled={loading}
    >
      {loading ? "Carregando..." : "Atualizar Recursos"}
    </button>
  );
}

interface IClassData {
  index: string;
  name: string;
  url: string;
}

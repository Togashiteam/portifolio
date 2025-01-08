import { useEffect, useState } from "react";

export default function ClassDataList() {
  const [classes, setClasses] = useState<IClassData[]>([]);
  const [showList, setShowList] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log("Carregar dados");
      } catch (error) {
        console.error("Erro ao buscar dados:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <p>Carregando classes...</p>;
  }

  return (
    <div>
      <button
        className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
        onClick={() => setShowList(!showList)}
      >
        {showList ? "Ocultar lista" : "Mostrar lista"}
      </button>

      {showList && (
        <ul>
          {classes.map((charClass) => (
            <li key={charClass._id}>
              <strong>{charClass._id}:</strong> {charClass.url}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

interface IClassData {
  _id: string;
  index: string;
  name: string;
  url: string;
}
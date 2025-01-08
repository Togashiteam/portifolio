import { useEffect, useState } from "react";

export default function DataList() {
  const [resources, setResources] = useState<any[]>([]);
  const [showList, setShowList] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);


  useEffect(() => {
    console.log("Carregando recursos...");

    fetch("/api/readData") // Endpoint para ler os dados
      .then((response) => {
        if (!response.ok) {
          throw new Error("Falha ao carregar os dados");
        }
        return response.json();
      })
      .then((data) => {
        setResources(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Failed to load data: ", error);
        setLoading(false);
      });

  }, []);

  if (loading) {
    return <p>Carregando recursos...</p>;
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
          {resources.map((resource) => (
            <li key={resource.key}>
              <strong>{resource.key}</strong>: {resource.url}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

import { useEffect, useState } from "react";
import { IClassListItem, StoreData } from "../../../models/StoredData.model";

export default function ClassDataList() {
  const schemma = "classes";
  const [classes, setClasses] = useState<IClassListItem[]>([]);
  const [showList, setShowList] = useState<boolean>(false);

  useEffect(() => {
      fetch(`/api/readData?schemma=${schemma}`, { method: "GET" }) // Endpoint para ler os dados
        .then((response) => {
          if (!response.ok) {
            throw new Error("Falha ao carregar os dados");
          }
          return response.json();
        })
        .then((data: StoreData<IClassListItem>) => {
          console.log("Class data", data);
          setClasses(data.data);
        })
        .catch((error) => {
          console.error("Falha ao carregar os dados: ", error);
        });

    }, []);

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
          {classes.map((charClass, i) => (
            <li key={i+1}>
              <strong> {i+1}-{charClass.index}: </strong> {charClass.name} - {charClass.url}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

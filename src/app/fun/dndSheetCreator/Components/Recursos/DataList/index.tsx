import { useEffect, useState } from "react";
import { ISelectOption, StoreData } from "../../../models/StoredData.model";

export default function DataList() {
  const schemma = "resources";
  const [resources, setResources] = useState<ISelectOption[]>([]);
  const [selectedResource, setSelectedResource] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);


  useEffect(() => {
    fetch(`/api/readData?schemma=${schemma}`, { method: "GET" }) // Endpoint para ler os dados
      .then((response) => {
        if (!response.ok) {
          throw new Error("Falha ao carregar os dados");
        }
        return response.json();
      })
      .then((data: StoreData<unknown>) => {
        const parsedData: ISelectOption[] = Object.entries(data.data[0]).map(
          ([key, url]) => Object.assign({ value: url, label: key }),
        );
        setResources(parsedData);
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
    <>
      <select
        name="resources"
        onChange={(e) => setSelectedResource(e.target.value)}
      >
        {resources.map((resource, i) => (
          <option
          value={resource.value}
          key={i}
          >
            {resource.label}
          </option>
        ))}
      </select>

      <label className="flex-grow block text-sm font-medium leading-6 text-gray-900"> {selectedResource}</label>
    </>
  );
}



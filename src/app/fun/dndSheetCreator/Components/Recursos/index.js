import DataList from "./DataList";
import FetchButton from "./FetchButton";

export default function Recursos() {

  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-md w-full space-y-4">
      <h1> Recursos </h1>
      <div className="flex flex-row justify-between items-start flex-no-wrap">
        <DataList />
        <FetchButton />
      </div>
    </div>
  );
};
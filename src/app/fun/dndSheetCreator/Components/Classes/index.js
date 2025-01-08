import ClassDataList from "./DataList";
import ClassFetchButton from "./FetchButton";

export default function CharClasses() {

  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-md w-full space-y-4">
      <h1> Classes </h1>
      <div className="flex flex-row justify-between items-start flex-no-wrap">
        <ClassDataList />
        <ClassFetchButton />
      </div>
    </div>
  );
};
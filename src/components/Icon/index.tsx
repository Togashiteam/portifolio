import path from "./path";

export interface IIcon {
  name: string;
}

export default function Icon({ name }: IIcon) {
  return (
    <>
      <span className="icon animated left-8 mb-2 flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="25"
          fill="currentColor"
          className="bi bi-brush"
          viewBox="0 0 16 16"
        >
          {path[name].map((e: string) => {
            return <path d={e} />;
          })}
        </svg>
      </span>
    </>
  );
}

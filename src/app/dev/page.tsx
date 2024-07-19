import Link from "next/link";

export default function Dev() {
  return (
    <>
<<<<<<< HEAD
      <Link href={"../"}>Home</Link>
      <br />
      <h1>Dev</h1>
      <br />
      <ul>
        <li>
          <Link href="dev/fonts">Fonts</Link>
        </li>
      </ul>
=======
      <div className="flex justify-center mt-4 text-light-300  font-bold text-lg">
        <Link href={"../"}>Home</Link>
      </div>
      <div className="flex justify-center items-center my-10 w-full h-10 bg-primary-300">
        <div className="text-light-300 font-bold text-lg">
          <h1>DEV Works</h1>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="flex justify-center items-center mx-2 w-48 h-40 bg-primary-300">
          <div className="text-light-300 font-bold text-lg">
            <Link href="dev/fonts">Fonts</Link>
          </div>
        </div>
      </div>
>>>>>>> origin/develop
    </>
  );
}

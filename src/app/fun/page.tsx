import Link from "next/link";

export default function Fun() {
  return (
    <>
      <div className="flex justify-center mt-4 text-light-300  font-bold text-lg">
        <Link href={"../"}>Home</Link>
      </div>
      <div className="flex justify-center items-center my-10 w-full h-10 bg-primary-300">
        <div className="text-light-300 font-bold text-lg">
          <h1>Fun works</h1>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="flex justify-center items-center mx-2 w-48 h-40 bg-primary-300">
          <div className="text-light-300 font-bold text-lg">
            <Link href="fun/workOutTimer">WorkOutTimer</Link>
          </div>
        </div>
        <div className="flex justify-center items-center mx-2 w-48 h-40 bg-primary-300">
          <div className="text-light-300 font-bold text-lg">
            <Link href="fun/rockPaperScissors">RockPaperScissors</Link>
          </div>
        </div>
        <div className="flex justify-center items-center mx-2 w-48 h-40 bg-primary-300">
          <div className="text-light-300 font-bold text-lg">
            <Link href="fun/imc">IMC</Link>
          </div>
        </div>
        <div className="flex justify-center items-center mx-2 w-48 h-40 bg-primary-300">
          <div className="text-light-300 font-bold text-lg">
            <Link href="fun/calc">Calc</Link>
          </div>
        </div>
      </div>
    </>
  );
}

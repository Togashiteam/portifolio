import Link from "next/link";

export default function Fun() {
  return (
    <>
      <Link href={"../"}>Home</Link>
      <h1>Fun</h1>
      <br />
      <ul>
        <li>
          <Link href="fun/imc">IMC</Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link href="fun/rockPaperScissors">Rock Paper Scissors</Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link href="fun/workOutTimer">WorkOut Timer</Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link href="fun/calc">Calculator</Link>
        </li>
      </ul>
    </>
  );
}
